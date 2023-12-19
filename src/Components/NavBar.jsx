import { Link, useLocation } from "react-router-dom";

import AppIcon from "../assets/logo.svg";
import HomeIcon from "../assets/icon-nav-home.svg";
import BookmarkIcon from "../assets/icon-nav-bookmark.svg";
import Avatar from "../assets/image-avatar.png";
import MoviesIcon from "../assets/icon-nav-movies.svg";
import TvSeriesIcon from "../assets/icon-nav-tv-series.svg";

import './Css/NavBar.css'

const NavBar = () => {
  const location = useLocation()

  return (
    <nav className="NavBar">
      <div>
      <Link to="/">
        <img src={AppIcon} alt="AppIcon" />
      </Link>
        <Link to="/">
          <img className={`NavHome ${ location.pathname === '/' ? 'selected' : '' }`} src={HomeIcon} alt="Home" />
        </Link>
        <Link to="/movies">
          <img className={ location.pathname === '/movies' ? 'selected' : '' } src={MoviesIcon} alt="Movies" />
        </Link>
        <Link to="/tvseries">
          <img className={ location.pathname === '/tvseries' ? 'selected' : '' } src={TvSeriesIcon} alt="TvSeries" />
        </Link>
        <Link  to="/bookmarked">
          <img className={ location.pathname === '/bookmarked' ? 'selected' : '' } src={BookmarkIcon} alt="Bookmark" />
        </Link>
      </div>
      <img src={Avatar} alt="Avatar" />
    </nav>
  );
};

export default NavBar;
