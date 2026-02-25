require("dotenv").config();

const express = require('express');
const mongoose = require ('mongoose');
const router  = require('./routes/homeRouter');
const connectDb = require('./connection');

const app = express();

// connectDb(process.env.MONGO_URL)
connectDb('mongodb://127.0.0.1:27017/new-test')
.then(()=>console.log("mongoDb connected"));

app.use(express.json());
app.use('/url',router);

const PORT = process.env.PORT;

function callback(err){
    if(err)
        console.log('server failed to start');
    else{
        console.log(`server is listening on http://localhost:${PORT}`);
    }
}

app.listen(PORT,callback);

