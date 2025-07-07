import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Calendar, Users, Star, Award, Tv } from 'lucide-react';

const TVAppearancesPage = () => {
  const appearances = [
    {
      title: "The Navneet Show - Astro Vastu Remedies",
      description: "Dr. Roohi Jain shares profound insights on astrology and Vastu remedies for life's biggest problems",
      date: "2024",
      channel: "National TV",
      image: "/WhatsApp Image 2025-07-04 at 19.05.57.jpeg",
      highlights: [
        "Astro-Vastu remedies for common life problems",
        "Simple solutions for prosperity and happiness",
        "Expert guidance on planetary influences",
        "Practical tips for daily life improvement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-violet-600 hover:text-violet-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Tv className="h-12 w-12 text-red-500" />
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              TV Appearances
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch Dr. Roohi Jain share her astrological wisdom on national television, 
            helping millions discover their cosmic destiny
          </p>
        </div>

        {/* Featured Appearance */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-violet-200 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src={appearances[0].image}
                alt={appearances[0].title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="bg-red-500 text-white p-4 rounded-full hover:bg-red-600 transition-colors">
                  <Play className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                FEATURED
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                {appearances[0].title}
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {appearances[0].description}
              </p>
              
              <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{appearances[0].date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tv className="h-4 w-4" />
                  <span>{appearances[0].channel}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights:</h3>
                <ul className="space-y-2">
                  {appearances[0].highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-violet-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all">
                Watch Full Episode
              </button>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-violet-100">
            <Users className="h-12 w-12 text-violet-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">10M+</div>
            <div className="text-gray-600">Viewers Reached</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-violet-100">
            <Tv className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">TV Appearances</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-violet-100">
            <Award className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-gray-600">Years on Television</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-violet-900 to-purple-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-display font-bold mb-4">
            Experience Dr. Roohi Jain's Wisdom Personally
          </h2>
          <p className="text-xl text-violet-200 mb-8 max-w-2xl mx-auto">
            Get the same expert guidance that millions have seen on television, 
            tailored specifically for your life's journey
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-amber-400 to-yellow-300 text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Book Personal Consultation
            </Link>
            <Link
              to="/chatbot"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-violet-900 transition-all"
            >
              Chat with AI Astrologer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVAppearancesPage;