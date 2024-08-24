const express=require('express');

const routers= express.Router();

const {SignUp}=require("../models");

routers.post("/",async(req,res)=>{

const signup=req.body;

await SignUp.create(signup);
res.json(signup);


})


module.exports=routers;