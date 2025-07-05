import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Zap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const menuItems = [
    { icon: Star, label: 'Birth Chart', path: '/birth-chart' },
    { icon: Heart, label: 'Match', path: '/match-horoscope' },
    { icon: MessageCircle, label: 'Talk', path: '/talk' },
    { icon: FileText, label: 'Reports', path: '/reports' },
    { icon: TrendingUp, label: 'Gochar', path: '/transit' },
    { icon: Gem, label: 'Gemstones', path: '/gemstones' },
    { icon: Calendar, label: 'Daily', path: '/daily' },
    { icon: Shield, label: 'Doshas', path: '/doshas' },
    { icon: Sun, label: 'Numerology', path: '/numerology' },
    { icon: Moon, label: 'Nakshatra', path: '/nakshatra' },
    { icon: Zap, label: 'Remedies', path: '/remedies' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 h-full w-64 bg-white/10 backdrop-blur-md border-r border-white/20 z-50 lg:relative lg:translate-x-0 lg:z-auto"
      >
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <Star className="h-8 w-8 text-yellow-400" />
            <div>
              <h2 className="text-white font-bold text-xl">Astro</h2>
              <p className="text-white/60 text-xs">Dashboard</p>
            </div>
          </div>

          <nav className="space-y-2">
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
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;