const mongoose = require('mongoose');

// * Movie DB Schema * //
const MovieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    movieApiId: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Movie Model
const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
