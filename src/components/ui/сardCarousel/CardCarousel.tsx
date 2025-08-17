import scss from "./CardCarousel.module.scss";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useRef, useState, useEffect, type FC } from "react";
import MoviePreviewCard from "../moviePreviewCard/MoviePreviewCard";

interface IProps {
  data?: IMoviesResponse;
  mediaType: "movie" | "tv";
}

const CardCarousel: FC<IProps> = ({ data, mediaType }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    const firstCard = container.querySelector("div > div") as HTMLElement;
    if (firstCard) {
      setCardWidth(firstCard.offsetWidth);
    }

    const updateArrows = () => {
      if (!container) return;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    };
    updateArrows();
    container.addEventListener("scroll", updateArrows);

    return () => container.removeEventListener("scroll", updateArrows);
  }, [data]);

  const scroll = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container || !cardWidth) return;

    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={scss.carousel}>
      <div className={scss.carouselItem}>
        {canScrollLeft && (
          <MdKeyboardDoubleArrowLeft
            onClick={() => scroll("left")}
            className={`${scss.arrow} ${scss.iconLeft}`}
          />
        )}

        {canScrollRight && (
          <MdKeyboardDoubleArrowRight
            onClick={() => scroll("right")}
            className={`${scss.arrow} ${scss.iconRight}`}
          />
        )}

        <div ref={carouselRef} className={scss.list}>
          {data?.results.map((item) => (
            <div key={item.id} className={scss.cardWrapper}>
              <MoviePreviewCard item={item} mediaType={mediaType} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
