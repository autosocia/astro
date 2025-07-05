import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Heart, 
  MessageCircle, 
  FileText, 
  TrendingUp,
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
  Briefcase
} from 'lucide-react';
import DashboardNavbar from '../components/DashboardNavbar';
import Sidebar from '../components/Sidebar';
import FeatureCard from '../components/FeatureCard';

const DashboardPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const features = [
    {
      title: 'Birth Chart / Kundli',
      subtitle: 'Planetary position and your chart',
      icon: Star,
      ctaLabel: 'Generate Chart',
      link: '/birth-chart',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Match Horoscope',
      subtitle: 'Guna Milan with your partner',
      icon: Heart,
      ctaLabel: 'Check Compatibility',
      link: '/match-horoscope',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'Talk to Astrologer',
      subtitle: 'First chat free with certified astrologers',
      icon: MessageCircle,
      ctaLabel: 'Start Chat',
      link: '/talk',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Your Life Predictions',
      subtitle: 'Nature, Love, Career insights',
      icon: Target,
      ctaLabel: 'View Predictions',
      link: '/life-predictions',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Gochar Phal (Transit)',
      subtitle: 'How current planets impact you',
      icon: TrendingUp,
      ctaLabel: 'Check Transit',
      link: '/transit',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Dhruv Astro Software',
      subtitle: 'Go to dashboard',
      icon: Compass,
      ctaLabel: 'Open Dashboard',
      link: '/dhruv-dashboard',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Lal Kitab Horoscope',
      subtitle: 'Predictions, remedies & upay',
      icon: BookOpen,
      ctaLabel: 'Get Report',
      link: '/lal-kitab',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Mangal Dosha',
      subtitle: 'Check dosha, remedies, marital impact',
      icon: Shield,
      ctaLabel: 'Check Dosha',
      link: '/mangal-dosha',
      gradient: 'from-red-600 to-orange-500'
    },
    {
      title: 'Ask a Question',
      subtitle: 'Personal report by experts',
      icon: HelpCircle,
      ctaLabel: 'Ask Now',
      link: '/ask-question',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      title: 'Ascendant',
      subtitle: 'Ascendant, Nakshatra, Moon-sign traits',
      icon: Sun,
      ctaLabel: 'View Details',
      link: '/ascendant',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Gemstones Report',
      subtitle: 'Which gem suits you & how to wear',
      icon: Gem,
      ctaLabel: 'Get Report',
      link: '/gemstones',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      title: 'Brihat Kundli',
      subtitle: '250-page coloured report',
      icon: FileText,
      ctaLabel: 'Generate Report',
      link: '/brihat-kundli',
      gradient: 'from-blue-600 to-indigo-500'
    },
    {
      title: '2025 Personalized Horoscope',
      subtitle: 'Your annual forecast',
      icon: Calendar,
      ctaLabel: 'View 2025',
      link: '/horoscope-2025',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      title: 'My Day Today',
      subtitle: "Today's predictions",
      icon: Clock,
      ctaLabel: 'Check Today',
      link: '/daily',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      title: 'Year Analysis (Varshphal)',
      subtitle: 'How will 2025 be?',
      icon: PieChart,
      ctaLabel: 'Get Analysis',
      link: '/varshphal',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Sade Sati Life Report',
      subtitle: 'Full-life Saturn insight',
      icon: Moon,
      ctaLabel: 'View Report',
      link: '/sade-sati',
      gradient: 'from-gray-600 to-gray-500'
    },
    {
      title: 'Kalsarp Dosh / Yog',
      subtitle: 'Lifelong impact',
      icon: Zap,
      ctaLabel: 'Check Dosh',
      link: '/kalsarp',
      gradient: 'from-red-700 to-red-500'
    },
    {
      title: 'Dasha Phal Analysis',
      subtitle: 'Rise & fall timelines',
      icon: TrendingUp,
      ctaLabel: 'View Dasha',
      link: '/dasha-phal',
      gradient: 'from-indigo-600 to-blue-500'
    },
    {
      title: 'Love',
      subtitle: 'Love life forecast',
      icon: Heart,
      ctaLabel: 'Love Reading',
      link: '/love',
      gradient: 'from-pink-600 to-rose-500'
    },
    {
      title: 'Career',
      subtitle: 'Career growth outlook',
      icon: Briefcase,
      ctaLabel: 'Career Guide',
      link: '/career',
      gradient: 'from-blue-700 to-blue-500'
    },
    {
      title: 'Nakshatra',
      subtitle: 'Star-sign deep dive',
      icon: Sparkles,
      ctaLabel: 'Explore Stars',
      link: '/nakshatra',
      gradient: 'from-purple-700 to-indigo-500'
    },
    {
      title: 'Nature',
      subtitle: 'Personality analysis',
      icon: User,
      ctaLabel: 'Know Yourself',
      link: '/nature',
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      title: 'Numerology',
      subtitle: 'Lucky numbers',
      icon: Brain,
      ctaLabel: 'Get Numbers',
      link: '/numerology',
      gradient: 'from-orange-600 to-red-500'
    },
    {
      title: 'Health Index',
      subtitle: 'Immunity & wellness',
      icon: Activity,
      ctaLabel: 'Health Report',
      link: '/health',
      gradient: 'from-green-700 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <DashboardNavbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      <div className="flex min-h-[calc(100vh-80px)]">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
          <Sidebar isOpen={true} onClose={() => {}} />
        </div>
        
        {/* Mobile Sidebar Overlay */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex-1 w-full min-w-0">
          <div className="h-full p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-none"
            >
              {/* Welcome Section */}
              <div className="mb-6 sm:mb-8 lg:mb-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight">
                  Welcome to Your Cosmic Dashboard
                </h1>
                <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl">
                  Explore your destiny with our comprehensive astrology tools
                </p>
              </div>

              {/* Feature Cards Grid */}
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
                  {features.map((feature, index) => (
                    <div key={feature.link} className="w-full">
                      <FeatureCard
                        {...feature}
                        delay={index * 0.05}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;