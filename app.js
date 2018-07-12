const express   = require('express');
const app       = express();
const all_routes = require('./routes/all_routes');
var   port       = process.env.PORT || 8080;

app.use(express.static(__dirname+"/public"));
app.use(all_routes);

app.get("/",function (req,res) {
  res.render("index.ejs");
})

app.listen(port,function(){
  console.log('Our app is running on http://localhost:' + port);
});
