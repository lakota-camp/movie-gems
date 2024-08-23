import { useState, createContext, useContext, useEffect } from "react";
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
    // Reset error to allow movies to load after error happens
    setError(null);
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

  const getMovieDetails = async (id) => {
    console.log("getMovieDetails from MovieContext triggered!");
    setLoading(true);
    setIsSearch(false);
    try {
      const data = await movieService.fetchMovieDetails(id);
      setMovieDetails(data); // This schedules an update for the next render
      console.log("data fetched from MovieService:", data); // Log the fetched data
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // log when movieDetails changes, add this in your MovieProvider component
  useEffect(() => {
    if (movieDetails) {
      console.log("movieDetails updated:", movieDetails);
    }
  }, [movieDetails]);

  const searchMovies = async (query) => {
    setLoading(true);
    setIsSearch(true);
    try {
      const data = await movieService.searchMovies(query);

      if (data.error || data.message) {
        setError(data.message || data.error);
        setSearchResults([]);
      } else {
        setSearchResults(data);
        setError(null);
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
      setSearchResults([]); // Clear search results on error
      await getAllMovies(); // Reload the user's movie list after error
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
        getMovieDetails,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
