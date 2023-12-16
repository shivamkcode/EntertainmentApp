import { Link } from "react-router-dom";

import AppIcon from "../assets/logo.svg";
import HomeIcon from "../assets/icon-nav-home.svg";
import BookmarkIcon from "../assets/icon-nav-bookmark.svg";
import Avatar from "../assets/image-avatar.png";
import MoviesIcon from "../assets/icon-nav-movies.svg";
import TvSeriesIcon from "../assets/icon-nav-tv-series.svg";


const NavBar = () => {
  return (
    <nav>
        <img src={AppIcon} alt="AppIcon" />
        <div>
          <Link to="/">
            <img src={HomeIcon} alt="Home" />
          </Link>
          <Link to="/movies">
            <img src={MoviesIcon} alt="Movies" />
          </Link>
          <Link to="/tvseries">
            <img src={TvSeriesIcon} alt="TvSeries" />
          </Link>
          <Link to="/bookmarked">
            <img src={BookmarkIcon} alt="Bookmark" />
          </Link>
        </div>
        <img src={Avatar} alt="Avatar" />
      </nav>
  )
}

export default NavBar