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
  Briefcase,
  Search,
  Save,
  Printer as Print,
  Settings,
  Calculator,
  BarChart3,
  Layers,
  Grid3X3,
  Orbit,
  Phone,
  Download,
  Share2,
  Home,
  AlertTriangle,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const DashboardPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const mainFeatures = [
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

  const calculationLinks = [
    'Basic Details',
    'Planetary Position',
    'Lagna & Chandra Charts',
    'Chalit Table & Chart',
    'Prastharashtakvarga Table',
    'Ashtak Varga Table',
    'Aspect On Bhav Madhya',
    'Aspect On KP Cusp',
    'Planetary Aspect (Western)',
    'Shodashvarga Charts',
    'Shodashvarga Table',
    'Friendship Table',
    'Vimshottari Dasha',
    'ShadBala & BhavBala',
    'Char Dasha',
    'Yogini Dasha',
    'Western System',
    'Sarvatobhadra Chakra',
    'Transit Today',
    'Print Format 1 - PDF',
    'Print Format 2 - Low',
    'Print Shodashvarga - PDF',
    'Print Detailed Calculations Reports - PDF',
    'Print Detailed Kundali & Reports - PDF'
  ];

  const paidConsultationLinks = [
    'Print Detailed Calculations Reports - PDF',
    'Vimshottari Dasha',
    'Char Dasha',
    'Yogini Dasha',
    'Lal Kitab Dasha',
    'Print Vimshottari Dasha - Low',
    'Lal Kitab Chart',
    'Lal Kitab Chart & Planets Houses',
    'Lal Kitab Dasha',
    'Lal Kitab Worksheet',
    'Lal Kitab Varshaphal',
    'Lal Kitab Predictions',
    'Lal Kitab Month Charts',
    'Lal Kitab Varshaphal Charts',
    'Lal Kitab Varshphal Predictions (Beta)',
    'Lal Kitab Print Page PDF',
    'KP System Planets & Cusps',
    'Planetary Aspect (Western)',
    'Aspect On KPCusp',
    'KP System Significators & Rps',
    'Save Chart as image',
    'Print KP Page PDF',
    'Print KP Report (PDF)',
    'Print Format 2 - Low',
    'Print Shodashvarga - PDF'
  ];

  const paidServices = [
    { name: 'Astro Brihat Kundli', price: '₹299' },
    { name: 'Raj Yoga Report', price: '₹199' },
    { name: 'Personalized Horoscope 2025', price: '₹499' },
    { name: 'Marriage Report', price: '₹399' },
    { name: 'Career / Job Report', price: '₹299' },
    { name: 'Shani Report', price: '₹199' },
    { name: 'Year Book 2025', price: '₹599' },
    { name: 'Ask a Question Service', price: '₹99' }
  ];

  const aboutServices = [
    'Buy Gemstones',
    'Buy Rudraksha',
    'Buy Yantra',
    'Buy Fengshui',
    'Order Brihat Kundli',
    'Order Year Book',
    'Order Ask a Question Service',
    'Order Shani Report',
    'Order Marriage Report',
    'Order Career / Job Report',
    'Horoscope 2025',
    'Rashifal 2025',
    'Calendar 2025'
  ];

  const renderHeader = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Star className="h-8 w-8 text-yellow-400" />
          <div>
            <h1 className="text-2xl font-display font-bold text-white">Welcome to Astro.com</h1>
            <p className="text-white/70 text-sm">Your Complete Astrology Dashboard</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
            <Print className="h-4 w-4" />
            <span className="hidden sm:inline">Print</span>
          </button>
          <button className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
            <Save className="h-4 w-4" />
            <span className="hidden sm:inline">Save</span>
          </button>
          <button className="flex items-center space-x-2 bg-white/10 text-white px-3 py-2 rounded-lg hover:bg-white/20 transition-colors">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-xl transition-all">
            <MessageCircle className="h-4 w-4" />
            <span>Talk to Astrologer</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderExpandableSection = (title: string, items: string[], sectionKey: string, icon: React.ReactNode) => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-6">
      <button
        onClick={() => setExpandedSection(expandedSection === sectionKey ? null : sectionKey)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center space-x-3">
          {icon}
          <h3 className="text-xl font-display font-semibold text-white">{title}</h3>
        </div>
        {expandedSection === sectionKey ? 
          <ChevronDown className="h-5 w-5 text-white" /> : 
          <ChevronRight className="h-5 w-5 text-white" />
        }
      </button>
      
      {expandedSection === sectionKey && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="px-6 pb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {items.map((item, index) => (
              <button
                key={index}
                className="text-left p-3 bg-white/5 rounded-lg border border-white/20 hover:border-purple-400/50 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white/80 group-hover:text-white transition-colors text-sm">
                    check {item}
                  </span>
                  <Calculator className="h-4 w-4 text-purple-400 group-hover:text-purple-300" />
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );

  const renderAskQuestionSection = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6 text-center">Ask Your Question</h3>
      
      <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-center">
        <HelpCircle className="h-12 w-12 text-white mx-auto mb-4" />
        <h4 className="text-xl font-bold text-white mb-2">Get answer of your urgent question</h4>
        <p className="text-orange-200 mb-6">
          Do you have a question and need answer quickly? Get urgent answer to your question
        </p>
        <div className="flex justify-center space-x-4">
          <button className="flex items-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
            <MessageCircle className="h-5 w-5" />
            <span>Ask Now</span>
          </button>
          <button className="flex items-center space-x-2 bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-orange-800 transition-colors">
            <Phone className="h-5 w-5" />
            <span>Call Expert</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderPaidServicesSection = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">Paid Services</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paidServices.map((service, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-amber-500/10 rounded-lg border border-amber-500/20 hover:border-amber-400/50 transition-colors">
            <span className="text-white/80">{service.name}</span>
            <div className="flex items-center space-x-3">
              <span className="text-amber-400 font-semibold">{service.price}</span>
              <button className="bg-amber-500 text-white px-3 py-1 rounded text-sm hover:bg-amber-600 transition-colors">
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAboutSection = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-8">
      <h3 className="text-2xl font-display font-semibold text-white mb-6">About Astro</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-white/80 leading-relaxed mb-6">
            Astro is India's leading astrology platform, providing accurate Vedic astrology services 
            and predictions. With Dr. Roohi Jain's expertise, we offer comprehensive astrological solutions 
            for all your life questions including birth chart analysis, matchmaking, and spiritual guidance.
          </p>
          
          <h4 className="text-lg font-semibold text-white mb-4">Services & Products</h4>
          <div className="grid grid-cols-2 gap-3">
            {aboutServices.map((service, index) => (
              <button
                key={index}
                className="text-left p-3 bg-white/5 rounded-lg border border-white/20 hover:border-purple-400/50 hover:bg-white/10 transition-all text-sm text-white/80 hover:text-white"
              >
                {service}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="text-center">
            <Sparkles className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-pulse-slow" />
            <p className="text-white/60 text-sm mb-2">Trusted by millions worldwide</p>
            <p className="text-white/60 text-sm">Expert astrologers available 24/7</p>
            <div className="mt-4 flex justify-center space-x-3">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:shadow-lg transition-all">
                Download App
              </button>
              <button className="border border-white/30 text-white px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFooter = () => (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-6">
        <p className="text-white/60 text-sm mb-2">
          All copyrights reserved © 2025 Astro - Dr. Roohi Jain
        </p>
        <div className="flex items-center justify-center space-x-4 text-white/60 text-sm">
          <button className="hover:text-white transition-colors flex items-center space-x-1">
            <Home className="h-3 w-3" />
            <span>Home</span>
          </button>
          <span>|</span>
          <button className="hover:text-white transition-colors">Feedback</button>
          <span>|</span>
          <button className="hover:text-white transition-colors">Disclaimer</button>
        </div>
      </div>
      
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
        <p className="text-green-300 text-sm">
          <strong>Notes:</strong> Your chart has been saved successfully. You can access it anytime from your dashboard.
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-none"
    >
      {renderHeader()}

      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Your Cosmic Dashboard
        </h2>
        <p className="text-white/70 text-lg lg:text-xl leading-relaxed max-w-4xl">
          Explore comprehensive astrology services and discover your destiny with our expert guidance
        </p>
      </div>

      {/* Main Feature Cards Grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-display font-semibold text-white mb-6">Astrology Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mainFeatures.map((feature, index) => (
            <div key={feature.link} className="w-full">
              <FeatureCard
                {...feature}
                delay={index * 0.05}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Calculations Section */}
      {renderExpandableSection(
        "Calculations: If you know Astrology",
        calculationLinks,
        "calculations",
        <Calculator className="h-6 w-6 text-blue-400" />
      )}

      {/* Paid Consultation Section */}
      {renderExpandableSection(
        "Paid Consultation",
        paidConsultationLinks,
        "consultation",
        <Phone className="h-6 w-6 text-green-400" />
      )}

      {/* Ask Question Section */}
      {renderAskQuestionSection()}

      {/* Paid Services Section */}
      {renderPaidServicesSection()}

      {/* About Section */}
      {renderAboutSection()}

      {/* Footer */}
      {renderFooter()}
    </motion.div>
  );
};

export default DashboardPage;