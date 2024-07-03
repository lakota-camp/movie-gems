const mongoose = require('mongoose');

// * Movie DB Schema * //
const MovieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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
