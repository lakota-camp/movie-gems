const express = require('express');
const router = express.Router();
const handleInputErrors = require('../middleware/InputError');
const {
  validateId,
  validateMovieBody,
  validateWatchedUpdate,
  validateSearchQuery,
  validateIdSearchQuery,
} = require('../validation/movieValidation.js');

const {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  searchMovies,
  fetchMovieDetails,
  getAllWatchedMovies,
} = require('../controllers/movie.controller.js');

// Search for movie
router.get('/search', validateSearchQuery, searchMovies);

// FIXME: add route to get movie details by IMDB id
// Fetch movie details using IMDB Id
router.get('/details/:id', validateIdSearchQuery, fetchMovieDetails);

// * Movie CRUD API Routes * //

// Create a movie
router.post('/', validateMovieBody, handleInputErrors, createMovie);

// Read all movies
router.get('/', getAllMovies);

// Read all watched movies
router.get('/watched', getAllWatchedMovies);

// Get movie by Id
router.get('/:id', validateId, getMovieById);

// Update a movie
router.put(
  '/:id',
  validateId,
  validateWatchedUpdate,
  handleInputErrors,
  updateMovie,
);

// Delete a movie
router.delete('/:id', validateId, handleInputErrors, deleteMovie);

module.exports = router;
