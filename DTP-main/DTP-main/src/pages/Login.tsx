import React from 'react';
import GoogleLogin from '../components/Auth/GoogleLogin';

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
          </div>
          <h2 className="mt-4 text-center text-2xl font-bold text-white">
            Welcome to HealthCare
          </h2>
          <p className="mt-1 text-center text-white text-opacity-90">
            Your personal health assistant
          </p>
        </div>
        
        <div className="py-8 px-4 sm:px-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-center text-lg font-medium text-gray-900">
                Sign in to access symptom checker
              </h3>
              <p className="mt-1 text-center text-sm text-gray-600">
                Get personalized health advice based on your symptoms
              </p>
            </div>
            
            <div className="mt-6">
              <GoogleLogin />
            </div>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Healthcare you can trust</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm">
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                    <path d="m9 12 2 2 4-4"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <span className="text-gray-600">Quick symptom assessment</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                    <path d="m9 12 2 2 4-4"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <span className="text-gray-600">Find doctors near you</span>
                </div>
                <div className="flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2">
                    <path d="m9 12 2 2 4-4"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <span className="text-gray-600">Get medication advice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;