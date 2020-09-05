var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require("method-override");
var seedDB = require("./seeds");

var moviesRouter = require("./routes/movies");
var indexRouter = require("./routes/index");

mongoose.connect("add in your mongodb url here");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
seedDB();

app.use("", indexRouter);
app.use("/movies", moviesRouter);

app.listen(3000, () => {
  console.log("starting server...");
});
