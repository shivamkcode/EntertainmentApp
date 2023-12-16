import { useContext, useState } from "react";
// import "./App.css";
import NavBar from "./Components/NavBar";
import Item from "./Components/Item";
import Context from "./Components/Context";

const Bookmarked = () => {
    const { data, recommended } = useContext(Context);
  return (
    <div>
        <NavBar></NavBar>
      <main>
          <section className="recommended">
            <h3>Bookmarked Movies</h3>
            <div className="recommended-list">
              {recommended?.filter((movie) => movie.category === "Movie").filter((movie) => movie.isBookmarked)
                .map((video, index) => (
                  <Item video={video} key={index}></Item>
                ))}
            </div>
          </section>
          <section className="recommended">
            <h3>Bookmarked TV Series</h3>
            <div className="recommended-list">
              {recommended?.filter((serie) => serie.category === "TV Series").filter((serie) => serie.isBookmarked)
                .map((video, index) => (
                  <Item video={video} key={index}></Item>
                ))}
            </div>
          </section>
      </main>
    </div>
  )
}

export default Bookmarked
