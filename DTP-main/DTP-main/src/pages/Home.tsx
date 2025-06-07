import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from '../hooks/useNavigate';
import Button from '../components/shared/Button';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Your Personal Health Assistant
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Check your symptoms, find nearby specialists, and get reliable health information all in one place.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            onClick={() => navigate(isAuthenticated ? '/symptom-checker' : '/login')}
          >
            {isAuthenticated ? 'Check Your Symptoms' : 'Get Started'}
          </Button>
        </div>
      </div>
      
      <div className="mt-20">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-100 text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 10 4 4 7-8"></path>
                <path d="M9 19H4a2 2 0 0 1-2-2v-4.7a2 2 0 0 1 .51-1.33L8.083 4.68a1.998 1.998 0 0 1 2.84 0l5.574 6.29a2 2 0 0 1 .51 1.33V17a2 2 0 0 1-2 2h-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
              Symptom Analysis
            </h3>
            <p className="mt-2 text-gray-600">
              Get quick insights about your health by checking your symptoms. Our AI-powered system identifies potential conditions.
            </p>
          </div>
          
          <div className="group relative bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-100 text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 22h4a2 2 0 0 0 2-2v-1"></path>
                <path d="M2 11v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1"></path>
                <path d="M15.5 2H8.5a2 2 0 0 0-2 2v3h11V4a2 2 0 0 0-2-2Z"></path>
                <path d="M22 17H11a2 2 0 1 1 0-4h11"></path>
                <circle cx="8" cy="15" r="2"></circle>
                <path d="M12 15h3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600">
              Find Specialists
            </h3>
            <p className="mt-2 text-gray-600">
              Locate nearby healthcare professionals specializing in your condition. View their details and availability in real-time.
            </p>
          </div>
          
          <div className="group relative bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-md bg-orange-100 text-orange-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600">
              Health Advice
            </h3>
            <p className="mt-2 text-gray-600">
              Get reliable guidance and medication recommendations based on your symptoms, with educational resources.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-20 bg-blue-50 rounded-lg shadow-sm p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Get the healthcare guidance you need in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Enter Your Symptoms
            </h3>
            <p className="text-gray-600">
              Select the symptoms you're experiencing from our comprehensive library.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Get Your Analysis
            </h3>
            <p className="text-gray-600">
              Our AI analyzes your symptoms and provides information about potential conditions.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-lg mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Find Care Options
            </h3>
            <p className="text-gray-600">
              Discover nearby specialists, get medication suggestions, and connect with healthcare providers.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-20 text-center">
        <Button
          size="lg"
          onClick={() => navigate(isAuthenticated ? '/symptom-checker' : '/login')}
        >
          {isAuthenticated ? 'Check Your Symptoms' : 'Get Started Now'}
        </Button>
      </div>
    </div>
  );
};

export default Home;