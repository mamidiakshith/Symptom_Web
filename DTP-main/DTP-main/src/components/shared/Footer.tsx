import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
              <line x1="6" y1="1" x2="6" y2="4"></line>
              <line x1="10" y1="1" x2="10" y2="4"></line>
              <line x1="14" y1="1" x2="14" y2="4"></line>
            </svg>
            <span className="ml-2 text-lg font-semibold text-gray-800">HealthCare</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Contact Support</a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} HealthCare. All rights reserved. 
          </p>
          <p className="mt-1">
            This service is not intended to replace professional medical advice. Always consult with qualified healthcare providers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;