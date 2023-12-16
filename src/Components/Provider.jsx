import Context from "./Context";
import { useState, useEffect } from "react";
import axios from "axios";

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [trending, setTrending] = useState([]);
  const [recommended, setRecommended] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get("../data/data.json");
    const data = response.data;

    const trendingAll = data.filter((video) => video.isTrending);
    const recommendedAll = data.sort(() => 0.5 - Math.random());
    setData(response.data);
    setTrending(trendingAll);
    setRecommended(recommendedAll);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        trending,
        recommended,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
