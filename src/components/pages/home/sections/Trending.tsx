import { useState } from "react";
import { useGetTrendingQuery } from "../../../../api/trending";
import CardCarousel from "../../../ui/сardCarousel/CardCarousel";
import scss from "../HomePage.module.scss";
import SkeletonPrewievCard from "../../../ui/skeleton/skeletonPrewievCard/SkeletonPrewievCard";

const Trending = () => {
  const [switchDate, setSwitchDate] = useState<"day" | "week">("day");
  const { data: dataTrending, isLoading } = useGetTrendingQuery(switchDate);

  return (
    <div className={scss.carouselItem}>
      <div className="container">
        <div className={scss.title}>
          <h1>В тренде</h1>
          <div className={scss.select}>
            <button
              className={switchDate === "day" ? scss.active : ""}
              onClick={() => setSwitchDate("day")}
            >
              Day
            </button>
            <button
              className={switchDate === "week" ? scss.active : ""}
              onClick={() => setSwitchDate("week")}
            >
              Week
            </button>
          </div>
        </div>
        <div className={scss.list}>
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <SkeletonPrewievCard key={i} />
              ))
            : dataTrending && (
                <CardCarousel data={dataTrending} mediaType="movie" />
              )}
        </div>
      </div>
    </div>
  );
};

export default Trending;
