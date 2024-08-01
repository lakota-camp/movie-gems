import { useState, createContext, useContext } from "react";
import * as movieService from "./MovieService";

// Create context
const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  // Set states
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSearch, setIsSearch] = useState(false);

  const getAllMovies = async () => {
    setLoading(true);
    setIsSearch(false);
    try {
      const data = await movieService.fetchMovies();
      setMovies(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const getOneMovie = async (id) => {
    setLoading(true);
    setIsSearch(false);
    try {
      const data = await movieService.fetchOneMovie(id);
      setMovieDetails(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = async (query) => {
    setLoading(true);
    setIsSearch(true);
    try {
      const data = await movieService.searchMovies(query);
      setSearchResults(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const addMovie = async (movieData) => {
    try {
      const data = await movieService.addMovie(movieData);
      // appends new movie to the rest of the movie list using the rest operator
      setMovies((prevMovies) => [...prevMovies, data]);
    } catch (err) {
      setError(err);
    }
  };

  const updateMovie = async (id, updateData) => {
    try {
      await movieService.updateMovie(id, updateData);
      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie._id === id ? { ...movie, ...updateData } : movie,
        ),
      );
    } catch (err) {
      setError(err);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await movieService.deleteMovie(id);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== id));
    } catch (err) {
      setError(err);
    }
  };

  const resetSearch = () => {
    setIsSearch(false);
    setSearchResults([]);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        loading,
        error,
        searchResults,
        searchMovies,
        addMovie,
        getAllMovies,
        getOneMovie,
        updateMovie,
        deleteMovie,
        isSearch,
        movieDetails,
        resetSearch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
