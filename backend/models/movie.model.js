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
    genre: {
      type: String,
      required: true,
      enum: genresCategories,
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
