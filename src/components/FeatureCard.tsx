import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  ctaLabel: string;
  link: string;
  gradient?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  subtitle,
  icon: Icon,
  ctaLabel,
  link,
  gradient = 'from-purple-500 to-pink-500',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group w-full h-full"
    >
      <Link to={link} className="block w-full h-full">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 lg:p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 h-full min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] flex flex-col">
          <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4 flex-1">
            <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${gradient} flex-shrink-0`}>
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 group-hover:text-purple-200 transition-colors leading-tight line-clamp-2">
                {title}
              </h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                {subtitle}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-2 sm:pt-3">
            <span className="text-purple-300 font-medium text-xs sm:text-sm group-hover:text-purple-200 transition-colors truncate">
              {ctaLabel}
            </span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-purple-300 group-hover:text-purple-200 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;