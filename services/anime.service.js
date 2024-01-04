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
    return response.data.data;
  } catch (error) {}
}
