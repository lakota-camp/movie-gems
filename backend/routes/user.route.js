const express = require('express');
const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller.js');

// * User CRUD API Routes * //

// Create user - ADMIN ONLY
router.post('/', createUser);

// Read all users - ADMIN ONLY
router.get('/', getAllUsers);

// Read a user
router.get('/:id', getUser);

// Update user
router.put('/:id', updateUser);

// Delete user
router.delete('/:id', deleteUser);

module.exports = router;
