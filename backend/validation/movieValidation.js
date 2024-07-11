const { query, body, param } = require('express-validator');

// validates input Id from params
const validateId = [
  param('id').isMongoId().withMessage('Movie ID must be a valid MongoDB ID'),
];

// validates movie body
const validateMovieBody = [
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
  body('actors').optional().isString().withMessage('Actors must be a string.'),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string.'),
  body('poster').optional().isString().withMessage('Poster must be a string.'),
];

// validates update to true or false
const validateWatchedUpdate = [
  body('watched')
    .notEmpty()
    .isBoolean()
    .withMessage('Must be either true or false.'),
];

// validates search query params
const validateSearchQuery = [
  query('title').notEmpty().withMessage('Title is required.'),
];

module.exports = {
  validateId,
  validateMovieBody,
  validateWatchedUpdate,
  validateSearchQuery,
};
