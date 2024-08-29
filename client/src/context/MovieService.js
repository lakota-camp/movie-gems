import axios from "axios";
const baseURL = "http://localhost:3000/api/movies";

export const fetchMovies = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};
export const fetchWatchedMovies = async () => {
  const response = await axios.get(`${baseURL}/watched`);
  console.log(response.data);
  return response.data;
};

export const fetchOneMovie = async (id) => {
  const response = await axios.get(`${baseURL}/${id}`);
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${baseURL}/details/${id}`);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(`${baseURL}/search?title=${query}`);

  if (response.status === 404) {
    return { message: "Movie Not Found." };
  }

  return Array.isArray(response.data) ? response.data : [];
};

export const addMovie = async (movieData) => {
  const response = await axios.post(baseURL, movieData);
  return response.data;
};

export const updateMovie = async (id, updateData) => {
  const response = await axios.put(`${baseURL}/${id}`, updateData);
  return response.data;
};

export const deleteMovie = async (id) => {
  await axios.delete(`${baseURL}/${id}`);
};
