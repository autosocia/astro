import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  Bell, 
  User, 
  LogOut, 
  Settings,
  Calendar,
  Star,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface DashboardNavbarProps {
  onMenuToggle: () => void;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ onMenuToggle }) => {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3 sticky top-0 z-30">
      <div className="flex items-center justify-between w-full">
        {/* Left side */}
        <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Logo - visible on mobile when sidebar is closed */}
          <div className="lg:hidden flex items-center space-x-2 min-w-0">
            <div className="relative">
              <Star className="h-6 w-6 sm:h-7 sm:w-7 text-yellow-400" />
              <Sparkles className="h-3 w-3 text-amber-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-white font-semibold text-sm sm:text-base truncate">Astro</span>
              <span className="text-white/60 text-xs truncate">Dashboard</span>
            </div>
          </div>
        </div>

        {/* Center */}
        <div className="flex-1 max-w-xs sm:max-w-md mx-4 sm:mx-8">
          <Link
            to="/daily"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all text-sm sm:text-base shadow-lg hover:shadow-xl"
          >
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
            <span className="font-medium truncate">My Day Today</span>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="relative p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex-shrink-0">
            <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors min-w-0"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <span className="hidden md:block font-medium text-sm sm:text-base truncate max-w-24 lg:max-w-32">
                {user?.displayName || user?.email?.split('@')[0] || 'User'}
              </span>
            </button>

            {showProfileMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 w-40 sm:w-48 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 py-2 z-50"
              >
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
                  onClick={() => setShowProfileMenu(false)}
                >
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/settings"
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm sm:text-base"
                  onClick={() => setShowProfileMenu(false)}
                >
                  <Settings className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Settings</span>
                </Link>
                <hr className="border-white/20 my-2" />
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors w-full text-left text-sm sm:text-base"
                >
                  <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Logout</span>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;