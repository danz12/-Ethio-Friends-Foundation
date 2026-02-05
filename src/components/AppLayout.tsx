import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyDonationBar from './StickyDonationBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import ImpactPage from './pages/ImpactPage';
import LegalAwarenessPage from './pages/LegalAwarenessPage';
import MediaPage from './pages/MediaPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ContactPage from './pages/ContactPage';
import BeneficiariesPage from './pages/BeneficiariesPage';
import DonatePage from './pages/DonatePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

const AppLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleDonateClick = () => {
    setCurrentPage('donate');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    // Handle program detail pages
    if (currentPage.startsWith('program-')) {
      const programId = currentPage.replace('program-', '');
      return <ProgramDetailPage programId={programId} setCurrentPage={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'programs':
        return <ProgramsPage setCurrentPage={setCurrentPage} />;
      case 'impact':
        return <ImpactPage setCurrentPage={setCurrentPage} />;
      case 'legal-awareness':
        return <LegalAwarenessPage setCurrentPage={setCurrentPage} />;
      case 'media':
        return <MediaPage setCurrentPage={setCurrentPage} />;
      case 'partnerships':
        return <PartnershipsPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'beneficiaries':
        return <BeneficiariesPage setCurrentPage={setCurrentPage} />;
      case 'donate':
        return <DonatePage setCurrentPage={setCurrentPage} />;
      case 'privacy':
        return <PrivacyPage setCurrentPage={setCurrentPage} />;
      case 'terms':
        return <TermsPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-gradient-to-b from-teal-50/60 via-background to-gold-50/70 font-sans">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute top-1/3 -right-28 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl" />
        <div className="absolute -bottom-36 left-1/3 h-[28rem] w-[28rem] rounded-full bg-teal-100/40 blur-3xl" />
      </div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && (
        <StickyDonationBar onDonateClick={handleDonateClick} />
      )}
    </div>
  );
};

export default AppLayout;
