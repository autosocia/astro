import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Star, 
  Calendar, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Share2, 
  Phone, 
  MessageCircle, 
  Search, 
  Save, 
  Printer as Print, 
  Settings, 
  Sparkles, 
  BookOpen, 
  Gem, 
  Shield, 
  TrendingUp, 
  FileText, 
  Gift, 
  Home, 
  AlertTriangle,
  User,
  Calculator,
  Eye
} from 'lucide-react';

interface PersonDetails {
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

interface BirthDetails {
  name: string;
  dateTime: string;
  place: string;
  longitude: string;
  latitude: string;
  timeZone: number;
}

interface GunaScore {
  guna: string;
  boy: string;
  girl: string;
  maximum: number;
  obtained: number;
  areaOfLife: string;
  interpretation: string;
}

interface MatchingResult {
  totalScore: number;
  maxScore: number;
  mangalDosha: string;
  conclusion: string;
  compatibility: 'Excellent' | 'Good' | 'Average' | 'Poor';
}

interface LocationData {
  latitude: number;
  longitude: number;
  timeZone: number;
}

const MatchmakingPage = () => {
  const [boyDetails, setBoyDetails] = useState<PersonDetails>({
    name: '',
    day: 0,
    month: 0,
    year: 0,
    hour: 0,
    minute: 0,
    second: 0,
    place: '',
    longitude: '',
    latitude: '',
    dstCorrection: 0,
    timeZone: 5.5
  });

  const [girlDetails, setGirlDetails] = useState<PersonDetails>({
    name: '',
    day: 0,
    month: 0,
    year: 0,
    hour: 0,
    minute: 0,
    second: 0,
    place: '',
    longitude: '',
    latitude: '',
    dstCorrection: 0,
    timeZone: 5.5
  });

  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gunaScores, setGunaScores] = useState<GunaScore[]>([]);
  const [matchingResult, setMatchingResult] = useState<MatchingResult | null>(null);
  const [boyFormOpen, setBoyFormOpen] = useState(true);
  const [girlFormOpen, setGirlFormOpen] = useState(false);
  const [expandedGuna, setExpandedGuna] = useState<string | null>(null);

  // Mock geolocation service
  const getLocationData = async (place: string): Promise<LocationData | null> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    
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

  const formatCoordinate = (value: number, isLongitude: boolean): string => {
    const degrees = Math.floor(Math.abs(value));
    const minutes = Math.floor((Math.abs(value) - degrees) * 60);
    const direction = isLongitude 
      ? (value >= 0 ? 'E' : 'W')
      : (value >= 0 ? 'N' : 'S');
    
    return `${degrees}${direction}${minutes.toString().padStart(2, '0')}`;
  };

  const getZodiacSign = (day: number, month: number): string => {
    const zodiacSigns = [
      { name: 'Capricorn', start: [12, 22], end: [1, 19] },
      { name: 'Aquarius', start: [1, 20], end: [2, 18] },
      { name: 'Pisces', start: [2, 19], end: [3, 20] },
      { name: 'Aries', start: [3, 21], end: [4, 19] },
      { name: 'Taurus', start: [4, 20], end: [5, 20] },
      { name: 'Gemini', start: [5, 21], end: [6, 20] },
      { name: 'Cancer', start: [6, 21], end: [7, 22] },
      { name: 'Leo', start: [7, 23], end: [8, 22] },
      { name: 'Virgo', start: [8, 23], end: [9, 22] },
      { name: 'Libra', start: [9, 23], end: [10, 22] },
      { name: 'Scorpio', start: [10, 23], end: [11, 21] },
      { name: 'Sagittarius', start: [11, 22], end: [12, 21] }
    ];

    for (const sign of zodiacSigns) {
      if (sign.name === 'Capricorn') {
        if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
          return sign.name;
        }
      } else {
        const [startMonth, startDay] = sign.start;
        const [endMonth, endDay] = sign.end;
        if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
          return sign.name;
        }
      }
    }
    return 'Unknown';
  };

  const calculateGunaScores = (boy: PersonDetails, girl: PersonDetails): GunaScore[] => {
    const boySign = getZodiacSign(boy.day, boy.month);
    const girlSign = getZodiacSign(girl.day, girl.month);
    
    const compatibilityFactor = boySign === girlSign ? 1 : 0.75;
    
    return [
      {
        guna: 'Varna',
        boy: 'Sudra',
        girl: 'Sudra',
        maximum: 1,
        obtained: Math.round(1 * compatibilityFactor),
        areaOfLife: 'Work',
        interpretation: 'Both belong to the same Varna, indicating harmonious merge of thoughts and ideas. This creates good harmony in professional and social life.'
      },
      {
        guna: 'Vasya',
        boy: 'Manav',
        girl: 'Manav',
        maximum: 2,
        obtained: Math.round(2 * compatibilityFactor),
        areaOfLife: 'Dominance',
        interpretation: 'Same Vasya indicates mutual support and understanding. Both partners will have long healthy life with mutual respect and care.'
      },
      {
        guna: 'Tara',
        boy: 'Sampat',
        girl: 'Sampat',
        maximum: 3,
        obtained: Math.round(3 * compatibilityFactor),
        areaOfLife: 'Destiny',
        interpretation: 'Best compatible Tara indicates excellent bonding and understanding. This brings prosperity and good fortune to the couple.'
      },
      {
        guna: 'Yoni',
        boy: 'Mahis',
        girl: 'Mahis',
        maximum: 4,
        obtained: Math.round(4 * compatibilityFactor),
        areaOfLife: 'Mentality',
        interpretation: 'Same Yoni indicates fair compatibility and understanding. This brings financial happiness and mental peace to the relationship.'
      },
      {
        guna: 'Graha Maitri',
        boy: 'Venus',
        girl: 'Venus',
        maximum: 5,
        obtained: Math.round(5 * compatibilityFactor),
        areaOfLife: 'Compatibility',
        interpretation: 'Same ruling planet indicates full support and understanding. This creates deep emotional bond and mutual respect.'
      },
      {
        guna: 'Gana',
        boy: 'Devta',
        girl: 'Devta',
        maximum: 6,
        obtained: Math.round(6 * compatibilityFactor),
        areaOfLife: 'Guna Level',
        interpretation: 'Both are peace-loving and spiritual. This creates good harmony and understanding in the relationship with shared values.'
      },
      {
        guna: 'Bhakoot',
        boy: boySign,
        girl: girlSign,
        maximum: 7,
        obtained: Math.round(7 * compatibilityFactor),
        areaOfLife: 'Love',
        interpretation: boySign === girlSign ? 'Same Rashi indicates sensible rapport and understanding. This creates a beautiful home environment with mutual love and care.' : 'Different Rashi may require understanding and adjustment for harmonious relationship.'
      },
      {
        guna: 'Nadi',
        boy: 'Antya',
        girl: 'Antya',
        maximum: 8,
        obtained: boySign === girlSign ? 0 : Math.round(8 * compatibilityFactor),
        areaOfLife: 'Health',
        interpretation: boySign === girlSign ? 'Same Nadi has negative effect on health and progeny. This may cause ego clashes and health issues. Remedies are recommended.' : 'Different Nadi indicates good health compatibility and progeny prospects.'
      }
    ];
  };

  const calculateMatchingResult = (gunaScores: GunaScore[]): MatchingResult => {
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

  const checkMangalDosha = (person: PersonDetails): string => {
    const mangalHouses = [0, 3, 6, 7, 11]; // 1st, 4th, 7th, 8th, 12th houses (0-indexed)
    const hourBasedHouse = person.hour % 12;
    
    if (mangalHouses.includes(hourBasedHouse)) {
      return `Mangal Dosha present in ${hourBasedHouse + 1}${hourBasedHouse === 0 ? 'st' : hourBasedHouse === 1 ? 'nd' : hourBasedHouse === 2 ? 'rd' : 'th'} house`;
    }
    return 'No Mangal Dosha';
  };

  const handleSubmit = async () => {
    if (!boyDetails.name || !girlDetails.name) return;
    
    setLoading(true);
    
    try {
      // Get location data for both
      const boyLocation = await getLocationData(boyDetails.place);
      const girlLocation = await getLocationData(girlDetails.place);
      
      if (boyLocation) {
        setBoyDetails(prev => ({
          ...prev,
          latitude: formatCoordinate(boyLocation.latitude, false),
          longitude: formatCoordinate(boyLocation.longitude, true),
          timeZone: boyLocation.timeZone
        }));
      }
      
      if (girlLocation) {
        setGirlDetails(prev => ({
          ...prev,
          latitude: formatCoordinate(girlLocation.latitude, false),
          longitude: formatCoordinate(girlLocation.longitude, true),
          timeZone: girlLocation.timeZone
        }));
      }
      
      // Calculate Guna scores
      const scores = calculateGunaScores(boyDetails, girlDetails);
      setGunaScores(scores);
      
      // Calculate matching result
      const result = calculateMatchingResult(scores);
      setMatchingResult(result);
      
      setShowResults(true);
    } catch (error) {
      console.error('Error calculating compatibility:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    console.log('Match Making report saved successfully');
    alert('Match Making report saved successfully!');
  };

  const handlePrint = () => {
    window.print();
  };

  const renderHeader = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Heart className="h-8 w-8 text-pink-400" />
          <div>
            <h1 className="text-2xl font-display font-bold text-white">Welcome to Astro.com</h1>
            <p className="text-white/70 text-sm">Match Making & Compatibility Analysis</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link
            to="/features"
            className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Star className="h-4 w-4" />
            <span className="hidden sm:inline">Features</span>
          </Link>
          <button
            onClick={handlePrint}
            className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Print className="h-4 w-4" />
            <span className="hidden sm:inline">Print</span>
          </button>
          <button
            onClick={handleSave}
            className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Save className="h-4 w-4" />
            <span className="hidden sm:inline">Save</span>
          </button>
          <a
            href="https://www.astrosage.com/talk-to-astrologer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Talk to Astrologer</span>
          </a>
        </div>
      </div>
    </div>
  );

  const renderPersonForm = (
    type: 'boy' | 'girl',
    details: PersonDetails,
    setDetails: React.Dispatch<React.SetStateAction<PersonDetails>>,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg ${type === 'boy' ? 'bg-blue-500/20' : 'bg-pink-500/20'}`}>
            <User className={`h-6 w-6 ${type === 'boy' ? 'text-blue-400' : 'text-pink-400'}`} />
          </div>
          <h3 className="text-xl font-display font-semibold text-white">
            {type === 'boy' ? "Boy's Details" : "Girl's Details"}
          </h3>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-white" /> : <ChevronDown className="h-5 w-5 text-white" />}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={details.name}
                onChange={(e) => setDetails(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter full name"
                required
              />
            </div>
            
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Place of Birth</label>
              <input
                type="text"
                value={details.place}
                onChange={(e) => setDetails(prev => ({ ...prev, place: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter city name"
                required
              />
            </div>
            
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Date of Birth</label>
              <input
                type="date"
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  setDetails(prev => ({
                    ...prev,
                    day: date.getDate(),
                    month: date.getMonth() + 1,
                    year: date.getFullYear()
                  }));
                }}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Time of Birth</label>
              <input
                type="time"
                onChange={(e) => {
                  const [hours, minutes] = e.target.value.split(':');
                  setDetails(prev => ({
                    ...prev,
                    hour: parseInt(hours),
                    minute: parseInt(minutes),
                    second: 0
                  }));
                }}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderBirthDetailsTable = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Birth Details</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-3 px-4">Details</th>
              <th className="text-left py-3 px-4">Boy</th>
              <th className="text-left py-3 px-4">Girl</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4 font-semibold">Name</td>
              <td className="py-3 px-4">{boyDetails.name}</td>
              <td className="py-3 px-4">{girlDetails.name}</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4 font-semibold">Date & Time</td>
              <td className="py-3 px-4">{`${boyDetails.day}/${boyDetails.month}/${boyDetails.year} ${boyDetails.hour}:${boyDetails.minute.toString().padStart(2, '0')}`}</td>
              <td className="py-3 px-4">{`${girlDetails.day}/${girlDetails.month}/${girlDetails.year} ${girlDetails.hour}:${girlDetails.minute.toString().padStart(2, '0')}`}</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4 font-semibold">Place</td>
              <td className="py-3 px-4">{boyDetails.place}</td>
              <td className="py-3 px-4">{girlDetails.place}</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4 font-semibold">Longitude</td>
              <td className="py-3 px-4">{boyDetails.longitude}</td>
              <td className="py-3 px-4">{girlDetails.longitude}</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4 font-semibold">Latitude</td>
              <td className="py-3 px-4">{boyDetails.latitude}</td>
              <td className="py-3 px-4">{girlDetails.latitude}</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-semibold">Time Zone</td>
              <td className="py-3 px-4">+{boyDetails.timeZone}</td>
              <td className="py-3 px-4">+{girlDetails.timeZone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderGunaTable = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Ashtakoot Guna Milan</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-3 px-4">Koot</th>
              <th className="text-left py-3 px-4">Boy's Guna</th>
              <th className="text-left py-3 px-4">Girl's Guna</th>
              <th className="text-left py-3 px-4">Maximum Points</th>
              <th className="text-left py-3 px-4">Obtained Points</th>
              <th className="text-left py-3 px-4">Area of Life</th>
            </tr>
          </thead>
          <tbody>
            {gunaScores.map((guna, index) => (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-4 font-semibold">{guna.guna}</td>
                <td className="py-3 px-4">{guna.boy}</td>
                <td className="py-3 px-4">{guna.girl}</td>
                <td className="py-3 px-4">{guna.maximum}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-sm font-semibold ${
                    guna.obtained === guna.maximum ? 'bg-green-500/20 text-green-300' :
                    guna.obtained >= guna.maximum * 0.7 ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {guna.obtained}
                  </span>
                </td>
                <td className="py-3 px-4">{guna.areaOfLife}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-white/30 bg-white/5">
              <td className="py-4 px-4 font-bold text-lg">Total</td>
              <td className="py-4 px-4"></td>
              <td className="py-4 px-4"></td>
              <td className="py-4 px-4 font-bold text-lg">{matchingResult?.maxScore}</td>
              <td className="py-4 px-4">
                <span className="px-3 py-2 rounded-lg text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  {matchingResult?.totalScore}
                </span>
              </td>
              <td className="py-4 px-4"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );

  const renderMatchingResults = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Compatibility Summary */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-display font-semibold text-white mb-6">Compatibility Summary</h3>
        <div className="text-center">
          <div className="mb-6">
            <div className={`text-6xl font-bold mb-2 ${
              matchingResult?.compatibility === 'Excellent' ? 'text-green-400' :
              matchingResult?.compatibility === 'Good' ? 'text-yellow-400' :
              matchingResult?.compatibility === 'Average' ? 'text-orange-400' :
              'text-red-400'
            }`}>
              {matchingResult ? Math.round((matchingResult.totalScore / matchingResult.maxScore) * 100) : 0}%
            </div>
            <p className="text-white/70 text-lg">Compatibility Score</p>
          </div>
          
          <div className={`p-4 rounded-lg mb-4 ${
            matchingResult?.compatibility === 'Excellent' ? 'bg-green-500/20 border border-green-500/30' :
            matchingResult?.compatibility === 'Good' ? 'bg-yellow-500/20 border border-yellow-500/30' :
            matchingResult?.compatibility === 'Average' ? 'bg-orange-500/20 border border-orange-500/30' :
            'bg-red-500/20 border border-red-500/30'
          }`}>
            <h4 className="text-xl font-semibold text-white mb-2">{matchingResult?.compatibility} Match</h4>
            <p className="text-white/80">{matchingResult?.conclusion}</p>
          </div>
          
          <div className="text-sm text-white/60">
            <p>Guna Milan Score: {matchingResult?.totalScore}/{matchingResult?.maxScore}</p>
          </div>
        </div>
      </div>

      {/* Mangal Dosha Analysis */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-display font-semibold text-white mb-6">Mangal Dosha Analysis</h3>
        <div className="space-y-4">
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className="font-semibold text-blue-300 mb-2">Boy: {boyDetails.name}</h4>
            <p className="text-white/80">{checkMangalDosha(boyDetails)}</p>
          </div>
          
          <div className="p-4 bg-white/5 rounded-lg">
            <h4 className="font-semibold text-pink-300 mb-2">Girl: {girlDetails.name}</h4>
            <p className="text-white/80">{checkMangalDosha(girlDetails)}</p>
          </div>
          
          <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
            <h4 className="font-semibold text-orange-300 mb-2">Overall Assessment</h4>
            <p className="text-white/80 text-sm">
              Mangal Dosha may affect marital harmony. If present in both charts, it gets cancelled. 
              Consult an astrologer for detailed analysis and remedies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGunaInterpretations = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Guna Interpretations</h3>
      <div className="space-y-4">
        {gunaScores.map((guna, index) => (
          <div key={index} className="border border-white/20 rounded-lg">
            <button
              onClick={() => setExpandedGuna(expandedGuna === guna.guna ? null : guna.guna)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className={`px-2 py-1 rounded text-sm font-semibold ${
                  guna.obtained === guna.maximum ? 'bg-green-500/20 text-green-300' :
                  guna.obtained >= guna.maximum * 0.7 ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {guna.obtained}/{guna.maximum}
                </span>
                <span className="text-white font-semibold">{guna.guna}</span>
                <span className="text-white/60">({guna.areaOfLife})</span>
              </div>
              {expandedGuna === guna.guna ? 
                <ChevronUp className="h-4 w-4 text-white" /> : 
                <ChevronDown className="h-4 w-4 text-white" />
              }
            </button>
            
            {expandedGuna === guna.guna && (
              <div className="px-4 pb-4">
                <p className="text-white/80 leading-relaxed">{guna.interpretation}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderIndividualReports = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-display font-semibold text-white mb-6">Boy's Individual Reports</h3>
        <div className="space-y-3">
          {[
            'Birth Chart Analysis',
            'Planetary Positions',
            'Dasha Analysis',
            'Yoga Analysis',
            'Career Prospects',
            'Health Analysis'
          ].map((report, index) => (
            <button
              key={index}
              onClick={() => console.log(`Clicked ${report} for Boy`)}
              className="w-full text-left p-3 bg-blue-500/10 rounded-lg border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/20 transition-all"
            >
              <span className="text-white/80">{report}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-display font-semibold text-white mb-6">Girl's Individual Reports</h3>
        <div className="space-y-3">
          {[
            'Birth Chart Analysis',
            'Planetary Positions',
            'Dasha Analysis',
            'Yoga Analysis',
            'Career Prospects',
            'Health Analysis'
          ].map((report, index) => (
            <button
              key={index}
              onClick={() => console.log(`Clicked ${report} for Girl`)}
              className="w-full text-left p-3 bg-pink-500/10 rounded-lg border border-pink-500/20 hover:border-pink-400/50 hover:bg-pink-500/20 transition-all"
            >
              <span className="text-white/80">{report}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderActions = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Additional Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: 'Detailed Compatibility Report', icon: FileText },
          { name: 'Mangal Dosha Report', icon: Shield },
          { name: 'Dasha Compatibility', icon: TrendingUp },
          { name: 'Ashtakoot Guna Details', icon: Star },
          { name: 'Love Compatibility', icon: Heart },
          { name: 'Marriage Timing Analysis', icon: Calendar },
          { name: 'Print Match Making Report - PDF', icon: Print }
        ].map((feature, index) => (
          <button
            key={index}
            onClick={() => console.log(`Clicked ${feature.name}`)}
            className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg border border-white/20 hover:border-purple-400/50 hover:bg-white/10 transition-all group"
          >
            <feature.icon className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
            <span className="text-white/80 group-hover:text-white text-sm">{feature.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderReportsSection = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-display font-semibold text-white mb-6">Other Free Reports</h3>
        <div className="space-y-3">
          {[
            'Kundli (Birth Chart)',
            'Ascendant Report',
            'Lal Kitab Horoscope',
            'Life Report PDF',
            'Sade Sati Life Report',
            'Year Analysis (Varshphal)',
            'Baby Name Suggestion',
            'Gochar Phal (Transit Report)',
            'General Prediction',
            'Mangal Dosha',
            'Dasha Phal Analysis',
            'Love Horoscope'
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <span className="text-white/80">{report}</span>
              <span className="text-green-400 text-sm font-medium">FREE</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-display font-semibold text-white mb-6">Paid Services</h3>
        <div className="space-y-3">
          {[
            { name: 'Astro Brihat Kundli', price: '₹299' },
            { name: 'Marriage Report', price: '₹399' },
            { name: 'Compatibility Analysis', price: '₹199' },
            { name: 'Mangal Dosha Remedies', price: '₹149' },
            { name: 'Love Compatibility Report', price: '₹249' },
            { name: 'Marriage Timing Report', price: '₹299' },
            { name: 'Detailed Match Making', price: '₹499' },
            { name: 'Ask a Question Service', price: '₹99' }
          ].map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
              <span className="text-white/80">{service.name}</span>
              <span className="text-amber-400 text-sm font-medium">{service.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-xl font-display font-semibold text-white mb-6">About Astro Match Making</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-white/80 leading-relaxed mb-6">
            Our advanced Vedic astrology match making system analyzes the compatibility between two individuals 
            based on the ancient science of Ashtakoot Guna Milan. We provide detailed analysis of all 8 Koots 
            along with Mangal Dosha assessment and personalized recommendations.
          </p>
          
          <h4 className="text-lg font-semibold text-white mb-4">Match Making Features</h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Ashtakoot Guna Milan',
              'Mangal Dosha Analysis',
              'Compatibility Percentage',
              'Detailed Interpretations',
              'Individual Reports',
              'Marriage Timing',
              'Remedial Measures',
              'Expert Consultation'
            ].map((feature, index) => (
              <div
                key={index}
                className="text-left p-2 bg-white/5 rounded-lg border border-white/20 text-sm text-white/80"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Heart className="h-16 w-16 text-pink-400 mx-auto mb-4 animate-pulse-slow" />
            <p className="text-white/60 text-sm">Trusted by millions for marriage compatibility</p>
            <p className="text-white/60 text-sm">Expert astrologers available for consultation</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFooter = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-6">
        <p className="text-white/60 text-sm mb-2">
          All copyrights reserved © 2025 Astro - Dr. Roohi Jain
        </p>
        <div className="flex items-center justify-center space-x-4 text-white/60 text-sm">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>|</span>
          <button className="hover:text-white transition-colors">Feedback</button>
          <span>|</span>
          <button className="hover:text-white transition-colors">Disclaimer</button>
        </div>
      </div>
      
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
        <p className="text-green-300 text-sm">
          <strong>Notes:</strong> Match making report has been generated successfully. 
          Consult our expert astrologers for detailed analysis and remedies.
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {renderHeader()}

        {!showResults ? (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Match My Horoscope
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Find your perfect match with authentic Vedic astrology compatibility analysis
              </p>
            </div>

            {renderPersonForm('boy', boyDetails, setBoyDetails, boyFormOpen, setBoyFormOpen)}
            {renderPersonForm('girl', girlDetails, setGirlDetails, girlFormOpen, setGirlFormOpen)}

            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={loading || !boyDetails.name || !girlDetails.name}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Calculating Compatibility...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5" />
                    <span>Check Compatibility</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {renderBirthDetailsTable()}
            {renderGunaTable()}
            {renderMatchingResults()}
            {renderGunaInterpretations()}
            {renderIndividualReports()}
            {renderActions()}
            {renderReportsSection()}
            {renderAboutSection()}
            {renderFooter()}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchmakingPage;