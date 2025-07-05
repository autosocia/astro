import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Heart, 
  MessageCircle, 
  FileText, 
  TrendingUp,
  Settings,
  Gem,
  Calendar,
  Shield,
  Sun,
  Moon,
  Zap,
  User,
  Brain,
  Target,
  Sparkles,
  BookOpen,
  Activity,
  Award,
  Clock,
  Compass,
  Eye,
  Gift,
  HelpCircle,
  Lightbulb,
  MapPin,
  PieChart,
  Telescope,
  Wand2,
  Briefcase,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { icon: Star, label: 'Birth Chart', path: '/kundli' },
    { icon: Heart, label: 'Match', path: '/matchmaking' },
    { icon: MessageCircle, label: 'Talk', path: '/chatbot' },
    { icon: Target, label: 'Life Predictions', path: '/life-predictions' },
    { icon: TrendingUp, label: 'Transit', path: '/transit' },
    { icon: Gem, label: 'Gemstones', path: '/shop' },
    { icon: Calendar, label: 'Daily', path: '/daily' },
    { icon: Shield, label: 'Mangal Dosha', path: '/mangal-dosha' },
    { icon: Sun, label: 'Numerology', path: '/numerology' },
    { icon: Moon, label: 'Nakshatra', path: '/nakshatra' },
    { icon: BookOpen, label: 'Lal Kitab', path: '/lal-kitab' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        w-64 bg-white/5 backdrop-blur-md border-r border-white/10
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col h-full lg:h-auto
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 lg:p-6 border-b border-white/10 lg:border-none">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Star className="h-7 w-7 lg:h-8 lg:w-8 text-yellow-400" />
              <Sparkles className="h-3 w-3 lg:h-4 lg:w-4 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg lg:text-xl">Astro</h2>
              <p className="text-white/60 text-xs">Dashboard</p>
            </div>
          </div>
          
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 lg:px-4 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200
                  text-sm font-medium
                  ${isActive(item.path)
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <item.icon className="h-4 w-4 lg:h-5 lg:w-5 flex-shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="text-center">
            <p className="text-white/40 text-xs">
              © 2025 Astro
            </p>
            <p className="text-white/40 text-xs">
              Dr. Roohi Jain
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;