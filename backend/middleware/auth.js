const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const comparePasswords = (pass, hash) => {
  return bcrypt.compare(pass, hash);
};
// takes in plain text password and returns hashed password; 5 is a salt: a value that gives hash variety (more security)
const hashPassword = (pass) => {
  return bcrypt.hash(pass, 5);
};

// JSON web token
const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
  );
  return token;
};

// * Middleware to protect routes
