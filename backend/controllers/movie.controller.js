const Movie = require('../models/movie.model');

// * CRUD Movie * //

// Create a movie for logged in user
const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create({ ...req.body, userId: req.user.id });
    const saveMovie = await movie.save();
    res.status(201).json(saveMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all movies from user
const getUserMovies = async (req, res) => {
  try {
    const userId = req.params.userId;
    const movies = await Movie.find({ userId: userId });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get specific movie by ID for logged in user
const getMovieById = async (req, res) => {
  try {
    const movie = Movie.findOne({ _id: req.params.id, userId: req.user.id });
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
      res.status(200).json(movie);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a movie
const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // Check if movie exists
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete users movie
const deleteMovie = async (req, res) => {
  console.log(req.params);
  try {
    const _id = req.params.id;
    const userId = req.user.id;
    // Check ownership of movie
    const movie = await Movie.findOne({ _id, userId });
    // Check if movies exists
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    // Delete movie if it exists
    await Movie.findByIdAndUpdate(_id);
    res.status(200).json(`Movie '${_id}' deleted successfully.`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMovie,
  getUserMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
