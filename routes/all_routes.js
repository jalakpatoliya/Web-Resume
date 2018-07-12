const express   = require('express');

const router = express.Router();

router.get('/about_me',function (req,res) {
  res.render('about_me');
})

router.get('/contact',function (req,res) {
  res.render('contact');
})

router.get('/resume',function (req,res) {
  res.render('resume');
})

module.exports = router;
