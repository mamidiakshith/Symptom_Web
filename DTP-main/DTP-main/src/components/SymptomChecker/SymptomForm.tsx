import React, { useState } from 'react';
import { useSymptoms } from '../../contexts/SymptomContext';
import { symptoms, symptomsByBodyPart } from '../../data/symptoms';
import { useNavigate } from '../../hooks/useNavigate';
import Button from '../shared/Button';
import { BodyPart } from '../../types';

const bodyPartIcons: Record<BodyPart, string> = {
  head: '🧠',
  chest: '🫁',
  abdomen: '🫃',
  back: '🔙',
  arms: '💪',
  legs: '🦵',
  skin: '🧴',
  general: '👤'
};

const SymptomForm: React.FC = () => {
  const { selectedSymptoms, addSymptom, removeSymptom, clearSymptoms, analyzeSymptoms } = useSymptoms();
  const [activeBodyPart, setActiveBodyPart] = useState<BodyPart | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleBodyPartClick = (bodyPart: BodyPart) => {
    setActiveBodyPart(activeBodyPart === bodyPart ? null : bodyPart);
    setSearchTerm('');
  };

  const handleSymptomToggle = (symptomName: string) => {
    if (selectedSymptoms.includes(symptomName)) {
      removeSymptom(symptomName);
    } else {
      addSymptom(symptomName);
    }
  };

  const handleAnalyzeClick = () => {
    analyzeSymptoms();
    navigate('/results');
  };

  const filteredSymptoms = searchTerm
    ? symptoms.filter(symptom => 
        symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : activeBodyPart 
      ? symptomsByBodyPart[activeBodyPart] || []
      : [];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">What symptoms are you experiencing?</h2>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for symptoms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-10"
          />
          <div className="absolute left-3 top-3.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Select body part:</p>
        <div className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-4">
          {Object.entries(bodyPartIcons).map(([part, icon]) => (
            <button
              key={part}
              onClick={() => handleBodyPartClick(part as BodyPart)}
              className={`
                flex flex-col items-center justify-center p-3 rounded-lg transition-all
                ${activeBodyPart === part 
                  ? 'bg-blue-100 border-blue-500 text-blue-700 border-2' 
                  : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'}
              `}
            >
              <span className="text-2xl mb-1">{icon}</span>
              <span className="text-xs capitalize">{part}</span>
            </button>
          ))}
        </div>
      </div>

      {(filteredSymptoms.length > 0 || searchTerm) && (
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">
            {searchTerm 
              ? 'Search results:' 
              : `Symptoms related to ${activeBodyPart}:`}
          </p>
          <div className="flex flex-wrap gap-2">
            {filteredSymptoms.length > 0 ? (
              filteredSymptoms.map(symptom => (
                <button
                  key={symptom.id}
                  onClick={() => handleSymptomToggle(symptom.name)}
                  className={`
                    py-1.5 px-3 rounded-full text-sm font-medium transition-all
                    ${selectedSymptoms.includes(symptom.name)
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                  `}
                >
                  {symptom.name}
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-500">No symptoms found for "{searchTerm}"</p>
            )}
          </div>
        </div>
      )}

      {selectedSymptoms.length > 0 && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-gray-700">Your selected symptoms:</p>
            <button
              onClick={clearSymptoms}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Clear all
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedSymptoms.map(symptom => (
              <div
                key={symptom}
                className="group flex items-center bg-blue-100 text-blue-700 py-1.5 px-3 rounded-full text-sm font-medium"
              >
                {symptom}
                <button
                  onClick={() => removeSymptom(symptom)}
                  className="ml-1.5 text-blue-400 hover:text-blue-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <Button
          onClick={handleAnalyzeClick}
          disabled={selectedSymptoms.length === 0}
          size="lg"
        >
          Analyze Symptoms
        </Button>
      </div>
    </div>
  );
};

export default SymptomForm;