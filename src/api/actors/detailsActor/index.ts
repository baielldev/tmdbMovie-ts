import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "../..";

const useGetCastDetailsQuery = (id: number | string) => {
  return useQuery<CAST_DETAILS.getCastDetailsRes, Error>({
    queryKey: ["details-cast", id],
    queryFn: async () => {
      const response = await api_tmdb.get(`/person/${id}?language=ru-RU`);
      return response.data;
    },
  });
};

export { useGetCastDetailsQuery };
