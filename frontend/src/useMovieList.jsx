import { useQuery } from "@tanstack/react-query";
import fetchSearchMovies from "./v2/fetchSearchMovies";

export default function useBreedList(search) {
  const results = useQuery(["search", search], fetchSearchMovies);
  return [results?.data?.search ?? [], results.status];
}
