const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_KEY);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
