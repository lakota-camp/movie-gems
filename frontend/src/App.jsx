import "./App.css";
import useFetchData from "./hooks/FetchApi";

// Demo fetch API from Backend API
// FIXME: Store url in .env variable

function App() {
  const url = "http://localhost:3000/api/movies";

  const { data, loading, error } = useFetchData(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  return (
    <>
      <div>
        <h1>
          <strong>Movie Gems</strong>
        </h1>
        <div className="container">
          <ul>
            {data.map((data) => (
              <div key={data._id}>
                <li>
                  <strong>
                    Title: {data.title} | Year: {data.year} | Runtime:{" "}
                    {data.runtime} | Genre: {data.genre}
                  </strong>
                </li>
                <li>{data.description}</li>
                <li>
                  <img src={data.poster} alt={data.title} />
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
