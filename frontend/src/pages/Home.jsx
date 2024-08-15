import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { BsGem } from "react-icons/bs";

const Home = () => {
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
            height: "100%", // Ensure Box takes the full height of the container
            textAlign: "center",
          }}
        >
          <Typography variant="h2">Welcome to MovieGems</Typography>
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
              <BsGem />{" "}
            </Typography>
          </Box>
          <Typography variant="h5">Your personal movie assistant</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
