import { UserBirthData, PlanetaryPosition, DashaPeriod, KarakData, AvasthaData } from '../types/astrology';

// Sample data for demonstration - in production, this would come from an astrology API
export const getSamplePlanetaryPositions = (birthData: UserBirthData): PlanetaryPosition[] => {
  return [
    {
      planet: 'Asc',
      sign: 'Virgo',
      longitude: '24-23-47',
      nakshatra: 'Chitra',
      pada: 1
    },
    {
      planet: 'Sun',
      sign: 'Gemini',
      longitude: '19-20-08',
      nakshatra: 'Ardra',
      pada: 4,
      relation: 'Neutral',
      house: 10,
      aspects: '4th',
      aspectedBy: 'Rahu',
      notes: '12th lord, 10th house'
    },
    {
      planet: 'Moon',
      sign: 'Libra',
      longitude: '16-32-21',
      nakshatra: 'Swati',
      pada: 3,
      relation: 'Neutral',
      house: 2,
      aspects: '8th',
      aspectedBy: 'Jupiter, Rahu',
      notes: '11th lord, 2nd house'
    },
    {
      planet: 'Mars',
      sign: 'Leo',
      longitude: '16-04-48',
      nakshatra: 'Purvaphalguni',
      pada: 1,
      relation: 'Friendly',
      house: 12,
      aspects: '3rd, 6th, 7th',
      aspectedBy: 'Rahu',
      notes: '8th/3rd lord, 12th house'
    },
    {
      planet: 'Mercury',
      sign: 'Cancer',
      longitude: '15-13-56',
      nakshatra: 'Pashyami',
      pada: 4,
      relation: 'Enemy',
      house: 11,
      aspects: '5th',
      notes: '10th/1st lord, 11th house'
    },
    {
      planet: 'Jupiter',
      sign: 'Gemini',
      longitude: '11-32-45',
      nakshatra: 'Ardra',
      pada: 2,
      relation: 'Enemy',
      house: 10,
      aspects: '2nd, 4th, 6th',
      aspectedBy: 'Rahu',
      notes: '4th/7th lord, 10th house'
    },
    {
      planet: 'Venus',
      sign: 'Taurus',
      longitude: '06-31-32',
      nakshatra: 'Krittika',
      pada: 3,
      relation: 'Own',
      house: 9,
      aspects: '3rd',
      aspectedBy: 'Saturn',
      notes: '9th/2nd lord, 9th house'
    },
    {
      planet: 'Saturn',
      sign: 'Pisces',
      longitude: '07-39-26',
      nakshatra: 'Uttarabhadra',
      pada: 2,
      relation: 'Neutral',
      house: 7,
      aspects: '9th, 1st, 4th',
      aspectedBy: 'Mars',
      notes: '5th/6th lord, 7th house'
    },
    {
      planet: 'Rahu',
      sign: 'Aquarius',
      longitude: '27-27-57',
      nakshatra: 'Purvabhadra',
      pada: 3,
      house: 6,
      aspects: '10th, 12th, 2nd',
      aspectedBy: 'Mars, Jupiter, Ketu',
      notes: '6th house'
    },
    {
      planet: 'Ketu',
      sign: 'Leo',
      longitude: '27-27-57',
      nakshatra: 'Uttaraphal',
      pada: 1,
      house: 12,
      aspects: '4th, 6th, 8th',
      aspectedBy: 'Rahu',
      notes: '12th house'
    },
    {
      planet: 'Uranus',
      sign: 'Taurus',
      longitude: '05-44-35',
      nakshatra: 'Krittika',
      pada: 3,
      house: 9,
      aspects: '3rd',
      aspectedBy: 'Saturn'
    },
    {
      planet: 'Neptune',
      sign: 'Pisces',
      longitude: '07-53-48',
      nakshatra: 'Uttarabhadra',
      pada: 2,
      house: 7,
      aspects: '1st',
      aspectedBy: 'Mars'
    },
    {
      planet: 'Pluto',
      sign: 'Capricorn',
      longitude: '08-37-39',
      nakshatra: 'Uttarashadha',
      pada: 4,
      house: 5,
      aspects: '11th',
      aspectedBy: 'Mercury'
    }
  ];
};

export const getVimshottariDasha = (birthData: UserBirthData): { balance: string; periods: DashaPeriod[] } => {
  return {
    balance: 'RAHU 4 Y 8 M 2 D',
    periods: [
      { planet: 'Rahu', startDate: '7/3/2025', endDate: '7/3/2030', duration: '5 years' },
      { planet: 'Jupiter', startDate: '7/3/2030', endDate: '7/3/2046', duration: '16 years' },
      { planet: 'Saturn', startDate: '7/3/2046', endDate: '7/3/2065', duration: '19 years' },
      { planet: 'Mercury', startDate: '7/3/2065', endDate: '7/3/2082', duration: '17 years' },
      { planet: 'Ketu', startDate: '7/3/2082', endDate: '7/3/2089', duration: '7 years' },
      { planet: 'Venus', startDate: '7/3/2089', endDate: '7/3/2109', duration: '20 years' },
      { planet: 'Sun', startDate: '7/3/2109', endDate: '7/3/2115', duration: '6 years' },
      { planet: 'Moon', startDate: '7/3/2115', endDate: '7/3/2125', duration: '10 years' },
      { planet: 'Mars', startDate: '7/3/2125', endDate: '7/3/2132', duration: '7 years' }
    ]
  };
};

export const getKarakData = (birthData: UserBirthData): { sthir: KarakData; chara: KarakData } => {
  return {
    sthir: {
      type: 'Sthir',
      atma: 'Sun',
      amatya: 'Mercury',
      bhratru: 'Mars',
      matru: 'Moon',
      pitru: 'Jupiter',
      putra: 'Jupiter',
      gnati: 'Mars',
      dara: 'Venus'
    },
    chara: {
      type: 'Chara',
      atma: 'Sun',
      amatya: 'Moon',
      bhratru: 'Mercury',
      matru: 'Mars',
      pitru: 'Jupiter',
      putra: 'Venus',
      gnati: 'Saturn',
      dara: 'Rahu'
    }
  };
};

export const getAvasthaData = (birthData: UserBirthData): AvasthaData[] => {
  return [
    { planet: 'Sun', jagrat: 'Swapna', baladi: 'Vradha', deeptadi: 'Khal' },
    { planet: 'Moon', jagrat: 'Jagrat', baladi: 'Bal', deeptadi: 'Deepta' },
    { planet: 'Mars', jagrat: 'Swapna', baladi: 'Yuva', deeptadi: 'Shant' },
    { planet: 'Mercury', jagrat: 'Jagrat', baladi: 'Bal', deeptadi: 'Deepta' },
    { planet: 'Jupiter', jagrat: 'Jagrat', baladi: 'Yuva', deeptadi: 'Deepta' },
    { planet: 'Venus', jagrat: 'Swapna', baladi: 'Bal', deeptadi: 'Shant' },
    { planet: 'Saturn', jagrat: 'Sushupti', baladi: 'Vradha', deeptadi: 'Khal' }
  ];
};

export const calculateAstrologyData = (birthData: UserBirthData) => {
  // In a real application, this would make API calls to astrology calculation services
  return {
    planetaryPositions: getSamplePlanetaryPositions(birthData),
    vimshottariDasha: getVimshottariDasha(birthData),
    karakData: getKarakData(birthData),
    avasthaData: getAvasthaData(birthData)
  };
};