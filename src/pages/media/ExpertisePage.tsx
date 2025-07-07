import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, BookOpen, Eye, Compass, Heart, Briefcase, Home, Award } from 'lucide-react';

const ExpertisePage = () => {
  const expertiseAreas = [
    {
      title: "Vedic Astrology",
      description: "Deep knowledge of ancient Vedic texts and planetary influences on human life",
      icon: Star,
      experience: "25+ Years",
      specialties: ["Birth Chart Analysis", "Planetary Transits", "Dasha Predictions", "Yoga Analysis"]
    },
    {
      title: "Numerology",
      description: "Understanding the mystical relationship between numbers and life events",
      icon: BookOpen,
      experience: "20+ Years",
      specialties: ["Name Analysis", "Lucky Numbers", "Life Path Numbers", "Business Numerology"]
    },
    {
      title: "Tarot Reading",
      description: "Intuitive guidance through the ancient art of Tarot card interpretation",
      icon: Eye,
      experience: "15+ Years",
      specialties: ["Love Readings", "Career Guidance", "Spiritual Insights", "Future Predictions"]
    },
    {
      title: "Vastu Shastra",
      description: "Creating harmony between living spaces and cosmic energies",
      icon: Home,
      experience: "18+ Years",
      specialties: ["Home Vastu", "Office Vastu", "Plot Selection", "Remedial Measures"]
    }
  ];

  const achievements = [
    {
      title: "Celebrity Astrologer",
      description: "Trusted advisor to Bollywood stars and business leaders",
      icon: Star
    },
    {
      title: "TV Personality",
      description: "Regular appearances on major news channels and shows",
      icon: Award
    },
    {
      title: "Published Author",
      description: "Written extensively on astrology and spiritual guidance",
      icon: BookOpen
    },
    {
      title: "International Recognition",
      description: "Consulted by clients across the globe for spiritual guidance",
      icon: Compass
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

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Spiritual Mastery & Expertise
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 25 years of dedicated practice, Dr. Roohi Jain has mastered multiple 
              spiritual sciences to provide comprehensive guidance for life's most important decisions.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-amber-500" />
                <span>25+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-violet-500" />
                <span>10,000+ Consultations</span>
              </div>
            </div>
            <Link
              to="/consultation"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <span>Consult Dr. Roohi Jain</span>
            </Link>
          </div>
          
          <div className="relative">
            <img
              src="/WhatsApp Image 2025-07-04 at 19.06.00 (1).jpeg"
              alt="Dr. Roohi Jain Professional Portrait"
              className="w-full h-96 object-cover object-center rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Years of Wisdom</div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive spiritual guidance across multiple ancient sciences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-violet-100 hover:shadow-2xl transition-all">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-gray-900">{area.title}</h3>
                    <p className="text-violet-600 font-semibold">{area.experience}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Specializations:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="h-3 w-3 text-violet-500" />
                        <span className="text-sm text-gray-600">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Honored for exceptional contribution to the field of astrology and spiritual guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-violet-100 hover:shadow-xl transition-all">
                <achievement.icon className="h-12 w-12 text-violet-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-gradient-to-r from-violet-900 to-purple-900 rounded-2xl p-8 text-center text-white mb-16">
          <blockquote className="text-2xl font-display italic mb-6">
            "Dr. Roohi Jain's profound knowledge and compassionate guidance have transformed countless lives. 
            Her ability to blend ancient wisdom with practical solutions is truly remarkable."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
              <Star className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-semibold">Industry Recognition</div>
              <div className="text-violet-200 text-sm">Astrology Community</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the wisdom that has guided thousands toward their true purpose and happiness
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/kundli"
              className="bg-gradient-to-r from-amber-400 to-yellow-300 text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Get Your Free Birth Chart
            </Link>
            <Link
              to="/consultation"
              className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-600 hover:text-white transition-all"
            >
              Book Personal Reading
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertisePage;