import axios from "axios";
const url = "http://localhost:3000";
const endpoint = "api/movies";

// FIXME: Error with mapping over movies: TypeError: movieList.map is not a function
export const fetchMovies = async () => {
  const response = await axios.get(`${url}/${endpoint}/`);
  return response.data;
};

// FIXME: Add function to get movie details by querying OMDB API using imdbId as query parameter.
export const fetchOneMovie = async (id) => {
  const response = await axios.get(`${url}/${endpoint}/${id}`);
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  console.log("fetchMovieDetails from MovieService triggered!");
  const response = await axios.get(`${url}/${endpoint}/details/${id}`);
  console.log("Fetched movie details from MovieService:", response.data);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${url}/${endpoint}/search?title=${query}`);
  if (!response || !Array.isArray(response.data)) {
    return [];
  }
  return response.data;
};

export const addMovie = async (movieData) => {
  const response = await axios.post(`${url}/${endpoint}`, movieData);
  return response.data;
};

export const updateMovie = async (id, updateData) => {
  const response = await axios.put(`${url}/${endpoint}/${id}`, updateData);
  return response.data;
};

export const deleteMovie = async (id) => {
  await axios.delete(`${url}/${endpoint}/${id}`);
};
