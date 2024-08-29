import { Container, Grid } from "@mui/material";
import MovieCard from "./MovieCard";
import MovieGrid from "./MovieGrid";

const Results = ({ movies }) => {
  return (
    <>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie._id}>
            <MovieCard movie={movie} isSearch={true} />
          </Grid>
        ))}
      </Grid>
      <Container maxWidth="xxl">
        <MovieGrid />
      </Container>
    </>
  );
};

export default Results;
