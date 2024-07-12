import "./App.css";
import { MovieProvider } from "./context/MovieContext";
import { ThemeProvider } from "@mui/material/styles";
import { Link, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Results from "./v2/Results";
import SearchParams from "./v2/SearchParams";
import UserMovieGrid from "./components/UserMovieGrid";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MovieProvider>
        {/* <header>
          <Navbar text="Movie Gems" />
          <Link to="/"></Link>
        </header> */}
        <Routes>
          <Route path="/search" element={<SearchParams />} />
          <Route path="/" element={<UserMovieGrid />} />
        </Routes>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
