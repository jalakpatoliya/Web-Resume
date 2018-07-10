const express   = require('express');
const app       = express();
const all_routes = require('./routes/all_routes');

app.use(express.static(__dirname+"/public"));
app.use(all_routes);

app.get("/",function (req,res) {
  res.render("index.ejs");
})

app.listen(8080,function(){
  console.log("server started.");
});
