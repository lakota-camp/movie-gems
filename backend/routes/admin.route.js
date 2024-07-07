const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const handleInputErrors = require('../middleware/InputError');
const {
  // Movies
  createMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  // Users
  getAllUsers,
  updateUser,
  deleteUser,
} = require('../controllers/admin.controller.js');

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

// Update a movie
router.put('/movies/:id', updateMovie);

// Delete a movie
router.delete('/movies/:id', deleteMovie);

// * Admin user routes * //

// Read all users
router.get('/users', getAllUsers);

// Update a user
router.put(
  '/users/:id',
  [
    param('id').isMongoId().withMessage('User ID must be a valid MongoDB ID'),
    body('username').optional(),
    body('email')
      .optional()
      .isEmail()
      .withMessage('Must be a valid email address'),
    body('password')
      .optional()
      .isLength({ min: 9 })
      .withMessage('Password must be at least 9 characters long'),
  ],
  handleInputErrors,
  updateUser,
);

// Delete user
router.delete(
  'users/:id',
  [param('id').isMongoId().withMessage('User ID must be a valid MongoDB ID')],
  handleInputErrors,
  deleteUser,
);

module.exports = router;
