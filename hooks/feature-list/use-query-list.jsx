import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

export const useFetchList = () => {
  const { userId, getToken } = useAuth();
  return useQuery({
    queryKey: ["list"],
    queryFn: async () => {
      const response = await axios.get(`/api/list/${userId}`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      return response.data;
    },
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    enabled: !!userId,
  });
};

export const useFetchCountList = () => {
  const { userId, getToken } = useAuth();
  return useQuery({
    queryKey: ["count"],
    queryFn: async () => {
      const response = await axios.get(`/api/list/${userId}/count`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      return response.data;
    },
    enabled: !!userId,
  });
};
