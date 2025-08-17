import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "./../index";

const useGetRecommendationsQuery = (
  id: number | string,
  recommendationsShow: RECOMMENDATIONS.showType
) => {
  return useQuery<RECOMMENDATIONS.getRecommendationsMovieRes, Error>({
    queryKey: [
      `/${recommendationsShow}/${id}/recommendations?language=ru-RU&page=1`,
    ],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${recommendationsShow}/${id}/recommendations?language=ru-RU&page=1`
      );
      return response.data;
    },
  });
};

export { useGetRecommendationsQuery };
