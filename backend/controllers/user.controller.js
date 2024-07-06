const User = require('../models/user.model');
const {
  comparePasswords,
  createJWT,
  hashPassword,
} = require('../middleware/auth');

// * CRUD User * //

// Create user
const createUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    // Validate that email, username, and password are entered.
    if (!email || !username || !password) {
      return res
        .status(400)
        .json({ message: 'Email, username, and password are required.' });
    }

    // Hash password
    const hash = await hashPassword(req.body.password);

    // Create new user
    const user = await User.create({
      email,
      username,
      password: hash,
    });

    // Create token
    const token = createJWT(user);

    // Respond with the token and user information
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search database for username and password
const signIn = async (req, res) => {
  try {
    // Refactor into util function {
    const { username, password } = req.body;

    if (!username || !password) {
      console.log('Validation Error: Missing username or password');
      return res
        .status(400)
        .json({ message: 'Username and password are required.' });
    }
    // }
    const user = await User.findOne({ username });

    // Check if user exists
    if (!user) {
      console.log('User not found:', username);
      return res.status(401).json({ message: 'User not found' });
    }

    // Check if entered password is correct
    const passIsValid = await comparePasswords(password, user.password);

    // If passwords do not match -> 401
    if (!passIsValid) {
      console.log('Password mismatch for user:', username);
      return res.status(401).json({ Message: 'Access Denied' });
    }

    // Create token
    const token = createJWT(user);
    res.status(200).json({ 'Session token': token });
  } catch (error) {
    console.error('Error in signIn:', error);
    res.status(500).json({ message: error.message });
  }
};

// Read all users - ADMIN ONLY
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read a user
const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidation: true,
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: `User ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  signIn,
  getUser,
  updateUser,
  deleteUser,
};
