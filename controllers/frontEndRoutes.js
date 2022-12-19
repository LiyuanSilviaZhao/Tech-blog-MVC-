//need to check -silvia 

const express = require('express');
const router = express.Router();
const {User,Post,Comment} = require('../models');
const moment = require('moment-timezone');

router.get("/",(req,res)=>{

    Post.findAll({
        include:[{
            model:User,
            attributes:['username'],
        }],

    }).then(allpost=>{
        const postsHbsData = allpost.map(post=>post.get({plain:true}))
        const postsdata = postsHbsData.map(post=>post.date = moment(post.createdAt).format('MM/DD/YYYY'));
        res.render("home", {
            posts: postsHbsData,
        })

    })
})

router.get("/login",(req,res)=>{
    res.render("signup")
})

router.get("/sessions",(req,res)=>{
    res.json(req.session)
})

router.get("/dashboard",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }

    User.findByPk(req.session.user_id,{
        include:[Post]
    }).then(userData=>{
        const hbsData = userData.toJSON();
        console.log(hbsData)
        hbsData.logged_in=req.session.logged_in
        res.render("dashboard",hbsData)
    })
})

router.get("/create-post",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }
    res.render("createpost")
})

module.exports = router;