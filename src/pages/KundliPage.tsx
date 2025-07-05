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
  Trash2
} from 'lucide-react';
import { UserBirthData, SavedPerson, PlanetaryPosition } from '../types/astrology';
import { getSavedPersons, savePerson, deletePerson } from '../utils/userDataManager';
import { calculateAstrologyData } from '../utils/astrologyCalculations';

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
    const persons = getSavedPersons();
    setSavedPersons(persons);
    
    if (persons.length === 0) {
      setShowForm(true);
    } else {
      setShowPersonSelector(true);
    }
  }, []);

  useEffect(() => {
    if (selectedPerson) {
      const data = calculateAstrologyData(selectedPerson.birthData);
      setAstrologyData(data);
    }
  }, [selectedPerson]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPerson = savePerson(formData);
    setSavedPersons([...savedPersons, newPerson]);
    setSelectedPerson(newPerson);
    setShowForm(false);
    setShowPersonSelector(false);
    setFormData({ name: '', dateOfBirth: '', timeOfBirth: '', placeOfBirth: '' });
  };

  const handlePersonSelect = (person: SavedPerson) => {
    setSelectedPerson(person);
    setShowPersonSelector(false);
  };

  const handleDeletePerson = (id: string) => {
    deletePerson(id);
    const updatedPersons = savedPersons.filter(p => p.id !== id);
    setSavedPersons(updatedPersons);
    
    if (selectedPerson?.id === id) {
      setSelectedPerson(null);
      if (updatedPersons.length === 0) {
        setShowForm(true);
      } else {
        setShowPersonSelector(true);
      }
    }
  };

  const renderForm = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-8 w-8 text-yellow-400" />
            <h2 className="text-3xl font-display font-bold text-white">Enter Birth Details</h2>
          </div>
          <p className="text-white/70">Provide accurate birth information for precise astrological calculations</p>
        </div>
        
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              <User className="inline h-4 w-4 mr-1" />
              Full Name
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
            Generate Kundli
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
          <p className="text-white/70">Choose from your saved birth profiles or add a new person</p>
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
                    handleDeletePerson(person.id);
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
                <span className="font-medium">View Kundli</span>
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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-display font-semibold text-white mb-2">
            Kundli & Planetary Position
          </h2>
          <p className="text-white/70">
            {selectedPerson?.birthData.dateOfBirth} at {selectedPerson?.birthData.timeOfBirth} in {selectedPerson?.birthData.placeOfBirth}
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition-colors">
            <Eye className="h-4 w-4" />
            <span>View</span>
          </button>
          <button className="flex items-center space-x-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-lg hover:bg-green-500/30 transition-colors">
            <Download className="h-4 w-4" />
            <span>Download</span>
          </button>
          <button className="flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Kundli Chart Placeholder */}
      <div className="relative w-full h-96 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl border-2 border-purple-400/30 flex items-center justify-center mb-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23FFD700%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="text-center z-10">
          <Star className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-pulse-slow" />
          <p className="text-white text-lg font-semibold">Vedic Birth Chart</p>
          <p className="text-white/60 text-sm">Personalized chart for {selectedPerson?.name}</p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-2 border-yellow-400/50 rounded-full flex items-center justify-center">
          <span className="text-yellow-400 text-xs font-bold">1</span>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 border-2 border-yellow-400/50 rounded-full flex items-center justify-center">
          <span className="text-yellow-400 text-xs font-bold">4</span>
        </div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-yellow-400/50 rounded-full flex items-center justify-center">
          <span className="text-yellow-400 text-xs font-bold">10</span>
        </div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-yellow-400/50 rounded-full flex items-center justify-center">
          <span className="text-yellow-400 text-xs font-bold">7</span>
        </div>
      </div>
    </div>
  );

  const renderPlanetaryTable = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-xl font-display font-semibold text-white mb-6">Planetary Positions</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-3 px-4 text-white/80 font-medium">Planets</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">C/R/Rashi</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Longitude</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Nakshatra</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Pada</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Relation</th>
            </tr>
          </thead>
          <tbody>
            {astrologyData?.planetaryPositions.map((planet: PlanetaryPosition, index: number) => (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 text-white font-medium">{planet.planet}</td>
                <td className="py-3 px-4 text-white/80">{planet.sign}</td>
                <td className="py-3 px-4 text-white/80">{planet.longitude}</td>
                <td className="py-3 px-4 text-white/80">{planet.nakshatra}</td>
                <td className="py-3 px-4 text-white/80">{planet.pada}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    planet.relation === 'Own' ? 'bg-green-500/20 text-green-300' :
                    planet.relation === 'Friendly' ? 'bg-blue-500/20 text-blue-300' :
                    planet.relation === 'Enemy' ? 'bg-red-500/20 text-red-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {planet.relation || 'N/A'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-xs text-white/60">
        <p><strong>Notes:</strong> [C/^] - Combust, [D] - Direct, [R/*] - Retrograde, [E] - Eclipse</p>
      </div>
    </div>
  );

  const renderVimshottariDasha = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-display font-semibold text-white">Vimshottari Dasha</h3>
        <button
          onClick={() => setExpandedDasha(!expandedDasha)}
          className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors"
        >
          <span>Get full Vimshottari Dasha</span>
          {expandedDasha ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-white/80 mb-2">
          <strong>Balance Of Dasha:</strong> {astrologyData?.vimshottariDasha.balance}
        </p>
      </div>

      {expandedDasha && (
        <div className="space-y-3">
          {astrologyData?.vimshottariDasha.periods.map((period: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{period.planet.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{period.planet}</p>
                  <p className="text-white/60 text-sm">{period.duration}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white/80 text-sm">{period.startDate} - {period.endDate}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <p className="text-white/60 text-sm mt-4">Tap rows for Antar Dasha details</p>
    </div>
  );

  const renderKarakTables = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Sthir Karak */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center">
          <Sun className="h-5 w-5 mr-2 text-yellow-400" />
          Sthir Karak
        </h3>
        <div className="space-y-3">
          {Object.entries(astrologyData?.karakData.sthir || {}).map(([key, value]) => (
            key !== 'type' && (
              <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/80 capitalize">{key}:</span>
                <span className="text-white font-medium">{value as string}</span>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Chara Karak */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
        <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center">
          <Moon className="h-5 w-5 mr-2 text-blue-400" />
          Chara Karak
        </h3>
        <div className="space-y-3">
          {Object.entries(astrologyData?.karakData.chara || {}).map(([key, value]) => (
            key !== 'type' && (
              <div key={key} className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-white/80 capitalize">{key}:</span>
                <span className="text-white font-medium">{value as string}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );

  const renderAvasthaTable = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center">
        <Zap className="h-5 w-5 mr-2 text-purple-400" />
        Avastha
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-3 px-4 text-white/80 font-medium">Planet</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Jagrat</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Baladi</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Deeptadi</th>
            </tr>
          </thead>
          <tbody>
            {astrologyData?.avasthaData.map((avastha: any, index: number) => (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 text-white font-medium">{avastha.planet}</td>
                <td className="py-3 px-4 text-white/80">{avastha.jagrat}</td>
                <td className="py-3 px-4 text-white/80">{avastha.baladi}</td>
                <td className="py-3 px-4 text-white/80">{avastha.deeptadi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderLinksSection = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-xl font-display font-semibold text-white mb-6">Quick Links</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          'check Lagna & Chandra Charts',
          'check Chalit Table & Chart',
          'check Vimshottari Dasha',
          'check Transit Today',
          'check Print Detailed Kundali & Reports - PDF',
          'check Divisional Charts'
        ].map((link, index) => (
          <button
            key={index}
            className="text-left p-4 bg-white/5 rounded-lg border border-white/20 hover:border-purple-400/50 hover:bg-white/10 transition-all group"
          >
            <div className="flex items-center space-x-3">
              <BookOpen className="h-5 w-5 text-purple-400 group-hover:text-purple-300" />
              <span className="text-white/80 group-hover:text-white transition-colors">{link}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderReportsSection = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-xl font-display font-semibold text-white mb-6">Reports & Services</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Free Reports */}
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">Free Reports</h4>
          <div className="space-y-3">
            {[
              'Kundli (Birth Chart)',
              'Ascendant Report',
              'Moon Sign Report',
              'Basic Predictions'
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-white/80">{report}</span>
                <span className="text-green-400 text-sm font-medium">FREE</span>
              </div>
            ))}
          </div>
        </div>

        {/* Paid Services */}
        <div>
          <h4 className="text-lg font-semibold text-amber-400 mb-4">Premium Services</h4>
          <div className="space-y-3">
            {[
              { name: 'Astro Brihat Kundli', price: '₹299' },
              { name: 'Personalized Horoscope 2025', price: '₹499' },
              { name: 'Career Analysis Report', price: '₹399' },
              { name: 'Marriage Compatibility', price: '₹599' }
            ].map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                <span className="text-white/80">{service.name}</span>
                <span className="text-amber-400 text-sm font-medium">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-xl font-display font-semibold text-white mb-6">About Astro</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-white/80 leading-relaxed mb-4">
            Astro is India's leading astrology platform, providing accurate Vedic astrology services 
            and predictions. With Dr. Roohi Jain's expertise, we offer comprehensive astrological solutions 
            for all your life questions.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              <span>Buy Gemstones</span>
            </Link>
            <Link
              to="/consultation"
              className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg hover:bg-blue-500/30 transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Order Brihat Kundli</span>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Star className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-pulse-slow" />
            <p className="text-white/60 text-sm">Trusted by millions worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (showForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Kundli & Planetary Position
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Generate your personalized Vedic birth chart with detailed astrological insights
            </p>
          </div>
          {renderForm()}
        </div>
      </div>
    );
  }

  if (showPersonSelector) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Kundli & Planetary Position
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Select a person to view their detailed astrological chart
            </p>
          </div>
          {renderPersonSelector()}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-none">
      <div className="max-w-7xl mx-auto">
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
  );
};

export default KundliPage;