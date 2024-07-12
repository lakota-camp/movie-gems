import { useQuery } from "@tanstack/react-query";
import useFetchData from "../hooks/FetchApi";
import LoadingSpinner from "./LoadingSpinner";
import ErrorMessage from "./ErrorMessage";

const MovieList = () => {
  const { data, loading, error } = useFetchData();

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;

  return <></>;
};

export default MovieList;
