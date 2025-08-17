import type { FC } from "react";
import { useGetCreditsQuery } from "../../../../../api/actors";
import scss from "./Actors.module.scss";
import { Link } from "react-router-dom";
import notPersonImg from "../../../../../assets/notPersonImg.png";

interface IProps {
  id: number | string;
  type: "movie" | "tv";
}

const Actors: FC<IProps> = ({ id, type }) => {
  const { data: dataCast } = useGetCreditsQuery(id, type);

  return (
    <div className={scss.actors}>
      <div className="container">
        <div className={scss.castTitle}>
          <h1>Актеры</h1>
        </div>
        <div className={scss.content}>
          {dataCast?.cast.map((item: any) => (
            <div key={item.id} className={scss.castBox}>
              <Link to={`/person/${item.id}`}>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                      : notPersonImg
                  }
                  alt=""
                />
              </Link>
              <h1>{item.original_name}</h1>
              <p>{item.known_for_department}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actors;
