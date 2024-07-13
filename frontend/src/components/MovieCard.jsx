import { useMovies } from "../context/MovieContext";
import DeleteButton from "./DeleteButton";
import AddButton from "./AddButton";
import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

const MovieCard = ({ movie }) => {
  const { deleteMovie, updateMovie } = useMovies();

  // Function to handle delete event
  const handleDelete = (e) => {
    e.preventDefault();
    deleteMovie(movie._id);
  };

  // Function to handle update event
  const handleUpdate = (e) => {
    e.preventDefault();
    const updateData = { Watched: !movie.Watched };
    console.log(updateData);
    updateMovie(movie._id, updateData);
  };

  return (
    <>
      <Card elevation={10} sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 500 }}
          image={movie.Poster}
          title={movie.Title}
        />

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingBottom: 5,
            paddingTop: 5,
          }}
        >
          <AddButton onClick={handleUpdate} text="Mark as watched" />
          <DeleteButton onClick={handleDelete} text="Delete" />{" "}
        </CardActions>
      </Card>
    </>
  );
};

export default MovieCard;
