import { create } from 'zustand';
import { AxiosInstance } from "@/utils/axios-instance";



export type BlogPost = {
  objectId: string; // Backendless uses objectId
  title: string;
  content: string; 
  author: string;
  publishDate: string; 
  created: number;
};

type BlogStore = {
  blogs: BlogPost[];
  loading: boolean;
  error: string | null;
  fetchBlogs: () => Promise<void>;
  addBlog: (blog: { title: string; content: string; author: string; publishDate: string }) => Promise<void>;
};

export const useBlogStore = create<BlogStore>((set) => ({
  blogs: [],
  loading: false,
  error: null,
  
  fetchBlogs: async () => {
      set({ loading: true, error: null });
      try {
          const response = await AxiosInstance.get("/data/blogs");
          set({ blogs: response.data, loading: false });
      } catch (err) {
          console.error(err);
          set({ error: "Failed to fetch blogs", loading: false });
      }
  },

  addBlog: async (blog) => {
    set({ loading: true, error: null });
    try {
        const response = await AxiosInstance.post("/data/blogs", blog);
        
        // Optimistic update or refresh
        const newBlog = response.data as BlogPost;
        set((state) => ({ 
            blogs: [newBlog, ...state.blogs],
            loading: false 
        }));
    } catch (err) {
        console.error(err);
        set({ error: "Failed to create blog", loading: false });
    }
  },
}));
