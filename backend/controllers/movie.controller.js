const Movie = require('../models/movie.model');

// Create a movie
const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all movies from user
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ userId: req.params.userId });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all movies from database
const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).json(movies);
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
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete users movie
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(204).json(`Movie '${id}' deleted successfully.`);
  } catch (error) {
    res
      .status(500)
      .send({ message: `Movie '${req.params.id}' deleted successfully.` });
  }
};

module.exports = {
  getMovies,
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
