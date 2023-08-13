import { useEffect, useState } from "react";

const useAxios = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetch = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal
        });
        setResponse(res.data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetch();

    return () => {
      controller.abort();
    };
  }, []);

  return [response, loading, error];
};

export default useAxios;
