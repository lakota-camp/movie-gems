import MovieGrid from "../components/MovieGrid";
import { Container } from "@mui/material";
import { useMovies } from "../context/MovieContext";
import { useEffect } from "react";
const UserMovies = () => {
  const { resetSearch } = useMovies();

  useEffect(() => {
    resetSearch();
  }, []);

  return (
    <>
      <Container maxWidth="xxl">
        <MovieGrid isSearch={false} />
      </Container>
    </>
  );
};

export default UserMovies;
