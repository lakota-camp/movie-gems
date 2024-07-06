const { validationResult } = require('express-validator');

const handleInputErrors = (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);

  if (!errors.isEmpty()) {
    res.status(400);
    res.json({ errors: errors.array() });
  } else {
    next();
  }
};

module.exports = handleInputErrors;
