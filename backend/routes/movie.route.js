const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const handleInputErrors = require('../middleware/InputError');

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
router.get('/search', searchMovies);

// * Movie CRUD API Routes * //

// Create a movie
router.post(
  '/',
  [
    body('title')
      .notEmpty()
      .isString()
      .withMessage('Title is required and must be a string.'),
    body('runtime')
      .optional()
      .isString()
      .withMessage('Runtime must be a string.'),
    body('genre').optional().isString().withMessage('Genre must be a string.'),
    body('year').optional().isString().withMessage('Year must be a string.'),
    body('director')
      .optional()
      .isString()
      .withMessage('Director must be a string.'),
    body('actors')
      .optional()
      .isString()
      .withMessage('Actors must be a string.'),
    body('description')
      .optional()
      .isString()
      .withMessage('Description must be a string.'),
    body('poster')
      .optional()
      .isString()
      .withMessage('Poster must be a string.'),
  ],
  handleInputErrors,
  createMovie,
);

// Read all movies
router.get('/', getAllMovies);

// Get movie by Id
router.get('/:id', getMovieById);

// Update a movie
router.put(
  '/:id',
  [
    param('id').isMongoId().withMessage('Movie ID must be a valid MongoDB ID'),
    body('title').optional().isString().withMessage('Title must be a string.'),
    body('runtime').optional().isString().withMessage('Year must be a string.'),
    body('genre').optional().isString().withMessage('Genre must be a string.'),
    body('year').optional().isString().withMessage('Year must be a string.'),
    body('director')
      .optional()
      .isString()
      .withMessage('Director must be a string.'),
    body('actors')
      .optional()
      .isString()
      .withMessage('Actors must be a string.'),
    body('description')
      .optional()
      .isString()
      .withMessage('Description must be a string.'),
    body('poster')
      .optional()
      .isString()
      .withMessage('Poster must be a string.'),
  ],
  handleInputErrors,
  updateMovie,
);

// Delete a movie
router.delete(
  '/:id',
  [param('id').isMongoId().withMessage('Movie ID must be a valid MongoDB ID')],
  handleInputErrors,
  deleteMovie,
);

module.exports = router;
