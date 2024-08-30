import axios from "axios";
// import.meta.env.VITE_API_URL;
const baseURL = "http://localhost:3000";
console.log(baseURL);

const endpoint = "api/movies";

export const fetchMovies = async () => {
  const response = await axios.get(`${baseURL}/${endpoint}`);
  return response.data;
};
export const fetchWatchedMovies = async () => {
  const response = await axios.get(`${baseURL}/${endpoint}/watched`);
  return response.data;
};

export const fetchOneMovie = async (id) => {
  const response = await axios.get(`${baseURL}/${endpoint}/${id}`);
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(`${baseURL}/${endpoint}/details/${id}`);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${baseURL}/${endpoint}/search?title=${query}`,
  );

  if (response.status === 404) {
    return { message: "Movie Not Found." };
  }

  return Array.isArray(response.data) ? response.data : [];
};

export const addMovie = async (movieData) => {
  const response = await axios.post(`${baseURL}/${endpoint}`, movieData);
  return response.data;
};

export const updateMovie = async (id, updateData) => {
  const response = await axios.put(`${baseURL}/${endpoint}/${id}`, updateData);
  return response.data;
};

export const deleteMovie = async (id) => {
  await axios.delete(`${baseURL}/${endpoint}/${id}`);
};
