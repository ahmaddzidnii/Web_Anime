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
