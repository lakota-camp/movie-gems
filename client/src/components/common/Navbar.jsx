import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchMoviesForm from "../movies/SearchMovies";
import { useMovies } from "../../context/MovieContext";

const Navbar = ({ title, myMovies, watchedMovies }) => {
  const navigate = useNavigate();
  const { resetSearch } = useMovies();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavigate = (path) => (e) => {
    e.preventDefault();
    resetSearch();
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            alignItems="center"
            spacing={2}
            direction={isSmallScreen ? "column" : "row"}
            sx={{ padding: 2 }}
          >
            <Grid item xs={12} sm={2}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
              xs={12}
              sm={8}
              sx={{
                display: "flex",
                justifyContent: isSmallScreen ? "center" : "space-around",
                flexDirection: isSmallScreen ? "column" : "row",
              }}
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
                sx={{
                  justifyContent: isSmallScreen ? "center" : "start",
                  flexDirection: isSmallScreen ? "column" : "row",
                  paddingTop: isSmallScreen ? "2rem" : "",
                }}
              >
                {watchedMovies}
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              sx={{ paddingBottom: isSmallScreen ? "1rem" : "" }}
            >
              <SearchMoviesForm />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
