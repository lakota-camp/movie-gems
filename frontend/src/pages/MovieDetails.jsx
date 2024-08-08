import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { Container } from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams();
  const { getMovieDetails, movieDetails, error, loading } = useMovies();

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
      </Container>
    </div>
  );
};

export default MovieDetails;
