//need to check -silvia 

const express = require('express');
const router = express.Router();
const {User,Post,Comment} = require('../models');

router.get("/",(req,res)=>{
    res.render("home",{
            logged_in:req.session.logged_in
        })
})

router.get("/login",(req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/")
    }
    res.render("login")
})

router.get("/signup",(req,res)=>{
    if(req.session.logged_in){
        return res.redirect("/")
    }
    res.render("signup")
})


router.get("/profile",(req,res)=>{
    if(!req.session.logged_in){
        return res.redirect("/login")
    }
    User.findByPk(req.session.user_id,{
        include:[Project]
    }).then(userData=>{
        const hbsData = userData.toJSON();
        console.log(hbsData)
        hbsData.logged_in=req.session.logged_in
        res.render("profile",hbsData)
    })
})

module.exports = router;