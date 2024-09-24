import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMovies } from "../../context/MovieContext";
import {
  Container,
  Typography,
  List,
  ListItem,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import SkeletonMovieDetails from "../../components/movies/SkeletonMovieDetails";
import Error from "../../components/common/Error";

// !FIXME Add button to add movie to watch list from movie details section
const MovieDetails = () => {
  const { id } = useParams();
  const { getMovieDetails, movieDetails, error, loading } = useMovies();

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  if (loading) {
    return <SkeletonMovieDetails />;
  }

  if (error) {
    return (
      <Error
        isError={true}
        header="Error"
        message="It looks like we came across an error..."
      />
    );
  }

  if (!movieDetails) {
    return (
      <Error
        header="No Movies Details Found"
        message="It looks like we couldn't find any movies matching your
                search. Try searching again or explore your movie collection."
      />
    );
  }

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Grid container spacing={3}>
        {/* Movie Details */}
        <Grid item xs={12} md={7}>
          <Card sx={{ height: "100%", border: "2px solid grey", p: 2 }}>
            <CardContent>
              <Typography color="text.secondary" variant="h5" gutterBottom>
                {movieDetails.Title}
              </Typography>

              <Typography variant="body2" component="div">
                <List>
                  <ListItem>Title: {movieDetails.Title}</ListItem>
                  <ListItem>Plot: {movieDetails.Plot}</ListItem>
                  <ListItem>Director: {movieDetails.Director}</ListItem>
                  <ListItem>Rated: {movieDetails.Rated}</ListItem>
                  <ListItem>Released: {movieDetails.Year}</ListItem>
                  <ListItem>Actors: {movieDetails.Actors}</ListItem>
                  <ListItem>Box Office: {movieDetails.BoxOffice}</ListItem>
                  <ListItem>Awards: {movieDetails.Awards}</ListItem>
                  <ListItem>
                    imdbRating: {movieDetails.imdbRating} / 10
                  </ListItem>
                </List>
              </Typography>

              <Typography
                color="text.secondary"
                variant="h5"
                gutterBottom
                sx={{ mt: 2 }}
              >
                Ratings
              </Typography>

              <Typography variant="body2" component="div">
                <List>
                  {movieDetails.Ratings.map((rating, index) => (
                    <ListItem key={index}>
                      {rating.Source}: {rating.Value}
                    </ListItem>
                  ))}
                </List>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Movie Poster */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <img
              src={
                movieDetails.Poster !== "N/A"
                  ? movieDetails.Poster
                  : "https://placehold.co/400x600?text=No\nPoster"
              }
              alt={movieDetails.Title}
              style={{
                maxWidth: "100%",
                maxHeight: "500px",
                objectFit: "contain",
                borderRadius: 8,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetails;
