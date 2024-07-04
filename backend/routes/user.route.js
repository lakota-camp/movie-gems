const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const handleInputErrors = require('../middleware/InputError');

const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller.js');

// * User CRUD API Routes * //

// Create user - ADMIN ONLY
router.post(
  '/',
  [
    body('username').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Must be a valid email address'),
    body('password')
      .isLength({ min: 9 })
      .withMessage('Password must be 9 characters long'),
  ],
  handleInputErrors,
  createUser,
);

// Read all users - ADMIN ONLY
router.get('/', getAllUsers);

// Read a user
router.get(
  '/:id',
  [param('id').isMongoId().withMessage('User ID must be a valid MongoDB ID')],
  handleInputErrors,
  getUser,
);

// Update user
router.put(
  '/:id',
  [
    body('name').optional().notEmpty().withMessage('Name is required'),
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
  '/:id',
  [param('id').isMongoId().withMessage('User ID must be a valid MongoDB ID')],
  handleInputErrors,
  deleteUser,
);

module.exports = router;
