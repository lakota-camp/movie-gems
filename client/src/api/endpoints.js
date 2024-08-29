// Refactor MovieServices.jsx to utilize this object
const endpoints = {
  baseUrl: "http://localhost:3000",
  movies: {
    addMovie: "/api/movies",
    getAllMovies: "/api/movies",
    getMovieById: (id) => `/api/movies/${id}`,
    updateMovie: (id, updateData) => (`/api/movies/${id}`, updateData),
    deleteMovie: (id) => `/api/movies/${id}`,
    searchMovies: (query) => `/api/movies//search?title=${query}`,
  },
};

export default endpoints;
