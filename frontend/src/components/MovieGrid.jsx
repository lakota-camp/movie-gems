import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import MovieCard from "./MovieCard";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const MovieGrid = () => {
  const { data: movies, loading, error, getAllMovies } = useMovies();
  useEffect(() => {
    getAllMovies();
  }, []);

  const movieList = movies || [];
  // console.log(movieList);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
      >
        {movieList.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie._id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieGrid;
