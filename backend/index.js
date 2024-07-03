const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const movieRoute = require('./routes/movie.route');
const validateObjectId = require('./middleware/validateObjectId');
require('dotenv').config();

app.use(cors({}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongo_db_key = process.env.MONGO_DB_KEY;

const PORT = 3000;

// Routes
app.use('/api/movies', movieRoute);

app.get('/', (req, res) => {
  res.send(`Hello from the backend on port: ${PORT}`);
});

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
