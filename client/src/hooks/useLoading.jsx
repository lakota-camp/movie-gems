import { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const handleError = (err) => setError(err);

  return { loading, error, startLoading, stopLoading, handleError };
};

export default useLoading;
