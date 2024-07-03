const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const validateObjectId = (req, res, next) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid Id Format' });
  }
  next();
};

module.exports = validateObjectId;
