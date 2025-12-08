// src/store/blogStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type BlogPost = {
  id: string;
  title: string;
  content: string; 
  author: string;
  publishDate: string; 
};

type BlogStore = {
  blogs: BlogPost[];
  addBlog: (blog: Omit<BlogPost, 'id'>) => void;
};

export const useBlogStore = create<BlogStore>()(
  persist(
    (set) => ({
      blogs: [],
      addBlog: (blog) =>
        set((state) => ({
          blogs: [
            ...state.blogs,
            { ...blog, id: Date.now().toString() },
          ],
        })),
    }),
    {
      name: 'blogs',
      storage: createJSONStorage(() => localStorage),
    }
  )
);