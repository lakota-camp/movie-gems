import { useState, createContext, useContext, useEffect } from "react";
import * as movieService from "./MovieService";
import useLoading from "../hooks/useLoading";
// Create context
const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  // Set states
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
      setMovies(data);
    } catch (err) {
      handleError(err);
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

  // log when movieDetails changes, add this in your MovieProvider component
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
      setSearchResults([]); // Clear search results on error
      await getAllMovies(); // Reload the user's movie list after error
    } finally {
      stopLoading();
    }
  };

  const addMovie = async (movieData) => {
    try {
      const data = await movieService.addMovie(movieData);
      // appends new movie to the rest of the movie list using the rest operator
      setMovies((prevMovies) => [...prevMovies, data]);
    } catch (err) {
      handleError(err);
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
