// src/pages/BlogList.tsx
import { useBlogStore } from '@/store/blogStore';
import { useAuthStore } from '@/store/authStore';
import { Link } from 'react-router';

export default function BlogList() {
  const { blogs } = useBlogStore();
  const { isAuth } = useAuthStore();

  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <div className="container mx-auto py-16 px-4 min-h-screen bg-surface-dark/90 ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-text-light">Blog</h1>

        {/* Tampilkan tombol berbeda tergantung status login */}
        {isAuth ? (
          <Link
            to="/create-blog"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-teal-dark transition shadow-md hover:shadow-lg"
          >
            + Tulis Blog
          </Link>
        ) : (
          <Link
            to="/login"
            className="bg-gray-800 text-white px-5 py-2.5 rounded-lg hover:bg-gray-900 transition"
          >
            Login untuk Menulis Blog
          </Link>
        )}
      </div>

      {sortedBlogs.length === 0 ? (
        <div className="text-center py-20 text-text-light">
          <p className="text-xl">Belum ada artikel blog.</p>
          <p className="mt-3">Konten akan muncul segera.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {sortedBlogs.map((blog) => (
            <article key={blog.id} className="group pb-8 border-b border-text-muted last:border-0">
              <h2 className="text-2xl font-bold text-text-light group-hover:text-secondary transition-colors">
                {blog.title}
              </h2>
              <div className="text-sm text-text-light mt-2">
                oleh {blog.author} • {blog.publishDate}
              </div>
              <p className="mt-4 text-text-light leading-relaxed">
                {blog.content
                  .replace(/[#*_`[\]!]/g, '')
                  .substring(0, 200)}
                {blog.content.length > 200 ? '...' : ''}
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}