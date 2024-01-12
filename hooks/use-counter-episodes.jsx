import { create } from "zustand";

export const useCounterEpisodes = create((set) => ({
  count: 0,
  incrementCount: () =>
    set((state) => {
      if (state.count === "") {
        return {
          count: 0 + 1,
        };
      }
      return { count: parseInt(state.count) + 1 };
    }),
  update: (count) => {
    if (count === "") {
      set({ count: 0 + 1 });
    }
    set({ count: count });
  },
}));
