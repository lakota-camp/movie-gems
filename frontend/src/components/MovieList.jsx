import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import MovieCard from "./MovieCard";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const MovieList = () => {
  const { data: movies, loading, error, getAllMovies } = useMovies();
  useEffect(() => {
    getAllMovies();
  }, []);

  const movieList = movies || [];
  // console.log(movieList);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
