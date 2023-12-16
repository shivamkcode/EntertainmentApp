import { useState, useEffect } from "react";
import "./Css/Item.css";

import Oval from "../assets/icon-oval.svg";
import MoviesIcon from "../assets/icon-nav-movies.svg";
import TvSeriesIcon from "../assets/icon-nav-tv-series.svg";
import EmptyBookmark from "../assets/bookmark-empty.svg";
import FullBookmark from "../assets/bookmark-full.svg";
import PlayIcon from "../assets/icon-play.svg";

const Item = (props) => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setDevice(props.video.thumbnail.regular.small);
      } else if (window.innerWidth < 1024) {
        setDevice(props.video.thumbnail.regular.medium);
      } else {
        setDevice(props.video.thumbnail.regular.large);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${device})`,
      }}
      key={props.video.title}
    >
      <div className="play">
        <img src={PlayIcon} alt=">" />
        <h3>Play</h3>
      </div>
      <img
        className="Bookmark"
        src={props.video.isBookmarked ? FullBookmark : EmptyBookmark}
        alt="Bookmark Icon"
      />
      <div className="video-details">
        <div className="video-info">
          <p>{props.video.year}</p>
          <img src={Oval} alt="o" />
          <img
            className="video-icon"
            src={props.video.category === "Movie" ? MoviesIcon : TvSeriesIcon}
            alt="logo"
          />
          <p>{props.video.category}</p>
          <img src={Oval} alt="o" />
          <p>{props.video.rating}</p>
        </div>
        <h4>{props.video.title}</h4>
      </div>
    </div>
  );
};

export default Item;
