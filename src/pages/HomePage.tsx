import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Heart, 
  MessageCircle, 
  Calendar, 
  Gem, 
  Users, 
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Star,
      title: 'Birth Chart Analysis',
      description: 'Generate detailed Kundli with Vedic calculations, planetary positions, and personalized insights.',
      link: '/kundli'
    },
    {
      icon: Heart,
      title: 'Matchmaking',
      description: 'Find your perfect match with Guna Milan compatibility analysis and relationship insights.',
      link: '/matchmaking'
    },
    {
      icon: MessageCircle,
      title: 'AI Astrologer',
      description: 'Chat with our AI-powered astrologer for instant answers to your life questions.',
      link: '/chatbot'
    },
    {
      icon: Calendar,
      title: 'Daily Predictions',
      description: 'Get personalized daily horoscopes, yearly forecasts, and planetary transit updates.',
      link: '/dashboard'
    },
    {
      icon: Gem,
      title: 'Gemstone Reports',
      description: 'Discover your lucky gemstones with AI-powered recommendations and authenticity guarantee.',
      link: '/shop'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Book one-on-one sessions with certified astrologers for personalized guidance.',
      link: '/consultation'
    }
  ];

  return (
    <div className="font-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              Discover Your
              <span className="block text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">
                Cosmic Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-violet-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Unlock the secrets of your destiny with AI-powered astrology. 
              Get personalized readings, compatibility analysis, and spiritual guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link
                to="/kundli"
                className="bg-gradient-cosmic text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Generate Birth Chart
              </Link>
              <Link
                to="/chatbot"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-violet-900 transition-all"
              >
                Ask AI Astrologer
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-violet-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>100% Accurate</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Explore Your Cosmic Self
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive astrology services powered by ancient wisdom and modern AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-xl border border-gray-200 p-8 hover:border-violet-300 hover:shadow-xl transition-all hover-lift"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-cosmic-light rounded-lg">
                    <feature.icon className="h-8 w-8 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="flex items-center text-violet-600 group-hover:text-violet-700 transition-colors">
                  <span className="font-semibold">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Discover Your Destiny?
          </h2>
          <p className="text-xl text-violet-200 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have unlocked their cosmic potential with Astro
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/kundli"
              className="bg-gradient-to-r from-amber-400 to-yellow-300 text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link
              to="/consultation"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-violet-900 transition-all"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;