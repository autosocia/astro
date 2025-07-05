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

export interface PlanetaryPosition {
  planet: string;
  sign: string;
  longitude: string;
  nakshatra: string;
  pada: number;
  relation?: string;
  house?: number;
  aspects?: string;
  aspectedBy?: string;
  notes?: string;
}

export interface DashaPeriod {
  planet: string;
  startDate: string;
  endDate: string;
  duration: string;
}

export interface KarakData {
  type: 'Sthir' | 'Chara';
  atma: string;
  amatya: string;
  bhratru: string;
  matru: string;
  pitru: string;
  putra: string;
  gnati: string;
  dara: string;
}

export interface AvasthaData {
  planet: string;
  jagrat: string;
  baladi: string;
  deeptadi: string;
}