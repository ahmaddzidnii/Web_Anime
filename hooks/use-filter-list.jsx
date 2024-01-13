import { create } from "zustand";

export const useFilterList = create((set) => ({
  status: "ALL",
  updateStatus: (status) => set({ status: status }),
}));
