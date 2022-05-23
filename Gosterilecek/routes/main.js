const express=require('express')
const Post = require('../models/Post')
const router=express.Router()
const Category=require('../models/Category')


router.get(`/`,(req,res)=>{
    console.log(req.session)
    res.render(`site/index`)
})



/* router.get(`/admin`,(req,res)=>{
    res.render('admin/index')
}) */

router.get(`/blog`,(req,res)=>{
    Post.find({}).sort({$natural:-1}).lean().then(posts =>{
        Category.find({}).lean().then(categories=>{
            res.render('site/blog',{posts:posts,categories:categories})
        })
       
    })

   
})

router.get(`/contact`,(req,res)=>{
    res.render(`site/contact`)
})



module.exports=router