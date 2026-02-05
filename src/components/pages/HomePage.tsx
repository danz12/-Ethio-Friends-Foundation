import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Users, Heart, BookOpen, Shield, Home, Briefcase, ChevronRight, Play, Quote, Handshake, type LucideIcon } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const TARGET_STATS = { families: 850, workshops: 120, beneficiaries: 5000, partners: 25 } as const;

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const [counters, setCounters] = useState({ families: 0, workshops: 0, beneficiaries: 0, partners: 0 });
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounters = useCallback(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        families: Math.floor(TARGET_STATS.families * progress),
        workshops: Math.floor(TARGET_STATS.workshops * progress),
        beneficiaries: Math.floor(TARGET_STATS.beneficiaries * progress),
        partners: Math.floor(TARGET_STATS.partners * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(TARGET_STATS);
      }
    }, interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, animateCounters]);

  const programs = [
    {
      id: 'economic-empowerment',
      title: 'Economic Empowerment',
      description: 'Building sustainable livelihoods through entrepreneurship training and business support.',
      icon: Briefcase,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503428_5f515e73.jpg',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 'livelihood',
      title: 'Livelihood Program',
      description: 'Providing skills training and employment opportunities for refugee communities.',
      icon: Users,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503617_ce61aba2.jpg',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 'protection-gbv',
      title: 'Protection & GBV',
      description: 'Preventing gender-based violence and ensuring safety for vulnerable populations.',
      icon: Shield,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287505032_a263e9ad.jpg',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 'mhpss',
      title: 'Psychosocial Support',
      description: 'Mental health services and community-based psychosocial support programs.',
      icon: Heart,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287509277_ccf1658b.jpg',
      color: 'from-rose-500 to-red-600',
    },
    {
      id: 'child-youth',
      title: 'Child & Youth Program',
      description: 'Education support and development programs for refugee children and youth.',
      icon: BookOpen,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287505751_03bf4158.jpg',
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 'happy-family',
      title: 'Happy Family Program',
      description: 'Strengthening family bonds and promoting healthy family dynamics.',
      icon: Home,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287506336_e4309f12.jpg',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  const testimonials = [
    {
      quote: "EFFR gave me the skills and confidence to start my own business. Now I can support my family with dignity.",
      name: "Amina M.",
      role: "Program Beneficiary",
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287570278_b23d1ebd.jpg',
    },
    {
      quote: "The psychosocial support program helped me heal from trauma and find hope for the future.",
      name: "Samuel T.",
      role: "Community Member",
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287572746_e5472e29.jpg',
    },
    {
      quote: "Thanks to EFFR's education program, my children are now in school and dreaming of a better future.",
      name: "Fatima A.",
      role: "Parent",
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287572721_85927ff1.jpg',
    },
  ];

  const impactImages = [
    'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287549968_1b361fc2.jpg',
    'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287550924_b97c585c.jpg',
    'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287524015_3ed19abb.jpg',
    'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287526096_911c3873.jpg',
  ];

  const stats: Array<{ label: string; value: number; icon: LucideIcon }> = [
    { label: 'Families Supported', value: counters.families, icon: Home },
    { label: 'Workshops Conducted', value: counters.workshops, icon: BookOpen },
    { label: 'Beneficiaries Reached', value: counters.beneficiaries, icon: Users },
    { label: 'Partner Organizations', value: counters.partners, icon: Handshake },
  ];

  const partners = [
    { name: 'Danish Refugee Council', type: 'Implementing Partner' },
    { name: 'UNHCR Ethiopia', type: 'Technical Partner' },
    { name: 'ARWNEY', type: 'Network Partner' },
    { name: 'Ethiopian Government (ARRA)', type: 'Government Partner' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287487818_f29a9c0a.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-700/95 via-primary/75 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-teal-900/70"></div>
        </div>

        <div aria-hidden className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary/25 blur-3xl" />
          <div className="absolute -bottom-48 -left-48 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/20 border border-secondary/30 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></span>
              <span className="text-secondary text-sm font-medium">Ethiopia's First Refugee-Led Organization</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Refugees.
              <span className="block text-secondary">Building Futures.</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              EFFR works to empower refugees from diverse nationalities through advocacy, protection, livelihoods, psychosocial support, and education initiatives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-8 py-4 bg-gradient-to-r from-secondary to-gold-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#D4A574]/30 transition-all duration-300 flex items-center justify-center group"
              >
                Support Our Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setCurrentPage('partnerships')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Partner With Us
              </button>
              <button
                onClick={() => setCurrentPage('media')}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white border-2 border-secondary/40 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-transparent relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-2xl shadow-black/10 p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value.toLocaleString()}+
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm px-8 py-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Network</span>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2">
                  Working alongside trusted partners
                </h2>
              </div>
              <button
                onClick={() => setCurrentPage('partnerships')}
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
                  <p className="text-primary font-semibold leading-snug">
                    {partner.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {partner.type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About EFFR</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                  Ethiopia's First Official Refugee-Led Organization
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  EFFR is the first official Refugee-Led Organization (RLO) in Ethiopia, and a member and chair of the African Refugee Women Led Network (Ethiopia – ARWNEY). We work to empower refugees from diverse nationalities and backgrounds.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our vision is building empowered refugee communities through training and rehabilitation. We advocate for refugee rights, economic and social empowerment, gender-based violence prevention, education support, and health awareness.
                </p>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group"
                >
                  Learn More About Us
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {impactImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl overflow-hidden shadow-lg ${idx === 0 ? 'col-span-2' : ''}`}
                  >
                    <img
                      src={img}
                      alt={`EFFR Impact ${idx + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-12">
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                Our Programs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Comprehensive programs designed to empower refugees and build sustainable communities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <div
                  key={program.id}
                  onClick={() => setCurrentPage(`program-${program.id}`)}
                  className="group bg-white/90 backdrop-blur rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ring-1 ring-black/5"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
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
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <span className="inline-flex items-center text-secondary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setCurrentPage('programs')}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md"
              >
                View All Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Voices of Hope
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Real stories from the communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <Quote className="w-10 h-10 text-secondary mb-4" />
                <p className="text-white text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 via-white/70 to-gold-50/80 backdrop-blur-md border border-black/5 shadow-sm p-10 md:p-14 text-center">
            <div aria-hidden className="absolute inset-0">
              <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
              <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-gold-200/40 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Join Us in Making a Difference
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Whether through donations, partnerships, or volunteering, your support helps us empower refugee communities and build brighter futures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setCurrentPage('donate')}
                  className="px-8 py-4 bg-gradient-to-r from-secondary to-gold-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#D4A574]/30 transition-all duration-300 flex items-center justify-center"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </button>
                <button
                  onClick={() => setCurrentPage('partnerships')}
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md"
                >
                  Become a Partner
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Volunteer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
