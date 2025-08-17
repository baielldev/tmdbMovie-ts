import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";

const useGetTrailerMovie = (
  id: number | string,
  showTrailer: TRAILER.showType
) => {
  return useQuery<TRAILER.getTrailerMovieRes, Error>({
    queryKey: ["movie-trailer", showTrailer, id],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${showTrailer}/${id}/videos?language=en-US`
      );
      return response.data;
    },
  });
};

export { useGetTrailerMovie };
