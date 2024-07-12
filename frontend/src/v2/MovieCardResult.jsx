import PropTypes from "prop-types";

import { Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

const MovieCard = ({ movie }) => {
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
            paddingBottom: 0,
            paddingTop: 0,
          }}
        ></CardActions>
      </Card>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    watched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default MovieCard;
