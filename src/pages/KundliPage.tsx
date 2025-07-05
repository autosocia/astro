import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Star, Download, Share2, Eye } from 'lucide-react';

const KundliPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    place: '',
    gender: 'male'
  });

  const [showChart, setShowChart] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowChart(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Birth Chart Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate your personalized Kundli with Vedic astrology calculations and detailed insights
          </p>
        </div>

        {!showChart ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-violet-100">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Enter Your Birth Details
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline h-4 w-4 mr-1" />
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline h-4 w-4 mr-1" />
                      Time of Birth
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Place of Birth
                  </label>
                  <input
                    type="text"
                    name="place"
                    value={formData.place}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                    placeholder="Enter city, state, country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-cosmic text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  <Star className="inline h-5 w-5 mr-2" />
                  Generate Birth Chart
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Chart Header */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-violet-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-display font-semibold text-gray-900">
                    Birth Chart for {formData.name}
                  </h2>
                  <p className="text-gray-600">
                    {formData.date} at {formData.time} in {formData.place}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                    <Eye className="h-4 w-4" />
                    <span>View</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-violet-100">
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-6">
                Vedic Birth Chart
              </h3>
              <div className="chart-container">
                <div className="relative w-full h-96 bg-gradient-to-br from-violet-100 to-amber-100 rounded-xl border-2 border-violet-200 flex items-center justify-center">
                  <div className="text-center">
                    <Star className="h-16 w-16 text-violet-400 mx-auto mb-4" />
                    <p className="text-gray-600 text-lg">Chart will be generated here</p>
                    <p className="text-gray-500 text-sm">Connect to astrology API for calculations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Another Chart */}
            <div className="text-center">
              <button
                onClick={() => setShowChart(false)}
                className="bg-gradient-cosmic text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all"
              >
                Generate Another Chart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default KundliPage;