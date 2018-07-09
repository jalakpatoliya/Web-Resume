const express   = require('express');
const mongoose  = require('mongoose');
const router = express.Router();

router.get('/about_me',function (req,res) {
  res.render('about_me.ejs');
})

router.get('/contact',function (req,res) {
  res.render('contact.ejs');
})

router.get('/resume',function (req,res) {
  res.render('resume.ejs');
})

module.exports = router;
