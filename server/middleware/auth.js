const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const comparePasswords = (pass, hash) => {
  return bcrypt.compare(pass, hash);
};
// takes in plain text password and returns hashed password; 5 is a salt: a value that gives hash variety (more security)
const hashPassword = (pass) => {
  return bcrypt.hash(pass, 10);
};

// JSON web token
const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
  );
  return token;
};

// * Middleware to protect routes * //

const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  // check if header exists
  if (!bearer) {
    res.status(401);
    res.json({ message: 'Not authorized' });
    return;
  }

  // check if token exists
  const [, token] = bearer.split(' ');
  if (!token) {
    res.status(404);
    res.json({ message: 'Invalid token' });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    res.json({ message: 'Invalid token' });
    return;
  }
};

module.exports = {
  comparePasswords,
  hashPassword,
  createJWT,
  protect,
};
