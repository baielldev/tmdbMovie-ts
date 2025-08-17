import scss from "./Carousel.module.scss";
import { useRef, useState, useEffect, type FC } from "react";
import MoviesCard from "../moviesCard/MoviesCard";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

interface IProps {
  data?: IMoviesResponse;
  mediaType: "movie" | "tv";
}

const Carousel: FC<IProps> = ({ data, mediaType }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState<number>(0);

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

    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={scss.carousel}>
      <div className="container">
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
                <MoviesCard item={item} mediaType={mediaType} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
