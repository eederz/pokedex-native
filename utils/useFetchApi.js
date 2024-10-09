import { useState, useEffect } from "react";

const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch(url);
      const parsedResponse = await response.json();
      setData(parsedResponse);
    } catch (error) {
      console.error("FailedFetchingData", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetchApi;
