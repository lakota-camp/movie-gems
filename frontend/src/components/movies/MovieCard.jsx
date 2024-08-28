import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Rating,
} from "@mui/material";
import { useMovies } from "../../context/MovieContext";
import ButtonMain from "../common/Button";
import SuccessAlert from "../common/SuccessAlert";

const MovieCard = ({ movie, isSearch }) => {
  const { addMovie, deleteMovie, updateMovie } = useMovies();
  const [movieAdded, setMovieAdded] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteMovie(movie._id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updateData = { Watched: true };
    updateMovie(movie._id, updateData);
    setMovieAdded(true);
    setTimeout(() => setMovieAdded(false), 3000);
  };

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
  console.log(movie.Poster);

  return (
    <>
      {movieAdded && (
        <SuccessAlert
          message={
            isSearch ? "Movie added to watch list" : "Movie marked as watched"
          }
        />
      )}

      <Card elevation={10} sx={{ maxWidth: 345 }}>
        <Link to={`/user/movies/details/${movie.imdbID}`}>
          <CardMedia
            sx={{ height: 500 }}
            image={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://placehold.co/600x400?text=No\nPoster"
            }
            title={movie.Title}
            id={movie._id}
          />
        </Link>
        <CardContent sx={{ textAlign: "center" }}>
          {/* <Rating name="size-small" defaultValue={0} sx={{ color: "white" }} /> */}
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: 4,
            paddingTop: 1,
          }}
        >
          {isSearch ? (
            <>
              <ButtonMain
                onClick={handleAdd}
                variant="contained"
                text="Add to Watch list"
                color="primary"
              />
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
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default MovieCard;
