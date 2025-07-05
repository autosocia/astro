import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star, Sparkles, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Kundli', path: '/kundli' },
    { name: 'Matchmaking', path: '/matchmaking' },
    { name: 'AI Astrologer', path: '/chatbot' },
    { name: 'Consultation', path: '/consultation' },
    { name: 'Shop', path: '/shop' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-violet-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Star className="h-8 w-8 text-violet-600 animate-pulse-slow" />
              <Sparkles className="h-4 w-4 text-amber-500 absolute -top-1 -right-1 animate-float" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold text-cosmic">Astro</span>
              <span className="text-xs text-gray-500 font-primary">Astrology meets AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-primary text-sm font-medium transition-colors hover:text-violet-600 ${
                  isActive(item.path) ? 'text-violet-600' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-violet-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 bg-gradient-cosmic text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
            >
              <User className="h-4 w-4" />
              <span className="font-primary text-sm">Dashboard</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-violet-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-violet-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-violet-600 bg-violet-50'
                    : 'text-gray-700 hover:text-violet-600 hover:bg-violet-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-violet-100 pt-2">
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-cosmic hover:shadow-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;