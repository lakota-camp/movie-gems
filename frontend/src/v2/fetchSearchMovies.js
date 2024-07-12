const fetchSearchMovies = async ({ queryKey }) => {
  const url = "http://localhost:3000";
  const endpoint = "api/movies";
  const search = queryKey[1];
  const response = await fetch(`${url}/${endpoint}/search?title=${search}`);

  if (!response.ok) {
    throw new Error(`search/${search} fetch not ok`);
  }

  return response.json();
};

export default fetchSearchMovies;
