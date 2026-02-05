import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    { id: 'economic-empowerment', name: 'Economic Empowerment' },
    { id: 'livelihood', name: 'Livelihood Program' },
    { id: 'protection-gbv', name: 'Protection & GBV' },
    { id: 'mhpss', name: 'Psychosocial Support' },
    { id: 'child-youth', name: 'Child & Youth' },
    { id: 'happy-family', name: 'Happy Family' },
  ];

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About Us' },
    { id: 'programs', name: 'Programs', hasDropdown: true },
    { id: 'impact', name: 'Impact' },
    { id: 'legal-awareness', name: 'Legal Awareness' },
    { id: 'media', name: 'Media' },
    { id: 'partnerships', name: 'Partnerships' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-black/5 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
          : 'bg-white/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47] rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">EF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[#2C5F6F] font-bold text-lg leading-tight">
                Ethio Friends Foundation
              </h1>
              <p className="text-[#D4A574] text-xs font-medium">For Refugees</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setProgramsDropdownOpen(true)}
                    onMouseLeave={() => setProgramsDropdownOpen(false)}
                  >
                    <button
                      className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center transition-colors ${
                        currentPage.startsWith('program')
                          ? 'text-[#2C5F6F] bg-[#2C5F6F]/10'
                          : 'text-gray-700 hover:text-[#2C5F6F] hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {programsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                        <button
                          onClick={() => handleNavClick('programs')}
                          className="w-full text-left px-4 py-2 text-sm font-semibold text-[#2C5F6F] hover:bg-[#2C5F6F]/10"
                        >
                          All Programs
                        </button>
                        <div className="border-t border-gray-100 my-1"></div>
                        {programs.map((program) => (
                          <button
                            key={program.id}
                            onClick={() => handleNavClick(`program-${program.id}`)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#2C5F6F]/10 hover:text-[#2C5F6F]"
                          >
                            {program.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-[#2C5F6F] bg-[#2C5F6F]/10'
                        : 'text-gray-700 hover:text-[#2C5F6F] hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('donate')}
              className="bg-gradient-to-r from-[#D4A574] to-[#c49464] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
            >
              <Heart className="w-4 h-4 mr-2" />
              Donate Now
            </button>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => handleNavClick('programs')}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                          currentPage.startsWith('program')
                            ? 'text-[#2C5F6F] bg-[#2C5F6F]/10'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.name}
                      </button>
                      <div className="ml-4 space-y-1">
                        {programs.map((program) => (
                          <button
                            key={program.id}
                            onClick={() => handleNavClick(`program-${program.id}`)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-[#2C5F6F]"
                          >
                            {program.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                        currentPage === item.id
                          ? 'text-[#2C5F6F] bg-[#2C5F6F]/10'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-4 bg-gradient-to-r from-[#D4A574] to-[#c49464] text-white px-5 py-3 rounded-full text-sm font-semibold flex items-center justify-center"
              >
                <Heart className="w-4 h-4 mr-2" />
                Support Our Work
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
