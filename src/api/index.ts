import axios from "axios";

export const api_tmdb = axios.create({
  baseURL: `${import.meta.env.VITE_API_TMDB}/3` || "",
  headers: {
    Authorization: "",
  },
});
