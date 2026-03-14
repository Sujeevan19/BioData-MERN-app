const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express()
const bioroutes = require('./routes/bio');
const authroutes = require('./routes/auth');

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB setup successfully")).catch(err=>console.log(err));
app.use(cors())
app.use(express.json())

console.log(process.env.MONGO_URI)


app.get("/test",(req,res)=>{
    res.json({message:"backend is working!"})
})
app.get("/",(req,res)=>{
    res.json({message:"welcome to backend"})
})

app.use("/bio-api",bioroutes);
app.use("/api",authroutes);

const port = 5000;

app.listen(port,()=>console.log(`Server listening at ${port}`))