import { useContext, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Item from "./Components/Item";
import Context from "./Components/Context";

const Bookmarked = () => {
    const { data, recommended } = useContext(Context);
  return (
    <div>
      <div>
        <NavBar></NavBar>
          <section className="recommended">
            <h3>Bookmarked</h3>
            <div>
              {recommended?.filter((serie) => serie.isBookmarked)
                .map((video, index) => (
                  <Item video={video} index={index}></Item>
                ))}
            </div>
          </section>
      </div>
    </div>
  )
}

export default Bookmarked
