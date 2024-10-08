const movieService = require('../services/movieService');

// * CRUD Movie * //

// Create a movie
const createMovie = async (req, res) => {
  try {
    console.log('movie:', req.body);
    const newMovie = await movieService.createMovie(req.body);
    const movie = await newMovie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getMovies(false);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all watched movies
const getAllWatchedMovies = async (req, res) => {
  try {
    const watchedMovies = await movieService.getMovies(true);
    res.status(200).json(watchedMovies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch watched movies.' });
  }
};

// Get specific movie by ID
const getMovieById = async (req, res) => {
  try {
    const movie = await movieService.getMovieById(req.params.id);

    // Check if movies exists
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a movie
const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { Watched } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Movie ID is required' });
    }

    const updatedMovie = await movieService.updateMovie(id, { Watched });

    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    // Check if movie exists
    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Delete movie
const deleteMovie = async (req, res) => {
  try {
    const movie = await movieService.getMovieById(req.params.id);
    console.log(movie);

    // Check if movies exists
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    // Delete movie if it exists
    await movieService.deleteMovie(req.params.id);
    res.status(200).json(`Movie '${req.params.id}' deleted successfully.`);
  } catch (error) {
    console.error('Error deleting:', error.message);
    res.status(500).json({ message: error.message });
  }
};

// Search OMDB API for movie
const searchMovies = async (req, res) => {
  // Destructure title from query parameter
  const { title } = req.query;

  // Check to see if title exists in query parameter
  if (!title) {
    return res
      .status(400)
      .json({ error: 'Title query parameter is required.' });
  }

  try {
    const movie = await movieService.searchMovies(title);

    if (!movie) {
      console.log('Movie not found.');
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json(movie);
  } catch (error) {
    console.error('movie.controller.js - Error fetching title:', error.message);
    res.status(500).json({ error: 'Failed search for title.' });
  }
};

// Fetch movies details from OMDB API
const fetchMovieDetails = async (req, res) => {
  const { id } = req.params;
  console.log('id:', id);

  console.log('query id:', id);
  if (!id) {
    return res.status(400).json({ error: 'Id query param required.' });
  }

  try {
    const movie = await movieService.fetchMovieDetails(id);
    console.log('Movie from IMDB search:', movie);
    res.status(200).json(movie);
  } catch (error) {
    console.error('Error fetching movie using IMDB Id: ', error.message);
    res.status(500).json({ error: 'failed to search for title' });
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getAllWatchedMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  searchMovies,
  fetchMovieDetails,
};
