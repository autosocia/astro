import { PersonDetails, GunaScore, MatchingResult } from '../types/matchmaking';

// Mock Guna Milan calculations - in production, integrate with astrology API
export const calculateGunaScores = (boy: PersonDetails, girl: PersonDetails): GunaScore[] => {
  // Sample calculations based on names and birth details
  // In real implementation, this would use complex Vedic astrology algorithms
  
  const gunas: GunaScore[] = [
    {
      guna: 'Varna',
      boy: 'Sudra',
      girl: 'Sudra',
      maximum: 1,
      obtained: 1,
      areaOfLife: 'Work',
      interpretation: 'Both belong to the same Varna, indicating harmonious merge of thoughts and ideas. This creates good harmony in professional and social life.'
    },
    {
      guna: 'Vasya',
      boy: 'Manav',
      girl: 'Manav',
      maximum: 2,
      obtained: 2,
      areaOfLife: 'Dominance',
      interpretation: 'Same Vasya indicates mutual support and understanding. Both partners will have long healthy life with mutual respect and care.'
    },
    {
      guna: 'Tara',
      boy: 'Sampat',
      girl: 'Sampat',
      maximum: 3,
      obtained: 3,
      areaOfLife: 'Destiny',
      interpretation: 'Best compatible Tara indicates excellent bonding and understanding. This brings prosperity and good fortune to the couple.'
    },
    {
      guna: 'Yoni',
      boy: 'Mahis',
      girl: 'Mahis',
      maximum: 4,
      obtained: 4,
      areaOfLife: 'Mentality',
      interpretation: 'Same Yoni indicates fair compatibility and understanding. This brings financial happiness and mental peace to the relationship.'
    },
    {
      guna: 'Maitri',
      boy: 'Venus',
      girl: 'Venus',
      maximum: 5,
      obtained: 5,
      areaOfLife: 'Compatibility',
      interpretation: 'Same ruling planet indicates full support and understanding. This creates deep emotional bond and mutual respect.'
    },
    {
      guna: 'Gana',
      boy: 'Devta',
      girl: 'Devta',
      maximum: 6,
      obtained: 6,
      areaOfLife: 'Guna Level',
      interpretation: 'Both are peace-loving and spiritual. This creates good harmony and understanding in the relationship with shared values.'
    },
    {
      guna: 'Bhakoot',
      boy: 'Libra',
      girl: 'Libra',
      maximum: 7,
      obtained: 7,
      areaOfLife: 'Love',
      interpretation: 'Same Rashi indicates sensible rapport and understanding. This creates a beautiful home environment with mutual love and care.'
    },
    {
      guna: 'Nadi',
      boy: 'Antya',
      girl: 'Antya',
      maximum: 8,
      obtained: 0,
      areaOfLife: 'Health',
      interpretation: 'Same Nadi has negative effect on health and progeny. This may cause ego clashes and health issues. Remedies are recommended.'
    }
  ];

  return gunas;
};

export const calculateMatchingResult = (gunaScores: GunaScore[]): MatchingResult => {
  const totalObtained = gunaScores.reduce((sum, guna) => sum + guna.obtained, 0);
  const maxPossible = gunaScores.reduce((sum, guna) => sum + guna.maximum, 0);
  
  let compatibility: 'Excellent' | 'Good' | 'Average' | 'Poor';
  let conclusion: string;
  
  if (totalObtained >= 28) {
    compatibility = 'Excellent';
    conclusion = 'This Marriage Is Highly Recommended';
  } else if (totalObtained >= 24) {
    compatibility = 'Good';
    conclusion = 'This Marriage Is Preferable';
  } else if (totalObtained >= 18) {
    compatibility = 'Average';
    conclusion = 'This Marriage Requires Careful Consideration';
  } else {
    compatibility = 'Poor';
    conclusion = 'This Marriage Is Not Recommended';
  }

  return {
    totalScore: totalObtained,
    maxScore: maxPossible,
    mangalDosha: 'Low Mangal Dosha',
    conclusion,
    compatibility
  };
};