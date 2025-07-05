import React from 'react';
import { Star } from 'lucide-react';

const BirthChartPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="h-8 w-8 text-yellow-400" />
            <h1 className="text-3xl font-bold text-white">Birth Chart / Kundli</h1>
          </div>
          <p className="text-white/70 text-lg mb-8">
            Generate your detailed Vedic birth chart with planetary positions
          </p>
          
          <div className="bg-white/5 rounded-lg p-12 border border-white/10">
            <h2 className="text-xl text-white mb-4">Coming Soon...</h2>
            <p className="text-white/60">
              This feature is under development. You'll be able to generate detailed birth charts,
              view planetary positions, and get comprehensive astrological insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthChartPage;