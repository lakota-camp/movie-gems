import { useState, createContext, useContext } from "react";
import axios from "axios";

const url = "http://localhost:3000";
const endpoint = "api/movies";
// Create context
const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  // Set states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Loading state
  const loadingState = () => {
    setLoading(true);
    setError(null);
  };

  // Function to search movies from Search endpoint
  const searchMovies = async (query) => {
    loadingState();
    try {
      const response = await axios.get(
        `${url}/${endpoint}/search?title=${query}`,
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  // ** CRUD Movie Functions ** //

  // Function to add movie
  const addMovie = async (movieData) => {
    loadingState();
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
    loadingState();
    try {
      const response = await axios.get(`${url}/${endpoint}/`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching movies:", error.message);
      setError(error);
    }
    setLoading(false);
  };

  // Function to update a movie
  const updateMovie = async (id, updateData) => {
    loadingState();
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
  const deleteMovie = async (id, updateData) => {
    loadingState();
    try {
      await axios.delete(`${url}/${endpoint}/${id}`, updateData);
      // refresh movie list when movie is added
      getAllMovies();
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <MovieContext.Provider
      value={{
        data,
        loading,
        error,
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
