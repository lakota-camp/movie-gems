import PropTypes from "prop-types";
import { useMovies } from "../context/MovieContext";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

const MovieCard = ({ movie }) => {
  const { deleteMovie } = useMovies();

  const handleDelete = (e) => {
    e.preventDefault();
    deleteMovie(movie._id);
  };
  // const handleUpdate = () => {
  //   // sets update data to opposite of current boolean value
  //   const updateData = { ...movie, watched: !movie.watched };
  //   updateMovie(movie._id, updateData);
  // };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 500 }}
          image={movie.poster}
          title={movie.title}
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography> */}
          {/* <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography> */}
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: 5,
          }}
        >
          <AddButton text="Add to watch list" />
          <DeleteButton onClick={handleDelete} text="Delete" />{" "}
        </CardActions>
      </Card>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    watched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MovieCard;
