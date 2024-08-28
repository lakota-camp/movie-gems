import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Error = ({ header, message, isError = false }) => {
  return (
    <>
      <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
        <Box sx={{ borderRadius: 2, p: 3 }}>
          <Card
            sx={{
              minWidth: 275,
              border: "2px solid grey",
              padding: "1rem",
              background: isError ? "rgba(184, 13, 12, 0.4)" : "inherit",
            }}
          >
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
              <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/user/movies"
                sx={{ mt: 2, p: 2 }}
              >
                Go to My Movies
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default Error;
