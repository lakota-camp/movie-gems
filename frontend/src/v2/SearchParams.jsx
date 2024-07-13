import { useState } from "react";
import { useMovies } from "../context/MovieContext";

import Results from "./Results";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const SearchParams = () => {
  // const url = "http://localhost:3000";
  // const endpoint = "api/movies";

  const { searchResults, searchMovies } = useMovies();

  const TYPES = ["movie", "series", "episode"];
  const [type, setType] = useState("");

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(search);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="search">
          Search Movies
          <input
            id="search"
            value={search}
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <label htmlFor="type">
          Type
          <select
            id="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <option />
            {TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>

        <button type="submit">Search</button>
      </form>
      <Results movies={searchResults} />
    </div>
  );
};

export default SearchParams;
