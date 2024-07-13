import { useState, createContext, useContext } from "react";
import axios from "axios";

const url = "http://localhost:3000";
const endpoint = "api/movies";
// Create context
const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  // Set states
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to search movies from Search endpoint
  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${url}/${endpoint}/search?title=${query}`,
      );
      console.log("Fetched Movies:", response.data);
      setSearchResults(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      setError(error);
      setSearchResults([]);
    }
    setLoading(false);
  };

  // ** CRUD Movie Functions ** //

  // Function to add movie
  const addMovie = async (movieData) => {
    setLoading(true);
    try {
      await axios.post(`${url}/${endpoint}`, movieData);
      // refresh movie list when movie is added
      getAllMovies();
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  // Function to get all movies
  const getAllMovies = async () => {
    setLoading(true);
    try {
      // To test loading and error states
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      // throw new Error("Simulated error");
      const response = await axios.get(`${url}/${endpoint}/`);
      setMovies(response.data);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
      setError(error);
    }
    setLoading(false);
  };

  // Function to update a movie
  const updateMovie = async (id, updateData) => {
    try {
      await axios.put(`${url}/${endpoint}/${id}`, updateData);
      // refresh movie list when movie is added
      getAllMovies();
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  // Function to delete movie
  const deleteMovie = async (id) => {
    try {
      await axios.delete(`${url}/${endpoint}/${id}`);
      // refresh movie list when movie is added
      const newData = movies.filter((movie) => movie._id !== id);
      setMovies(newData);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
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
        updateMovie,
        deleteMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
