import type { FC } from "react";
import scss from "./MoviePreviewCard.module.scss";
import { Link } from "react-router-dom";
import notImg from "../../../assets/notMovieImg.png";

interface IProps {
  item: IMovieItem;
  onClose?: () => void;
  mediaType?: "movie" | "tv";
}

const MoviePreviewCard: FC<IProps> = ({ item, onClose, mediaType }) => {
  const rating = item.vote_average;
  const safeRating = typeof rating === "number" ? rating.toFixed(1) : "N/A";
  const titleMovie = item.title || item.name;
  const dateMovie = item.release_date || item.first_air_date;

  const handleClick = () => {
    if (onClose) onClose();
  };

  return (
    <div className={scss.card}>
      <div className={scss.card_list}>
        <Link
          to={`/details/${item.media_type || mediaType || "movie"}/${item.id}`}
          onClick={handleClick}
        >
          <div className={scss.card_box}>
            <img
              src={
                item.poster_path
                  ? `https://media.themoviedb.org/t/p/w1920${item.poster_path}`
                  : notImg
              }
              alt={`${titleMovie} poster`}
            />
            <div className={scss.card_info}>
              <div className={scss.card_title}>
                <span>{safeRating}</span>
                <h1 className={scss.movieTitle}>{titleMovie}</h1>
              </div>
              <p>{dateMovie}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MoviePreviewCard;
