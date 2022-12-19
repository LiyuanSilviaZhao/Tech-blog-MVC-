const express = require('express');
const router = express.Router();
const {User,Post,Comment} = require('../../models');

router.post("/",(req,res)=>{
    if(!req.session.user_id){
        return res.status(403).json({msg:"login first!"})
    }
    Comment.create({
        content:req.body.comment,
        PostId:req.body.postid,
        UserId:req.session.user_id
    }).then(commentData=>{
        res.json(commentData)
    }).catch(err=>{
        res.status(500).json({msg:"an error occurred",err})
    })
})

module.exports = router;