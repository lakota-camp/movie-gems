import "./App.css";
import { MovieProvider } from "./context/MovieContext";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import MovieDetails from "./pages/MovieDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MovieSearch from "./pages/MovieSearch";
import UserMovies from "./pages/UserMovies";

// FIXME: Add logic to not allow user to add movie that is already on watch list
// FIXME: Change movie details in search to include a "add movie" option - separate state
// !FIXME: MAJOR BUG: when search results in no movie (e.g. bad typo), error message displays, fix to -> 'No movies found'
// !FIXME: MAJOR BUG: when no results found from search, Navigation back to "My Movies" does not work -> fix this!!! -> reset state when clicking back to "Home" or "My Movies"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MovieProvider>
        <Navbar title="Home" myMovies="My Movies" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/movies/details/:id" element={<MovieDetails />} />
          <Route path="/user/movies" element={<UserMovies />} />
          <Route path="/search/movies" element={<MovieSearch />} />
        </Routes>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
