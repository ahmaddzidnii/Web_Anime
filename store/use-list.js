import { toast } from "sonner";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useList = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItems = currentItems.find(
          (item) => item.anime_id === data.anime_id
        );

        if (existingItems) {
          return toast.error("Anime sudah ada di list!");
        }

        set({ items: [...get().items, data] });
        toast.success("Anime ditambahkan ke list!");
      },
      removeItem: (id) => {
        set({ items: [...get().items.filter((item) => item.anime_id !== id)] });
        toast.success("Anime berhasil di hapus dari list!");
      },
    }),
    {
      name: "List Anime",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
