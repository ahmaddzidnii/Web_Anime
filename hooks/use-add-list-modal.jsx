import { create } from "zustand";

export const useAddListModal = create((set) => ({
  animeId: undefined,
  isOpen: false,
  count: 0,
  status: undefined,
  score: undefined,
  startWatch: undefined,
  endWatch: undefined,
  onOpen: (id) => set({ isOpen: true, animeId: id }),
  onClose: () =>
    set({
      isOpen: false,
      animeId: undefined,
      count: 0,
      status: undefined,
      score: undefined,
      startWatch: undefined,
      endWatch: undefined,
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
  setStartWatch: (startWatch) => set({ startWatch: startWatch }),
  setEndWatch: (endWatch) => set({ endWatch: endWatch }),
}));
