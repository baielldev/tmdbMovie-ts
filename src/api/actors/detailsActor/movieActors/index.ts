import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "../../..";

const useGetCastMovieQuery = (id: number | string) => {
  return useQuery<CREDITS.getCreditsMovieRes, Error>({
    queryKey: ["movie-cast", id],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/person/${id}/movie_credits?language=ru-RU`
      );
      return response.data;
    },
  });
};
export { useGetCastMovieQuery };
