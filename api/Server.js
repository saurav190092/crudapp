const express = require('express');
const path= require('path');
const bodyParser= require('body-parser');
const cors= require('cors');
const mongoose = require('mongoose');
const config=require('./DB');
const formRoute = require('./routes/form.route');
const app=express();
//connecting with mongo database
mongoose.connect(config.DB,{useNewUrlParser:true},(err,db)=>{
  if(err){
	  console.log(err);
  }
  else{
	console.log("Database created");  
  } 
});

//get data in Json and Provide the port
app.use(bodyParser.json());
app.use(cors());
app.use('/form', formRoute);
const port=process.env.PORT || 4000;
app.listen('4000',()=>{
    console.log('server is listening to 4000');
});

