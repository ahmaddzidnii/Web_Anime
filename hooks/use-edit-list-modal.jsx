import { create } from "zustand";

const useEditListModal = create((set) => {
  const methods = {
    onOpen: (id) => set({ isOpen: true, listId: id }),
    onClose: () =>
      set({
        isOpen: false,
        listId: undefined,
        animeTitle: undefined,
        totalEpisode: undefined,
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
    setAnimeTitle: (title) => set({ animeTitle: title }),
    setTotalEpisode: (episode) => set({ totalEpisode: episode }),
    setStartWatch: (startWatch) => set({ startWatch: startWatch }),
    setEndWatch: (endWatch) => set({ endWatch: endWatch }),
  };

  return {
    listId: undefined,
    animeTitle: undefined,
    totalEpisode: undefined,
    isOpen: false,
    count: 0,
    status: undefined,
    score: undefined,
    startWatch: undefined,
    endWatch: undefined,
    ...methods,
  };
});

export { useEditListModal };
