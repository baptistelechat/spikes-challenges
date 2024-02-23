import { create } from "zustand";

type ThemeStoreType = {
  theme: "#C1BDB3" | "#58737D" | "#545454" | "#CBA5A5";
  setTheme: (newTheme: "#C1BDB3" | "#58737D" | "#545454" | "#CBA5A5") => void;
  resetTheme: () => void;
};

const useThemeStore = create<ThemeStoreType>((set) => ({
  theme: "#58737D",
  setTheme: (newTheme: "#C1BDB3" | "#58737D" | "#545454" | "#CBA5A5") => {
    set({
      theme: newTheme,
    });
  },

  resetTheme: () => {
    set({ theme: "#58737D" });
  },
}));

export default useThemeStore;
