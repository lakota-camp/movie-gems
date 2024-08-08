import { useMovies } from "../context/MovieContext";
import ButtonMain from "./Button";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
// import Typography from "@mui/material/Typography";

const MovieCard = ({ movie, isSearch }) => {
  const { addMovie, deleteMovie, updateMovie } = useMovies();

  // Function to handle delete event
  const handleDelete = (e) => {
    e.preventDefault();
    deleteMovie(movie._id);
  };

  // Function to handle update event
  const handleUpdate = (e) => {
    e.preventDefault();
    const updateData = { Watched: true };
    updateMovie(movie._id, updateData);
  };

  // Function to handle update event
  const handleAdd = (e) => {
    e.preventDefault();
    const movieData = {
      Title: movie.Title,
      Year: movie.Year,
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Type: movie.Type,
    };
    addMovie(movieData);
  };

  return (
    <>
      <Card elevation={10} sx={{ maxWidth: 345 }}>
        <Link to={`/user/movies/details/${movie.imdbID}`}>
          <CardMedia
            sx={{ height: 500 }}
            image={movie.Poster}
            title={movie.Title}
            id={movie._id}
          />
        </Link>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: 5,
            paddingTop: 5,
          }}
        >
          {/* Dynamically updates button choices based on user movies or search results */}
          {isSearch ? (
            <ButtonMain
              onClick={handleAdd}
              variant="contained"
              text="Add to Watch list"
              color="primary"
            />
          ) : (
            <>
              <ButtonMain
                onClick={handleUpdate}
                variant="contained"
                text="Mark as watched"
                color="primary"
              />
              <ButtonMain
                onClick={handleDelete}
                variant="outlined"
                text="Delete"
                color="secondary"
              />
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default MovieCard;
