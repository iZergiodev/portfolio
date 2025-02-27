import { create } from "zustand";


export const useStore = create((set) => ({
    theme: true,
    changeTheme: () => set((state) => ({ theme: !state.theme })),
  }));