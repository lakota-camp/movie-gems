import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

// Cache time in milliseconds
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Once fetch, do not re-fetch
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
);
