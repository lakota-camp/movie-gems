const fetchUserMovies = async () => {
  const url = "http://localhost:3000";
  const endpoint = "api/movies";

  const response = await fetch(`${url}/${endpoint}`);

  if (!response.ok) {
    throw new Error("/movies fetch not ok");
  }
};
export default fetchUserMovies;
