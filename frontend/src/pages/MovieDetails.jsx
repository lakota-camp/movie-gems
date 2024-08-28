import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  Card,
  CardContent,
} from "@mui/material";
import SkeletonMovieDetails from "../components/SkeletonMovieDetails";
import NoMoviesFound from "../components/NoMoviesFound";
import ErrorMessage from "../components/ErrorMessage";

// !FIXME Add button to add movie to watch list from movie details section
const MovieDetails = () => {
  const { id } = useParams();
  const { getMovieDetails, movieDetails, error, loading } = useMovies();

  useEffect(() => {
    console.log("Movie ID:", id);
    getMovieDetails(id);
  }, [id]);

  if (loading) {
    console.log("Loading...");
    return <SkeletonMovieDetails />;
  }

  if (error) {
    console.log("Error:", error);
    return (
      <NoMoviesFound
        isError={true}
        header="Error"
        message="It looks like we came across an error..."
      />
    );
  }

  if (!movieDetails) {
    console.log("No Movie Found");
    return (
      <NoMoviesFound
        header="No Movies Details Found"
        message="It looks like we couldn't find any movies matching your
                search. Try searching again or explore your movie collection."
      />
    );
  }

  return (
    <>
      {/* Text Box */}
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "4rem",
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Card sx={{ minWidth: 275, border: "2px solid grey", padding: "1rem" }}>
          <CardContent>
            <Typography
              color="text.secondary"
              variant="h5"
              align="left"
              gutterBottom
            >
              {movieDetails.Title}
            </Typography>

            <Typography variant="body2">
              <List>
                <ListItem>Title: {movieDetails.Title}</ListItem>
                <ListItem>Plot: {movieDetails.Plot}</ListItem>
                <ListItem>Director: {movieDetails.Director}</ListItem>
                <ListItem>Rated: {movieDetails.Rated}</ListItem>
                <ListItem>Released: {movieDetails.Year}</ListItem>
                <ListItem>Actors: {movieDetails.Actors}</ListItem>
                <ListItem>Box Office: {movieDetails.BoxOffice}</ListItem>
                <ListItem>Awards: {movieDetails.Awards}</ListItem>
                <ListItem>imdbRating: {movieDetails.imdbRating} / 10</ListItem>
              </List>
            </Typography>

            <Typography
              color="text.secondary"
              variant="h5"
              align="left"
              gutterBottom
              sx={{ marginTop: 2 }}
            >
              Ratings
            </Typography>

            <Typography variant="body2">
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

        {/* Image box */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
            marginTop: 2,
            // border: "2px solid grey",
            padding: "2rem",
            margin: "2rem",
            borderRadius: 2,
          }}
        >
          <img
            src={movieDetails.Poster}
            alt={movieDetails.Title}
            style={{
              maxHeight: "500px",
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default MovieDetails;
