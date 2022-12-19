const express = require('express');
const router = express.Router();
const {User,Post,Comment} = require('../../models');

router.get("/",(req,res)=>{
    Post.findAll({
        include:[User, Comment]
    }).then(postData=>{
        res.json(postData)
    }).catch(err=>{
        res.status(500).json({msg:"an error occurred",err})
    })
})

router.post("/",(req,res)=>{
    if(!req.session.userInfo){
        return res.status(403).json({msg:"login first!"})
    }
    Post.create({
        title:req.body.title,
        content:req.body.content,
        UserId:req.session.userInfo.id
    }).then(postData=>{
        res.json(postData)
    }).catch(err=>{
        res.status(500).json({msg:"an error occurred",err})
    })
})

module.exports = router;