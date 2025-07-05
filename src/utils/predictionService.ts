import { UserBirthData, LifePrediction } from '../types/lifePrediction';

// Mock prediction service - in production, integrate with AI astrology API
export const generateLifePredictions = async (birthData: UserBirthData): Promise<LifePrediction> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Template predictions based on the example for Sarthak
  // In production, this would use AI to generate personalized predictions
  const predictions: LifePrediction = {
    character: `${birthData.name}, You are a very practical person and equally capable. You are very tidy by nature, you love order and are methodical. It is even possible that these qualities are too highly developed in you, and it may be that while attending to minute details, you lose some of the larger opportunities of life. You are sensitive and generous. Were you to hear of a case of want or somebody in dire distress, it is unthinkable that you would pass by and not hold out a helping hand. You are a hesitant person. Though you have the qualities for making your way in the world and it is within your powers to climb high up the ladder of success, the necessary qualities to carry you through and while you are wondering some more pushing but less well-equipped person steps into your place. Therefore do not think much of your mythical limitations. Take it for granted that you will succeed and you will. You are calculative and realistic. You always want to achieve something. There is some deep desire burning in your heart to achieve something. This makes you restless at times. However, you will always have proud on your achievements.`,
    
    happinessAndFulfillment: `${birthData.name}, Expecting too much too soon, you are under tremendous inner tension and are too stubborn to compromise. Extremely nervous, you scatter your energies by doing too many things at once and rarely complete anything, for there is always something new to discover. At later part of your age, you may experience migraine headaches and must learn to relax. Any sort of combined physical and mental discipline such as yoga is an excellent remedy.`,
    
    lifeStyle: `${birthData.name}, You feel that others will regard you with esteem only if you have acquired wealth and material possessions. This is not true, so pursue your goals which are in harmony with what you really want to do.`
  };

  return predictions;
};

// Generate variations based on birth details for more personalized predictions
export const getPersonalizedPredictions = (birthData: UserBirthData): LifePrediction => {
  const birthMonth = new Date(birthData.dateOfBirth).getMonth() + 1;
  const birthDay = new Date(birthData.dateOfBirth).getDate();
  
  // Simple personalization based on birth month and day
  const personalityTraits = getPersonalityTraits(birthMonth, birthDay);
  const lifeThemes = getLifeThemes(birthMonth);
  
  return {
    character: `${birthData.name}, ${personalityTraits.character} You are born with natural ${personalityTraits.strengths}, but you may sometimes struggle with ${personalityTraits.challenges}. Your methodical nature and attention to detail make you reliable and trustworthy. You have a generous heart and cannot ignore the suffering of others. While you possess all the qualities needed for success, your hesitant nature sometimes holds you back. Remember that confidence is key to unlocking your potential. You are calculative and realistic, always striving to achieve your goals. This inner drive sometimes makes you restless, but it also ensures you take pride in your accomplishments.`,
    
    happinessAndFulfillment: `${birthData.name}, ${lifeThemes.happiness} You tend to expect too much too soon, creating inner tension and making you stubborn about compromising. Your energetic nature leads you to take on multiple projects simultaneously, but this can prevent you from completing tasks effectively. ${lifeThemes.health} Learning to relax and practice mindfulness will be crucial for your well-being. Consider incorporating yoga, meditation, or other mind-body practices into your routine.`,
    
    lifeStyle: `${birthData.name}, ${lifeThemes.lifestyle} You may feel that material wealth and possessions define your worth in others' eyes, but this is a misconception. True fulfillment comes from pursuing goals that align with your authentic desires and values. Focus on what genuinely matters to you rather than external validation.`
  };
};

const getPersonalityTraits = (month: number, day: number) => {
  const traits = {
    character: "You are a practical and capable individual with a natural inclination towards order and methodology.",
    strengths: "analytical thinking and organizational skills",
    challenges: "perfectionism and overthinking"
  };

  // Customize based on birth month
  if (month >= 3 && month <= 5) { // Spring
    traits.strengths = "creativity and fresh perspectives";
    traits.challenges = "impatience and restlessness";
  } else if (month >= 6 && month <= 8) { // Summer
    traits.strengths = "leadership and confidence";
    traits.challenges = "stubbornness and pride";
  } else if (month >= 9 && month <= 11) { // Autumn
    traits.strengths = "wisdom and analytical thinking";
    traits.challenges = "overthinking and pessimism";
  } else { // Winter
    traits.strengths = "determination and resilience";
    traits.challenges = "isolation and rigidity";
  }

  return traits;
};

const getLifeThemes = (month: number) => {
  const themes = {
    happiness: "Your emotional well-being is closely tied to your sense of accomplishment and progress.",
    health: "Pay attention to stress-related health issues, particularly headaches and tension.",
    lifestyle: "Balance is key to your happiness and success."
  };

  // Customize based on birth month
  if (month >= 3 && month <= 5) {
    themes.happiness = "You find joy in new beginnings and creative endeavors.";
    themes.health = "Your energy levels fluctuate with the seasons, requiring consistent self-care.";
  } else if (month >= 6 && month <= 8) {
    themes.happiness = "Social connections and recognition fuel your happiness.";
    themes.health = "High energy levels may lead to burnout if not properly managed.";
  } else if (month >= 9 && month <= 11) {
    themes.happiness = "Deep thinking and meaningful conversations bring you fulfillment.";
    themes.health = "Mental health requires as much attention as physical health.";
  } else {
    themes.happiness = "Quiet reflection and steady progress bring you peace.";
    themes.health = "Winter blues and seasonal changes may affect your mood.";
  }

  return themes;
};