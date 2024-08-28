import { useEffect } from "react";
import { Container, Grid, Box } from "@mui/material";
import { useMovies } from "../../context/MovieContext";
import MovieCard from "./MovieCard";
import ErrorMessage from "../common/ErrorMessage";
import MovieGridSkeleton from "./MovieGridSkeleton";
import NoMovies from "../common/NoMovies";

const UserMovieGrid = () => {
  const { movies, loading, error, getAllMovies } = useMovies();

  useEffect(() => {
    getAllMovies();
  }, []);

  if (loading) return <MovieGridSkeleton />;

  if (error) return <ErrorMessage message="Error loading movies." />;

  if (movies.length === 0)
    return (
      <NoMovies
        header="No movies in watch list!"
        message="Search for movies to add below!"
      />
    );

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
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default UserMovieGrid;
