import { Disease } from '../types';

export const diseases: Disease[] = [
  {
    id: '1',
    name: 'Common Cold',
    description: 'A viral infection of the upper respiratory tract affecting the nose and throat.',
    commonSymptoms: ['Runny nose', 'Sore throat', 'Cough', 'Congestion', 'Sneezing'],
    severity: 'low',
    specialistType: 'General Practitioner'
  },
  {
    id: '2',
    name: 'Influenza (Flu)',
    description: 'A contagious respiratory illness caused by influenza viruses.',
    commonSymptoms: ['Fever', 'Cough', 'Sore throat', 'Muscle aches', 'Fatigue', 'Headache'],
    severity: 'medium',
    specialistType: 'General Practitioner'
  },
  {
    id: '3',
    name: 'COVID-19',
    description: 'A respiratory illness caused by the SARS-CoV-2 virus.',
    commonSymptoms: ['Fever', 'Cough', 'Shortness of breath', 'Fatigue', 'Loss of taste or smell'],
    severity: 'high',
    specialistType: 'Infectious Disease Specialist'
  },
  {
    id: '4',
    name: 'Migraine',
    description: 'A neurological condition characterized by recurring headaches.',
    commonSymptoms: ['Headache', 'Nausea', 'Sensitivity to light and sound', 'Visual disturbances'],
    severity: 'medium',
    specialistType: 'Neurologist'
  },
  {
    id: '5',
    name: 'Gastroenteritis',
    description: 'Inflammation of the stomach and intestines, often due to viral or bacterial infection.',
    commonSymptoms: ['Diarrhea', 'Nausea', 'Vomiting', 'Abdominal pain', 'Fever'],
    severity: 'medium',
    specialistType: 'Gastroenterologist'
  },
  {
    id: '6',
    name: 'Asthma',
    description: 'A condition affecting the airways of the lungs causing breathing difficulty.',
    commonSymptoms: ['Shortness of breath', 'Wheezing', 'Chest tightness', 'Cough'],
    severity: 'medium',
    specialistType: 'Pulmonologist'
  },
  {
    id: '7',
    name: 'Hypertension',
    description: 'High blood pressure that can lead to serious health issues if left untreated.',
    commonSymptoms: ['Headache', 'Dizziness', 'Chest pain', 'Shortness of breath'],
    severity: 'high',
    specialistType: 'Cardiologist'
  },
  {
    id: '8',
    name: 'Dermatitis',
    description: 'Inflammation of the skin causing itchy, red rash.',
    commonSymptoms: ['Rash', 'Itching', 'Redness', 'Dry skin'],
    severity: 'low',
    specialistType: 'Dermatologist'
  },
  {
    id: '9',
    name: 'Deep Vein Thrombosis',
    description: 'A blood clot that forms in a deep vein, usually in the legs.',
    commonSymptoms: ['Leg Pain', 'Leg Swelling', 'Leg Numbness', 'Difficulty Walking'],
    severity: 'high',
    specialistType: 'Vascular Surgeon'
  },
  {
    id: '10',
    name: 'Carpal Tunnel Syndrome',
    description: 'A condition causing numbness and tingling in the hand and arm.',
    commonSymptoms: ['Arm Numbness', 'Arm Pain', 'Arm Weakness'],
    severity: 'medium',
    specialistType: 'Orthopedic Surgeon'
  },
  {
    id: '11',
    name: 'Lumbar Strain',
    description: 'An injury to the lower back muscles and tendons.',
    commonSymptoms: ['Lower Back Pain', 'Spine Tenderness', 'Difficulty Walking'],
    severity: 'medium',
    specialistType: 'Orthopedic Surgeon'
  }
];

export const findPotentialDiseases = (selectedSymptoms: string[]): Disease[] => {
  return diseases.filter(disease => {
    const matchedSymptoms = disease.commonSymptoms.filter(symptom => 
      selectedSymptoms.some(s => symptom.toLowerCase().includes(s.toLowerCase()))
    );
    return matchedSymptoms.length > 0;
  }).sort((a, b) => {
    const matchCountA = a.commonSymptoms.filter(symptom => 
      selectedSymptoms.some(s => symptom.toLowerCase().includes(s.toLowerCase()))
    ).length;
    
    const matchCountB = b.commonSymptoms.filter(symptom => 
      selectedSymptoms.some(s => symptom.toLowerCase().includes(s.toLowerCase()))
    ).length;
    
    return matchCountB - matchCountA;
  });
};