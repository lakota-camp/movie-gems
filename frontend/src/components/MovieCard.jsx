import { useMovies } from "../context/MovieContext";

const MovieCard = ({ movie }) => {
  const { deleteMovie, updateMovie } = useMovies();

  const handleDelete = () => {
    deleteMovie(movie._id);
  };

  const handleUpdate = () => {
    // sets update data to opposite of currrent boolean value
    const updateData = { ...movie, watched: !movie.watched };
    updateMovie(movie._id, updateData);
  };

  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <h3>{movie.genre}</h3>
      <img src={movie.poster} alt={movie.title} />
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default MovieCard;
