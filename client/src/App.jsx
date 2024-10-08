import "./App.css";
import { MovieProvider } from "./context/MovieContext";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Home from "./pages/Home/Home";
import Navbar from "./components/common/Navbar";
import MovieSearch from "./pages/MovieSearch/MovieSearch";
import UserMovies from "./pages/UserMovies/UserMovies";
import UserWatchedMovies from "./pages/UserMovies/UserWatchedMovies";

// FIXME: Change movie details in search to include a "add movie" option - separate state
// FIXME: Future update - allow users to browse movies be specific categories

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MovieProvider>
        <Navbar
          title="Home"
          myMovies="My Movies"
          watchedMovies="Watched Movies"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/movies/details/:id" element={<MovieDetails />} />
          <Route path="/user/movies" element={<UserMovies />} />
          <Route path="/user/movies/watched" element={<UserWatchedMovies />} />
          <Route path="/search/movies" element={<MovieSearch />} />
        </Routes>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
