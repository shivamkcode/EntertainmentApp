import MoviesIcon from "../assets/icon-nav-movies.svg";
import TvSeriesIcon from "../assets/icon-nav-tv-series.svg";
import EmptyBookmark from "../assets/bookmark-empty.png";
import FullBookmark from "../assets/bookmark-full.png";

const Item = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.video.thumbnail.regular.large})`,
      }}
      key={props.index}
    >
      <img
        src={props.video.isBookmarked ? FullBookmark : EmptyBookmark}
        alt="Bookmark Icon"
      />
      <div>
        <p>{props.video.year}</p>
        <img
          src={props.video.category === "Movie" ? MoviesIcon : TvSeriesIcon}
          alt="logo"
        />
        <p>{props.video.category}</p>
        <p>{props.video.rating}</p>
        <h4>{props.video.title}</h4>
      </div>
    </div>
  );
};

export default Item;
