import { useState } from "react";
import { useGetTopRated } from "../../../../api/topRated";
import CardCarousel from "../../../ui/сardCarousel/CardCarousel";
import scss from "../HomePage.module.scss";
import SkeletonPreviewCard from "../../../ui/skeleton/skeletonPrewievCard/SkeletonPrewievCard";

const TopRated = () => {
  const [switchShow, setSwitchShow] = useState<"movie" | "tv">("movie");
  const { data: dataTopRated, isLoading } = useGetTopRated(switchShow);

  return (
    <div className={scss.carouselItem}>
      <div className="container">
        <div className={scss.title}>
          <h1>Топ рейтинг</h1>
          <div className={scss.select}>
            <button
              className={switchShow === "movie" ? scss.active : ""}
              onClick={() => setSwitchShow("movie")}
            >
              Movie
            </button>
            <button
              className={switchShow === "tv" ? scss.active : ""}
              onClick={() => setSwitchShow("tv")}
            >
              TV Shows
            </button>
          </div>
        </div>
        <div className={scss.list}>
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <SkeletonPreviewCard key={i} />
              ))
            : dataTopRated && (
                <CardCarousel data={dataTopRated} mediaType={switchShow} />
              )}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
