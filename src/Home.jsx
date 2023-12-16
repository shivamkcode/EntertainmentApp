import { useContext, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Item from "./Components/Item";
import Context from "./Components/Context";

const Home = () => {
  const [searched, setSearched] = useState([]);
  const { data, trending, recommended } = useContext(Context);

  return (
    <div>
      <NavBar></NavBar>
      <main>
        <SearchBar data={data} setSearched={setSearched}></SearchBar>
        {searched?.map((video, index) => (
          <Item video={video} index={index}></Item>
        ))}
        <section className="trending-list">
          <h3>Trending</h3>
          <div>
            {trending.map((video, index) => (
              <Item video={video} index={index}></Item>
            ))}
          </div>
        </section>
        <section className="recommended">
          <h3>Recommended for you</h3>
          <div>
            {recommended.map((video,index) => (
              <Item video={video} index={index}></Item>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
