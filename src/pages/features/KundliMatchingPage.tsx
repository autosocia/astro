import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, Star, Calendar, MapPin, Clock } from 'lucide-react';

const KundliMatchingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [boyData, setBoyData] = useState({
    name: '',
    date: '',
    time: '',
    place: ''
  });
  const [girlData, setGirlData] = useState({
    name: '',
    date: '',
    time: '',
    place: ''
  });
  const [showResults, setShowResults] = useState(false);

  const handleBoyDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoyData({
      ...boyData,
      [e.target.name]: e.target.value
    });
  };

  const handleGirlDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGirlData({
      ...girlData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const renderStep = () => {
    if (showResults) {
      return (
        <div className="space-y-8">
          {/* Results Placeholder */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Heart className="h-12 w-12 text-red-400" />
                <div className="text-4xl font-display font-bold text-white">
                  Compatibility Analysis
                </div>
              </div>
              <h2 className="text-2xl font-display font-semibold text-white mb-2">
                {boyData.name} & {girlData.name}
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Guna Milan results will be calculated here
              </p>
              
              <div className="bg-white/5 rounded-xl p-8">
                <Star className="h-16 w-16 text-violet-400 mx-auto mb-4" />
                <p className="text-white/70">
                  Connect to astrology API for Guna Milan calculations and compatibility analysis
                </p>
              </div>
            </div>
          </div>

          {/* New Match Button */}
          <div className="text-center">
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentStep(1);
                setBoyData({ name: '', date: '', time: '', place: '' });
                setGirlData({ name: '', date: '', time: '', place: '' });
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
            >
              Check Another Match
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-white/80">
              Step {currentStep} of 2
            </span>
            <span className="text-sm text-white/60">
              {currentStep === 1 ? "Boy's Details" : "Girl's Details"}
            </span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          {currentStep === 1 ? (
            <div>
              <h2 className="text-2xl font-display font-semibold text-white mb-6">
                Boy's Birth Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={boyData.name}
                    onChange={handleBoyDataChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter boy's full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={boyData.date}
                      onChange={handleBoyDataChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Time of Birth
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={boyData.time}
                      onChange={handleBoyDataChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Place of Birth
                  </label>
                  <input
                    type="text"
                    name="place"
                    value={boyData.place}
                    onChange={handleBoyDataChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter city, state, country"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!boyData.name || !boyData.date || !boyData.time || !boyData.place}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-display font-semibold text-white mb-6">
                Girl's Birth Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={girlData.name}
                    onChange={handleGirlDataChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter girl's full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={girlData.date}
                      onChange={handleGirlDataChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Time of Birth
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={girlData.time}
                      onChange={handleGirlDataChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Place of Birth
                  </label>
                  <input
                    type="text"
                    name="place"
                    value={girlData.place}
                    onChange={handleGirlDataChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter city, state, country"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Previous
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!girlData.name || !girlData.date || !girlData.time || !girlData.place}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Heart className="inline h-5 w-5 mr-2" />
                  Check Compatibility
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Kundli Matching
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Find your perfect match with authentic Vedic astrology compatibility analysis
          </p>
        </div>

        {renderStep()}
      </div>
    </div>
  );
};

export default KundliMatchingPage;