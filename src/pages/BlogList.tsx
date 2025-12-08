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
    <div className="container mx-auto py-16 px-4 min-h-screen bg-[#121212]/90 ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold text-white">Blog</h1>

        {/* Tampilkan tombol berbeda tergantung status login */}
        {isAuth ? (
          <Link
            to="/create-blog"
            className="bg-blue text-white px-5 py-2.5 rounded-lg hover:bg-blue-200 transition shadow-md hover:shadow-lg"
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
        <div className="text-center py-20 text-white">
          <p className="text-xl">Belum ada artikel blog.</p>
          <p className="mt-3">Konten akan muncul segera.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {sortedBlogs.map((blog) => (
            <article key={blog.id} className="group pb-8 border-b border-gray-200 last:border-0">
              <h2 className="text-2xl font-bold text-white group-hover:text-indigo-600 transition-colors">
                {blog.title}
              </h2>
              <div className="text-sm text-white mt-2">
                oleh {blog.author} • {blog.publishDate}
              </div>
              <p className="mt-4 text-white leading-relaxed">
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