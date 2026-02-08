import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StickyDonationBar from './StickyDonationBar';
import Analytics from '@/components/Analytics';

const RouteFallback = () => (
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" role="status" aria-live="polite">
    <div className="inline-flex items-center gap-3 text-muted-foreground">
      <span
        aria-hidden
        className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground"
      />
      <span>Loading...</span>
    </div>
  </div>
);

const AppLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Back-compat for old hash-based URLs (e.g. /#/about).
  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;

    const hashPath = hash.startsWith('#!/') ? hash.slice(2) : hash.startsWith('#/') ? hash.slice(1) : '';
    if (!hashPath) return;

    navigate(hashPath, { replace: true });
  }, [location.hash, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-gradient-to-b from-teal-50/60 via-background to-gold-50/70 font-sans">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute top-1/3 -right-28 h-96 w-96 rounded-full bg-gold-200/40 blur-3xl" />
        <div className="absolute -bottom-36 left-1/3 h-[28rem] w-[28rem] rounded-full bg-teal-100/40 blur-3xl" />
      </div>
      <Header />
      <Analytics />
      <main id="main-content">
        <Suspense fallback={<RouteFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      {isHome && <StickyDonationBar onDonateClick={() => navigate('/donate')} />}
    </div>
  );
};

export default AppLayout;
