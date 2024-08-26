import { Container } from "@mui/material";
import UserWatchedMovieGrid from "../components/UserWatchedMovieGrid";
import Heading from "../components/Heading";

const UserWatchedMovies = () => {
  return (
    <>
      <Container maxWidth="xxl">
        <Heading title="Watched Movies" />
        <UserWatchedMovieGrid />
      </Container>
    </>
  );
};

export default UserWatchedMovies;
