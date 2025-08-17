import { Button } from "antd";
import scss from "./MoviesCard.module.scss";
import type { FC } from "react";
import { Link } from "react-router-dom";
import notImg from "../../../assets/notMovieImg.png";
interface IProps {
  item: IMovieItem;
  mediaType: "movie" | "tv";
}

const MoviesCard: FC<IProps> = ({ item, mediaType }) => {
  const rating = item.vote_average;
  const safeRating = typeof rating === "number" ? rating.toFixed(1) : "N/A";
  const titleMovie = item.title || item.name;
  const dateMovie = item.release_date || item.first_air_date;
  const descrMovie = item.overview;

  console.log(item);

  return (
    <div className={scss.card}>
      <div className={scss.card_list}>
        <Link
          to={`/details/${item.media_type || mediaType || "movie"}/${item.id}`}
        >
          <div className={scss.card_box}>
            <img
              src={
                item.poster_path
                  ? `https://image.tmdb.org/t/p/w1920${item.backdrop_path}`
                  : notImg
              }
              alt={`${item.title} poster`}
            />
            <div className={scss.dataMovies}>
              <h1>{titleMovie}</h1>
              <span>{`Genres`}</span>
              <p>{descrMovie}</p>
              <div className={scss.infoMovies}>
                <span className={scss.rating}>{safeRating}</span>
                <span className={scss.date}>{dateMovie}</span>
                <span className={scss.runtime}>{`1ч 55 мин`}</span>
              </div>
              <div className={scss.buttons}>
                <Button className={scss.button} type="default">
                  Перейти к фильму
                </Button>
                <Button className={scss.trailerButton} type="default">
                  Трейлер
                </Button>
              </div>
            </div>
            ;
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MoviesCard;
