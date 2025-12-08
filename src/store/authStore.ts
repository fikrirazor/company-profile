// src/store/authStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type AuthState = {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuth: false,
      login: () => set({ isAuth: true }),
      logout: () => set({ isAuth: false }),
    }),
    {
      name: 'super-contar-auth',
      storage: createJSONStorage(() => localStorage),
    }
  )
);