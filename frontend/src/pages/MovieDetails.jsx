import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import LoadingSpinner from "../components/LoadingSpinner";

const MovieDetails = () => {
  const { id } = useParams();
  const { getOneMovie, movieDetails, loading, error } = useMovies();

  useEffect(() => {
    getOneMovie(id);
  }, [id, getOneMovie]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movieDetails) {
    return <h2>No Movie Found</h2>;
  }
  console.log(movieDetails);
  // FIXME: Add function to get movie details by querying OMDB API using imdbId as query parameter.
  return (
    <div>
      <h2>Id: {id}</h2>
      <h2>Title: {movieDetails.Title}</h2>
      <h2>imdbID: {movieDetails.imdbID}</h2>
    </div>
  );
};

export default MovieDetails;
