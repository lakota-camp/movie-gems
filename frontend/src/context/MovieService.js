import axios from "axios";
const url = "http://localhost:3000";
const endpoint = "api/movies";

export const fetchMovies = async () => {
  const response = await axios.get(`${url}/${endpoint}/`);
  return response.data;
};
export const fetchWatchedMovies = async () => {
  const response = await axios.get(`${url}/${endpoint}/watched`);
  console.log(response.data);
  return response.data;
};

export const fetchOneMovie = async (id) => {
  const response = await axios.get(`${url}/${endpoint}/${id}`);
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${url}/${endpoint}/details/${id}`);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${url}/${endpoint}/search?title=${query}`);

  if (response.status === 404) {
    return { message: "Movie Not Found." };
  }

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
