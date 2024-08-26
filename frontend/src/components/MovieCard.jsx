import { useMovies } from "../context/MovieContext";
import ButtonMain from "./Button";
import { Card, CardContent, Rating } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import SuccessAlert from "./SuccessAlert";
import { useState } from "react";

// import Typography from "@mui/material/Typography";

const MovieCard = ({ movie, isSearch }) => {
  const { addMovie, deleteMovie, updateMovie } = useMovies();
  const [movieAdded, setMovieAdded] = useState(false);

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

  // Function to handle add event
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

    setMovieAdded(true);

    setTimeout(() => setMovieAdded(false), 3000);
  };
  return (
    <>
      {movieAdded && <SuccessAlert message="Movie added to watch list" />}
      <Card elevation={10} sx={{ maxWidth: 345 }}>
        <Link to={`/user/movies/details/${movie.imdbID}`}>
          <CardMedia
            sx={{ height: 500 }}
            image={movie.Poster}
            title={movie.Title}
            id={movie._id}
          />
        </Link>
        <CardContent sx={{ textAlign: "center" }}>
          <Rating name="size-small" defaultValue={0} sx={{ color: "white" }} />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: 4,
            paddingTop: 1,
          }}
        >
          {/* Dynamically updates button choices based on user movies or search results */}
          {isSearch ? (
            <>
              <ButtonMain
                onClick={handleAdd}
                variant="contained"
                text="Add to Watch list"
                color="primary"
              />
              {/* <MovieModal imdbID={movie.imdbID} /> */}
            </>
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
              {/* FIXME: Bug when opening modal... data is fetched properly but trouble with modal opening... */}
              {/* <MovieModal imdbID={movie.imdbID} /> */}
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default MovieCard;
