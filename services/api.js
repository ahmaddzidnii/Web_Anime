import { axiosInstance } from "@/lib/axios/axiosInstance";

export const getAnimePopular = async (limit) => {
  try {
    const response = await axiosInstance.get(`top/anime?limit=${limit}`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching popular anime:", error.message);
    throw new Error("Failed to fetch popular anime. Please try again later.");
  }
};
export const getAnimeAnak = async (limit) => {
  try {
    const response = await axiosInstance.get(`anime?sfw=true&rating=pg&limit=8&order_by=popularity`);
    const data = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching popular anime:", error.message);
    return [];
  }
};

export const getAnimeQuery = async (q, page) => {
  try {
    const response = await axiosInstance.get(`/anime?q=${q}&sfw=true&limit=24&page=${page}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching popular anime:", error.message);
    return [];
  }
};
