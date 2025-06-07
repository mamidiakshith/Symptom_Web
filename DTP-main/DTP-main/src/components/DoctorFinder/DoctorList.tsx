import React from 'react';
import { Doctor } from '../../types';
import DoctorCard from './DoctorCard';

interface DoctorListProps {
  doctors: Doctor[];
}

const DoctorList: React.FC<DoctorListProps> = ({ doctors }) => {
  if (doctors.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-500">
          No specialists found in your area. Please try expanding your search or contact your primary care physician.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Specialists</h2>
      
      <div className="space-y-4">
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      
      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <path d="m9 11 3 3L22 4"></path>
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-green-700">
              Specialists are sorted by proximity to your location. Always verify availability by calling the hospital or clinic directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;