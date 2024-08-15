import SearchResultGrid from "../components/SearchResultGrid";
import { useMovies } from "../context/MovieContext";
import { Container } from "@mui/material";

const MovieSearch = () => {
  const { searchResults } = useMovies();
  return (
    <>
      <Container maxWidth="xxl">
        <SearchResultGrid movies={searchResults} />
      </Container>
    </>
  );
};

export default MovieSearch;
