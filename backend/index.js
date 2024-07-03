const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const movieRoute = require('./routes/movie.route');
const userRoute = require('./routes/user.route');
require('dotenv').config();

// Middleware
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongo_db_key = process.env.MONGO_DB_KEY;

const PORT = 3000;

// * Routes * //

// Movie
app.use('/api/movies', movieRoute);

// User
app.use('/api/user', userRoute);

app.get('/', (req, res) => {
  res.send(`Backend running on port: ${PORT}`);
});

// * Connect to DB * //

mongoose
  .connect(
    `mongodb+srv://lakotacamp3:${mongo_db_key}@movie-watchlist.njohish.mongodb.net/?retryWrites=true&w=majority&appName=movie-watchlist`,
  )
  .then(() => {
    console.log('Successfully connected to database.');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Connection Failed.'));
