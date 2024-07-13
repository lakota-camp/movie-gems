import MovieCard from "./MovieCardResult";
import { Grid } from "@mui/material";

const Results = ({ movies }) => {
  return (
    <Grid container spacing={2}>
      {!movies.length ? (
        <h1>No Movies found</h1>
      ) : (
        movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.imdbId}>
            <MovieCard movie={movie} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Results;
