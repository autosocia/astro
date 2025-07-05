import React, { useState } from 'react';
import { Calendar, Clock, Star, Video, MessageCircle, Phone, User, CheckCircle } from 'lucide-react';

const ConsultationPage = () => {
  const [selectedAstrologer, setSelectedAstrologer] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [consultationType, setConsultationType] = useState<'chat' | 'call' | 'video'>('chat');

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
  ];

  const consultationTypes = [
    { id: 'chat', name: 'Chat', icon: MessageCircle, duration: '30 min' },
    { id: 'call', name: 'Phone Call', icon: Phone, duration: '30 min' },
    { id: 'video', name: 'Video Call', icon: Video, duration: '45 min' }
  ];

  const handleBooking = () => {
    if (!selectedAstrologer || !selectedSlot) return;
    
    alert(`Booking functionality will be available once astrologer data is connected`);
  };

  return (
    <div className="w-full max-w-none">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Expert Consultations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with certified astrologers for personalized guidance and solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Astrologer Selection Placeholder */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-violet-100">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Choose Your Astrologer
              </h2>
              <div className="bg-gradient-cosmic-light rounded-xl p-8 text-center">
                <Star className="h-16 w-16 text-violet-400 mx-auto mb-4" />
                <p className="text-gray-700 text-lg mb-2">Astrologer Profiles</p>
                <p className="text-gray-600">
                  Connect to database to load certified astrologer profiles with ratings, specializations, and availability
                </p>
              </div>
            </div>

            {/* Consultation Type */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-violet-100">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Select Consultation Type
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {consultationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setConsultationType(type.id as 'chat' | 'call' | 'video')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      consultationType === type.id
                        ? 'border-violet-500 bg-violet-50'
                        : 'border-gray-200 hover:border-violet-300'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <type.icon className={`h-8 w-8 ${
                        consultationType === type.id ? 'text-violet-600' : 'text-gray-400'
                      }`} />
                      <span className="font-semibold text-gray-900">{type.name}</span>
                      <span className="text-sm text-gray-500">{type.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-violet-100">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">
                Select Time Slot
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      selectedSlot === slot
                        ? 'border-violet-500 bg-violet-50 text-violet-700'
                        : 'border-gray-200 hover:border-violet-300 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">{slot}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-violet-100 sticky top-8">
              <h2 className="text-xl font-display font-semibold text-gray-900 mb-6">
                Booking Summary
              </h2>
              
              <div className="text-center py-8">
                <Star className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">
                  Select an astrologer to continue
                </p>
                <button
                  onClick={handleBooking}
                  className="w-full bg-gradient-cosmic text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all"
                >
                  <CheckCircle className="inline h-5 w-5 mr-2" />
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default ConsultationPage;