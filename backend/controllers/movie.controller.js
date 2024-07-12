const movieService = require('../services/movieService');

// FIXME: Refactor code to be more DRY - extract common async res.status(200) and res.status(500) functionality

// * CRUD Movie * //

// Create a movie
const createMovie = async (req, res) => {
  try {
    const movie = await movieService.createMovie(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all movies
const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
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

// FIXME: change update to only allow user to be able to update boolean for is watched attribute

// Update a movie
const updateMovie = async (req, res) => {
  try {
    const movie = await movieService.updateMovie(req.params.id, req.body);
    // Check if movie exists
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.status(200).json(movie);
  } catch (error) {
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
  console.log('Search title:', title);

  // Check to see if title exists in query parameter
  if (!title) {
    return res
      .status(400)
      .json({ error: 'Title query parameter is required.' });
  }

  try {
    const movie = await movieService.searchSingleMovie(title);
    console.log(movie);

    res.status(200).json(movie);
  } catch (error) {
    console.error('Error fetching movie:', error.message);
    res.status(500).json({ error: 'Failed search for movie.' });
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  searchMovies,
};
