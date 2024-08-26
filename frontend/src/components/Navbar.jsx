import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SearchMoviesForm from "./SearchMovies";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import Button from "@mui/material/Button";

const Navbar = ({ title, myMovies, watchedMovies }) => {
  const navigate = useNavigate();
  const { resetSearch } = useMovies();

  const handleNavigateToMovies = (e) => {
    e.preventDefault();
    resetSearch();
    navigate("/user/movies");
  };

  const handleNavigateToWatchedMovies = (e) => {
    e.preventDefault();
    resetSearch();
    navigate("/user/movies/watched");
  };

  const handleNavigateHome = (e) => {
    e.preventDefault();
    resetSearch();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center" sx={{ padding: 2 }}>
            <Grid item xs={2}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  to="/"
                  onClick={handleNavigateHome}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {title}
                </Button>
              </Typography>
            </Grid>
            <Grid
              item
              xs={8}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                onClick={handleNavigateToMovies}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {myMovies}
              </Button>
              <Button
                onClick={handleNavigateToWatchedMovies}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {watchedMovies}
              </Button>
            </Grid>
            <Grid item xs={2}>
              <SearchMoviesForm />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
