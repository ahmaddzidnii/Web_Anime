import { axiosInstance } from "@/lib/axios/axiosInstance";
import axios from "axios";

export async function getAnimeTop({
  resource,
  limit = 10,
  sfw = true,
  query = "",
}) {
  try {
    const response = await axiosInstance.get(
      `${resource}?sfw=${sfw}&limit=${limit}${query}`
    );
    return response.data;
  } catch (error) {}
}

export const getAnimeAnak = async (limit, page = 1) => {
  try {
    const response = await axiosInstance.get(
      `anime?sfw=true&rating=pg&limit=${limit}&page=${page}&order_by=popularity`
    );
    const { data } = response;
    return data;
  } catch (error) {
    console.error("Error fetching popular anime:", error.message);
    return [];
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await axiosInstance.get(`/anime/${id}/characters`);
    return response.data.data;
  } catch (error) {
    return [];
  }
};

export const getEpisodesAnimeById = async (id) => {
  try {
    const response = await axiosInstance.get(`/anime/${id}/videos`);
    return response.data.data;
  } catch (error) {
    return [];
  }
};

export const fetchAnimeTop = async () => {
  const { data } = await axios.get(
    "https://api.jikan.moe/v4/top/anime?limit=10"
  );
  return data;
};

export const fetchAnimeAnakTop = async () => {
  const { data } = await axios.get(
    "https://api.jikan.moe/v4/anime?sfw=true&rating=pg&limit=10&order_by=popularity"
  );
  return data;
};
