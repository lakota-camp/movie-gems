import MovieGrid from "../components/MovieGrid";
import { useMovies } from "../context/MovieContext";
import { Container } from "@mui/material";

const MovieSearch = () => {
  const { searchResults } = useMovies();
  return (
    <>
      <Container maxWidth="xxl">
        <MovieGrid movies={searchResults} isSearch={true} />
      </Container>
    </>
  );
};

export default MovieSearch;
