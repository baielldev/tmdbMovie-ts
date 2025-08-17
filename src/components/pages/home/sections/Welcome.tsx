import { Button, Carousel } from "antd";
import scss from "./Welcome.module.scss";
import { useQueries } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { api_tmdb } from "../../../../api";
import type { FC } from "react";
import { useGetUpcomingQuery } from "../../../../api/upcoming";
import SkeletonDetailsBanner from "../../../ui/skeleton/skeletonDetailsBanner/SkeletonDetailsBanner";

interface IGenre {
  id: number;
  name: string;
}

interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface IMovieDetails extends IMovieItem {
  genres: IGenre[];
  release_date: string;
  production_countries: IProductionCountry[];
}

const fetchMovieDetails = async (
  id: number | string
): Promise<IMovieDetails> => {
  const res = await api_tmdb.get(`/movie/${id}?language=ru-RU`);
  return res.data;
};

const Welcome: FC = () => {
  const { data: dataUpcoming, isLoading } = useGetUpcomingQuery();

  const movies: IMovieItem[] = dataUpcoming?.results.slice(1, 11) || [];

  const detailsQueries = useQueries({
    queries: movies.map((movie: IMovieItem) => ({
      queryKey: ["movie-details", movie.id],
      queryFn: () => fetchMovieDetails(movie.id),
    })),
  });

  return (
    <div className={scss.welcome}>
      <Carousel autoplay autoplaySpeed={5000} pauseOnHover={false} speed={1000}>
        {movies.map((item: IMovieItem, index: number) => {
          const details = detailsQueries[index]?.data as
            | IMovieDetails
            | undefined;

          return (
            <div key={item.id} className={scss.card}>
              {isLoading ? (
                <SkeletonDetailsBanner />
              ) : (
                <>
                  <img
                    src={`https://image.tmdb.org/t/p/w1920/${item.backdrop_path}`}
                    alt={item.title}
                  />

                  <div className={scss.overlay}>
                    <Link to={`/details/movie/${item.id}`}>
                      <div className={scss.cardInfo}>
                        <h1>{item.title}</h1>

                        <p className={scss.genres}>
                          {
                            details?.genres.map(
                              (genre: IGenre) =>
                                genre.name[0].toUpperCase() +
                                genre.name.slice(1)
                            )[0]
                          }
                        </p>

                        <p>{item.overview}</p>

                        <div className={scss.collection}>
                          <span className={scss.spanRating}>
                            {item.vote_average.toFixed(1)}
                          </span>
                          <p className={scss.date}>
                            {details?.release_date?.slice(0, 4)}
                          </p>
                          <p className={scss.country}>
                            {details?.production_countries
                              ?.map(
                                (country: IProductionCountry) => country.name
                              )
                              .join(", ")}
                          </p>
                        </div>

                        <Button className={scss.button} type="default">
                          Перейти к фильму
                        </Button>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Welcome;
