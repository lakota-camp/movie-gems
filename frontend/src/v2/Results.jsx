import PropTypes from "prop-types";
import MovieCard from "../components/MovieCard";
import { Grid } from "@mui/material";

const Results = ({ movies }) => {
  console.log("Movies:", movies);
  return (
    <Grid container spacing={2}>
      {!movies.length ? (
        <h1>No Movies found</h1>
      ) : (
        movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie._id}>
            <MovieCard movie={movie} />
          </Grid>
        ))
      )}
    </Grid>
  );
};
Results.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      watched: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Results;
