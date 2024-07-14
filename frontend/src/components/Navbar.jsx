import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchMoviesForm from "./SearchMovies";
import { Link, useNavigate } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

// !!!FIX render and data fetching issue Search results -> User Movies list => MOVIES NOT rendered and errors occur

const Navbar = ({ title, movieList }) => {
  const navigate = useNavigate();
  const { resetSearch } = useMovies();

  // Handles state when navigating back to user movie list
  const handleNavigateToMovies = () => {
    resetSearch();
    navigate("/user/movies");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 10, padding: 3 }}
          >
            <Link to="/" onClick={resetSearch}>
              {title}
            </Link>
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 10, padding: 3 }}
          >
            <Link to="/user/movies" navigate={handleNavigateToMovies}>
              {movieList}
            </Link>
          </Typography>
          <SearchMoviesForm />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
