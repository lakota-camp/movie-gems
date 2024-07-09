require('dotenv').config();
const Movie = require('../models/movie.model');
const axios = require('axios');
// Cache
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 86400 });

const apiKey = process.env.OMDB_API_KEY;

// * Movie Service Class *//
class MovieService {
  async createMovie(movieData) {
    const movie = await Movie.create(movieData);
    return movie;
  }

  async getAllMovies() {
    return await Movie.find({});
  }

  async getMovieById(id) {
    return await Movie.findById(id);
  }

  async updateMovie(id, data) {
    return await Movie.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async deleteMovie(id) {
    return await Movie.findByIdAndDelete(id);
  }

  async searchMovies(title) {
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
      // If movie found in from API -> Add movie to DB
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
      // Cache the results
      myCache.set(title, movie);
      return addMovie;
    } else {
      return cachedMovie;
    }
  }
}

module.exports = new MovieService();
