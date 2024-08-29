import { Container } from "@mui/material";
import UserMovieGrid from "../../components/movies/UserMovieGrid";
import Heading from "../../components/common/Heading";

const UserMovies = () => {
  return (
    <>
      <Container maxWidth="xxl">
        <Heading title="Movie Watch List" />
        <UserMovieGrid />
      </Container>
    </>
  );
};

export default UserMovies;
