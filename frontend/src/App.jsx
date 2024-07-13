import "./App.css";
import { MovieProvider } from "./context/MovieContext";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

import SearchParams from "./v2/SearchParams";
import UserMovieGrid from "./components/UserMovieGrid";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MovieProvider>
        <Routes>
          <Route path="/search" element={<SearchParams />} />
          <Route path="/" element={<UserMovieGrid />} />
        </Routes>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
