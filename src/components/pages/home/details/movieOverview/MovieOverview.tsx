import type { FC } from "react";
import scss from "./MovieOverview.module.scss";
import { useGetDetailsQuery } from "../../../../../api/details";

interface IProps {
  id: number | string;
  type: "movie" | "tv";
}

const MovieOverview: FC<IProps> = ({ id, type }) => {
  const { data: dataDetails } = useGetDetailsQuery(id, type);
  return (
    <div className={scss.movieOverview}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.descr}>
            <h1>Описание</h1>
            <p>{dataDetails?.overview}</p>
          </div>
          <div className={scss.country}>
            <h1>Страны</h1>
            <p>
              {dataDetails?.production_countries
                .map((country: any) => country.name)
                .join(", ")}
            </p>
          </div>
          <div className={scss.genres}>
            <h1>Жанры</h1>
            <p>
              {
                dataDetails?.genres.map(
                  (genre: any) =>
                    genre.name[0].toUpperCase() + genre.name.slice(1)
                )[0]
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieOverview;
