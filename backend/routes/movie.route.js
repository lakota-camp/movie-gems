const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const handleInputErrors = require('../middleware/InputError');

const {
  createMovie,
  getUserMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} = require('../controllers/movie.controller.js');

// * Movie CRUD API Routes * //

// Create a movie for logged in user
router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Title is required.'),
    body('genre').notEmpty().withMessage('Genre is required.'),
    body('releaseDate')
      .notEmpty()
      .withMessage('Release date must be a valid date.'),
  ],
  handleInputErrors,
  createMovie,
);

// Read all movies for the logged-in user
router.get('/:userId', getUserMovies);

// Read a specific movie by ID for logged in user
router.get(
  '/:id',
  [param('id').isMongoId().withMessage('Movie ID must be a valid MongoDB ID')],
  getMovieById,
);

// Update a movie for logged in user
router.put(
  '/:id',
  [
    param('id').isMongoId().withMessage('Movie ID must be a valid MongoDB ID'),
    body('title').notEmpty().withMessage('Title is required.'),
    body('genre').notEmpty().withMessage('Genre is required.'),
    body('releaseDate')
      .notEmpty()
      .withMessage('Release date must be a valid date.'),
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
