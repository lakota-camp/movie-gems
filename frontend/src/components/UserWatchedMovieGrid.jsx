import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";

// Components
import MovieCard from "./MovieCard";
import ErrorMessage from "./ErrorMessage";
import { Container, Grid, Box } from "@mui/material";
import MovieGridSkeleton from "./MovieGridSkeleton";

const UserWatchedMovieGrid = () => {
  const { movies, loading, error, getAllWatched } = useMovies();

  useEffect(() => {
    getAllWatched();
  }, []);

  if (loading) return <MovieGridSkeleton />;
  if (error) return <ErrorMessage message="Error loading movies." />;

  return (
    <Container maxWidth="xxl">
      <Box sx={{ width: "100%", padding: 2 }}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
          justifyContent="center"
        >
          {movies.map((movie) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={movie._id || movie.imdbID}
            >
              <MovieCard movie={movie} watched={true} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default UserWatchedMovieGrid;
