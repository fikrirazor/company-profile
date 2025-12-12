import { useRef, useEffect } from "react";
import { Input, Button, Toaster } from "@/components/ui";
import { useUserStore } from "@/store/user-store";
import { useNavigate } from "react-router";

export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { loading, login, user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
        navigate("/create-blog");
    }
  }, [user, navigate]);

  return (
    <main id="login-container" className="w-full min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-md max-w-sm w-full flex flex-col gap-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <div className="flex flex-col gap-2">
            <Input ref={emailRef} type="email" placeholder="ex. user@gmail.com" />
            <Input ref={passwordRef} type="password" placeholder="Password" />
        </div>
        <Button
          disabled={loading}
          onClick={() => {
            if (!emailRef.current || !passwordRef.current) return;
            if (
              emailRef.current.value.trim() === "" ||
              passwordRef.current.value.trim() === ""
            )
              return;
            login({
              login: emailRef.current.value,
              password: passwordRef.current.value,
            });
          }}
          className="w-full"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>
      <Toaster />
    </main>
  );
}