import Results from "../components/Results";
import { useMovies } from "../context/MovieContext";
import { Container } from "@mui/material";

const MovieSearch = () => {
  const { searchResults } = useMovies();
  return (
    <>
      <Container maxWidth="xxl">
        <Results movies={searchResults} />
      </Container>
    </>
  );
};

export default MovieSearch;
