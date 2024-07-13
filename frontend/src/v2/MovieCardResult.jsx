import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import AddButton from "../components/AddButton";
import { useMovies } from "../context/MovieContext";

// import Typography from "@mui/material/Typography";

const MovieCard = ({ movie }) => {
  const { addMovie } = useMovies();

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
    console.log(movieData);
    // alert(`'${movie.Title}' added to your watch list!`);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
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
          <AddButton onClick={handleAdd} text="Add to watch list" />
        </CardActions>
      </Card>
    </>
  );
};

export default MovieCard;
