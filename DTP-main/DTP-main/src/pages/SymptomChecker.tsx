import React from 'react';
import SymptomForm from '../components/SymptomChecker/SymptomForm';
import { useAuth } from '../contexts/AuthContext';
import { useSymptoms } from '../contexts/SymptomContext';

const SymptomChecker: React.FC = () => {
  const { user } = useAuth();
  const { selectedSymptoms } = useSymptoms();
  
  return (
    <div className="max-w-2xl mx-auto">
      {user && (
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Symptom Checker</h1>
          <p className="text-gray-600">
            Hello, {user.name}. Tell us about your symptoms and we'll help you find out what might be causing them.
          </p>
        </div>
      )}
      
      <SymptomForm />
      
      {selectedSymptoms.length === 0 && (
        <div className="mt-10">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-medium text-blue-900 mb-2">How to use the Symptom Checker</h3>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-1.5">1.</span>
                <p>Select a body part where you're experiencing symptoms</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-1.5">2.</span>
                <p>Choose all the symptoms you're experiencing</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-1.5">3.</span>
                <p>Click "Analyze Symptoms" to see possible conditions</p>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-blue-500 mr-1.5">4.</span>
                <p>Review recommended specialists and medications</p>
              </li>
            </ul>
            <p className="mt-4 text-sm text-blue-700">
              <strong>Note:</strong> This tool is for informational purposes only and does not provide medical advice.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;