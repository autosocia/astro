import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Heart, Briefcase, Shield, ChevronRight, ChevronLeft } from 'lucide-react';

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    birthTime: '',
    birthCity: '',
    coordinates: '',
    interests: [] as string[],
    subscription: 'free'
  });
  
  const navigate = useNavigate();

  const interests = [
    { id: 'love', name: 'Love & Relationships', icon: Heart },
    { id: 'career', name: 'Career & Finance', icon: Briefcase },
    { id: 'health', name: 'Health & Wellness', icon: Shield },
    { id: 'family', name: 'Family & Marriage', icon: Star },
    { id: 'spiritual', name: 'Spiritual Growth', icon: Star },
    { id: 'education', name: 'Education & Learning', icon: Star }
  ];

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      navigate('/dashboard');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Complete Your Birth Details</h2>
              <p className="text-purple-200">We need precise details for accurate predictions</p>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Birth Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                <input
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Birth City
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                <input
                  type="text"
                  value={formData.birthCity}
                  onChange={(e) => setFormData({ ...formData, birthCity: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your birth city"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Coordinates (Optional)
              </label>
              <input
                type="text"
                value={formData.coordinates}
                onChange={(e) => setFormData({ ...formData, coordinates: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Latitude, Longitude"
              />
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">What Interests You?</h2>
              <p className="text-purple-200">Select areas you'd like personalized insights about</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest) => (
                <button
                  key={interest.id}
                  onClick={() => handleInterestToggle(interest.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    formData.interests.includes(interest.id)
                      ? 'border-purple-500 bg-purple-500/20'
                      : 'border-white/30 bg-white/10 hover:border-purple-400'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <interest.icon className="h-6 w-6 text-white" />
                    <span className="text-white text-sm font-medium text-center">
                      {interest.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Choose Your Plan</h2>
              <p className="text-purple-200">Start your cosmic journey</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => setFormData({ ...formData, subscription: 'free' })}
                className={`w-full p-6 rounded-lg border-2 transition-all ${
                  formData.subscription === 'free'
                    ? 'border-purple-500 bg-purple-500/20'
                    : 'border-white/30 bg-white/10 hover:border-purple-400'
                }`}
              >
                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg">Free Plan</h3>
                  <p className="text-purple-200 text-sm">Basic horoscope and daily predictions</p>
                  <p className="text-white font-bold mt-2">₹0/month</p>
                </div>
              </button>

              <button
                onClick={() => setFormData({ ...formData, subscription: 'premium' })}
                className={`w-full p-6 rounded-lg border-2 transition-all ${
                  formData.subscription === 'premium'
                    ? 'border-purple-500 bg-purple-500/20'
                    : 'border-white/30 bg-white/10 hover:border-purple-400'
                }`}
              >
                <div className="text-left">
                  <h3 className="text-white font-semibold text-lg">Premium Plan</h3>
                  <p className="text-purple-200 text-sm">Full reports, consultations, and AI chat</p>
                  <p className="text-white font-bold mt-2">₹299/month</p>
                </div>
              </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white/80 text-sm">Step {currentStep} of 3</span>
            <span className="text-white/60 text-sm">{Math.round((currentStep / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          {renderStep()}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              <span>{currentStep === 3 ? 'Complete' : 'Next'}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OnboardingPage;