import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = (url) => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);
        // console.log(res.data.results)
        setNewsData(res.data.results);
      } catch (err) {
        setError(err?.message || "Error, Could not fetch the data!");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return {
    newsData,
    loading,
    error,
  };
};

export default FetchData;
