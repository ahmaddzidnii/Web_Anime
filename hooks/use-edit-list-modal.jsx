import { create } from "zustand";

export const useEditListModal = create((set) => ({
  listId: undefined,
  isOpen: false,
  count: 0,
  status: undefined,
  score: undefined,
  onOpen: (id) => set({ isOpen: true, listId: id }),
  onClose: () =>
    set({
      isOpen: false,
      listId: undefined,
      count: 0,
      status: undefined,
      score: undefined,
    }),
  incrementCount: () =>
    set((state) => {
      if (state.count === "") {
        return {
          count: 0 + 1,
        };
      }
      return { count: parseInt(state.count) + 1 };
    }),
  setCount: (count) => {
    if (count === "") {
      set({ count: 0 + 1 });
    }
    set({ count: count });
  },
  setStatus: (status) => set({ status: status }),
  setScore: (score) => set({ score: score }),
}));
