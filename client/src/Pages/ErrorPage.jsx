
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-green-500 animate-bounce">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">Page Not Found</h2>
        <p className="mt-2 text-gray-400">Sorry, the page you are looking for does not exist or has been moved.</p>
        <button
          onClick={handleGoHome}
          className="mt-6 inline-block px-6 py-3 rounded-2xl bg-green-500 text-gray-900 font-semibold hover:bg-green-400 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Go back home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
