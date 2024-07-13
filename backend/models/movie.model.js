const mongoose = require('mongoose');

// * Movie DB Schema * //
const MovieSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
    },
    Year: {
      type: String,
      required: false,
    },
    Runtime: {
      type: String,
      required: false,
    },
    Genre: {
      type: String,
      required: false,
    },
    Director: {
      type: String,
      required: false,
    },
    Actors: {
      type: String,
      required: false,
    },
    Plot: {
      type: String,
      required: false,
    },
    Poster: {
      type: String,
      required: false,
    },
    Rated: {
      type: String,
      required: false,
    },
    Released: {
      type: String,
      required: false,
    },
    Language: {
      type: String,
      required: false,
    },
    Country: {
      type: String,
      required: false,
    },
    Awards: {
      type: String,
      required: false,
    },
    imdbRating: {
      type: String,
      required: false,
    },
    imdbVotes: {
      type: String,
      required: false,
    },
    imdbID: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: false,
    },
    DVD: {
      type: String,
      required: false,
    },
    BoxOffice: {
      type: String,
      required: false,
    },
    Production: {
      type: String,
      required: false,
    },
    Website: {
      type: String,
      required: false,
    },
    Watched: {
      type: Boolean,
      default: false,
    },

    // Future Update: users have their own movie lists
    // ,
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // }
  },
  {
    timestamps: true,
  },
);

// Movie Model
const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
