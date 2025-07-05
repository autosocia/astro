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
      link: '/public/kundli'
    },
    {
      icon: Heart,
      title: 'Matchmaking',
      description: 'Find your perfect match with Guna Milan compatibility analysis and relationship insights.',
      link: '/public/matchmaking'
    },
    {
      icon: MessageCircle,
      title: 'AI Astrologer',
      description: 'Chat with our AI-powered astrologer for instant answers to your life questions.',
      link: '/public/chatbot'
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
      link: '/public/shop'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'Book one-on-one sessions with certified astrologers for personalized guidance.',
      link: '/public/consultation'
    }
  ];

  return (
    <div className="font-primary">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Welcome to the World of
              <span className="block text-transparent bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text">
                Dr. Roohi Jain
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-violet-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Step into a journey of cosmic clarity with Dr. Roohi Jain, a trusted name in astrology with a legacy of guiding souls toward their true purpose. With her profound knowledge of Vedic astrology, intuitive wisdom, and years of experience, she empowers individuals to navigate life's challenges and embrace their destiny.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-amber-400 to-yellow-300 text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <Star className="h-5 w-5" />
                <span>Go to Dashboard</span>
              </Link>
              <Link
                to="/public/consultation"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-violet-900 transition-all"
              >
                Explore Insights
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-violet-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Celebrity Astrologer</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>TV Personality</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Award Winner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Roohi Jain Media Showcase */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                From the Astrologer's Desk
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Witness Dr. Roohi Jain's journey as a renowned astrologer, TV personality, and spiritual guide
              </p>
            </div>
          </div>

          {/* Media Train/Carousel */}
          <div className="relative">
            {/* Train Track Effect */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-300 via-purple-400 to-pink-300 transform -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-300 transform -translate-y-1/2 z-0 animate-pulse"></div>
            
            {/* Media Cards Train */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* TV Appearance Card */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-violet-200 transform perspective-1000 hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-07-04 at 19.05.57.jpeg"
                    alt="Dr. Roohi Jain on TV"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                    LIVE
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors">
                    Television Appearances
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Regular featured astrologer on major news channels, sharing cosmic insights and predictions with millions of viewers.
                  </p>
                  <div className="flex items-center text-violet-600 font-semibold">
                    <span>Watch Insights</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Professional Portrait Card */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200 transform perspective-1000 hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-07-04 at 19.06.00 (1).jpeg"
                    alt="Dr. Roohi Jain Professional Portrait"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Expert
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    Professional Expertise
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Certified astrologer, numerologist, and Vastu expert with deep knowledge in Tarot reading and spiritual guidance.
                  </p>
                  <div className="flex items-center text-amber-600 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Awards & Recognition Card */}
              <div className="group bg-white rounded-2xl shadow-xl overflow-hidden border border-pink-200 transform perspective-1000 md:col-span-2 lg:col-span-1 hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src="/WhatsApp Image 2025-07-04 at 19.06.01 (2).jpeg"
                    alt="Dr. Roohi Jain Awards"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Award Winner
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                    Awards & Recognition
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Honored with prestigious awards for excellence in astrology and spiritual guidance, recognized by industry leaders.
                  </p>
                  <div className="flex items-center text-pink-600 font-semibold">
                    <span>View Achievements</span>
                    <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-violet-200 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you seek answers about love, career, or personal growth, Dr. Roohi Jain's precise predictions and compassionate guidance illuminate your path like the stars above.
            </p>
            <Link
              to="/consultation"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Book Your Reading</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Comprehensive Astrology Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the power of ancient wisdom combined with modern insights
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