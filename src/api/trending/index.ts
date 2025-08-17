import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";

const useGetTrendingQuery = (date: TRENDING.GetTrendingReq) => {
  return useQuery<TRENDING.GetTrendingRes, Error>({
    queryKey: [`/trending/movie/${date}?language=ru-RU&page=1`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/trending/movie/${date}?language=ru-RU&page=1`
      );
      return response.data;
    },
  });
};

export { useGetTrendingQuery };
