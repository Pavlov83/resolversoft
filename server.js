const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const app = express();


const articlesRouter = require('./routes/articles');
const db_conn = process.env.MONGO_URI;

mongoose.connect(db_conn,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>console.log('connected to mongo'))
        .catch(err => console.log(err))

app.use(cors());
app.use(express.json());
app.use('/articles',articlesRouter);


const port = process.env.PORT || 8080;

app.listen(port,() => console.log(`app runs on ${port}`))