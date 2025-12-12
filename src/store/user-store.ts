import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AxiosInstance } from "@/utils/axios-instance";
import { toast } from "sonner";
import { ValidationError } from "yup";
import { loginSchema } from "@/utils/login-validation";
import type { User } from "@/types/user";
import type { AxiosError } from "axios";

type UserStore = {
  user: User | null;
  userToken: string | null;
  loading: boolean;
  errorMessage: null | string;
  login: ({ login, password }: { login: string; password: string }) => Promise<void>;
  logout: () => void;
  keeplogin: () => Promise<void>;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      userToken: null,
      loading: false,
      errorMessage: null,
      login: async (user: { login: string; password: string }) => {
        try {
          set({ loading: true, errorMessage: null });
          
          await loginSchema.validate({
            email: user.login,
            password: user.password,
          }); 

          
          const response = await AxiosInstance.post<User>("/users/login", user);
          
          set({
            user: response.data,
            userToken: response.data["user-token"], 
            loading: false,
          });
          
          toast.success("Login successful");
        } catch (error) {
          
          if (error instanceof ValidationError) {
            toast.error(error.message);
            set({ loading: false, errorMessage: error.message });
            return;
          }

          
          const message = error
              ? (error as AxiosError<{ message?: string }>).response?.data
                  ?.message || "Failed to login"
              : "Failed to login";
          
          console.error(error);
          toast.error(message);
          set({ errorMessage: message, loading: false });
        }
      },
      logout: () => {
        set({ user: null, userToken: null });
        toast.info("Logged out");
      },
      keeplogin: async () => {
        try {
          const { userToken } = get();
          if (!userToken) return;

          set({ loading: true });
          
        } catch (error) {
           console.log(error);
           set({ user: null, userToken: null });
        }
      }
    }),
    {
      name: "user-store",
      partialize: (state) => ({ userToken: state.userToken, user: state.user }), // Persisting user too so keeplogin isn't strictly needed for data restoration
      storage: createJSONStorage(() => localStorage),
    }
  )
);
