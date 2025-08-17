import { Link, useParams } from "react-router-dom";
import scss from "./DetailsCast.module.scss";
import { useGetCastDetailsQuery } from "../../../../../../api/actors/detailsActor";
import { useGetCastMovieQuery } from "../../../../../../api/actors/detailsActor/movieActors";
import notMovieImg from "../../../../../../assets/notMovieImg.png";

interface ICastMovie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

const DetailsCast = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <div>Некорректный ID</div>;

  const { data: castDetails } = useGetCastDetailsQuery(id);
  const { data: castMovie } = useGetCastMovieQuery(id);

  return (
    <div className={scss.detailsCast}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.castInfo}>
            <img
              src={`https://image.tmdb.org/t/p/w1920${castDetails?.profile_path}`}
              alt={castDetails?.name}
            />
            <div className={scss.castName}>
              <h1>{castDetails?.name}</h1>
              <span>{castDetails?.known_for_department}</span>
              <p>{castDetails?.place_of_birth}</p>
            </div>
          </div>
          <div className={scss.castMovies}>
            <div className={scss.movieTitle}>
              <h1>Участие в кино</h1>
            </div>
            <div className={scss.moviesList}>
              {castMovie?.cast.map((item: ICastMovie) => (
                <Link to={`/details/movie/${item.id}`} key={item.id}>
                  <div className={scss.cardBox}>
                    <img
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/w1920${item.poster_path}`
                          : notMovieImg
                      }
                      alt={item.title}
                    />
                    <div className={scss.cardTitle}>
                      <span>{item.vote_average.toFixed(1)}</span>
                      <h1>{item.title}</h1>
                    </div>
                    <p>{item.release_date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCast;
