import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { Container } from "@mui/material";
import ButtonMain from "../components/Button";

const MovieDetails = ({ isSearch }) => {
  const { id } = useParams();
  const { addMovie, getMovieDetails, movieDetails, error, loading } =
    useMovies();

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movieDetails) {
    return <h2>No Movie Found</h2>;
  }
  isSearch = true;
  // Function to handle update event
  const handleAdd = (e) => {
    e.preventDefault();
    const movieData = {
      Title: movieDetails.Title,
      Year: movieDetails.Year,
      imdbID: movieDetails.imdbID,
      Poster: movieDetails.Poster,
      Type: movieDetails.Type,
    };
    addMovie(movieData);
  };

  // Data is correctly displaying -> FIXME: Style data for details
  return (
    <div>
      <Container maxWidth="sm">
        <h3>Details</h3>
        <ul>
          <li>Param id: {id}</li>
          <li>Title: {movieDetails.Title}</li>
          <li>Plot: {movieDetails.Plot}</li>
          <li>Director: {movieDetails.Director}</li>
          <li>Rated: {movieDetails.Rated}</li>
          <li>Released: {movieDetails.Year}</li>
          <li>Actors: {movieDetails.Actors}</li>
          <li>Box Office: {movieDetails.BoxOffice}</li>
          <li>Awards: {movieDetails.Awards}</li>
          <li>imdbRating: {movieDetails.imdbRating} / 10</li>
        </ul>
        <h3>Ratings</h3>
        <ul>
          {movieDetails.Ratings.map((rating, index) => (
            <li key={index}>
              {rating.Source}: {rating.Value}
            </li>
          ))}
        </ul>
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
        <div>
          {/* Dynamically updates button choices based on user movies or search results */}
          {isSearch ? (
            <ButtonMain
              onClick={handleAdd}
              variant="contained"
              text="Add to Watch list"
              color="primary"
            />
          ) : (
            <></>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MovieDetails;
