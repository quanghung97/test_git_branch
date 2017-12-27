var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);
<<<<<<< HEAD
//test 
=======

>>>>>>> 977878efe6edfbfe906b79847edb67b8d7891e36
app.get("/", function(req, res){
   res.render("trangchu");
});
