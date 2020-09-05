var Movie = require("./models/movies");

var movies = [
  { name: "Interstellar" },
  { name: "Inception" },
  { name: "Memento" },
  { name: "Batman Begins" },
  { name: "The Dark Knight" },
  { name: "The Dark Knight Rises" },
];

function seedDB() {
  Movie.remove({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      Movie.create(movies, function (err, movies) {
        if (err) {
          console.log(err);
        } else {
          console.log(movies);
        }
      });
    }
  });
}

module.exports = seedDB;
