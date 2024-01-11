import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ANIME_BASE_URL,
  timeout: 10000,
});
