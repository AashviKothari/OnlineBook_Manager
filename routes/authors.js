const express = require('express')
const author = require('../models/author')
const router = express.Router()
// const Author = require('')

// All Author Route
router.get('/',(req, res)=>{
    res.render('authors/index')
})

// New Authors
router.get('/new', (req, res)=>{
    res.render('authors/new',{author: new author()})
})

//Create Author Route
router.post('/',(req,res)=>{
    res.send('Create')
})

module.exports = router