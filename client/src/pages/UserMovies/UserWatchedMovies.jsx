import { Container } from "@mui/material";
import UserWatchedMovieGrid from "../../components/movies/UserWatchedMovieGrid";
import Heading from "../../components/common/Heading";

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
