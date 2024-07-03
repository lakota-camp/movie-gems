const mongoose = require('mongoose');

// Movie Schema
const MovieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
    userId: {
      type: String,
      // mongoose.Schema.Types.ObjectId,
      // ref: 'User',
      require: true,
    },
    movieApiId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Movie Model
const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
