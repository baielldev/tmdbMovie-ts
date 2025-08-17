import { useState } from "react";
import { useGetPopularQuery } from "../../../../api/popular";
import Carousel from "../../../ui/carousel/Carousel";
import scss from "../HomePage.module.scss";

const Popular = () => {
  const [switchPopularShow, setSwitchPopularShow] = useState<"movie" | "tv">(
    "movie"
  );
  const { data: dataPopular } = useGetPopularQuery(switchPopularShow);
  return (
    <div className={scss.carouselItem}>
      <div className="container">
        <div className={scss.title}>
          <h1>Популярное</h1>
          <div className={scss.select}>
            <button
              className={switchPopularShow === "movie" ? scss.active : ""}
              onClick={() => setSwitchPopularShow("movie")}
            >
              Movie
            </button>
            <button
              className={switchPopularShow === "tv" ? scss.active : ""}
              onClick={() => setSwitchPopularShow("tv")}
            >
              TV Shows
            </button>
          </div>
        </div>
      </div>
      <Carousel mediaType={switchPopularShow} data={dataPopular} />
    </div>
  );
};

export default Popular;
