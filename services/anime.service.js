import axios from "axios";

import { axiosInstance } from "@/lib/axios/axiosInstance";

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

const ANIME_URL = process.env.NEXT_PUBLIC_ANIME_BASE_URL;
export const fetchAnimeTop = async () => {
  const { data } = await axios.get(`${ANIME_URL}/top/anime?limit=10`);
  return data;
};

export const fetchAnimeAnakTop = async () => {
  const { data } = await axios.get(
    `${ANIME_URL}/anime?sfw=true&rating=pg&limit=10&order_by=popularity`
  );
  return data;
};

export const fetchSearchAnime = async (query) => {
  const { data } = await axios.get(
    `${ANIME_URL}/anime?q=${query}&sfw=true&limit=10`
  );

  return data;
};
