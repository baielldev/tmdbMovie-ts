namespace CREDITS {
  type getCreditsMovieRes = {
    id: number;
    cast: IMovieCredit[{
      character?: string;
      job?: string;
      department?: string;
      title: string;
      id: number;
      poster_path: string | null;
      release_date: string;
      overview: string;
      vote_average: number;
      genre_ids: number[];
      original_language: string;
      original_title: string;
      backdrop_path: string | null;
      popularity: number;
      vote_count: number;
      video: boolean;
      adult: boolean;
    }];
    crew: IMovieCredit[];
  };
}
