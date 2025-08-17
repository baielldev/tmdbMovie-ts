import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";

const useGetDetailsQuery = (
  id: number | string,
  showDetails: MovieDetails.showType
) => {
  return useQuery<MovieDetails.getMovieDetailsRes, Error>({
    queryKey: ["details", showDetails, id],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${showDetails}/${id}?language=ru-RU`
      );
      return response.data;
    },
  });
};

export { useGetDetailsQuery };
