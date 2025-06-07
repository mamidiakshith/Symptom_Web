import React from 'react';
import { MedicalAssistant } from '../../types';
import { getAvailableMedicalAssistants } from '../../data/medicalAssistants';
import Button from '../shared/Button';

const AssistantContact: React.FC = () => {
  const assistants = getAvailableMedicalAssistants();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Medical Assistance</h2>
      
      {assistants.length > 0 ? (
        <div className="space-y-4">
          {assistants.map(assistant => (
            <AssistantCard key={assistant.id} assistant={assistant} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-gray-500">
            No medical assistants are available at the moment. Please check back later or contact your hospital directly.
          </p>
        </div>
      )}
      
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              For emergency situations, please dial 911 or your local emergency number immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface AssistantCardProps {
  assistant: MedicalAssistant;
}

const AssistantCard: React.FC<AssistantCardProps> = ({ assistant }) => {
  return (
    <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{assistant.name}</h3>
          <p className="text-gray-600 text-sm mt-1">Available: {assistant.availableHours}</p>
        </div>
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          assistant.available 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {assistant.available ? 'Online' : 'Offline'}
        </span>
      </div>
      
      <div className="mt-4 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <a href={`tel:${assistant.contactNumber}`} className="text-blue-600 font-medium">
          {assistant.contactNumber}
        </a>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <Button 
          variant={assistant.available ? "primary" : "outline"} 
          size="sm"
          disabled={!assistant.available}
          fullWidth
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Call Now
        </Button>
      </div>
    </div>
  );
};

export default AssistantContact;