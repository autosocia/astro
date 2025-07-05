import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  User, 
  Calendar, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronRight,
  Search, 
  Save, 
  Printer as Print, 
  MessageCircle,
  Phone,
  Download,
  BookOpen,
  Gem,
  Shield,
  TrendingUp,
  FileText,
  Gift,
  Home,
  Heart,
  Brain,
  Sparkles,
  Eye,
  Plus,
  Trash2,
  Edit
} from 'lucide-react';
import { UserBirthData, SavedPerson, LifePrediction, PredictionData } from '../types/lifePrediction';
import { generateLifePredictions, getPersonalizedPredictions } from '../utils/predictionService';

const LifePredictionPage = () => {
  const [savedPersons, setSavedPersons] = useState<SavedPerson[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<SavedPerson | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showPersonSelector, setShowPersonSelector] = useState(false);
  const [predictions, setPredictions] = useState<LifePrediction | null>(null);
  const [loading, setLoading] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
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
      generatePredictions(selectedPerson.birthData);
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
      setPredictions(null);
      if (updatedPersons.length === 0) {
        setShowForm(true);
      } else {
        setShowPersonSelector(true);
      }
    }
  };

  const generatePredictions = async (birthData: UserBirthData) => {
    setLoading(true);
    try {
      // Use personalized predictions for immediate display
      const personalizedPredictions = getPersonalizedPredictions(birthData);
      setPredictions(personalizedPredictions);
      
      // In production, you would call the AI API here
      // const aiPredictions = await generateLifePredictions(birthData);
      // setPredictions(aiPredictions);
    } catch (error) {
      console.error('Error generating predictions:', error);
      // Fallback to basic predictions
      const fallbackPredictions = getPersonalizedPredictions(birthData);
      setPredictions(fallbackPredictions);
    } finally {
      setLoading(false);
    }
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

  const renderHeader = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Star className="h-8 w-8 text-yellow-400" />
          <div>
            <h1 className="text-2xl font-display font-bold text-white">Welcome to Astro.com</h1>
            <p className="text-white/70 text-sm">Life Predictions & Personality Analysis</p>
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

  const renderForm = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-8 w-8 text-purple-400" />
            <h2 className="text-3xl font-display font-bold text-white">Enter Birth Details</h2>
          </div>
          <p className="text-white/70">Provide accurate birth information for personalized life predictions</p>
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
            <Brain className="inline h-5 w-5 mr-2" />
            Generate Life Predictions
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
                <span className="font-medium">View Predictions</span>
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

  const renderPredictionSection = (title: string, content: string, icon: React.ReactNode, sectionKey: string) => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-6">
      <button
        onClick={() => setExpandedSection(expandedSection === sectionKey ? null : sectionKey)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="text-xl font-display font-semibold text-white">{title}</h3>
        </div>
        {expandedSection === sectionKey ? 
          <ChevronDown className="h-5 w-5 text-white" /> : 
          <ChevronRight className="h-5 w-5 text-white" />
        }
      </button>
      
      {expandedSection === sectionKey && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-6 pb-6"
        >
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <p className="text-white/90 leading-relaxed text-lg">{content}</p>
          </div>
        </motion.div>
      )}
    </div>
  );

  const renderPredictions = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-display font-bold text-white mb-4">
          Life Predictions for {selectedPerson?.name}
        </h2>
        <p className="text-white/70 text-lg">
          Personalized insights based on your birth details
        </p>
      </div>

      {loading ? (
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-white text-lg">Generating your personalized predictions...</span>
          </div>
          <p className="text-white/60">This may take a few moments</p>
        </div>
      ) : predictions ? (
        <div className="space-y-6">
          {renderPredictionSection(
            "Character Analysis",
            predictions.character,
            <User className="h-6 w-6 text-blue-400" />,
            "character"
          )}
          
          {renderPredictionSection(
            "Happiness and Fulfillment",
            predictions.happinessAndFulfillment,
            <Heart className="h-6 w-6 text-pink-400" />,
            "happiness"
          )}
          
          {renderPredictionSection(
            "Life Style",
            predictions.lifeStyle,
            <Sparkles className="h-6 w-6 text-yellow-400" />,
            "lifestyle"
          )}
        </div>
      ) : null}

      <div className="mt-8 text-center">
        <button
          onClick={() => setShowPersonSelector(true)}
          className="inline-flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all mr-4"
        >
          <User className="h-5 w-5" />
          <span>Change Person</span>
        </button>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Person</span>
        </button>
      </div>
    </div>
  );

  const renderTalkToAstrologers = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6 text-center">Talk To Astrologers</h3>
      
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-center">
        <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
        <h4 className="text-xl font-bold text-white mb-2">Get Personalized Guidance</h4>
        <p className="text-purple-200 mb-6">
          Connect with Dr. Roohi Jain and our expert astrologers for detailed life analysis and remedies
        </p>
        <div className="flex justify-center space-x-4">
          <button className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span>Chat Now</span>
          </button>
        </div>
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
            for all your life questions including personality analysis, life predictions, and spiritual guidance.
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
            <Brain className="h-16 w-16 text-purple-400 mx-auto mb-4 animate-pulse-slow" />
            <p className="text-white/60 text-sm">Trusted by millions worldwide</p>
            <p className="text-white/60 text-sm">Expert life predictions and guidance</p>
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

  if (showForm) {
    return (
      <div className="w-full max-w-none">
        <div className="max-w-7xl mx-auto">
          {renderHeader()}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Life Predictions
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Discover your personality, life path, and future with personalized astrological insights
            </p>
          </div>
          {renderForm()}
        </div>
      </div>
    );
  }

  if (showPersonSelector) {
    return (
      <div className="w-full max-w-none">
        <div className="max-w-7xl mx-auto">
          {renderHeader()}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Life Predictions
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Select a person to view their detailed life predictions
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
        {renderHeader()}
        {renderPredictions()}
        {renderTalkToAstrologers()}
        {renderReportsSection()}
        {renderAboutSection()}
        {renderFooter()}
      </div>
    </div>
  );
};

export default LifePredictionPage;