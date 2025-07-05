export interface UserBirthData {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  latitude?: number;
  longitude?: number;
}

export interface SavedPerson {
  id: string;
  name: string;
  birthData: UserBirthData;
  createdAt: string;
}

export interface LifePrediction {
  character: string;
  happinessAndFulfillment: string;
  lifeStyle: string;
}

export interface PredictionData {
  person: SavedPerson;
  predictions: LifePrediction;
  generatedAt: string;
}