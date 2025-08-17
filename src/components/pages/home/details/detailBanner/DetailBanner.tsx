import scss from "./DetailBanner.module.scss";
import { useState, type FC } from "react";
import { useGetDetailsQuery } from "../../../../../api/details";
import { Button } from "antd";
import { useGetImagesQuery } from "../../../../../api/images";
import { useGetTrailerMovie } from "../../../../../api/trailerMovie";
import SkeletonDetailsBanner from "../../../../ui/skeleton/skeletonDetailsBanner/SkeletonDetailsBanner";

interface IProps {
  id: number | string;
  type: "movie" | "tv";
}

const DetailBanner: FC<IProps> = ({ id, type }) => {
  const { data: dataDetails, isLoading } = useGetDetailsQuery(id, type);
  const { data: dataImages } = useGetImagesQuery(id);
  const { data: dataTrailer } = useGetTrailerMovie(id, type);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoKey, setVideoKey] = useState("");

  const showModal = (key: any) => {
    setIsModalOpen(true);
    setVideoKey(key);
  };

  const trailer = dataTrailer?.results.find(
    (item: any) => item.site === "YouTube" && item.type === "Trailer"
  );

  const logoPath = dataImages?.logos[0]?.file_path;

  const logoUrl = logoPath
    ? `https://image.tmdb.org/t/p/original${logoPath}`
    : null;

  const runtime = dataDetails?.runtime
    ? Math.floor(dataDetails.runtime / 60) +
      " ч " +
      (dataDetails.runtime % 60) +
      " мин"
    : "Нет данных";

  return (
    <div className={scss.detailBanner}>
      <div className={scss.bannerImg}>
        <img
          className={scss.bannerImage}
          src={`https://image.tmdb.org/t/p/w1920${dataDetails?.backdrop_path}`}
          alt="Фоновое изображение"
        />
      </div>
      <div className="container">
        <div className={scss.content}>
          {isLoading ? (
            <SkeletonDetailsBanner />
          ) : (
            <div className={scss.bannerInfo}>
              {logoUrl ? (
                <img src={logoUrl} alt="Логотип фильма" className={scss.logo} />
              ) : (
                <h1 className={scss.logoText}>
                  {dataDetails?.title || dataDetails?.name}
                </h1>
              )}

              <h1>{dataDetails?.original_title}</h1>
              <p>{dataDetails?.tagline}</p>

              <div className={scss.bannerRating}>
                <span>{dataDetails?.vote_average.toFixed(1)}</span>
                <p>
                  {dataDetails?.release_date || dataDetails?.first_air_date}
                </p>
                <h1>
                  {
                    dataDetails?.production_countries.map(
                      (country: any) => country.name
                    )[0]
                  }
                </h1>
                <h2>
                  {
                    dataDetails?.genres.map(
                      (genre: any) =>
                        genre.name[0].toUpperCase() + genre.name.slice(1)
                    )[0]
                  }
                </h2>
                <h2>{runtime}</h2>
              </div>

              <Button
                onClick={() => showModal(trailer?.key)}
                className={scss.button}
              >
                Трейлер
              </Button>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div onClick={() => setIsModalOpen(false)} className={scss.customModal}>
          <iframe
            width="900"
            height="535"
            src={`https://www.youtube.com/embed/${videoKey}`}
            title={trailer?.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default DetailBanner;
