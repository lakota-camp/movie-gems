import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MovieDetails = () => {
  const { id } = useParams();
  const { getOneMovie, movieDetails, loading, error } = useMovies();

  useEffect(() => {
    getOneMovie(id);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movieDetails) {
    return <h2>No Movie Found</h2>;
  }
  // FIXME: Add function to get movie details by querying OMDB API using imdbId as query parameter.
  return (
    <div>
      <Container maxWidth="sm">
        <Box sx={{ padding: "5rem", margin: "1rem" }}>
          <Card>
            <CardMedia
              sx={{ height: 500 }}
              image={movieDetails.Poster}
              title={movieDetails.Title}
              id={movieDetails._id}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movieDetails.Title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Id: {id}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                imdbID: {movieDetails.imdbID}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Movie details will go here. Fetch from OMDB api using IMDB id to
                get movie details
              </Typography>
            </CardContent>
            {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
          </Card>
        </Box>
      </Container>
    </div>
  );
};

export default MovieDetails;
