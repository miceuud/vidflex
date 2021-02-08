const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: ["Movie title is required", true],
  },
  synopsis: {
    type: String,
    required: ["Movie storyline is required", true],
  },
  directors: {
    type: [String],
    required: ["director name is required", true],
  },
  poster: String,
  writers: {
    type: [String],
    required: ["writer/s is required", true],
  },
  released_date: {  
    type: Date,
    default: Date.now
  },
  cast: {
    type: [String],
    required: ["movie cast required", true],
  },  
  genre: {
    type: [String],
    enum: [
      "Action",
      "Comedy",
      "Drama",
      "Fantasy",
      "Horror",
      "Mystery",
      "Romance",
      "Thriller",
      "Western",
    ],
  },
  average_rating: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("MovieModel", MovieSchema);
