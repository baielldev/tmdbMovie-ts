import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";

const useGetTopRated = (show: TOP_RATED.GetTopRatedReq) => {
  return useQuery<TOP_RATED.GetTopRatedRes, Error>({
    queryKey: [`/${show}/top_rated?language=ru-RU&page=1`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${show}/top_rated?language=ru-RU&page=1`
      );
      return response.data;
    },
  });
};

export { useGetTopRated };
