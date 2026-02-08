import React, { useState } from 'react';
import { Mail, MapPin, Facebook, Send, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { subscribeNewsletter } from '@/lib/formsClient';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribeStatus('loading');
    try {
      await subscribeNewsletter(email);
      setSubscribeStatus('success');
      setEmail('');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    } catch (err) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Our Programs', to: '/programs' },
    { name: 'Impact & Activities', to: '/impact' },
    { name: 'Beneficiaries', to: '/beneficiaries' },
    { name: 'Media & Resources', to: '/media' },
    { name: 'Contact Us', to: '/contact' },
  ];


  const programs = [
    { name: 'Economic Empowerment', to: '/programs/economic-empowerment' },
    { name: 'Livelihood Program', to: '/programs/livelihood' },
    { name: 'Protection & GBV', to: '/programs/protection-gbv' },
    { name: 'Psychosocial Support', to: '/programs/mhpss' },
    { name: 'Child & Youth', to: '/programs/child-youth' },
    { name: 'Happy Family', to: '/programs/happy-family' },
    { name: 'Disability Support', to: '/programs/disability-support' },
  ];

  const getInvolved = [
    { name: 'Donate', to: '/donate' },
    { name: 'Partner With Us', to: '/partnerships' },
    { name: 'Volunteer', to: '/contact' },
    { name: 'Legal Awareness Project', to: '/legal-awareness' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a3d47] to-[#0f2830] text-white">
      {/* Newsletter Section */}
      <div className="bg-[#2C5F6F] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
              <p className="text-white/80">
                Subscribe to receive updates on our programs and impact stories.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-l-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#D4A574]"
                required
              />
              <button
                type="submit"
                disabled={subscribeStatus === 'loading'}
                className="px-6 py-3 bg-[#D4A574] hover:bg-[#c49464] rounded-r-full font-semibold transition-colors flex items-center"
              >
                {subscribeStatus === 'loading' ? (
                  <span className="animate-spin">...</span>
                ) : subscribeStatus === 'success' ? (
                  'Subscribed!'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-6">
              <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 shadow-sm ring-1 ring-white/10">
                <img
                  src="https://i.postimg.cc/2qTS9DmF/effr.png"
                  alt="EFFR logo"
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg">EFFR</h4>
                <p className="text-white/60 text-sm">For Refugees</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Ethiopia's first official Refugee-Led Organization, empowering refugees through advocacy, protection, livelihoods, and community support.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#D4A574]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/70 hover:text-[#D4A574] transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#D4A574]">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.to}>
                  <Link
                    to={program.to}
                    className="text-white/70 hover:text-[#D4A574] transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D4A574] rounded-full mr-2"></span>
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#D4A574]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#D4A574] mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#D4A574] mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@effr.org"
                  className="text-white/70 hover:text-[#D4A574] text-sm transition-colors"
                >
                  info@effr.org
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold text-sm mb-3">Get Involved</h5>
              <div className="flex flex-wrap gap-2">
                {getInvolved.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="px-3 py-1.5 bg-white/10 hover:bg-[#D4A574] rounded-full text-xs transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © 2026 Ethio Friends Foundation for Refugees. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-white/60 hover:text-[#D4A574] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-[#D4A574] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
            <p className="text-white/60 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-[#D4A574] mx-1" /> for refugees
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
