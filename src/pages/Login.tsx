// src/pages/Login.tsx
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from 'react-router';

export default function Login() {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); 
    navigate('/create-blog'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Admin Access</h1>
        <p className="text-gray-600 mb-6">
          Klik di bawah untuk masuk sebagai admin dan mengelola blog.
        </p>
        <button
          onClick={handleLogin}
          className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-900 transition font-medium"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}