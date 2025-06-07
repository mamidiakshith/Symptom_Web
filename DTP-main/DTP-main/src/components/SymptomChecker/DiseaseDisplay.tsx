import React from 'react';
import { Disease } from '../../types';

interface DiseaseDisplayProps {
  diseases: Disease[];
}

const severityColors = {
  low: 'bg-green-100 text-green-800 border-green-300',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  high: 'bg-red-100 text-red-800 border-red-300'
};

const DiseaseDisplay: React.FC<DiseaseDisplayProps> = ({ diseases }) => {
  if (diseases.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-500">
          No potential conditions identified based on your symptoms.
          Please consult with a healthcare professional for proper diagnosis.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Potential Conditions</h2>
      
      <div className="space-y-4">
        {diseases.map(disease => (
          <div 
            key={disease.id} 
            className="border rounded-lg overflow-hidden transition-all hover:shadow-md"
          >
            <div className="bg-gray-50 px-4 py-3 border-b">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-800">{disease.name}</h3>
                <span className={`${severityColors[disease.severity]} text-xs font-medium px-2.5 py-0.5 rounded-full border`}>
                  {disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)} Risk
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <p className="text-gray-700 mb-3">{disease.description}</p>
              
              <div className="mt-3">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Common Symptoms:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {disease.commonSymptoms.map((symptom, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex items-center">
                <span className="text-sm text-gray-600">
                  Specialist: <span className="font-medium">{disease.specialistType}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Important:</strong> This information is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseDisplay;