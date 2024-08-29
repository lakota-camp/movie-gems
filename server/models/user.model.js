const mongoose = require('mongoose');
const Movie = require('./movie.model');

/*
  Use DB Schema for future update
*/

// * User DB Schema * //
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePictureURL: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// User Model
const User = mongoose.model('User', UserSchema);
module.exports = User;
