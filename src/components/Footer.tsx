import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Star className="h-8 w-8 text-violet-400 animate-pulse-slow" />
                <Sparkles className="h-4 w-4 text-amber-400 absolute -top-1 -right-1 animate-float" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-cosmic">Astro</span>
                <span className="text-xs text-gray-400 font-primary">Astrology meets AI</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover your cosmic journey with AI-powered astrology. Get personalized readings, 
              compatibility analysis, and spiritual guidance for your life's path.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-violet-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-violet-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-violet-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-violet-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/public/kundli" className="text-gray-400 hover:text-violet-400 transition-colors">Birth Chart</Link></li>
              <li><Link to="/public/matchmaking" className="text-gray-400 hover:text-violet-400 transition-colors">Matchmaking</Link></li>
              <li><Link to="/public/chatbot" className="text-gray-400 hover:text-violet-400 transition-colors">AI Astrologer</Link></li>
              <li><Link to="/public/consultation" className="text-gray-400 hover:text-violet-400 transition-colors">Consultation</Link></li>
              <li><Link to="/public/shop" className="text-gray-400 hover:text-violet-400 transition-colors">Gemstones</Link></li>
            </ul>
          </div>

          {/* Reports */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Reports</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Daily Horoscope</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Yearly Predictions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Dosha Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Numerology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Remedies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-violet-400" />
                <span className="text-gray-400">support@Astro.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-violet-400" />
                <span className="text-gray-400">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-violet-400" />
                <span className="text-gray-400">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Astro. All rights reserved. Made with ❤️ for spiritual seekers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;