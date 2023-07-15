import { create } from "zustand";

interface Theme {
  darkTheme: boolean;
  changeTheme: () => void;
}

export const useThemeStore = create<Theme>()((set) => ({
  darkTheme: true,
  changeTheme: () => set((state) => ({ darkTheme: !state.darkTheme })),
}));
