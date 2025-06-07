import { MedicalAssistant } from '../types';

export const medicalAssistants: MedicalAssistant[] = [
  {
    id: '1',
    name: 'Naidu Reddy, RN',
    contactNumber: '+91 90001 23456',
    available: true,
    availableHours: '9:00 AM - 6:00 PM'
  },
  {
    id: '2',
    name: 'Jaswanth Kumar, PA',
    contactNumber: '+91 90002 34567',
    available: true,
    availableHours: '10:00 AM - 7:00 PM'
  },
  {
    id: '3',
    name: 'Puneeth Rao, NP',
    contactNumber: '+91 90003 45678',
    available: false,
    availableHours: '8:00 AM - 5:00 PM'
  },
  {
    id: '4',
    name: 'Naidu Kumar, RN',
    contactNumber: '+91 90004 56789',
    available: true,
    availableHours: '11:00 AM - 8:00 PM'
  }
];

// Get available medical assistants
export const getAvailableMedicalAssistants = (): MedicalAssistant[] => {
  return medicalAssistants.filter(assistant => assistant.available);
};