const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId :{
        type: String,
        required :true,
        unique:true,
    },
    redirectUrl:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamp:{type:Number}}],
    expiresAt: {
        type: Date,
        default: () => new Date(Date.now() + 30 * 60 * 1000),
        expires: 0
    }
},{timestamps:true})

const URL = mongoose.model('url',urlSchema)

module.exports = URL;