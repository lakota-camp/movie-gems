require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const movieRoute = require('./routes/movie.route');
const userRoute = require('./routes/user.route');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB credentials
const uri = process.env.MONGO_URI;

// * Routes * //

// Movie
app.use('/api/movies', movieRoute);

// User
app.use('/api/user', userRoute);

app.get('/', (req, res) => {
  res.send(`Backend running on port: ${port}`);
});

// * Connect to DB * //

connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
