import useAxios from "../hooks/useAxios";
import axios from "../api/base";

const Jokes = () => {
  const [response, loading, error] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US"
      }
    }
  });

  return <div></div>;
};
