import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Star, Calendar, MapPin, Clock, ChevronDown, ChevronUp, Download, Share2, Phone, MessageCircle, Search, Save, Printer as Print, Settings, Sparkles, BookOpen, Gem, Shield, TrendingUp, FileText, Gift, Home, AlertTriangle } from 'lucide-react';
import { PersonDetails, BirthDetails, GunaScore, MatchingResult } from '../types/matchmaking';
import { getLocationData, formatCoordinate } from '../utils/locationService';
import { calculateGunaScores, calculateMatchingResult } from '../utils/gunaCalculations';

const MatchmakingPage = () => {
  const [boyFormOpen, setBoyFormOpen] = useState(true);
  const [girlFormOpen, setGirlFormOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [boyDetails, setBoyDetails] = useState<PersonDetails>({
    name: '',
    day: 5,
    month: 7,
    year: 2025,
    hour: 12,
    minute: 51,
    second: 40,
    place: '',
    longitude: '',
    latitude: '',
    dstCorrection: 0,
    timeZone: 5.5
  });

  const [girlDetails, setGirlDetails] = useState<PersonDetails>({
    name: '',
    day: 5,
    month: 7,
    year: 2025,
    hour: 13,
    minute: 2,
    second: 37,
    place: '',
    longitude: '',
    latitude: '',
    dstCorrection: 0,
    timeZone: 5.5
  });

  const [gunaScores, setGunaScores] = useState<GunaScore[]>([]);
  const [matchingResult, setMatchingResult] = useState<MatchingResult | null>(null);

  const handleLocationChange = async (place: string, person: 'boy' | 'girl') => {
    if (place.length >= 3) {
      const locationData = await getLocationData(place);
      if (locationData) {
        const updates = {
          place,
          longitude: formatCoordinate(locationData.longitude, true),
          latitude: formatCoordinate(locationData.latitude, false),
          timeZone: locationData.timeZone
        };

        if (person === 'boy') {
          setBoyDetails(prev => ({ ...prev, ...updates }));
        } else {
          setGirlDetails(prev => ({ ...prev, ...updates }));
        }
      }
    }
  };

  const handleSubmit = async () => {
    if (!boyDetails.name || !girlDetails.name || !boyDetails.place || !girlDetails.place) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const scores = calculateGunaScores(boyDetails, girlDetails);
    const result = calculateMatchingResult(scores);
    
    setGunaScores(scores);
    setMatchingResult(result);
    setShowResults(true);
    setLoading(false);
  };

  const resetForm = () => {
    setBoyDetails({
      name: '',
      day: 5,
      month: 7,
      year: 2025,
      hour: 12,
      minute: 51,
      second: 40,
      place: '',
      longitude: '',
      latitude: '',
      dstCorrection: 0,
      timeZone: 5.5
    });
    setGirlDetails({
      name: '',
      day: 5,
      month: 7,
      year: 2025,
      hour: 13,
      minute: 2,
      second: 37,
      place: '',
      longitude: '',
      latitude: '',
      dstCorrection: 0,
      timeZone: 5.5
    });
    setShowResults(false);
    setGunaScores([]);
    setMatchingResult(null);
  };

  const renderHeader = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Star className="h-8 w-8 text-yellow-400" />
          <div>
            <h1 className="text-2xl font-display font-bold text-white">Welcome to Astro.com</h1>
            <p className="text-white/70 text-sm">Horoscope Matching & Compatibility Analysis</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
            <Print className="h-4 w-4" />
            <span className="hidden sm:inline">Print</span>
          </button>
          <button className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
            <Save className="h-4 w-4" />
            <span className="hidden sm:inline">Save</span>
          </button>
          <button className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-xl transition-all">
            <MessageCircle className="h-4 w-4" />
            <span>Talk to Astrologer</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderPersonForm = (
    person: 'boy' | 'girl',
    details: PersonDetails,
    setDetails: React.Dispatch<React.SetStateAction<PersonDetails>>,
    isOpen: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-6">
      <button
        onClick={() => setOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <h3 className="text-xl font-display font-semibold text-white">
          Enter {person === 'boy' ? "Boy's" : "Girl's"} Details
        </h3>
        {isOpen ? <ChevronUp className="h-5 w-5 text-white" /> : <ChevronDown className="h-5 w-5 text-white" />}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-6 pb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="md:col-span-2 lg:col-span-3">
              <label className="block text-white/80 text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                value={details.name}
                onChange={(e) => setDetails(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder={`Enter ${person}'s name`}
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Day</label>
              <input
                type="number"
                min="1"
                max="31"
                value={details.day}
                onChange={(e) => setDetails(prev => ({ ...prev, day: parseInt(e.target.value) || 1 }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Month</label>
              <select
                value={details.month}
                onChange={(e) => setDetails(prev => ({ ...prev, month: parseInt(e.target.value) }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1} className="bg-gray-800">
                    {new Date(2025, i).toLocaleString('default', { month: 'long' })}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Year</label>
              <input
                type="number"
                min="1900"
                max="2100"
                value={details.year}
                onChange={(e) => setDetails(prev => ({ ...prev, year: parseInt(e.target.value) || 2025 }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Hour</label>
              <input
                type="number"
                min="0"
                max="23"
                value={details.hour}
                onChange={(e) => setDetails(prev => ({ ...prev, hour: parseInt(e.target.value) || 0 }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Minute</label>
              <input
                type="number"
                min="0"
                max="59"
                value={details.minute}
                onChange={(e) => setDetails(prev => ({ ...prev, minute: parseInt(e.target.value) || 0 }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Second</label>
              <input
                type="number"
                min="0"
                max="59"
                value={details.second}
                onChange={(e) => setDetails(prev => ({ ...prev, second: parseInt(e.target.value) || 0 }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-white/80 text-sm font-medium mb-2">Place (min. 3 characters) *</label>
              <input
                type="text"
                value={details.place}
                onChange={(e) => {
                  setDetails(prev => ({ ...prev, place: e.target.value }));
                  handleLocationChange(e.target.value, person);
                }}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter city name (e.g., New Delhi, Mumbai)"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Longitude</label>
              <input
                type="text"
                value={details.longitude}
                onChange={(e) => setDetails(prev => ({ ...prev, longitude: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Auto-filled"
                readOnly
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Latitude</label>
              <input
                type="text"
                value={details.latitude}
                onChange={(e) => setDetails(prev => ({ ...prev, latitude: e.target.value }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Auto-filled"
                readOnly
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">Time Zone</label>
              <input
                type="number"
                step="0.5"
                value={details.timeZone}
                onChange={(e) => setDetails(prev => ({ ...prev, timeZone: parseFloat(e.target.value) || 5.5 }))}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2 lg:col-span-3">
              <div className="flex items-center space-x-2 text-white/70 text-sm">
                <Settings className="h-4 w-4" />
                <span>Advanced Settings: Ayanamsa: N.C. Lahiri, Chart Type: North Indian</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );

  const renderBirthDetailsTable = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Birth Details of Boy and Girl</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-3 px-4 text-white/80 font-medium">Name</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Date/Time</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Place</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Longitude</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Latitude</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Time Zone</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4 text-white font-medium">Boy: {boyDetails.name}</td>
              <td className="py-3 px-4 text-white/80">
                {boyDetails.day}/{boyDetails.month}/{boyDetails.year} {boyDetails.hour}:{boyDetails.minute.toString().padStart(2, '0')}:{boyDetails.second.toString().padStart(2, '0')}
              </td>
              <td className="py-3 px-4 text-white/80">{boyDetails.place}</td>
              <td className="py-3 px-4 text-white/80">{boyDetails.longitude}</td>
              <td className="py-3 px-4 text-white/80">{boyDetails.latitude}</td>
              <td className="py-3 px-4 text-white/80">{boyDetails.timeZone}</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="py-3 px-4 text-white font-medium">Girl: {girlDetails.name}</td>
              <td className="py-3 px-4 text-white/80">
                {girlDetails.day}/{girlDetails.month}/{girlDetails.year} {girlDetails.hour}:{girlDetails.minute.toString().padStart(2, '0')}:{girlDetails.second.toString().padStart(2, '0')}
              </td>
              <td className="py-3 px-4 text-white/80">{girlDetails.place}</td>
              <td className="py-3 px-4 text-white/80">{girlDetails.longitude}</td>
              <td className="py-3 px-4 text-white/80">{girlDetails.latitude}</td>
              <td className="py-3 px-4 text-white/80">{girlDetails.timeZone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderGunaTable = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Guna Milan Analysis</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/20">
              <th className="text-left py-3 px-4 text-white/80 font-medium">Guna</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Boy</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Girl</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Maximum</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Obtained</th>
              <th className="text-left py-3 px-4 text-white/80 font-medium">Area of Life</th>
            </tr>
          </thead>
          <tbody>
            {gunaScores.map((guna, index) => (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 text-white font-medium">{guna.guna}</td>
                <td className="py-3 px-4 text-white/80">{guna.boy}</td>
                <td className="py-3 px-4 text-white/80">{guna.girl}</td>
                <td className="py-3 px-4 text-white/80">{guna.maximum}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    guna.obtained === guna.maximum ? 'bg-green-500/20 text-green-300' :
                    guna.obtained > 0 ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {guna.obtained}
                  </span>
                </td>
                <td className="py-3 px-4 text-white/80">{guna.areaOfLife}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderMatchingResults = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Horoscope Matching Results</h3>
      
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6">
          <Heart className="h-12 w-12 text-white" />
          <div className="text-left">
            <h4 className="text-2xl font-bold text-white">
              Ashtakoot Matching: {matchingResult?.totalScore}/{matchingResult?.maxScore}
            </h4>
            <p className="text-purple-200">
              Compatibility: {matchingResult?.compatibility}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/5 rounded-xl p-6">
          <h5 className="text-lg font-semibold text-white mb-3">Analysis Summary</h5>
          <div className="space-y-2 text-white/80">
            <p>• Mr. {boyDetails.name} and Ms. {girlDetails.name} has '{matchingResult?.mangalDosha}'</p>
            <p>• Total Guna Score: {matchingResult?.totalScore} out of {matchingResult?.maxScore}</p>
            <p>• Compatibility Level: {matchingResult?.compatibility}</p>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-6">
          <h5 className="text-lg font-semibold text-white mb-3">Conclusion</h5>
          <div className="flex items-center space-x-3">
            {matchingResult?.compatibility === 'Excellent' || matchingResult?.compatibility === 'Good' ? (
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            ) : (
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            )}
            <p className="text-white font-medium">{matchingResult?.conclusion}</p>
          </div>
          <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-xl transition-all">
            Download Astro Kundli App
          </button>
        </div>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
          <div>
            <h5 className="text-lg font-semibold text-amber-300 mb-2">Marriage and Love Analysis</h5>
            <p className="text-white/80 mb-4">
              Horoscopes do not match perfectly? Our expert Marriage Astrologers can provide detailed analysis and remedies for a successful marriage.
            </p>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                <Phone className="h-4 w-4" />
                <span>Call Now!</span>
              </button>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>Chat Now!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGunaInterpretations = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Detailed Guna Interpretations</h3>
      
      <div className="space-y-6">
        {gunaScores.map((guna, index) => (
          <div key={index} className="bg-white/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-white">{guna.guna}</h4>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                guna.obtained === guna.maximum ? 'bg-green-500/20 text-green-300' :
                guna.obtained > 0 ? 'bg-yellow-500/20 text-yellow-300' :
                'bg-red-500/20 text-red-300'
              }`}>
                {guna.obtained}/{guna.maximum} Points
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">{guna.interpretation}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderIndividualReports = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Boy's Reports */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-display font-semibold text-white mb-6">
          {boyDetails.name}'s Kundli and Free Reports
        </h3>
        <div className="space-y-3">
          {[
            'Manglik Considerations',
            'Sani Report',
            'Love Report',
            'Gemstone Report',
            'Dasha Prediction',
            'Lal Kitab Prediction',
            'Yearly Report'
          ].map((report, index) => (
            <button
              key={index}
              className="w-full text-left p-3 bg-white/5 rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-white/80 group-hover:text-white transition-colors">{report}</span>
                <FileText className="h-4 w-4 text-blue-400 group-hover:text-blue-300" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Girl's Reports */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <h3 className="text-xl font-display font-semibold text-white mb-6">
          {girlDetails.name}'s Kundli and Free Reports
        </h3>
        <div className="space-y-3">
          {[
            'Manglik Considerations',
            'Sani Report',
            'Love Report',
            'Gemstone Report',
            'Dasha Prediction',
            'Lal Kitab Prediction',
            'Yearly Report'
          ].map((report, index) => (
            <button
              key={index}
              className="w-full text-left p-3 bg-white/5 rounded-lg border border-white/20 hover:border-pink-400/50 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-white/80 group-hover:text-white transition-colors">{report}</span>
                <FileText className="h-4 w-4 text-pink-400 group-hover:text-pink-300" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderActions = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-xl font-display font-semibold text-white mb-6">Actions</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={resetForm}
          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
        >
          <Heart className="h-5 w-5" />
          <span>Match Another Kundli</span>
        </button>
        
        <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
          <Download className="h-5 w-5" />
          <span>Download PDF</span>
        </button>
        
        <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
          <Users className="h-5 w-5" />
          <span>Join Astro Matrimony</span>
        </button>
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
            for all your life questions including marriage compatibility, career guidance, and spiritual growth.
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
            <Sparkles className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-pulse-slow" />
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
          <button className="hover:text-white transition-colors">Home</button>
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

  return (
    <div className="w-full max-w-none">
      <div className="max-w-7xl mx-auto">
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
  );
};

export default MatchmakingPage;