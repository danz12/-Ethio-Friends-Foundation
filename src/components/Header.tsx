import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

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
    { id: 'disability-support', name: 'Disability Support' },
  ];

  const navItems = [
    { id: 'home', name: 'Home', to: '/' },
    { id: 'about', name: 'About Us', to: '/about' },
    { id: 'programs', name: 'Programs', to: '/programs', hasDropdown: true },
    { id: 'impact', name: 'Impact', to: '/impact' },
    { id: 'legal-awareness', name: 'Legal Awareness', to: '/legal-awareness' },
    { id: 'media', name: 'Media', to: '/media' },
    { id: 'partnerships', name: 'Partnerships', to: '/partnerships' },
    { id: 'contact', name: 'Contact', to: '/contact' },
  ];

  const handleNavClick = (to: string) => {
    navigate(to);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
  };

  const isNavActive = (to: string, hasDropdown?: boolean) => {
    if (hasDropdown) return pathname.startsWith('/programs');
    return pathname === to;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 supports-[backdrop-filter]:bg-white/60 border-black/10 shadow-sm py-2'
          : 'bg-white/55 supports-[backdrop-filter]:bg-white/30 border-white/20 py-4'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] rounded-lg bg-white px-3 py-2 text-sm font-semibold text-[#2C5F6F] shadow"
      >
        Skip to content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center cursor-pointer"
            onClick={() => {
              setMobileMenuOpen(false);
              setProgramsDropdownOpen(false);
            }}
          >
            <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 supports-[backdrop-filter]:bg-white/40 backdrop-blur-xl ring-1 ring-black/5 shadow-sm">
              <img
                src="https://i.postimg.cc/2qTS9DmF/effr.png"
                alt="EFFR logo"
                className="h-10 w-10 object-contain"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="hidden sm:block">
              <span className="block text-[#2C5F6F] font-bold text-lg leading-tight">
                Ethio Friends Foundation
              </span>
              <p className="text-[#D4A574] text-xs font-medium">For Refugees</p>
            </div>
          </Link>

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
                      type="button"
                      onClick={() => handleNavClick(item.to)}
                      aria-current={isNavActive(item.to, item.hasDropdown) ? 'page' : undefined}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium flex items-center transition-all ${
                        pathname.startsWith('/programs')
                          ? 'text-[#2C5F6F] bg-[#2C5F6F]/10 shadow-sm'
                          : 'text-gray-700 hover:text-[#2C5F6F] hover:bg-black/5'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {pathname.startsWith('/programs') && (
                      <span aria-hidden className="absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-[#D4A574]" />
                    )}
                    {programsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur-xl shadow-2xl shadow-black/10 ring-1 ring-black/5 py-2 z-50">
                        <button
                          type="button"
                          onClick={() => handleNavClick('/programs')}
                          className="w-full text-left px-4 py-2 text-sm font-semibold text-[#2C5F6F] hover:bg-[#2C5F6F]/10 transition-colors"
                        >
                          All Programs
                        </button>
                        <div className="border-t border-gray-100 my-1"></div>
                        {programs.map((program) => (
                          <button
                            type="button"
                            key={program.id}
                            onClick={() => handleNavClick(`/programs/${program.id}`)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#2C5F6F]/10 hover:text-[#2C5F6F] transition-colors"
                          >
                            {program.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.to)}
                    aria-current={isNavActive(item.to) ? 'page' : undefined}
                    className={`relative px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      pathname === item.to
                        ? 'text-[#2C5F6F] bg-[#2C5F6F]/10 shadow-sm'
                        : 'text-gray-700 hover:text-[#2C5F6F] hover:bg-black/5'
                    }`}
                  >
                    {item.name}
                    {pathname === item.to && (
                      <span aria-hidden className="absolute -bottom-1 left-3 right-3 h-0.5 rounded-full bg-[#D4A574]" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              type="button"
              onClick={() => handleNavClick('/donate')}
              className="bg-gradient-to-r from-[#D4A574] to-[#c49464] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center"
            >
              <Heart className="w-4 h-4 mr-2" />
              Donate Now
            </button>
          </div>


          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden h-11 w-11 inline-flex items-center justify-center rounded-lg hover:bg-white/60 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
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
          <div className="lg:hidden mt-4 rounded-2xl bg-white/80 supports-[backdrop-filter]:bg-white/60 backdrop-blur-xl ring-1 ring-black/5 shadow-lg p-3 max-h-[calc(100vh-110px)] overflow-y-auto">
            <nav className="flex flex-col space-y-1">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <button
                  type="button"
                  onClick={() => handleNavClick('/donate')}
                  className="rounded-xl bg-gradient-to-r from-[#D4A574] to-[#c49464] px-3 py-3 text-sm font-semibold text-white flex items-center justify-center"
                >
                  Donate
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('/programs')}
                  className="rounded-xl bg-[#2C5F6F] px-3 py-3 text-sm font-semibold text-white flex items-center justify-center"
                >
                  Programs
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleNavClick('/contact')}
                className="mb-3 w-full rounded-xl border border-[#2C5F6F]/20 bg-white px-4 py-3 text-sm font-semibold text-[#2C5F6F] flex items-center justify-center"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <div className="rounded-xl bg-white/80 ring-1 ring-black/5 p-3 mb-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">Quick Program Links</p>
                <div className="grid grid-cols-2 gap-2">
                  {programs.slice(0, 6).map((program) => (
                    <button
                      type="button"
                      key={program.id}
                      onClick={() => handleNavClick(`/programs/${program.id}`)}
                      className="rounded-lg bg-[#2C5F6F]/5 px-3 py-2 text-xs font-medium text-[#2C5F6F] hover:bg-[#2C5F6F]/10 transition-colors text-left"
                    >
                      {program.name}
                    </button>
                  ))}
                </div>
              </div>

              {navItems.map((item) => (
                <div key={item.id}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        type="button"
                        onClick={() => handleNavClick('/programs')}
                        className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                          pathname.startsWith('/programs')
                            ? 'text-[#2C5F6F] bg-[#2C5F6F]/10'
                            : 'text-gray-700 hover:bg-black/5 transition-colors'
                        }`}
                      >
                        {item.name}
                      </button>
                      <div className="ml-4 space-y-1">
                        {programs.map((program) => (
                          <button
                            type="button"
                            key={program.id}
                            onClick={() => handleNavClick(`/programs/${program.id}`)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-[#2C5F6F] hover:bg-black/5 rounded-lg transition-colors"
                          >
                            {program.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.to)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
                        pathname === item.to
                          ? 'text-[#2C5F6F] bg-[#2C5F6F]/10'
                          : 'text-gray-700 hover:bg-black/5 transition-colors'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick('/donate')}
                className="mt-4 sticky bottom-0 bg-gradient-to-r from-[#D4A574] to-[#c49464] text-white px-5 py-3 rounded-full text-sm font-semibold flex items-center justify-center shadow-lg"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
