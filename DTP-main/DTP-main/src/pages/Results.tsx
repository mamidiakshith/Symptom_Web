import React, { useEffect } from 'react';
import { useSymptoms } from '../contexts/SymptomContext';
import DiseaseDisplay from '../components/SymptomChecker/DiseaseDisplay';
import DoctorList from '../components/DoctorFinder/DoctorList';
import MedicationList from '../components/MedicalAssistance/MedicationList';
import AssistantContact from '../components/MedicalAssistance/AssistantContact';
import Button from '../components/shared/Button';

const Results: React.FC = () => {
  const { 
    selectedSymptoms, 
    potentialDiseases, 
    recommendedDoctors, 
    recommendedMedications,
    clearSymptoms
  } = useSymptoms();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (selectedSymptoms.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-gray-400">
            <path d="M17.5 20h.5a2 2 0 0 0 2-2V8.5L14 2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
            <path d="M14 2v6h6"></path>
            <circle cx="11" cy="16" r="5"></circle>
            <path d="m8.5 16.5 5 5"></path>
          </svg>
          <h2 className="mt-2 text-xl font-medium text-gray-900">No symptoms selected</h2>
          <p className="mt-1 text-gray-500">
            Please go back and select your symptoms for analysis.
          </p>
          <div className="mt-6">
            <Button 
              onClick={() => window.history.back()}
              variant="primary"
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Your Health Analysis</h1>
          <Button 
            variant="outline" 
            size="sm"
            onClick={clearSymptoms}
          >
            Start Over
          </Button>
        </div>
        
        <div className="p-4 bg-blue-50 rounded-lg mb-6">
          <h3 className="font-medium text-gray-900 mb-2">Your Symptoms:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map(symptom => (
              <span 
                key={symptom} 
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm"
              >
                {symptom}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
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
                <strong>Medical Disclaimer:</strong> This tool provides general information only and is not a substitute for professional medical advice. Always consult with a healthcare provider for diagnosis and treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <DiseaseDisplay diseases={potentialDiseases} />
      
      <DoctorList doctors={recommendedDoctors} />
      
      <MedicationList medications={recommendedMedications} />
      
      <AssistantContact />
    </div>
  );
};

export default Results;