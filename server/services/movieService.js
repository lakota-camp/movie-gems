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
    return await Movie.find({
      Watched: false,
    });
  }

  async getMovies(status) {
    return await Movie.find({
      Watched: status,
    });
  }

  async getAllWatchedMovies() {
    return await Movie.find({
      Watched: true,
    });
  }

  async getMovieById(id) {
    return await Movie.findById(id);
  }

  // FIXME: change update to only allow user to be able to update boolean for is watched attribute

  async updateMovie(id, data) {
    const updateData = { Watched: data.Watched };
    return await Movie.findByIdAndUpdate(id, updateData, {
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
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`,
      );

      // Check that error is OMDB error
      if (response.status !== 200) {
        throw new Error(`OMDB API error: ${response.status}`);
      }

      // Response from API
      const movies = response.data;

      if (movies.Response === 'False') {
        console.error('Error searching for movies: Movie not found.');
        throw new Error('Failed to search for movies.');
      }

      // Cache the search results
      myCache.set(title, movies.Search);

      return movies.Search;
    } else {
      return cachedMovie;
    }
  }

  async searchSingleMovie(title) {
    let cachedMovie = myCache.get(title);

    if (!cachedMovie) {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}&type=movie`,
      );

      // Response from API
      const movie = response.data;

      if (movie.Response === 'False') {
        throw new Error('Movie not found.');
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

  async fetchMovieDetails(imdbId) {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`,
    );

    const movie = response.data;

    if (movie.Response === 'False') {
      throw new Error('Movie not found.');
    }

    return movie;
  }
}

module.exports = new MovieService();
