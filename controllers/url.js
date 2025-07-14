const {nanoid} = require('nanoid')
const URL = require('../models/url')

async function generateShortId(req,res){
     const body = req.body;
     if(!body.url) return res.status(404).json({error:"url is required"})
    const shortID = nanoid(8);
    await URL.create({
        shortId:shortID,
        redirectUrl : body.url,
        visitHistory:[],
    })
    // in question they asked for 
    // return res.status(201).json({"shortlink":https:localhost:3000/shortid})
         return res.render("Home",{
        id:shortID,
    })
}

async function getAnalytics(req, res){
    const id = req.params.id;
    const result = await URL.findOne({shortId:id});
    if(!result) return res.status(404).json({error:"url not found"})
    return res.json({totalClicks:result.visitHistory.length, visitHistory:result.visitHistory})
}
module.exports = {generateShortId, getAnalytics}