var mongoose = require("mongoose");

var movieSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Movie", movieSchema);
