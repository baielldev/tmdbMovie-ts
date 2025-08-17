namespace CAST {
  type getCreditsMovieRes = {
    id: number;
    cast: CastCrew[{
      id: number;
      name: string;
      original_name: string;
      gender: number | null;
      profile_path: string | null;
      known_for_department: string;
      popularity: number;
      adult: boolean;
      credit_id: string;
      // поля только для cast
      cast_id?: number;
      character?: string;
      order?: number;
      // поля только для crew
      department?: string;
      job?: string;
    }];
    crew: CastCrew[];
  };
  type showType = "movie" | "tv";
}
