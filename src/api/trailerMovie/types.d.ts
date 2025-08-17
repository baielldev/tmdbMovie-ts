namespace TRAILER {
  type getTrailerMovieRes = {
    id: number;
    results: TrailerRes[{
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: string;
      id: string;
    }];
  };
  type showType = "movie" | "tv";
}
