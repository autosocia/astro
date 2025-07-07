import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Star, Trophy, Medal, Crown, Sparkles, Calendar } from 'lucide-react';

const AwardsPage = () => {
  const awards = [
    {
      title: "Excellence in Vedic Astrology",
      organization: "International Astrology Council",
      year: "2023",
      description: "Recognized for outstanding contribution to the preservation and practice of Vedic astrology",
      icon: Trophy,
      category: "Professional Excellence"
    },
    {
      title: "Spiritual Guide of the Year",
      organization: "National Spiritual Society",
      year: "2022",
      description: "Honored for transforming lives through compassionate spiritual guidance and accurate predictions",
      icon: Crown,
      category: "Community Impact"
    },
    {
      title: "Media Personality Award",
      organization: "Television Broadcasting Association",
      year: "2021",
      description: "Acknowledged for bringing authentic astrology to mainstream television with integrity",
      icon: Star,
      category: "Media Recognition"
    },
    {
      title: "Lifetime Achievement in Astrology",
      organization: "Vedic Sciences Foundation",
      year: "2020",
      description: "Celebrating 25 years of dedicated service to the field of astrology and spiritual healing",
      icon: Medal,
      category: "Lifetime Achievement"
    }
  ];

  const recognitions = [
    "Featured in Times of India as 'Most Trusted Astrologer'",
    "Guest speaker at International Astrology Conference",
    "Consulted by Fortune 500 CEOs for business decisions",
    "Regular columnist for leading spiritual magazines",
    "Keynote speaker at Vedic Sciences Summit",
    "Honored by local government for community service"
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
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Award className="h-16 w-16 text-amber-500" />
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Awards & Recognition
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dr. Roohi Jain's exceptional contribution to astrology and spiritual guidance has been 
            recognized by prestigious institutions and organizations worldwide
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <img
              src="/WhatsApp Image 2025-07-04 at 19.06.01 (2).jpeg"
              alt="Dr. Roohi Jain receiving awards"
              className="w-full h-96 object-cover object-center rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-3xl font-display font-bold mb-2">Legacy of Excellence</h2>
              <p className="text-lg text-gray-200">25+ years of dedicated service to humanity</p>
            </div>
            <div className="absolute top-8 right-8 bg-amber-500 text-white px-4 py-2 rounded-full font-semibold">
              Award Winner
            </div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 text-center mb-12">
            Major Awards & Honors
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-violet-100 hover:shadow-2xl transition-all">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg">
                    <award.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-display font-bold text-gray-900">{award.title}</h3>
                      <span className="bg-violet-100 text-violet-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-violet-600 font-semibold mb-2">{award.organization}</p>
                    <span className="inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                      {award.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 text-center mb-12">
            Notable Recognitions
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-violet-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recognitions.map((recognition, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Sparkles className="h-5 w-5 text-amber-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{recognition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-violet-900 to-purple-900 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Impact & Reach</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-violet-200">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-violet-200">Lives Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-violet-200">TV Appearances</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-violet-200">Awards Received</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16">
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <div className="text-center">
              <blockquote className="text-2xl font-display italic text-gray-800 mb-6">
                "Dr. Roohi Jain represents the highest standards of integrity and wisdom in astrology. 
                Her awards are well-deserved recognition of her extraordinary service to humanity."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Astrology Council Chairman</div>
                  <div className="text-gray-600 text-sm">International Recognition Committee</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
            Experience Award-Winning Guidance
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands who have benefited from Dr. Roohi Jain's recognized expertise and compassionate guidance
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-amber-400 to-yellow-300 text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              Book Award-Winning Consultation
            </Link>
            <Link
              to="/kundli"
              className="border-2 border-violet-600 text-violet-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-600 hover:text-white transition-all"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsPage;