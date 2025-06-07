import { Medication } from '../types';

export const medications: Medication[] = [
  {
    id: '1',
    name: 'Paracetamol (Acetaminophen)',
    description: 'Pain reliever and fever reducer.',
    dosage: 'Adults: 500-1000mg every 4-6 hours as needed, not exceeding 4000mg per day.',
    forSymptoms: ['Headache', 'Fever', 'Muscle Pain']
  },
  {
    id: '2',
    name: 'Ibuprofen',
    description: 'Non-steroidal anti-inflammatory drug (NSAID) that reduces pain, inflammation, and fever.',
    dosage: 'Adults: 200-400mg every 4-6 hours as needed, not exceeding 1200mg per day.',
    forSymptoms: ['Headache', 'Fever', 'Joint Pain', 'Muscle Pain', 'Inflammation']
  },
  {
    id: '3',
    name: 'Loratadine',
    description: 'Antihistamine that reduces symptoms of allergies.',
    dosage: 'Adults: 10mg once daily.',
    forSymptoms: ['Runny nose', 'Sneezing', 'Itching', 'Rash']
  },
  {
    id: '4',
    name: 'Dextromethorphan',
    description: 'Cough suppressant.',
    dosage: 'Adults: 10-30mg every 4-8 hours as needed, not exceeding 120mg per day.',
    forSymptoms: ['Cough']
  },
  {
    id: '5',
    name: 'Loperamide',
    description: 'Anti-diarrheal medication.',
    dosage: 'Adults: Initially 4mg, followed by 2mg after each loose stool, not exceeding 8mg per day.',
    forSymptoms: ['Diarrhea']
  },
  {
    id: '6',
    name: 'Diphenhydramine',
    description: 'Antihistamine that relieves allergy symptoms and helps with sleep.',
    dosage: 'Adults: 25-50mg every 4-6 hours as needed, not exceeding 300mg per day.',
    forSymptoms: ['Rash', 'Itching', 'Difficulty sleeping']
  },
  {
    id: '7',
    name: 'Omeprazole',
    description: 'Proton pump inhibitor that reduces stomach acid.',
    dosage: 'Adults: 20mg once daily.',
    forSymptoms: ['Heartburn', 'Acid reflux', 'Stomach pain']
  }
];

// Find medications for specific symptoms
export const findMedicationsForSymptoms = (symptoms: string[]): Medication[] => {
  return medications.filter(medication => 
    medication.forSymptoms.some(medicationSymptom => 
      symptoms.some(symptom => 
        medicationSymptom.toLowerCase().includes(symptom.toLowerCase())
      )
    )
  );
};