const mongoose = require('mongoose');
const Movie = require('./movie.model');

// * User DB Schema * //
const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePictureURL: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

// User Model
const User = mongoose.model('User', UserSchema);
module.exports = User;
