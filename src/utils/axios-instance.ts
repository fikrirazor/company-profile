import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL +
    "/" +
    import.meta.env.VITE_BACKENDLESS_APP_ID +
    "/" +
    import.meta.env.VITE_BACKENDLESS_APP_KEY,
});

AxiosInstance.interceptors.request.use(
  (config) => {
    const storage = localStorage.getItem("user-store");
    if (storage) {
      const { state } = JSON.parse(storage);
      const token = state?.userToken;
      if (token) {
        config.headers["user-token"] = token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
