import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  Plus, 
  Download, 
  Share2, 
  Eye,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Moon,
  Sun,
  Zap,
  BookOpen,
  Settings,
  Trash2,
  Search,
  Save,
  Printer as Print,
  MessageCircle,
  Phone,
  Home,
  Grid3X3,
  Calculator,
  BarChart3,
  Layers,
  Orbit,
  AlertTriangle
} from 'lucide-react';

interface UserBirthData {
  name: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
}

interface SavedPerson {
  id: string;
  name: string;
  birthData: UserBirthData;
  createdAt: string;
}

interface PlanetaryPosition {
  planet: string;
  combust: string;
  rashi: string;
  longitude: string;
  nakshatra: string;
  pada: number;
  relation: string;
  notes: string;
}

interface DashaPeriod {
  planet: string;
  startDate: string;
  endDate: string;
  duration: string;
}

interface KarakData {
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

interface AvasthaData {
  planet: string;
  jagrat: string;
  baladi: string;
  deeptadi: string;
}

const KundliPage = () => {
  const [savedPersons, setSavedPersons] = useState<SavedPerson[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<SavedPerson | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showPersonSelector, setShowPersonSelector] = useState(false);
  const [astrologyData, setAstrologyData] = useState<any>(null);
  const [expandedDasha, setExpandedDasha] = useState(false);
  
  const [formData, setFormData] = useState<UserBirthData>({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: ''
  });

  useEffect(() => {
    loadSavedPersons();
  }, []);

  useEffect(() => {
    if (selectedPerson) {
      const data = calculateAstrologyData(selectedPerson.birthData);
      setAstrologyData(data);
    }
  }, [selectedPerson]);

  const loadSavedPersons = () => {
    try {
      const saved = localStorage.getItem('savedPersons');
      const persons = saved ? JSON.parse(saved) : [];
      setSavedPersons(persons);
      
      if (persons.length === 0) {
        setShowForm(true);
      } else {
        setShowPersonSelector(true);
      }
    } catch (error) {
      console.error('Error loading saved persons:', error);
      setShowForm(true);
    }
  };

  const savePerson = (birthData: UserBirthData): SavedPerson => {
    const newPerson: SavedPerson = {
      id: Date.now().toString(),
      name: birthData.name,
      birthData,
      createdAt: new Date().toISOString()
    };

    const updatedPersons = [...savedPersons, newPerson];
    setSavedPersons(updatedPersons);
    
    try {
      localStorage.setItem('savedPersons', JSON.stringify(updatedPersons));
    } catch (error) {
      console.error('Error saving person:', error);
    }

    return newPerson;
  };

  const deletePerson = (id: string) => {
    const updatedPersons = savedPersons.filter(p => p.id !== id);
    setSavedPersons(updatedPersons);
    
    try {
      localStorage.setItem('savedPersons', JSON.stringify(updatedPersons));
    } catch (error) {
      console.error('Error deleting person:', error);
    }

    if (selectedPerson?.id === id) {
      setSelectedPerson(null);
      setAstrologyData(null);
      if (updatedPersons.length === 0) {
        setShowForm(true);
      } else {
        setShowPersonSelector(true);
      }
    }
  };

  const calculateAstrologyData = (birthData: UserBirthData) => {
    // Mock astrological calculations based on birth data
    const planetaryPositions: PlanetaryPosition[] = [
      {
        planet: 'Asc',
        combust: '',
        rashi: 'Virgo',
        longitude: '24-23-47',
        nakshatra: 'Chitra',
        pada: 1,
        relation: '',
        notes: 'Ascendant in Virgo, ruled by Mercury'
      },
      {
        planet: 'Sun',
        combust: '',
        rashi: 'Capricorn',
        longitude: '19-20-08',
        nakshatra: 'Shravana',
        pada: 4,
        relation: 'Enemy',
        notes: 'Sun is in Lagna Kundli, Sun is in Capricorn which is an Enemy sign, Sun is lord of 12th house and situated in 5th House, Sun fully aspects 11th house, Sun is aspected by Saturn, Ketu'
      },
      {
        planet: 'Moon',
        combust: '',
        rashi: 'Libra',
        longitude: '16-32-21',
        nakshatra: 'Swati',
        pada: 3,
        relation: 'Neutral',
        notes: 'Moon is in Lagna Kundli, Moon is in Libra which is a Neutral sign, Moon is lord of 11th house and situated in 2nd House, Moon fully aspects 8th house, Moon is aspected by Jupiter, Rahu'
      },
      {
        planet: 'Mars',
        combust: '',
        rashi: 'Leo',
        longitude: '16-04-48',
        nakshatra: 'Purvaphalguni',
        pada: 1,
        relation: 'Friendly',
        notes: 'Mars is in Lagna Kundli, Mars is in Leo which is a Friendly sign, Mars is lord of 8th/3rd house and situated in 12th House, Mars fully aspects 3rd, 6th, 7th house, Mars is aspected by Rahu'
      },
      {
        planet: 'Mercury',
        combust: '',
        rashi: 'Sagittarius',
        longitude: '15-13-56',
        nakshatra: 'Purvashada',
        pada: 4,
        relation: 'Enemy',
        notes: 'Mercury is in Lagna Kundli, Mercury is in Sagittarius which is an Enemy sign, Mercury is lord of 10th/1st house and situated in 4th House, Mercury fully aspects 10th house'
      },
      {
        planet: 'Jupiter',
        combust: '',
        rashi: 'Gemini',
        longitude: '11-32-45',
        nakshatra: 'Ardra',
        pada: 2,
        relation: 'Enemy',
        notes: 'Jupiter is in Lagna Kundli, Jupiter is in Gemini which is an Enemy sign, Jupiter is lord of 4th/7th house and situated in 10th House, Jupiter fully aspects 2nd, 4th, 6th house, Jupiter is aspected by Rahu'
      },
      {
        planet: 'Venus',
        combust: '',
        rashi: 'Aquarius',
        longitude: '06-31-32',
        nakshatra: 'Dhanishta',
        pada: 3,
        relation: 'Friendly',
        notes: 'Venus is in Lagna Kundli, Venus is in Aquarius which is a Friendly sign, Venus is lord of 9th/2nd house and situated in 6th House, Venus fully aspects 12th house, Venus is aspected by Saturn'
      },
      {
        planet: 'Saturn',
        combust: '',
        rashi: 'Pisces',
        longitude: '07-39-26',
        nakshatra: 'Uttarabhadra',
        pada: 2,
        relation: 'Neutral',
        notes: 'Saturn is in Lagna Kundli, Saturn is in Pisces which is a Neutral sign, Saturn is lord of 5th/6th house and situated in 7th House, Saturn fully aspects 9th, 1st, 4th house, Saturn is aspected by Mars'
      },
      {
        planet: 'Rahu',
        combust: '',
        rashi: 'Aquarius',
        longitude: '27-27-57',
        nakshatra: 'Purvabhadra',
        pada: 3,
        relation: '',
        notes: 'Rahu is in Lagna Kundli, Rahu is situated in 6th House, Rahu fully aspects 10th, 12th, 2nd house, Rahu is aspected by Mars, Jupiter, Ketu'
      },
      {
        planet: 'Ketu',
        combust: '',
        rashi: 'Leo',
        longitude: '27-27-57',
        nakshatra: 'Uttaraphal',
        pada: 1,
        relation: '',
        notes: 'Ketu is in Lagna Kundli, Ketu is situated in 12th House, Ketu fully aspects 4th, 6th, 8th house, Ketu is aspected by Rahu'
      },
      {
        planet: 'Uranus',
        combust: '',
        rashi: 'Taurus',
        longitude: '05-44-35',
        nakshatra: 'Krittika',
        pada: 3,
        relation: 'Own',
        notes: 'Uranus is in Lagna Kundli, Uranus is in Taurus, Uranus is situated in 9th House, Uranus fully aspects 3rd house, Uranus is aspected by Saturn'
      },
      {
        planet: 'Neptune',
        combust: '',
        rashi: 'Pisces',
        longitude: '07-53-48',
        nakshatra: 'Uttarabhadra',
        pada: 2,
        relation: 'Neutral',
        notes: 'Neptune is in Lagna Kundli, Neptune is in Pisces, Neptune is situated in 7th House, Neptune fully aspects 1st house, Neptune is aspected by Mars'
      },
      {
        planet: 'Pluto',
        combust: '',
        rashi: 'Capricorn',
        longitude: '08-37-39',
        nakshatra: 'Uttarashadha',
        pada: 4,
        relation: 'Enemy',
        notes: 'Pluto is in Lagna Kundli, Pluto is in Capricorn, Pluto is situated in 5th House, Pluto fully aspects 11th house, Pluto is aspected by Mercury'
      }
    ];

    const vimshottariDasha = {
      balance: 'SATURN 17 Y 0 M 25 D',
      periods: [
        { planet: 'Saturn', startDate: '7/3/2025', endDate: '7/3/2044', duration: '19 years' },
        { planet: 'Mercury', startDate: '7/3/2044', endDate: '7/3/2061', duration: '17 years' },
        { planet: 'Ketu', startDate: '7/3/2061', endDate: '7/3/2068', duration: '7 years' },
        { planet: 'Venus', startDate: '7/3/2068', endDate: '7/3/2088', duration: '20 years' },
        { planet: 'Sun', startDate: '7/3/2088', endDate: '7/3/2094', duration: '6 years' },
        { planet: 'Moon', startDate: '7/3/2094', endDate: '7/3/2104', duration: '10 years' },
        { planet: 'Mars', startDate: '7/3/2104', endDate: '7/3/2111', duration: '7 years' },
        { planet: 'Rahu', startDate: '7/3/2111', endDate: '7/3/2129', duration: '18 years' },
        { planet: 'Jupiter', startDate: '7/3/2129', endDate: '7/3/2145', duration: '16 years' }
      ] as DashaPeriod[]
    };

    const karakData = {
      sthir: {
        type: 'Sthir' as const,
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
        type: 'Chara' as const,
        atma: 'Mars',
        amatya: 'Jupiter',
        bhratru: 'Mercury',
        matru: 'Moon',
        pitru: 'Sun',
        putra: 'Venus',
        gnati: 'Saturn',
        dara: 'Rahu'
      }
    };

    const avasthaData: AvasthaData[] = [
      { planet: 'Sun', jagrat: 'Swapna', baladi: 'Kumar', deeptadi: 'Muditha' },
      { planet: 'Moon', jagrat: 'Jagrat', baladi: 'Bal', deeptadi: 'Deepta' },
      { planet: 'Mars', jagrat: 'Swapna', baladi: 'Yuva', deeptadi: 'Shant' },
      { planet: 'Mercury', jagrat: 'Jagrat', baladi: 'Bal', deeptadi: 'Deepta' },
      { planet: 'Jupiter', jagrat: 'Jagrat', baladi: 'Yuva', deeptadi: 'Deepta' },
      { planet: 'Venus', jagrat: 'Swapna', baladi: 'Bal', deeptadi: 'Shant' },
      { planet: 'Saturn', jagrat: 'Sushupti', baladi: 'Vradha', deeptadi: 'Khal' }
    ];

    return {
      planetaryPositions,
      vimshottariDasha,
      karakData,
      avasthaData
    };
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPerson = savePerson(formData);
    setSelectedPerson(newPerson);
    setShowForm(false);
    setShowPersonSelector(false);
    setFormData({ name: '', dateOfBirth: '', timeOfBirth: '', placeOfBirth: '' });
  };

  const handlePersonSelect = (person: SavedPerson) => {
    setSelectedPerson(person);
    setShowPersonSelector(false);
  };

  const handleSave = () => {
    console.log('Chart saved successfully');
    alert('Chart saved successfully!');
  };

  const handlePrint = () => {
    window.print();
  };

  const calculationLinks = [
    'Basic Details',
    'Planetary Position',
    'Lagna & Chandra Charts',
    'Chalit Table & Chart',
    'Prastharashtakvarga Table',
    'Ashtak Varga Table',
    'Aspect On Bhav Madhya',
    'Aspect On KP Cusp',
    'Planetary Aspect (Western)',
    'Shodashvarga Charts',
    'Shodashvarga Table',
    'Friendship Table',
    'Vimshottari Dasha',
    'ShadBala & BhavBala',
    'Char Dasha',
    'Yogini Dasha',
    'Western System',
    'Sarvatobhadra Chakra',
    'Transit Today',
    'Print Format 1 - PDF',
    'Print Format 2 - Low',
    'Print Shodashvarga - PDF',
    'Print Detailed Calculations Reports - PDF',
    'Print Detailed Kundali & Reports - PDF'
  ];

  const renderHeader = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Star className="h-8 w-8 text-yellow-400" />
          <div>
            <h1 className="text-2xl font-display font-bold text-white">Welcome to Astro.com</h1>
            <p className="text-white/70 text-sm">Complete Kundali Analysis</p>
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
          <button className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
          <a
            href="https://www.astrosage.com/talk-to-astrologer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Talk to Astrologer</span>
          </a>
        </div>
      </div>
    </div>
  );

  const renderForm = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-8 w-8 text-yellow-400" />
            <h2 className="text-3xl font-display font-bold text-white">Generate Kundali</h2>
          </div>
          <p className="text-white/70">Enter accurate birth details for precise astrological calculations</p>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              <User className="inline h-4 w-4 mr-1" />
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Date of Birth
              </label>
              <input
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                <Clock className="inline h-4 w-4 mr-1" />
                Time of Birth
              </label>
              <input
                type="time"
                value={formData.timeOfBirth}
                onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              <MapPin className="inline h-4 w-4 mr-1" />
              Place of Birth
            </label>
            <input
              type="text"
              value={formData.placeOfBirth}
              onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter city, state, country"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <Star className="inline h-5 w-5 mr-2" />
            Generate Kundali
          </button>
        </form>
      </div>
    </div>
  );

  const renderPersonSelector = () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Select Saved Person</h2>
          <p className="text-white/70">Choose from your saved profiles or add a new person</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {savedPersons.map((person) => (
            <div
              key={person.id}
              className="bg-white/5 rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all group cursor-pointer"
              onClick={() => handlePersonSelect(person)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{person.name}</h3>
                    <p className="text-white/60 text-sm">{person.birthData.placeOfBirth}</p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deletePerson(person.id);
                  }}
                  className="text-white/40 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-3 w-3" />
                  <span>{person.birthData.dateOfBirth}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-3 w-3" />
                  <span>{person.birthData.timeOfBirth}</span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center text-purple-300 group-hover:text-purple-200 transition-colors">
                <span className="font-medium">View Kundali</span>
                <ChevronRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            <Plus className="h-5 w-5" />
            <span>Add New Person</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderKundliChart = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Birth Chart</h3>
      <div className="bg-white/5 rounded-xl p-8 text-center">
        <Grid3X3 className="h-16 w-16 text-violet-400 mx-auto mb-4" />
        <p className="text-white/70">
          Birth chart visualization will be displayed here. Connect to astrology API for chart generation.
        </p>
      </div>
    </div>
  );

  const renderPlanetaryTable = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Planetary Positions</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-3 px-4">Planet</th>
              <th className="text-left py-3 px-4">C/R</th>
              <th className="text-left py-3 px-4">Rashi</th>
              <th className="text-left py-3 px-4">Longitude</th>
              <th className="text-left py-3 px-4">Nakshatra</th>
              <th className="text-left py-3 px-4">Pada</th>
              <th className="text-left py-3 px-4">Relation</th>
            </tr>
          </thead>
          <tbody>
            {astrologyData?.planetaryPositions.map((planet: PlanetaryPosition, index: number) => (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-4 font-semibold">{planet.planet}</td>
                <td className="py-3 px-4">{planet.combust}</td>
                <td className="py-3 px-4">{planet.rashi}</td>
                <td className="py-3 px-4">{planet.longitude}</td>
                <td className="py-3 px-4">{planet.nakshatra}</td>
                <td className="py-3 px-4">{planet.pada}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    planet.relation === 'Enemy' ? 'bg-red-500/20 text-red-300' :
                    planet.relation === 'Friendly' ? 'bg-green-500/20 text-green-300' :
                    planet.relation === 'Own' ? 'bg-blue-500/20 text-blue-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {planet.relation}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Planet Notes */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-white mb-4">Planet Notes</h4>
        <div className="space-y-3">
          {astrologyData?.planetaryPositions.filter((p: PlanetaryPosition) => p.notes).map((planet: PlanetaryPosition, index: number) => (
            <div key={index} className="bg-white/5 rounded-lg p-4">
              <h5 className="font-semibold text-purple-300 mb-2">{planet.planet}</h5>
              <p className="text-white/80 text-sm leading-relaxed">{planet.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderVimshottariDasha = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-display font-semibold text-white">Vimshottari Dasha</h3>
        <button
          onClick={() => setExpandedDasha(!expandedDasha)}
          className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors"
        >
          <span>Balance: {astrologyData?.vimshottariDasha.balance}</span>
          {expandedDasha ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
      </div>
      
      {expandedDasha && (
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-3 px-4">Planet</th>
                <th className="text-left py-3 px-4">Start Date</th>
                <th className="text-left py-3 px-4">End Date</th>
                <th className="text-left py-3 px-4">Duration</th>
              </tr>
            </thead>
            <tbody>
              {astrologyData?.vimshottariDasha.periods.map((period: DashaPeriod, index: number) => (
                <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 font-semibold">{period.planet}</td>
                  <td className="py-3 px-4">{period.startDate}</td>
                  <td className="py-3 px-4">{period.endDate}</td>
                  <td className="py-3 px-4">{period.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );

  const renderKarakTables = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Sthir Karak */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-display font-semibold text-white mb-6">Sthir Karak</h3>
        <div className="space-y-3">
          {Object.entries(astrologyData?.karakData.sthir || {}).filter(([key]) => key !== 'type').map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/80 capitalize">{key}</span>
              <span className="text-purple-300 font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chara Karak */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-display font-semibold text-white mb-6">Chara Karak</h3>
        <div className="space-y-3">
          {Object.entries(astrologyData?.karakData.chara || {}).filter(([key]) => key !== 'type').map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
              <span className="text-white/80 capitalize">{key}</span>
              <span className="text-purple-300 font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAvasthaTable = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Avastha</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-3 px-4">Planet</th>
              <th className="text-left py-3 px-4">Jagrat</th>
              <th className="text-left py-3 px-4">Baladi</th>
              <th className="text-left py-3 px-4">Deeptadi</th>
            </tr>
          </thead>
          <tbody>
            {astrologyData?.avasthaData.map((avastha: AvasthaData, index: number) => (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-4 font-semibold">{avastha.planet}</td>
                <td className="py-3 px-4">{avastha.jagrat}</td>
                <td className="py-3 px-4">{avastha.baladi}</td>
                <td className="py-3 px-4">{avastha.deeptadi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderLinksSection = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Additional Calculations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {calculationLinks.map((link, index) => (
          <button
            key={index}
            onClick={() => window.open('/kundli', '_blank')}
            className="text-left p-3 bg-white/5 rounded-lg border border-white/20 hover:border-purple-400/50 hover:bg-white/10 transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-white/80 group-hover:text-white transition-colors text-sm">
                {link}
              </span>
              <Calculator className="h-4 w-4 text-purple-400 group-hover:text-purple-300" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderReportsSection = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Free Reports */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-display font-semibold text-white mb-6">Other Free Reports</h3>
        <div className="space-y-3">
          {[
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
            'Love Horoscope',
            'Ask Your Question'
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <span className="text-white/80">{report}</span>
              <span className="text-green-400 text-sm font-medium">FREE</span>
            </div>
          ))}
        </div>
      </div>

      {/* Paid Services */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-display font-semibold text-white mb-6">Paid Services</h3>
        <div className="space-y-3">
          {[
            { name: 'Astro Brihat Kundli', price: '₹299' },
            { name: 'Raj Yoga Report', price: '₹199' },
            { name: 'Personalized Horoscope 2025', price: '₹499' },
            { name: 'Marriage Report', price: '₹399' },
            { name: 'Career / Job Report', price: '₹299' },
            { name: 'Shani Report', price: '₹199' },
            { name: 'Year Book 2025', price: '₹599' },
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
      <h3 className="text-xl font-display font-semibold text-white mb-6">About Astro</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-white/80 leading-relaxed mb-6">
            Astro is India's leading astrology platform, providing accurate Vedic astrology services 
            and predictions. With Dr. Roohi Jain's expertise, we offer comprehensive astrological solutions 
            for all your life questions including birth chart analysis, matchmaking, and spiritual guidance.
          </p>
          
          <h4 className="text-lg font-semibold text-white mb-4">Services & Products</h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              'Buy Gemstones',
              'Buy Rudraksha',
              'Buy Yantra',
              'Buy Fengshui',
              'Order Brihat Kundli',
              'Order Year Book',
              'Order Ask a Question Service',
              'Order Shani Report',
              'Order Marriage Report',
              'Order Career / Job Report',
              'Horoscope 2025',
              'Rashifal 2025',
              'Calendar 2025'
            ].map((service, index) => (
              <button
                key={index}
                className="text-left p-2 bg-white/5 rounded-lg border border-white/20 hover:border-purple-400/50 hover:bg-white/10 transition-all text-sm text-white/80 hover:text-white"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Star className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-pulse-slow" />
            <p className="text-white/60 text-sm">Trusted by millions worldwide</p>
            <p className="text-white/60 text-sm">Expert astrologers available 24/7</p>
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
          <strong>Notes:</strong> Your chart has been saved successfully. You can access it anytime from your dashboard.
        </p>
      </div>
    </div>
  );

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderHeader()}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Kundali Generator
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Generate your detailed Vedic birth chart with planetary positions and predictions
            </p>
          </div>
          {renderForm()}
        </div>
      </div>
    );
  }

  if (showPersonSelector) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderHeader()}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Select Person
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Choose a person to view their detailed Kundali
            </p>
          </div>
          {renderPersonSelector()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
              {selectedPerson?.name}'s Kundli
            </h1>
            <p className="text-white/70">Complete astrological analysis and predictions</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setShowPersonSelector(true)}
              className="flex items-center space-x-2 bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Change Person</span>
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Person</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        {selectedPerson && astrologyData && (
          <div className="space-y-8">
            {renderKundliChart()}
            {renderPlanetaryTable()}
            {renderVimshottariDasha()}
            {renderKarakTables()}
            {renderAvasthaTable()}
            {renderLinksSection()}
            {renderReportsSection()}
            {renderAboutSection()}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-white/20">
          <p className="text-white/60 text-sm">
            All copyrights reserved © 2025 Astro - Dr. Roohi Jain
          </p>
        </div>
      </div>
    </div>
  );
};

export default KundliPage;