import scss from "../../../home/HomePage.module.scss";
import { useGetSimilarQuery } from "../../../../../api/similar";
import type { FC } from "react";
import CardCarousel from "../../../../ui/сardCarousel/CardCarousel";
import SkeletonPrewievCard from "../../../../ui/skeleton/skeletonPrewievCard/SkeletonPrewievCard";

interface IProps {
  id: number | string;
  type: "movie" | "tv";
}

const Similar: FC<IProps> = ({ id, type }) => {
  const { data: dataSimilar, isLoading } = useGetSimilarQuery(id, type);

  return (
    <div className={scss.carouselItem}>
      <div className="container">
        <div className={scss.title}>
          <h1 style={{ color: "#fff", fontSize: "36px" }}>Похожие</h1>
        </div>
        <div
          className={scss.list}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <SkeletonPrewievCard key={i} />
              ))
            : dataSimilar && (
                <CardCarousel data={dataSimilar} mediaType={type} />
              )}
        </div>
      </div>
    </div>
  );
};

export default Similar;
