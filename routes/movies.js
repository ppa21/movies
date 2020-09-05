var express = require("express");
var router = express.Router();
var Movie = require("../models/movies");

router.get("/", function (req, res) {
  res.render("homepage");
});

router.get("/view", function (req, res) {
  Movie.find({}, function (err, movies) {
    if (err) {
      console.log(err);
    } else {
      res.render("view", { movies: movies });
    }
  });
});

router.get("/add", (req, res) => {
  res.render("add");
});

router.post("/add", function (req, res) {
  var movie = req.body.movie;
  Movie.create(movie, function (err, newMovie) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/movies/view");
    }
  });
});

router.get("/:id/edit", function (req, res) {
  var id = req.params.id;
  Movie.findById(id, function (err, movie) {
    if (err) {
      console.log(err);
    } else {
      res.render("edit", { movie: movie });
    }
  });
});

router.post("/:id", function (req, res) {
  var id = req.params.id;
  var update = req.body.movie;

  Movie.findByIdAndUpdate(id, update, function (err, movie) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/movies/view");
    }
  });
});

router.delete("/:id", function (req, res) {
  var id = req.params.id;

  Movie.findByIdAndRemove(id, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/movies/view");
    }
  });
});

module.exports = router;
