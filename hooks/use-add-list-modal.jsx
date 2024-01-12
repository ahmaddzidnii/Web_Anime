import { create } from "zustand";

export const useAddListModal = create((set) => ({
  animeId: undefined,
  isOpen: false,
  onOpen: (id) => set({ isOpen: true, animeId: id }),
  onClose: () => set({ isOpen: false, animeId: undefined }),
}));
