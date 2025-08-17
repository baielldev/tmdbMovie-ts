import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";

const useGetSearchQuery = (query: string) => {
  return useQuery<SEARCH.getSearchMovieRes, Error>({
    queryKey: ["search", query],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/search/multi?query=${query}&language=ru-RU`
      );
      return response.data;
    },
  });
};
export { useGetSearchQuery };
