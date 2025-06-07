import React, { createContext, useContext, useState } from 'react';
import { Disease, Doctor, Medication } from '../types';
import { findPotentialDiseases } from '../data/diseases';
import { findDoctorsBySpecialization, findNearbyDoctors } from '../data/doctors';
import { findMedicationsForSymptoms } from '../data/medications';

interface SymptomContextType {
  selectedSymptoms: string[];
  potentialDiseases: Disease[];
  recommendedDoctors: Doctor[];
  recommendedMedications: Medication[];
  addSymptom: (symptom: string) => void;
  removeSymptom: (symptom: string) => void;
  clearSymptoms: () => void;
  analyzeSymptoms: () => void;
}

const SymptomContext = createContext<SymptomContextType | undefined>(undefined);

export const useSymptoms = () => {
  const context = useContext(SymptomContext);
  if (context === undefined) {
    throw new Error('useSymptoms must be used within a SymptomProvider');
  }
  return context;
};

export const SymptomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [potentialDiseases, setPotentialDiseases] = useState<Disease[]>([]);
  const [recommendedDoctors, setRecommendedDoctors] = useState<Doctor[]>([]);
  const [recommendedMedications, setRecommendedMedications] = useState<Medication[]>([]);

  const addSymptom = (symptom: string) => {
    if (!selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const removeSymptom = (symptom: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
  };

  const clearSymptoms = () => {
    setSelectedSymptoms([]);
    setPotentialDiseases([]);
    setRecommendedDoctors([]);
    setRecommendedMedications([]);
  };

  const analyzeSymptoms = () => {
    // Find potential diseases based on symptoms
    const diseases = findPotentialDiseases(selectedSymptoms);
    setPotentialDiseases(diseases);

    // Find recommended doctors
    let doctors: Doctor[] = [];
    if (diseases.length > 0) {
      const specialization = diseases[0].specialistType;
      doctors = findDoctorsBySpecialization(specialization);
      
      // If no specialists found, recommend nearby doctors
      if (doctors.length === 0) {
        doctors = findNearbyDoctors();
      }
    } else {
      doctors = findNearbyDoctors();
    }
    setRecommendedDoctors(doctors);

    // Find recommended medications
    const medications = findMedicationsForSymptoms(selectedSymptoms);
    setRecommendedMedications(medications);
  };

  return (
    <SymptomContext.Provider
      value={{
        selectedSymptoms,
        potentialDiseases,
        recommendedDoctors,
        recommendedMedications,
        addSymptom,
        removeSymptom,
        clearSymptoms,
        analyzeSymptoms
      }}
    >
      {children}
    </SymptomContext.Provider>
  );
};