import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@clerk/nextjs";

export const useFetchList = () => {
  const { userId, getToken } = useAuth();
  return useQuery({
    queryKey: [`list - ${userId}`],
    queryFn: async () => {
      const response = await axios.get(`/api/list/${userId}`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      return response.data;
    },
    enabled: !!userId,
  });
};

export const useFetchCountList = () => {
  const { userId, getToken } = useAuth();
  return useQuery({
    queryKey: [`count - ${userId}`],
    queryFn: async () => {
      const response = await axios.get(`/api/list/${userId}/count`, {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      return response.data;
    },
    enabled: !!userId,
  });
};
