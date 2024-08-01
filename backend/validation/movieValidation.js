const { query, body, param } = require('express-validator');

// validates input Id from params
const validateId = [
  param('id').isMongoId().withMessage('Movie ID must be a valid MongoDB ID'),
];

// validates movie body
const validateMovieBody = [
  body('Title')
    .notEmpty()
    .isString()
    .withMessage('Title is required and must be a string.'),
  body('Year').notEmpty().isString().withMessage('Year must be a string.'),
  body('Plot')
    .optional()
    .isString()
    .withMessage('Description must be a string.'),
  body('Poster').optional().isString().withMessage('Poster must be a string.'),
  body('imdbID').optional().isString().withMessage('imdbID must be a string'),
  body('Type').optional().isString().withMessage('Must be include type.'),
];

// validates update to true or false
const validateWatchedUpdate = [
  body('Watched')
    .notEmpty()
    .isBoolean()
    .withMessage('Must be either true or false.'),
  param('id').notEmpty().isMongoId().withMessage('Valid Movie ID is required'),
];

// validates search query params
const validateSearchQuery = [
  query('title').notEmpty().withMessage('Title is required.'),
];

const validateIdSearchQuery = [
  query('id').notEmpty().withMessage('id is required.'),
];

module.exports = {
  validateId,
  validateMovieBody,
  validateWatchedUpdate,
  validateSearchQuery,
  validateIdSearchQuery,
};
