import { useState, createContext, useContext, useEffect } from "react";
import * as movieService from "./MovieService";
import useLoading from "../hooks/useLoading";
// Create context
const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);
  const [isSearch, setIsSearch] = useState(false);

  const { loading, error, startLoading, stopLoading, handleError } =
    useLoading();

  const getAllMovies = async () => {
    // Reset error to allow movies to load after error happens
    handleError(null);
    startLoading();
    setIsSearch(false);
    try {
      const data = await movieService.fetchMovies();

      if (Array.isArray(data)) {
        setMovies(data);
      } else {
        setMovies([]); // Fallback to an empty array if the data is not an array
      }
    } catch (err) {
      handleError(err);
      setMovies([]);
    } finally {
      // setTimeout to ensure loading is smooth
      setTimeout(() => stopLoading(), 100);
    }
  };

  const getAllWatched = async () => {
    // Reset error to allow movies to load after error happens
    handleError(null);
    startLoading();
    setIsSearch(false);
    try {
      const data = await movieService.fetchWatchedMovies();

      if (Array.isArray(data)) {
        setMovies(data);
      } else {
        setMovies([]); // Fallback to an empty array if the data is not an array
      }
    } catch (err) {
      handleError(err);
      setMovies([]);
    } finally {
      // setTimeout to ensure loading is smooth
      setTimeout(() => stopLoading(), 100);
    }
  };

  const getOneMovie = async (id) => {
    startLoading();
    setIsSearch(false);
    try {
      const data = await movieService.fetchOneMovie(id);
      setMovieDetails(data);
    } catch (err) {
      handleError(err);
    } finally {
      stopLoading();
    }
  };

  const getMovieDetails = async (id) => {
    startLoading();
    setIsSearch(false);
    try {
      const data = await movieService.fetchMovieDetails(id);
      setMovieDetails(data); // This schedules an update for the next render
    } catch (err) {
      handleError(err);
    } finally {
      stopLoading();
    }
  };

  // Log for when movie changes
  useEffect(() => {
    if (movieDetails) {
      console.log("movieDetails updated:", movieDetails);
    }
  }, [movieDetails]);

  const searchMovies = async (query) => {
    startLoading();
    setIsSearch(true);
    try {
      const data = await movieService.searchMovies(query);

      if (data.error || data.message) {
        handleError(data.message || data.error);
        setSearchResults([]);
      } else {
        setSearchResults(data);
        handleError(null);
      }
    } catch (err) {
      handleError(err.message || "An unexpected error occurred.");
      // Clear search results on error
      setSearchResults([]);
      // Reload the user's movie list after error
      await getAllMovies();
    } finally {
      stopLoading();
    }
  };

  const addMovie = async (movieData) => {
    try {
      const data = await movieService.addMovie(movieData);
      // Appends new movie to the rest of the movie list
      setMovies((prevMovies) => [...prevMovies, data]);
    } catch (err) {
      handleError(err);
    }
  };

  const updateMovie = async (id, updateData) => {
    try {
      await movieService.updateMovie(id, updateData);
      // Delays updating movies so that message can display
      setTimeout(() => {
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie._id !== id),
        );
      }, 3000);
    } catch (err) {
      handleError(err);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await movieService.deleteMovie(id);
      setMovies((prevMovies) => prevMovies.filter((movie) => movie._id !== id));
    } catch (err) {
      handleError(err);
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
        getAllWatched,
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
