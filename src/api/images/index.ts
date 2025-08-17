import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";

const useGetImagesQuery = (id: string | number) => {
  return useQuery({
    queryKey: ["movie-images", id],
    queryFn: async () => {
      const response = await api_tmdb.get(`/movie/${id}/images`, {
        params: {
          include_image_language: "ru",
        },
      });
      return response.data;
    },
  });
};
export { useGetImagesQuery };
