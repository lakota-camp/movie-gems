import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import SearchMoviesForm from "../movies/SearchMovies";

const NoMovies = ({ message, header }) => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
      <Box sx={{ borderRadius: 2, p: 3 }}>
        <Card sx={{ minWidth: 275, border: "2px solid grey", padding: "1rem" }}>
          <CardContent>
            <Typography
              color="text.primary"
              variant="h4"
              align="center"
              gutterBottom
            >
              {header}
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              {message}
            </Typography>
            <SearchMoviesForm />
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default NoMovies;
