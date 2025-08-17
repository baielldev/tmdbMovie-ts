type IMovieItem = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  name: string;
  original_language: string;
  original_title: string;
  original_name: string;
  first_air_date: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
  media_type?: "movie" | "tv";
};

// Тип для ответа API
type IMoviesResponse = {
  page: number;
  results: IMovieItem[];
  total_pages: number;
  total_results: number;
};
