const mongoose = require('mongoose');

// Movie catagories allowed
const genresCategories = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Science Fiction (Sci-Fi)',
  'Thriller',
  'Western',
  'Animation',
  'Documentary',
  'Family',
  'Musical',
  'Crime',
  'War',
  'Biography',
  'Historical',
  'Sport',
];

// * Movie DB Schema * //
const MovieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: false,
    },
    runtime: {
      type: String,
      required: false,
    },
    genre: {
      type: String,
      required: false,
    },
    director: {
      type: String,
      required: false,
    },
    actors: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    poster: {
      type: String,
      required: false,
    },
    watched: {
      type: Boolean,
      required: true,
      default: false,
    },
    // Future Update: users have their own movie lists
    // ,
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // }
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
