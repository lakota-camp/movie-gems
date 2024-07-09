const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const handleInputErrors = require('../../middleware/InputError.js');

const { createUser, signIn } = require('../controllers/user.controller.js');

// * User CRUD API Routes * //

// Create user
router.post(
  '/register',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').notEmpty().withMessage('Must be a valid email address'),
    body('password')
      .isLength({ min: 9 })
      .withMessage('Password must be 9 characters long'),
  ],
  handleInputErrors,
  createUser,
);

// Login User
router.post(
  '/login',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  handleInputErrors,
  signIn,
);

module.exports = router;
