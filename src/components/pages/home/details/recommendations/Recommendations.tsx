import scss from "../../../home/HomePage.module.scss";
import type { FC } from "react";
import CardCarousel from "../../../../ui/сardCarousel/CardCarousel";
import SkeletonPrewievCard from "../../../../ui/skeleton/skeletonPrewievCard/SkeletonPrewievCard";
import { useGetRecommendationsQuery } from "../../../../../api/recommendations";

interface IProps {
  id: number | string;
  type: "movie" | "tv";
}

const Recommendations: FC<IProps> = ({ id, type }) => {
  const { data: dataRecommendations, isLoading } = useGetRecommendationsQuery(
    id,
    type
  );

  return (
    <div className={scss.carouselItem}>
      <div className="container">
        <div className={scss.title}>
          <h1 style={{ color: "#fff", fontSize: "36px" }}>
            Рекомендуем для вас
          </h1>
        </div>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className={scss.list}
        >
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <SkeletonPrewievCard key={i} />
              ))
            : dataRecommendations && (
                <CardCarousel data={dataRecommendations} mediaType={type} />
              )}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
