import "./App.css";
import { MovieProvider } from "./context/MovieContext";
import { ThemeProvider } from "@mui/material/styles";
import { Link, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Container from "@mui/material/Container";
import UserMovieGrid from "./components/UserMovieGrid";
import ResultsMovieGrid from "./components/ResultsMovieGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MovieProvider>
        <header>
          <Link to="/">
            <Navbar text="Movie Gems" />
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<UserMovieGrid />} />
          <Route path="/search/:id" element={<ResultsMovieGrid />} />
        </Routes>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
