import { useState } from "react";
import { useMovies } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// ADD snackbar to notify user input can't be blank

const SearchMoviesForm = () => {
  const { searchMovies, loading, error } = useMovies();

  const pageNavigate = useNavigate();

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) {
      return;
    }

    searchMovies(search);
    pageNavigate("/search/movies");
    setSearch("");
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
      </form>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
    </>
  );
};

export default SearchMoviesForm;
