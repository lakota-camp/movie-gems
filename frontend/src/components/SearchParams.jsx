import { useState } from "react";
import { useMovies } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const SearchParams = () => {
  // const url = "http://localhost:3000";
  // const endpoint = "api/movies";

  const { searchMovies, loading, error } = useMovies();

  const pageNavigate = useNavigate();

  const TYPES = ["movie", "series", "episode"];
  const [type, setType] = useState("");

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(search);
    pageNavigate("/search/movies");
  };

  return (
    <>
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
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
    </>
  );
};

export default SearchParams;
