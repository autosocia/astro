import React from 'react';
import { Calendar } from 'lucide-react';

const DailyPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="h-8 w-8 text-yellow-400" />
            <h1 className="text-3xl font-bold text-white">My Day Today</h1>
          </div>
          <p className="text-white/70 text-lg mb-8">
            Your personalized daily horoscope and predictions
          </p>
          
          <div className="bg-white/5 rounded-lg p-12 border border-white/10">
            <h2 className="text-xl text-white mb-4">Coming Soon...</h2>
            <p className="text-white/60">
              This feature is under development. You'll get daily predictions,
              lucky numbers, colors, and personalized guidance for each day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyPage;