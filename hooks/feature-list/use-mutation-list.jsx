import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const useAddList = () => {
  const { userId, getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      return axios.post(`/api/list`, data, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });
    },
    // onMutate: async (newList) => {
    //   await queryClient.cancelQueries("count");
    //   const prevList = queryClient.getQueryData("count");
    //   queryClient.setQueryData("count", (oldQueryData) => {
    //     return {
    //       ...oldQueryData,
    //       data: [...oldQueryData.data, { userId, ...newList.data }],
    //     };
    //   });
    //   return {
    //     prevList,
    //   };
    // },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["count", userId] });
      queryClient.invalidateQueries({ queryKey: ["list", userId] });

      toast.success("Anime ditambahkan ke list.");
    },
    onError: (err, _newList, context) => {
      // queryClient.setQueryData("count ", context.prevList);
      if (err.response.status == 400) {
        toast.error(err.response.data.error);
      }
    },

    // onSettled: () => {
    //   queryClient.invalidateQueries("list");
    // },
  });
};
export const useDeleteList = () => {
  const { userId, getToken } = useAuth();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      return axios.delete(`/api/list`, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
        data,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["count"] });
      queryClient.invalidateQueries({ queryKey: ["list"] });
      toast.success("Anime dihapus dari list.");
    },
    onError: (err) => {
      if (err.response.status == 400) {
        toast.error(err.response.data.error);
      }
      if (err.response.status == 500) {
        toast.error(err.response.data.error);
      }
    },
  });
};
