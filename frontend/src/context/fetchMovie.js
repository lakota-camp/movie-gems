import axios from "axios";
const fetchMovie = async ({ queryKey }) => {
  const id = queryKey[1];
  const url = "http://localhost:3000";
  const endpoint = "api/movies";
  console.log(`Fetching movie with ID: ${id}`);

  const response = await axios.get(`${url}/${endpoint}/${id}`);

  if (!response.ok) {
    throw new Error(`${url}/${endpoint}/${id} fetch not ok`);
  }

  return response.data;
};

export default fetchMovie;
