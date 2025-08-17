namespace MovieDetails {
  type getMovieDetailsRes = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: Collection | null;
    budget: number;
    genres: Genre[{
      id: number;
      name: string;
    }];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[{
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }];
    production_countries: ProductionCountry[{
      iso_3166_1: string;
      name: string;
    }];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: SpokenLanguage[{
      english_name: string;
      iso_639_1: string;
      name: string;
    }];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
    first_air_date: string;
  };

  type showType = "movie" | "tv";
}
