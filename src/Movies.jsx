import { useContext, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Item from "./Components/Item";
import Context from "./Components/Context";

const Movies = () => {
  const [searched, setSearched] = useState([]);
  const { data, recommended } = useContext(Context);

  return (
    <div>
      <div>
        <NavBar></NavBar>
        <main>
          <SearchBar data={data} setSearched={setSearched}></SearchBar>
          {searched
            ?.filter((movie) => movie.category === "Movie")
            .map((video, index) => (
              <Item video={video} index={index}></Item>
            ))}
          <section className="recommended">
            <h3>Movies</h3>
            <div>
              {recommended
                .filter((movie) => movie.category === "Movie")
                .map((video, index) => (
                  <Item video={video} index={index}></Item>
                ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Movies;
