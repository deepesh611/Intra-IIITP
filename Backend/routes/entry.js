const express=require('express');

const router=express.Router();

const{Entry}=require('../models');

router.post("/",async(req,res)=>{

    const entry=req.body;
    //this post will contain the same format of input as models user table.
    
    
    // to create table from data collected from form {for this instance post variable}
    
    await Entry.create(entry)
    res.json(entry)
    })


    
module.exports=router;