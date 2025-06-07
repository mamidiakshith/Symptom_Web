import React from 'react';

export const Spinner: React.FC<{ size?: string; color?: string }> = ({ 
  size = 'w-8 h-8', 
  color = 'border-blue-500' 
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className={`${size} border-4 ${color} border-t-transparent rounded-full animate-spin`}></div>
    </div>
  );
};

export const FullPageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 flex justify-center items-center z-50">
      <div className="flex flex-col items-center">
        <Spinner size="w-12 h-12" />
        <p className="mt-4 text-gray-700 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-md w-full mx-auto animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
    </div>
  );
};