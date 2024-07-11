import "./App.css";
import MovieList from "./components/MovieList";
import { MovieProvider } from "./context/MovieContext";

// Demo fetch API from Backend API
// FIXME: Store url in .env variable

function App() {
  return (
    <MovieProvider>
      <div>
        <h1>
          <strong>Movie Gems</strong>
        </h1>
        <div className="container">
          <MovieList />
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
