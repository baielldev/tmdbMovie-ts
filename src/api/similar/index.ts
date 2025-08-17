import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "./../index";

const useGetSimilarQuery = (
  id: number | string,
  similarShow: SIMILAR.showType
) => {
  return useQuery<SIMILAR.getSimilarMovieRes, Error>({
    queryKey: [`/${similarShow}/${id}/similar?language=ru-RU&page=1`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${similarShow}/${id}/similar?language=ru-RU&page=1`
      );
      return response.data;
    },
  });
};

export { useGetSimilarQuery };
