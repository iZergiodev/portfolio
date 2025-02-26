import { create } from "zustand";

export const useStore = create((set) => ({
    theme: true,
    language: "spanish",
    changeTheme: () => set((state) => ({ theme: !state.theme })),
    changeLanguage: (selectedLanguage) => 
      set(() => ({ language: selectedLanguage })),
  }));