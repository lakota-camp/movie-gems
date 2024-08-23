import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const NoMoviesFound = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
        <Box sx={{ borderRadius: 2, p: 3 }}>
          <Card
            sx={{ minWidth: 275, border: "2px solid grey", padding: "1rem" }}
          >
            <CardContent>
              <Typography
                color="text.primary"
                variant="h4"
                align="center"
                gutterBottom
              >
                No Movies Found
              </Typography>

              <Typography variant="body1" color="textSecondary" paragraph>
                It looks like we couldn&apos;t find any movies matching your
                search. Try searching again or explore your movie collection.
              </Typography>

              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/user/movies"
                sx={{ mt: 2, p: 2 }}
              >
                Go to My Movies
              </Button>

              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default NoMoviesFound;
