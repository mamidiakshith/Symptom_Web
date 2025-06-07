import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Aithika Reddy',
    specialization: 'General Practitioner',
    hospital: 'KIMS Hospital, Secunderabad',
    distance: 2.5,
    available: true,
    rating: 4.8,
    photoURL: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    name: 'Dr. Akshith Kumar',
    specialization: 'Infectious Disease Specialist',
    hospital: 'Care Hospitals, Banjara Hills',
    distance: 4.8,
    available: true,
    rating: 4.9,
    photoURL: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    name: 'Dr. Venkatesh Rao',
    specialization: 'Neurologist',
    hospital: 'Apollo Hospitals, Jubilee Hills',
    distance: 3.7,
    available: false,
    rating: 4.7,
    photoURL: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    name: 'Dr. Parasuram Iyer',
    specialization: 'Gastroenterologist',
    hospital: 'Yashoda Hospitals, Somajiguda',
    distance: 5.2,
    available: true,
    rating: 4.5,
    photoURL: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    name: 'Dr. Aithika Sharma',
    specialization: 'Pulmonologist',
    hospital: 'Continental Hospitals, Gachibowli',
    distance: 6.1,
    available: true,
    rating: 4.6,
    photoURL: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    name: 'Dr. Akshith Reddy',
    specialization: 'Cardiologist',
    hospital: 'AIG Hospitals, Gachibowli',
    distance: 3.9,
    available: false,
    rating: 4.9,
    photoURL: 'https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '7',
    name: 'Dr. Venkatesh Kumar',
    specialization: 'Dermatologist',
    hospital: 'Medicover Hospitals, Hitec City',
    distance: 2.8,
    available: true,
    rating: 4.7,
    photoURL: 'https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '8',
    name: 'Dr. Parasuram Kumar',
    specialization: 'Vascular Surgeon',
    hospital: 'KIMS Hospital, Secunderabad',
    distance: 3.2,
    available: true,
    rating: 4.8,
    photoURL: 'https://images.pexels.com/photos/5214976/pexels-photo-5214976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '9',
    name: 'Dr. Aithika Rao',
    specialization: 'Orthopedic Surgeon',
    hospital: 'Apollo Hospitals, Jubilee Hills',
    distance: 4.1,
    available: true,
    rating: 4.9,
    photoURL: 'https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const findDoctorsBySpecialization = (specialization: string): Doctor[] => {
  return doctors
    .filter(doctor => doctor.specialization === specialization)
    .sort((a, b) => a.distance - b.distance);
};

export const findNearbyDoctors = (): Doctor[] => {
  return [...doctors].sort((a, b) => a.distance - b.distance);
};