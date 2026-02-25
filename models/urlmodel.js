const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    shortId :{
        type : String,
        unique : true,
        required : true,
    },
    redirectUrl:{
        type: String,
        required: true,
    },
    visitHistory:[{timestamps:{type:Number}}]
},
{timestamps:true}
);

const URL = mongoose.model('url',UrlSchema);

module.exports= URL;
