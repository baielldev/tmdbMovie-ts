import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "./../index";

const useGetPopularQuery = (popularShow: POPULAR.GetPopularReq) => {
  return useQuery<POPULAR.GetPopularRes, Error>({
    queryKey: [`/${popularShow}/popular?language=ru-RU&page=1`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${popularShow}/popular?language=ru-RU&page=1`
      );
      return response.data;
    },
  });
};

export { useGetPopularQuery };
