import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Accessibility,
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronRight,
  Handshake,
  Heart,
  Home,
  Languages,
  Scale,
  Shield,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import OptimizedImage from '@/components/OptimizedImage';
import { SITE } from '@/lib/site';
import { EFFR_PROFILE } from '@/lib/effrProfile';

const TARGET_STATS = {
  cashSupportFamilies: EFFR_PROFILE.achievements.relief.cashAssistanceFamilies,
  foodBasketFamilies: EFFR_PROFILE.achievements.relief.foodBasketFamilies,
  translatedLanguages: EFFR_PROFILE.achievements.legalAwareness.translatedLanguages,
  amharicCourseChildren: EFFR_PROFILE.achievements.backToSchool.amharicCourseChildren,
} as const;

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [counters, setCounters] = useState({
    cashSupportFamilies: 0,
    foodBasketFamilies: 0,
    translatedLanguages: 0,
    amharicCourseChildren: 0,
  });
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounters = useCallback(() => {
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = window.setInterval(() => {
      step += 1;
      const progress = Math.min(step / steps, 1);

      setCounters({
        cashSupportFamilies: Math.round(TARGET_STATS.cashSupportFamilies * progress),
        foodBasketFamilies: Math.round(TARGET_STATS.foodBasketFamilies * progress),
        translatedLanguages: Math.round(TARGET_STATS.translatedLanguages * progress),
        amharicCourseChildren: Math.round(TARGET_STATS.amharicCourseChildren * progress),
      });

      if (progress >= 1) {
        window.clearInterval(timer);
        setCounters(TARGET_STATS);
      }
    }, interval);
  }, []);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animateCounters, hasAnimated]);

  const programs = [
    {
      id: 'economic-empowerment',
      title: 'Economic Empowerment',
      description: 'Entrepreneurship and business skills training to strengthen self-reliance.',
      icon: Briefcase,
      image: '/images/official/photo_2024-11-28_13-05-01.jpg',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'livelihood',
      title: 'Livelihood Program',
      description: 'Skills development and pathways to livelihoods for refugees and host communities.',
      icon: Users,
      image: '/images/official/photo_2024-11-28_13-05-36.jpg',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'protection-gbv',
      title: 'Protection & GBV',
      description: 'Protection, safety, and community awareness to prevent and respond to gender-based violence.',
      icon: Shield,
      image: '/images/official/photo_2024-12-27_12-19-08.jpg',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 'mhpss',
      title: 'Psychosocial Support (MHPSS)',
      description: 'Community-based psychosocial support to strengthen wellbeing and social cohesion.',
      icon: Heart,
      image: '/images/official/photo_2026-02-07_22-29-33-new.jpg',
      color: 'from-rose-500 to-red-600',
    },
    {
      id: 'child-youth',
      title: 'Child & Youth Program',
      description: 'Education support, language learning, and youth-focused community initiatives.',
      icon: BookOpen,
      image: '/images/official/photo_2024-11-28_13-05-40.jpg',
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 'happy-family',
      title: 'Happy Family Program',
      description: 'Family wellbeing support through community awareness, dialogue, and referrals.',
      icon: Home,
      image: '/images/official/photo_2024-11-28_13-05-42.jpg',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 'disability-support',
      title: 'Disability Support Program',
      description: 'Promoting inclusion and access to support for persons with disabilities.',
      icon: Accessibility,
      image: '/images/official/photo_2026-02-07_21-33-53.jpg',
      color: 'from-teal-500 to-emerald-600',
    },
  ];

  const impactImages = [
    '/images/official/photo_2024-11-28_13-05-01.jpg',
    '/images/official/photo_2024-11-28_13-05-23.jpg',
    '/images/official/photo_2024-11-28_13-05-40.jpg',
    '/images/official/photo_2026-02-07_21-33-53.jpg',
  ];

  const stats: Array<{ label: string; value: number; icon: LucideIcon }> = [
    { label: 'Families supported (Ramadan cash)', value: counters.cashSupportFamilies, icon: Heart },
    { label: 'Families supported (food baskets)', value: counters.foodBasketFamilies, icon: Users },
    { label: 'Languages translated (labor law)', value: counters.translatedLanguages, icon: Languages },
    { label: 'Children in Amharic course', value: counters.amharicCourseChildren, icon: BookOpen },
  ];

  const partners = [
    { name: 'Danish Refugee Council (DRC)', type: 'MHPSS partnership' },
    { name: 'UNHCR', type: 'Education support' },
    { name: 'U.S. Refugee Self-Reliance Initiative (RSRI)', type: 'Legal awareness supporter' },
    { name: 'Refugees and Returnees Service (RRS)', type: 'Legal awareness partner' },
  ];

  const highlights = [
    {
      title: 'Relief assistance',
      description: `Ramadan cash assistance reached ${EFFR_PROFILE.achievements.relief.cashAssistanceFamilies} families, alongside food basket support for ${EFFR_PROFILE.achievements.relief.foodBasketFamilies} families.`,
      icon: Heart,
      to: '/impact',
    },
    {
      title: 'Labor law awareness',
      description: `The Ethiopian labor law project was translated into ${EFFR_PROFILE.achievements.legalAwareness.translatedLanguages} languages with RSRI support and RRS partnership.`,
      icon: Scale,
      to: '/legal-awareness',
    },
    {
      title: 'Back to School',
      description: `In Lemi Kura (Addis Ababa), the project supported school supplies for ${EFFR_PROFILE.achievements.backToSchool.schoolSuppliesChildren} children and a ${EFFR_PROFILE.achievements.backToSchool.amharicCourseDurationMonths}-month Amharic course for ${EFFR_PROFILE.achievements.backToSchool.amharicCourseChildren} children.`,
      icon: BookOpen,
      to: '/impact',
    },
    {
      title: 'MHPSS partnership',
      description: `EFFR partners with ${EFFR_PROFILE.achievements.partnerships.mhpssPartner} to support psychosocial wellbeing and community resilience.`,
      icon: Handshake,
      to: '/programs/mhpss',
    },
  ];

  return (
    <article className="min-h-screen">
      <Seo title={SITE.name} description={SITE.description} />
      <StructuredData breadcrumbs={[{ name: 'Home', path: '/' }]} />

      {/* Hero Section */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <OptimizedImage
            src="/images/official/photo_2024-11-28_13-05-39.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-primary/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-teal-950/55" />
        </div>

        <div aria-hidden className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary/25 blur-3xl" />
          <div className="absolute -bottom-48 -left-48 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-2xl animate-fade-in">
            <div className="rounded-3xl bg-white/10 supports-[backdrop-filter]:bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.28)] p-7 sm:p-9">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse" />
                <span className="text-white/90 text-sm font-medium">
                  Ethiopia&apos;s first formally registered Refugee-Led Organization
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6 text-balance">
                Empowering Refugees.
                <span className="block text-secondary">Building Futures.</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl text-balance">
                We empower refugees from different nationalities and religions through advocacy, protection,
                livelihoods, psychosocial support, education, and inclusion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/donate')}
                  className="px-8 py-4 bg-gradient-to-r from-secondary to-gold-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#D4A574]/30 transition-all duration-300 flex items-center justify-center group"
                >
                  Support Our Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/programs')}
                  className="px-8 py-4 bg-white/10 hover:bg-white/[0.16] backdrop-blur-sm text-white border border-white/25 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  Explore Programs
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-white/80">
                <span className="rounded-full bg-white/15 border border-white/20 px-3 py-1">Refugee-led organization</span>
                <span className="rounded-full bg-white/15 border border-white/20 px-3 py-1">Community-driven programs</span>
                <span className="rounded-full bg-white/15 border border-white/20 px-3 py-1">Transparent impact reporting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 sm:py-16 bg-transparent relative -mt-12 sm:-mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-2xl shadow-black/10 p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Quick Actions */}
      <section className="sm:hidden pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-black/5 shadow-sm p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">Quick Actions</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => navigate('/donate')}
                className="rounded-xl bg-gradient-to-r from-[#D4A574] to-[#c49464] px-4 py-3 text-sm font-semibold text-white"
              >
                Donate
              </button>
              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="rounded-xl bg-[#2C5F6F] px-4 py-3 text-sm font-semibold text-white"
              >
                Programs
              </button>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="rounded-xl border border-[#2C5F6F]/20 bg-white px-4 py-3 text-sm font-semibold text-[#2C5F6F]"
              >
                Contact
              </button>
              <button
                type="button"
                onClick={() => navigate('/partnerships')}
                className="rounded-xl border border-[#2C5F6F]/20 bg-white px-4 py-3 text-sm font-semibold text-[#2C5F6F]"
              >
                Partnership
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm px-5 sm:px-8 py-8 sm:py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Network</span>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2">Working alongside partners</h2>
              </div>
              <button
                type="button"
                onClick={() => navigate('/partnerships')}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md"
              >
                View Partnerships
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-2xl bg-white/80 ring-1 ring-black/5 p-5 hover:shadow-md transition-shadow"
                >
                  <p className="text-primary font-semibold leading-snug">{partner.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{partner.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm p-6 sm:p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About EFFR</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                  Refugee-led, community-driven impact
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">{EFFR_PROFILE.mission}</p>
                <ul className="space-y-3 mb-8">
                  {EFFR_PROFILE.highlights.map((item) => (
                    <li key={item} className="flex items-start">
                      <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-secondary mr-3" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => navigate('/about')}
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group"
                >
                  Learn More About Us
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {impactImages.map((img, idx) => (
                  <div
                    key={img}
                    className={`rounded-2xl overflow-hidden shadow-lg ${idx === 0 ? 'col-span-2' : ''}`}
                  >
                    <OptimizedImage
                      src={img}
                      alt="EFFR community activity"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm p-6 sm:p-8 md:p-12">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Our Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Programs designed to empower refugees and strengthen community resilience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {programs.map((program) => (
                <div
                  key={program.id}
                  onClick={() => navigate(`/programs/${program.id}`)}
                  className="group bg-white/90 backdrop-blur rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ring-1 ring-black/5"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') navigate(`/programs/${program.id}`);
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-70 transition-opacity`}
                    />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg ring-1 ring-black/5">
                        <program.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 min-h-12">{program.description}</p>
                    <span className="inline-flex items-center text-secondary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md"
              >
                View All Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-primary to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Highlights</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">What we’ve been working on</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              A snapshot of key activities and achievements from our official documents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/20 hover:bg-white/[0.14] transition-colors"
              >
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-5 border border-white/20">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">{item.description}</p>
                <button
                  type="button"
                  onClick={() => navigate(item.to)}
                  className="inline-flex items-center text-secondary font-semibold text-sm hover:translate-x-1 transition-transform"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 via-white/70 to-gold-50/80 backdrop-blur-md border border-black/5 shadow-sm p-7 sm:p-10 md:p-14 text-center">
            <div aria-hidden className="absolute inset-0">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
              <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-gold-200/40 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Join Us in Making a Difference</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Whether through donations, partnerships, or volunteering, your support helps strengthen refugee-led
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={() => navigate('/donate')}
                  className="px-8 py-4 bg-gradient-to-r from-secondary to-gold-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#D4A574]/30 transition-all duration-300 flex items-center justify-center"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/partnerships')}
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md"
                >
                  Become a Partner
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default HomePage;
