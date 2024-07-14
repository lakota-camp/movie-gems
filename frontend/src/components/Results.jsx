import MovieCard from "./MovieCard";
import { Grid } from "@mui/material";

const Results = ({ movies }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={movie._id}>
          <MovieCard movie={movie} isSearch={true} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Results;
