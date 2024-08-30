require('dotenv').config();
const express = require('express');
// DB
const connectDB = require('./config/db');
// Routes
const movieRoute = require('./routes/movie.route');
// Middleware
const { protect } = require('./middleware/auth');
const {
  requestLogger,
  ipLogger,
  timeRequestLog,
} = require('./middleware/requestLog');

const cors = require('cors');

const app = express();

// Env variables
const port = process.env.PORT || 3000;
const host = process.env.DB_HOST || 'localhost';

// Allow request from frontend during development and production
const corsOptions = {
  origin: ['http://localhost:5173', 'https://movie-gems-client.onrender.com/'],
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors({ corsOptions }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
app.use(ipLogger);
app.use(timeRequestLog);

// * Routes * //

// Movie (protected route)
app.use('/api/movies', movieRoute);

app.get('/', (req, res) => {
  res.send(`Backend running on port: ${port}`);
});

// * Connect to DB * //
connectDB();

// Run Server
app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
