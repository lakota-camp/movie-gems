import { Container } from "@mui/material";
import { useMovies } from "../context/MovieContext";
import { useEffect } from "react";
import UserMovieGrid from "../components/UserMovieGrid";
const UserMovies = () => {
  const { getAllMovies, resetSearch } = useMovies();

  useEffect(() => {
    resetSearch();
    getAllMovies();
  }, []);

  return (
    <>
      <Container maxWidth="xxl">
        <UserMovieGrid />
      </Container>
    </>
  );
};

export default UserMovies;
