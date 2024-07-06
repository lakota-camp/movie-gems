const Movie = require('../models/movie.model');

// * Admin Only: Movie CRUD Operations * //

// Create a movie
const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
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
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete users movie
const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(`Movie '${id}' deleted successfully.`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
};
