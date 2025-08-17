import { useParams } from "react-router-dom";
import DetailBanner from "./detailBanner/DetailBanner";
import MovieOverview from "./movieOverview/MovieOverview";
import Actors from "./actorsMovie/Actors";
import Similar from "./similar/Similar";
import Recommendations from "./recommendations/Recommendations";

const Details = () => {
  const { id, type } = useParams<{ id: string; type: "movie" | "tv" }>();

  const movieId = Number(id);

  if (!type || isNaN(movieId)) {
    return <div>Некорректный тип или ID</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <DetailBanner id={movieId} type={type} />
      <MovieOverview id={movieId} type={type} />
      <Actors id={movieId} type={type} />
      <Similar id={movieId} type={type} />
      <Recommendations id={movieId} type={type} />
    </div>
  );
};
export default Details;
