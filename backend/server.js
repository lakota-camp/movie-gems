require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const movieRoute = require('./routes/movie.route');
const { protect } = require('./middleware/auth');
const { requestLogger, ipLogger } = require('./middleware/requestLog');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(ipLogger);

// * Routes * //

// Movie (protected route)
app.use('/api/movies', movieRoute);

app.get('/', (req, res) => {
  res.send(`Backend running on port: ${port}`);
});

// * Connect to DB * //

connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// ____________________________________________________________
// Future updates:
// // User (public route)
// app.use('/api/user', userRoute);

// // Admin routes (protected route)
// app.use('/api/admin', adminRoute);
