import { useAuth, useUser } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const useAddList = () => {
  const { userId } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      return axios.post(`/api/list`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`count - ${userId}`] });
      queryClient.invalidateQueries({ queryKey: [`list - ${userId}`] });
      toast.success("Anime ditambahkan ke list.");
    },
    onError: (err) => {
      if (err.response.status == 400) {
        toast.error(err.response.data.error);
      }
    },
  });
};
