import React from 'react';
import { Medication } from '../../types';

interface MedicationListProps {
  medications: Medication[];
}

const MedicationList: React.FC<MedicationListProps> = ({ medications }) => {
  if (medications.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-500">
          No medication recommendations available based on your symptoms.
          Please consult with a healthcare professional for proper medication advice.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Medication Recommendations</h2>
      
      <div className="space-y-4">
        {medications.map(medication => (
          <div 
            key={medication.id} 
            className="border rounded-lg overflow-hidden transition-all hover:shadow-md"
          >
            <div className="bg-gray-50 px-4 py-3 border-b">
              <h3 className="font-semibold text-gray-800">{medication.name}</h3>
            </div>
            
            <div className="p-4">
              <p className="text-gray-700 mb-3">{medication.description}</p>
              
              <div className="mt-3">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Recommended For:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {medication.forSymptoms.map((symptom, index) => (
                    <span 
                      key={index}
                      className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-3">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Dosage:</h4>
                <p className="text-sm text-gray-600">{medication.dosage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Important:</strong> This information is for educational purposes only. Always consult with a healthcare professional before taking any medication. Follow the instructions on the medication packaging or from your healthcare provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationList;