import { useState, createContext, useContext } from "react";
import axios from "axios";

const url = "http://localhost:3000";
const endpoint = "api/movies";
// Create context
const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

import PropTypes from "prop-types";

export const MovieProvider = ({ children }) => {
  // Prop validation
  MovieProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  // Set states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to search movies from Search endpoint
  const searchMovies = async (query) => {
    setLoading(true);
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
      // // To test loading and error states
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      // throw new Error("Simulated error");
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
      const newData = data.filter((movie) => movie._id !== id);
      setData(newData);
    } catch (error) {
      setError(error);
    }
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
