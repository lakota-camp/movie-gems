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

  // Higher order function to make request depending on request type
  const request = async (requestFunc, setData) => {
    try {
      const data = await requestFunc();
      if (setData) {
        setData(data);
      }
    } catch (error) {
      setError(error);
    }
  };

  const getAllMovies = () => {
    setIsSearch(false);
    request(movieService.fetchMovies, setMovies);
  };

  // FIXME: Add function to get movie details by querying OMDB API using imdbId as query parameter.
  const getOneMovie = (id) => {
    setIsSearch(false);
    request(() => movieService.fetchOneMovie(id), setMovieDetails);
  };

  const searchMovies = (query) => {
    setIsSearch(true);
    request(() => movieService.searchMovies(query), setSearchResults);
  };

  const addMovie = (movieData) =>
    request(() => movieService.addMovie(movieData), setMovies);

  const updateMovie = (id, updateData) =>
    request(() => movieService.updateMovie(id, updateData));

  const deleteMovie = (id) =>
    request(() => movieService.deleteMovie(id), getAllMovies);

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
