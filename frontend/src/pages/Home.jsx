import UserMovieGrid from "../components/UserMovieGrid";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container maxWidth="xxl">
        <UserMovieGrid />
      </Container>
    </>
  );
};

export default Home;
