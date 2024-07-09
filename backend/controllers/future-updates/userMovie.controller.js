// * Future update: allow logged in user to mange their own movie watch list * //

require('dotenv').config();
const Movie = require('../../models/movie.model');
const axios = require('axios');
// Cache api calls
const NodeCache = require('node-cache');
// Cache for 24 hours
const myCache = new NodeCache({ stdTTL: 86400 });

const apiKey = process.env.OMDB_API_KEY;

// * CRUD Movie * //

// Create a movie for logged in user
const createMovie = async (req, res) => {
  try {
    userId = req.params.UserId;

    const movie = await Movie.create({ ...req.body, userId });
    const saveMovie = await movie.save();
    res.status(201).json(saveMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all movies from user
const getUserMovies = async (req, res) => {
  try {
    // const userId = req.params.userId;
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

// Search OMDB API for movie
const searchMovies = async (req, res) => {
  // Destructure title from query parameter
  const { title } = req.query;
  console.log(title);
  // Check to see if title exists in query parameter
  if (!title) {
    return res
      .status(400)
      .json({ error: 'Title query parameter is required.' });
  }
  try {
    // Check cache
    let cachedMovie = myCache.get(title);
    if (!cachedMovie) {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`,
      );

      // Response from API
      const movie = response.data;

      if (!response || !response.data || movie.response === 'False') {
        return res.status(404).json({ error: 'Movie not found.' });
      }
      const addMovie = new Movie({
        title: movie.Title,
        year: movie.Year,
        runtime: movie.Runtime,
        genre: movie.Genre,
        director: movie.Director,
        actors: movie.Actors,
        description: movie.Plot,
        poster: movie.Poster,
      });
      console.log(addMovie);
      // Cache the results
      myCache.set(title, movie);
      //   console.log(movie);
      res.status(200).json(addMovie);
    } else {
      res.status(200).json(cachedMovie);
    }
  } catch (error) {
    console.error('Error fetching movie:', error.message);
    res.status(500).json({ error: 'Failed search for movie.' });
  }
};

module.exports = {
  createMovie,
  getUserMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  searchMovies,
};
