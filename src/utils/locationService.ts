import { LocationData } from '../types/matchmaking';

// Mock geolocation service - in production, use Google Maps API or similar
export const getLocationData = async (place: string): Promise<LocationData | null> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock location data for common Indian cities
  const locationMap: Record<string, LocationData> = {
    'new delhi': { latitude: 28.6139, longitude: 77.2090, timeZone: 5.5 },
    'delhi': { latitude: 28.6500, longitude: 77.2167, timeZone: 5.5 },
    'mumbai': { latitude: 19.0760, longitude: 72.8777, timeZone: 5.5 },
    'bangalore': { latitude: 12.9716, longitude: 77.5946, timeZone: 5.5 },
    'chennai': { latitude: 13.0827, longitude: 80.2707, timeZone: 5.5 },
    'kolkata': { latitude: 22.5726, longitude: 88.3639, timeZone: 5.5 },
    'hyderabad': { latitude: 17.3850, longitude: 78.4867, timeZone: 5.5 },
    'pune': { latitude: 18.5204, longitude: 73.8567, timeZone: 5.5 },
    'ahmedabad': { latitude: 23.0225, longitude: 72.5714, timeZone: 5.5 },
    'jaipur': { latitude: 26.9124, longitude: 75.7873, timeZone: 5.5 }
  };

  const normalizedPlace = place.toLowerCase().trim();
  return locationMap[normalizedPlace] || null;
};

export const formatCoordinate = (value: number, isLongitude: boolean): string => {
  const degrees = Math.floor(Math.abs(value));
  const minutes = Math.floor((Math.abs(value) - degrees) * 60);
  const direction = isLongitude 
    ? (value >= 0 ? 'E' : 'W')
    : (value >= 0 ? 'N' : 'S');
  
  return `${degrees}${direction}${minutes.toString().padStart(2, '0')}`;
};