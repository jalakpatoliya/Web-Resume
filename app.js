const express   = require('express');
const app       = express();
const mongoose  = require('mongoose');

app.use(express.static(__dirname+"/public"));

app.get("/",function (req,res) {
  res.render("index.ejs");
})

app.listen(8080,function(){
  console.log("server started.");
});
