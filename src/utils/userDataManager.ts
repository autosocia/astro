import { SavedPerson, UserBirthData } from '../types/astrology';

const STORAGE_KEY = 'savedPersons';

export const getSavedPersons = (): SavedPerson[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading saved persons:', error);
    return [];
  }
};

export const savePerson = (birthData: UserBirthData): SavedPerson => {
  const newPerson: SavedPerson = {
    id: Date.now().toString(),
    name: birthData.name,
    birthData,
    createdAt: new Date().toISOString()
  };

  const savedPersons = getSavedPersons();
  savedPersons.push(newPerson);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedPersons));
  } catch (error) {
    console.error('Error saving person:', error);
  }

  return newPerson;
};

export const deletePerson = (id: string): void => {
  const savedPersons = getSavedPersons();
  const filteredPersons = savedPersons.filter(person => person.id !== id);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredPersons));
  } catch (error) {
    console.error('Error deleting person:', error);
  }
};

export const updatePerson = (id: string, birthData: UserBirthData): SavedPerson | null => {
  const savedPersons = getSavedPersons();
  const personIndex = savedPersons.findIndex(person => person.id === id);
  
  if (personIndex === -1) return null;

  savedPersons[personIndex] = {
    ...savedPersons[personIndex],
    name: birthData.name,
    birthData
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedPersons));
    return savedPersons[personIndex];
  } catch (error) {
    console.error('Error updating person:', error);
    return null;
  }
};