const express = require('express');
const router = express.Router();
const { query, body, param } = require('express-validator');
const handleInputErrors = require('../middleware/InputError');
const {
  validateId,
  validateMovieBody,
  validateWatchedUpdate,
  validateSearchQuery,
} = require('../validation/movieValidation.js');

// Extract common input validation functionality - more DRY

const {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  searchMovies,
} = require('../controllers/movie.controller.js');

// Search for movie
router.get('/search', validateSearchQuery, searchMovies);

// * Movie CRUD API Routes * //

// Create a movie
router.post('/', validateMovieBody, handleInputErrors, createMovie);

// Read all movies
router.get('/', getAllMovies);

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
