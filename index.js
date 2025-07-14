const express =  require('express')

const {connectDB} = require('./connection')
const mongoose = require('mongoose')

const URL = require('./models/url')

const path = require('path')



const router = require('./routes/url')
const staticRoute = require('./routes/staticRoute')
const userRoute = require('./routes/user')
const cookieParser = require('cookie-parser')

const {usersOnly} = require('./middlewares/auth')

const app = express()
const PORT = 3000

connectDB('mongodb://127.0.0.1:27017/short-url').then(()=>{
    console.log('DataBase Connected Succesfully')
})


app.set('view engine',"ejs")
app.set('views',path.resolve('./views'))

app.use(express.json())
app.use(cookieParser());

app.use(express.urlencoded({extended:false}))



app.use('/url',usersOnly,router)
app.use('/user',userRoute)
app.use('/',staticRoute);

app.get('/:shortId',async (req, res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{
        $push:{
            visitHistory:{
                timestamps:Date.now()}
        },
    });
    
    res.redirect(entry.redirectUrl)
})

app.listen(PORT, ()=>{
    console.log(`Server runninr at PORT ${PORT}`)
})