const {nanoid }= require('nanoid');
const URL = require('../models/urlmodel');


const url_shortner = async(req,res)=>{
    const body = req.body;
    if(!body.url) res.status(400).json({message: "url is required"});
    const shortid = nanoid(8);
    await URL.create({  
        shortId : shortid,
        redirectUrl: body.url,
        visitHistory: [],
    });
    return res.json({shortId:shortid});
}

const redirectUrl = async(req,res)=>{
    const shortid = req.params.shortId
    const entry = await URL.findOneAndUpdate(
        {
        shortId: shortid
        },
        {
        $push:{
            visitHistory:{
                    timestamp: Date.now()
            }
        }
        }
    )
    return res.redirect(entry.redirectUrl);
}


module.exports = {
    url_shortner,
    redirectUrl,
}