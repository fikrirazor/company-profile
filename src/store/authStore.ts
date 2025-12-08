import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<State>()(
  persist(
    (set) => ({
      isAuth: false,
      login: () => set({ isAuth: true }),
      logout: () => set((state) => ({ ...state,  isAuth: false })),
    }),
    {
      name: 'karya-visual-auth',
      partialize: (state) => ({ isAuth: state.isAuth}),
      storage: createJSONStorage(() => localStorage),
    }
  )
);