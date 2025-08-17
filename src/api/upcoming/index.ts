import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";

export const useGetUpcomingQuery = () => {
  return useQuery<UPCOMING.getUpcomingMovieRes, Error>({
    queryKey: ["upcoming"],
    queryFn: async () => {
      const res = await api_tmdb.get("/movie/upcoming?language=ru-RU&page=1");
      return res.data;
    },
  });
};
