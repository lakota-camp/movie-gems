const express = require('express');
const router = express.Router();

const {
  createMovie,
  getMovies,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require('../controllers/movie.controller.js');

// Create a movie
router.post('/', createMovie);

// Read all movies
router.get('/', getAllMovies);

// Read user movies
router.get('/:userId', getMovies);

// Update a movie
router.put('/:id', updateMovie);

// Delete a movie
router.delete('/:id', deleteMovie);

module.exports = router;
