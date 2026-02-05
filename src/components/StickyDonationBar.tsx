import React, { useState, useEffect } from 'react';
import { Heart, X } from 'lucide-react';

interface StickyDonationBarProps {
  onDonateClick: () => void;
}

const StickyDonationBar: React.FC<StickyDonationBarProps> = ({ onDonateClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px (approximately past hero section)
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-[#D4A574] to-[#c49464] shadow-lg transform transition-transform duration-300 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Heart className="w-5 h-5 text-white mr-3 animate-pulse" />
            <p className="text-white font-medium text-sm sm:text-base">
              <span className="hidden sm:inline">Help us empower refugee communities. </span>
              Your support makes a difference.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onDonateClick}
              className="px-4 sm:px-6 py-2 bg-white text-[#2C5F6F] rounded-full font-semibold text-sm hover:shadow-lg transition-all"
            >
              Donate Now
            </button>
            <button
              onClick={handleDismiss}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyDonationBar;
