const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express();
const path = require("path")

const articlesRouter = require('./routes/articles');
const db_conn = process.env.MONGO_URI;

mongoose.connect(db_conn,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>console.log('connected to mongo'))
        .catch(err => console.log(err))

app.use(cors());
app.use(express.json());
app.use('/articles',articlesRouter);
app.use(express.static(path.join(__dirname,'build')));
app.get('/', (req,res)=>{
        res.sendFile(path.join(__dirname,'build','index.html'));
});

const port = process.env.PORT || 9000;
app.listen(port,() => console.log(`app runs on ${port}`))