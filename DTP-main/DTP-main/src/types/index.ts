export interface User {
  id: string;
  name: string;
  email: string;
  photoURL: string;
}

export interface Symptom {
  id: string;
  name: string;
  bodyPart: BodyPart;
  severity: 'mild' | 'moderate' | 'severe';
  duration: string;
}

export type BodyPart = 
  | 'head' 
  | 'chest' 
  | 'abdomen' 
  | 'back' 
  | 'arms' 
  | 'legs' 
  | 'skin' 
  | 'general';

export interface Disease {
  id: string;
  name: string;
  description: string;
  commonSymptoms: string[];
  severity: 'low' | 'medium' | 'high';
  specialistType: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  hospital: string;
  distance: number; // in kilometers
  available: boolean;
  rating: number;
  photoURL: string;
}

export interface MedicalAssistant {
  id: string;
  name: string;
  contactNumber: string;
  available: boolean;
  availableHours: string;
}

export interface Medication {
  id: string;
  name: string;
  description: string;
  dosage: string;
  forSymptoms: string[];
}