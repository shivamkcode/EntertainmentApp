import { useContext, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Item from "./Components/Item";
import Context from "./Components/Context";

const TvSeries = () => {
  const [searched, setSearched] = useState([]);
  const { data, recommended } = useContext(Context);
  console.log(recommended)

  return (
    <div>
      <div>
        <NavBar></NavBar>
        <main>
          <SearchBar data={data} setSearched={setSearched}></SearchBar>
          {searched?.filter((serie) => serie.category === "TV Series")
            .map((video, index) => (
              <Item video={video} index={index}></Item>
            ))}
          <section className="recommended">
            <h3>Tv Series</h3>
            <div>
              {recommended?.filter((serie) => serie.category === "TV Series")
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

export default TvSeries;
