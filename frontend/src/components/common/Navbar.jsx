import { AppBar, Box, Toolbar, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchMoviesForm from "../movies/SearchMovies";
import { useMovies } from "../../context/MovieContext";

const Navbar = ({ title, myMovies, watchedMovies }) => {
  const navigate = useNavigate();
  const { resetSearch } = useMovies();

  const handleNavigate = (path) => (e) => {
    e.preventDefault();
    resetSearch();
    navigate(path);
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
                  onClick={handleNavigate("/")}
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
                onClick={handleNavigate("/user/movies")}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {myMovies}
              </Button>
              <Button
                onClick={handleNavigate("/user/movies/watched")}
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
