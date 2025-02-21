import { create, StateCreator } from 'zustand'
import { devtools } from 'zustand/middleware'



export const useCommonStore = create(
  devtools((set) => ({
    darkMode: true,
    setDarkMode: () =>
      set((state) => ({ darkMode: !state.darkMode })),

  })),
)

