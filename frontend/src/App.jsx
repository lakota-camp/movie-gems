import "./App.css";
import { MovieProvider } from "./context/MovieContext";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Container from "@mui/material/Container";
import MovieGrid from "./components/MovieGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MovieProvider>
        <Navbar text="Movie Gems" />
        <Container maxWidth="xl" className="container" sx={{ marginTop: 4 }}>
          <MovieGrid />
        </Container>
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
