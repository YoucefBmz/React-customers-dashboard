import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [response, setResonse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setResonse(response);
      } catch (error) {
        setError(error.data);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);
  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setResonse(response);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return { response, loading, error, reFetch };
};

export default useFetch;
