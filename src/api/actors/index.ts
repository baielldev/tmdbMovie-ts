import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";

const useGetCreditsQuery = (id: string | number, showActors: CAST.showType) => {
  return useQuery<CAST.getCreditsMovieRes, Error>({
    queryKey: ["movie-cast", showActors, id],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${showActors}/${id}/credits?language=ru-RU`
      );
      return response.data;
    },
  });
};

export { useGetCreditsQuery };
