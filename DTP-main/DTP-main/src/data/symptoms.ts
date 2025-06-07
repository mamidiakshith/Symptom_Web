import { Symptom } from '../types';

export const symptoms: Symptom[] = [
  {
    id: '1',
    name: 'Headache',
    bodyPart: 'head',
    severity: 'moderate',
    duration: 'few hours to days'
  },
  {
    id: '2',
    name: 'Fever',
    bodyPart: 'general',
    severity: 'moderate',
    duration: 'hours to days'
  },
  {
    id: '3',
    name: 'Cough',
    bodyPart: 'chest',
    severity: 'mild',
    duration: 'days to weeks'
  },
  {
    id: '4',
    name: 'Sore Throat',
    bodyPart: 'head',
    severity: 'mild',
    duration: 'days'
  },
  {
    id: '5',
    name: 'Shortness of Breath',
    bodyPart: 'chest',
    severity: 'severe',
    duration: 'minutes to hours'
  },
  {
    id: '6',
    name: 'Chest Pain',
    bodyPart: 'chest',
    severity: 'severe',
    duration: 'minutes to hours'
  },
  {
    id: '7',
    name: 'Abdominal Pain',
    bodyPart: 'abdomen',
    severity: 'moderate',
    duration: 'hours to days'
  },
  {
    id: '8',
    name: 'Nausea',
    bodyPart: 'abdomen',
    severity: 'moderate',
    duration: 'hours to days'
  },
  {
    id: '9',
    name: 'Vomiting',
    bodyPart: 'abdomen',
    severity: 'moderate',
    duration: 'minutes to days'
  },
  {
    id: '10',
    name: 'Diarrhea',
    bodyPart: 'abdomen',
    severity: 'moderate',
    duration: 'hours to days'
  },
  {
    id: '11',
    name: 'Rash',
    bodyPart: 'skin',
    severity: 'mild',
    duration: 'days to weeks'
  },
  {
    id: '12',
    name: 'Joint Pain',
    bodyPart: 'general',
    severity: 'moderate',
    duration: 'days to weeks'
  },
  {
    id: '13',
    name: 'Muscle Pain',
    bodyPart: 'general',
    severity: 'moderate',
    duration: 'days to weeks'
  },
  {
    id: '14',
    name: 'Fatigue',
    bodyPart: 'general',
    severity: 'moderate',
    duration: 'days to weeks'
  },
  {
    id: '15',
    name: 'Dizziness',
    bodyPart: 'head',
    severity: 'moderate',
    duration: 'minutes to hours'
  },
  // Back symptoms
  {
    id: '16',
    name: 'Lower Back Pain',
    bodyPart: 'back',
    severity: 'moderate',
    duration: 'days to weeks'
  },
  {
    id: '17',
    name: 'Upper Back Pain',
    bodyPart: 'back',
    severity: 'moderate',
    duration: 'days to weeks'
  },
  {
    id: '18',
    name: 'Spine Tenderness',
    bodyPart: 'back',
    severity: 'moderate',
    duration: 'days to weeks'
  },
  // Arm symptoms
  {
    id: '19',
    name: 'Arm Weakness',
    bodyPart: 'arms',
    severity: 'moderate',
    duration: 'hours to days'
  },
  {
    id: '20',
    name: 'Arm Numbness',
    bodyPart: 'arms',
    severity: 'moderate',
    duration: 'minutes to days'
  },
  {
    id: '21',
    name: 'Arm Pain',
    bodyPart: 'arms',
    severity: 'moderate',
    duration: 'hours to days'
  },
  // Leg symptoms
  {
    id: '22',
    name: 'Leg Pain',
    bodyPart: 'legs',
    severity: 'moderate',
    duration: 'hours to days'
  },
  {
    id: '23',
    name: 'Leg Swelling',
    bodyPart: 'legs',
    severity: 'moderate',
    duration: 'hours to days'
  },
  {
    id: '24',
    name: 'Leg Numbness',
    bodyPart: 'legs',
    severity: 'moderate',
    duration: 'minutes to days'
  },
  {
    id: '25',
    name: 'Difficulty Walking',
    bodyPart: 'legs',
    severity: 'moderate',
    duration: 'hours to days'
  }
];

export const symptomsByBodyPart = symptoms.reduce((acc, symptom) => {
  if (!acc[symptom.bodyPart]) {
    acc[symptom.bodyPart] = [];
  }
  acc[symptom.bodyPart].push(symptom);
  return acc;
}, {} as Record<string, Symptom[]>);