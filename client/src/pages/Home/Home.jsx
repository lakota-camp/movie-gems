import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { BsGem } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateHome = (e) => {
    e.preventDefault();
    navigate("/user/movies");
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ height: "80vh" }}>
        <Box
          component="section"
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
          }}
        >
          <Typography variant="h2">
            <strong>Welcome to MovieGems</strong>
          </Typography>
          <Box
            component="section"
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h3">
              <BsGem />
            </Typography>
            <Typography variant="h5">Your personal movie assistant</Typography>
          </Box>

          <Button
            variant="outlined"
            to="/user/movies"
            onClick={handleNavigateHome}
          >
            Go to my movies
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
