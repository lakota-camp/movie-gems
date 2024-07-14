import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import MovieCard from "./MovieCard";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";
import Container from "@mui/material/Container";

const MovieGrid = () => {
  const { movies, searchResults, loading, error, getAllMovies, isSearch } =
    useMovies();

  useEffect(() => {
    if (!isSearch && movies.length === 0) {
      getAllMovies();
    }
  }, [isSearch, movies.length, getAllMovies]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  let movieList = isSearch ? searchResults : movies;

  // Ensure movieList is always an array
  if (!Array.isArray(movieList)) {
    movieList = Object.values(movieList);
  }

  console.log(typeof movieList);
  return (
    <Container maxWidth="xxl">
      <Box sx={{ width: "100%", padding: 2 }}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
          justifyContent="center"
        >
          {/* FIXME: Error with mapping over movies: TypeError: movieList.map is not a function */}
          {movieList.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie._id}>
              <MovieCard movie={movie} isSearch={isSearch} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MovieGrid;
