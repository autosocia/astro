export interface PersonDetails {
  name: string;
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
  second: number;
  place: string;
  longitude: string;
  latitude: string;
  dstCorrection: number;
  timeZone: number;
}

export interface BirthDetails {
  name: string;
  dateTime: string;
  place: string;
  longitude: string;
  latitude: string;
  timeZone: number;
}

export interface GunaScore {
  guna: string;
  boy: string;
  girl: string;
  maximum: number;
  obtained: number;
  areaOfLife: string;
  interpretation: string;
}

export interface MatchingResult {
  totalScore: number;
  maxScore: number;
  mangalDosha: string;
  conclusion: string;
  compatibility: 'Excellent' | 'Good' | 'Average' | 'Poor';
}

export interface LocationData {
  latitude: number;
  longitude: number;
  timeZone: number;
}