import { useNavigate } from 'react-router-dom';

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Our Platform</h1>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
        onClick={() => navigate('/sign-in')}
      >
        Get Started
      </button>
    </div>
  );
}