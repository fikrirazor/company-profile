export default function Login() {
  return (
    <div className="container mx-auto py-16 max-w-md">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
      <p className="mb-4">Only authorized users can create blogs.</p>
      <button
        
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Login as Admin
      </button>
    </div>
  );
}
