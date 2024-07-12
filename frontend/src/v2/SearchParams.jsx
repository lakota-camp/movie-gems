import { useState } from "react";
import Results from "./Results";
import MovieCardResult from "./MovieCardResult";

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
      <MovieCardResult movie={movies} />
    </div>
  );
};

export default SearchParams;
