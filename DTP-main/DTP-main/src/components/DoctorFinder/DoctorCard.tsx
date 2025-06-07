import React from 'react';
import { Doctor } from '../../types';
import Button from '../shared/Button';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className="border rounded-lg overflow-hidden transition-all hover:shadow-md">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/4">
          <img 
            src={doctor.photoURL} 
            alt={doctor.name}
            className="w-full h-40 sm:h-full object-cover"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-blue-600 font-medium">{doctor.specialization}</p>
              <p className="text-gray-600 text-sm mt-1">{doctor.hospital}</p>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill={i < Math.floor(doctor.rating) ? "#FFB800" : "none"} 
                    stroke={i < Math.floor(doctor.rating) ? "#FFB800" : "#D1D5DB"} 
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                  </svg>
                ))}
                <span className="ml-1 text-sm font-medium text-gray-700">{doctor.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center text-xs font-medium text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M12 22v-6"></path>
                <path d="M9 7V2"></path>
                <path d="M15 7V2"></path>
                <path d="M3 10a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-6a6 6 0 0 1-6-6v-8Z"></path>
                <path d="M3 10h18"></path>
              </svg>
              {doctor.hospital}
            </span>
            <span className="inline-flex items-center text-xs font-medium text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <polygon points="3 18 9 18 9 12 13 12 13 18 19 18 19 10 12 3 3 10"></polygon>
              </svg>
              {doctor.distance.toFixed(1)} km away
            </span>
            <span className={`inline-flex items-center text-xs font-medium ${doctor.available ? 'text-green-600' : 'text-red-600'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <circle cx="12" cy="12" r="10"></circle>
                {doctor.available ? (
                  <path d="m9 12 2 2 4-4"></path>
                ) : (
                  <>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </>
                )}
              </svg>
              {doctor.available ? 'Available Today' : 'Unavailable Today'}
            </span>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <Button 
              variant="primary" 
              size="sm"
              disabled={!doctor.available}
            >
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="sm"
            >
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;