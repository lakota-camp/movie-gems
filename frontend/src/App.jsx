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
