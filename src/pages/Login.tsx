// src/pages/Login.tsx
import { useAuthStore } from '@/store/authStore';
import { useNavigate } from 'react-router';

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { loading, login } 
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/create-blog');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-dark">
      <div className="text-center p-8 bg-surface rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-text-main mb-4">Admin Access</h1>
        <p className="text-text-muted mb-6">
          Klik di bawah untuk masuk sebagai admin dan mengelola blog.
        </p>
        <button
          onClick={handleLogin}
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-teal-dark transition font-medium"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}