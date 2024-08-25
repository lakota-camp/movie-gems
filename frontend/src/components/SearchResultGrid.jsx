import { useMovies } from "../context/MovieContext";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
// Components
import MovieCard from "./MovieCard";
import ErrorMessage from "./ErrorMessage";
import { Container, Grid, Box } from "@mui/material";
import NoMoviesFound from "./NoMoviesFound";
import MovieGridSkeleton from "./MovieGridSkeleton";

const SearchResultGrid = () => {
  const { searchResults, searchMovies, loading, error } = useMovies();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      searchMovies(query);
    }
  }, []);

  if (loading) return <MovieGridSkeleton />;
  if (error) return <ErrorMessage message="Error loading movies." />;
  if (searchResults.length === 0) return <NoMoviesFound />;

  return (
    <Container maxWidth="xxl">
      <Box sx={{ width: "100%", padding: 2 }}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
          justifyContent="center"
        >
          {searchResults.map((movie) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={movie._id || movie.imdbID}
            >
              <MovieCard movie={movie} isSearch={true} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SearchResultGrid;
