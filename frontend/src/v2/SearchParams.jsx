import { useState } from "react";
import MovieCardResult from "./MovieCardResult";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

const SearchParams = () => {
  const url = "http://localhost:3000";
  const endpoint = "api/movies";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const searchMovie = async () => {
    try {
      const response = await fetch(`${url}/${endpoint}/search?title=${search}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched Movies:", data);
      setMovies(Array.isArray(data) ? data : []);
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies: ", error);
      setMovies([]);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchMovie();
          setSearch("");
        }}
      >
        <label htmlFor="search">
          Search Movies
          <input
            id="search"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <Container maxWidth="xxl">
        <Box sx={{ width: "100%", padding: 2 }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1 }}
            justifyContent="center"
          >
            {movies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie._id}>
                <MovieCardResult movie={movie} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default SearchParams;
