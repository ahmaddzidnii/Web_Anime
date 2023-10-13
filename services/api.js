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
