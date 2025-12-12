import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useBlogStore } from '@/store/blogStore';
import { useNavigate } from 'react-router';

import { useUserStore } from '@/store/user-store';
import { useEffect } from 'react';

const validationSchema = Yup.object({
  title: Yup.string()
    .min(5, 'Judul terlalu pendek (min 5 karakter)')
    .required('Judul wajib diisi'),
  content: Yup.string()
    .min(20, 'Konten terlalu pendek (min 20 karakter)')
    .required('Konten wajib diisi'),
});

export default function CreateBlog() {
  const { addBlog } = useBlogStore();
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
        navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="container mx-auto bg-surface-dark/90 py-20 max-w-screen-2xl px-4 min-h-screen text-text-light">
      <h1 className="text-3xl font-bold text-center mb-6">Buat Blog Baru</h1>
      <Formik
        initialValues={{ title: '', content: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          addBlog({
            title: values.title,
            content: values.content,
            author: 'Admin',
            publishDate: new Date().toISOString().split('T')[0],
          });
          resetForm();
          alert('Blog berhasil dibuat!');
          navigate('/blogs');
        }}
      >
        <Form className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Judul Blog</label>
            <Field
              name="title"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Contoh: Mengapa Visual Storytelling Penting?"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Konten (Markdown)
            </label>
            <Field
              name="content"
              as="textarea"
              rows={12}
              className="w-full p-3 border rounded-lg font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="Tulis dalam format Markdown. Contoh: **bold**, *italic*, - list, dll."
            />
            <ErrorMessage
              name="content"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-teal-dark transition"
            >
              Publikasikan
            </button>
            <button
              type="button"
              onClick={() => navigate('/blogs')}
              className="border border-text-muted text-text-muted px-6 py-2 rounded-lg hover:bg-surface transition"
            >
              Batal
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}