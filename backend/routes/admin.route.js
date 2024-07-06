const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const handleInputErrors = require('../middleware/InputError');
const {
  createMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
} = require('../controllers/adminMovie.controller.js');

// * Admin movie routes * //

// Create a movie
router.post(
  '/movies',
  [
    body('title').notEmpty().withMessage('Title is required.'),
    body('genre').notEmpty().withMessage('Genre is required.'),
    body('releaseDate')
      .notEmpty()
      .withMessage('Release date must be a valid date.'),
  ],
  createMovie,
);

// Read all movies
router.get('/movies', getAllMovies);

// Read all movies for specific user
router.get(
  '/:userId',
  [
    param('userId')
      .isMongoId()
      .withMessage('Movie ID must be a valid MongoDB ID'),
  ],
  handleInputErrors,
  getAllMovies,
);

// Update a movie
router.put('/movies', updateMovie);

// Delete a movie
router.delete('/movies', deleteMovie);

// * Admin user routes * //
// Read all users

// Read a user by user Id
router.get(
  '/:userId',
  [
    param('userId')
      .isMongoId()
      .withMessage('Movie ID must be a valid MongoDB ID'),
  ],
  handleInputErrors,
  getAllMovies,
);
