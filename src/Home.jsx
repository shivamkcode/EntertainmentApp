import { useContext, useState } from "react";
// import "./App.css";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Item from "./Components/Item";
import Context from "./Components/Context";

const Home = () => {
  const [searched, setSearched] = useState([]);
  const { data, trending, recommended } = useContext(Context);

  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        <SearchBar data={data} setSearched={setSearched}></SearchBar>
        {searched.length !== 0 && (
          <>
          <h3>Found {searched.length} results</h3>
          <div className="recommended-list">
            {searched.map((video, index) => (
              <Item video={video} key={index}></Item>
            ))}
          </div> 
          </>
        )}
        {searched.length === 0 && (
          <>
            <section className="trending">
              <h3>Trending</h3>
              <div className="trending-list">
                {trending.map((video, index) => (
                  <Item video={video} key={index}></Item>
                ))}
              </div>
            </section>
            <section className="recommended">
              <h3>Recommended for you</h3>
              <div className="recommended-list">
                {recommended.map((video, index) => (
                  <Item video={video} key={index}></Item>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
