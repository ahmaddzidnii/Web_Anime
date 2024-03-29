import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { useAddListModal } from "@/hooks/use-add-list-modal";
import { useEditListModal } from "@/hooks/use-edit-list-modal";

export const useAddList = () => {
  const { getToken } = useAuth();
  const { onClose } = useAddListModal();
  const queryClient = useQueryClient();

  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "ALL";

  return useMutation({
    mutationFn: async (data) => {
      return axios.post(`/api/list`, data, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });
    },
    onSuccess: () => {
      onClose();

      toast.success("Anime ditambahkan ke list.");
    },
    onError: (err) => {
      if (err.response.status == 400) {
        toast.error(err.response.data.error);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["list", status],
        refetchType: "all",
      });
    },
  });
};
export const useDeleteList = () => {
  const { onClose } = useEditListModal();
  const { getToken } = useAuth();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "ALL";

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
      onClose();
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
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["list", status],
        refetchType: "all",
      });
    },
  });
};

export const useEditList = () => {
  const { getToken } = useAuth();
  const { onClose } = useEditListModal();
  const queryClient = useQueryClient();

  const searchParams = useSearchParams();
  const status = searchParams.get("status") || "ALL";

  return useMutation({
    mutationFn: async (data) => {
      return axios.put(`/api/list`, data, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      });
    },
    onSuccess: () => {
      onClose();
      toast.success("Anime telah diedit.");
    },
    onError: (err) => {
      if (err.response.status == 400) {
        toast.error(err.response.data.error);
      }

      if (err.response.status == 500) {
        toast.error(err.response.data.error);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["list", status],
        refetchType: "all",
      });
    },
  });
};
