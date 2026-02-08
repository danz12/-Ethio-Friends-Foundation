import React from 'react';
import { Briefcase, Users, Shield, Heart, BookOpen, Home, ArrowRight, CheckCircle, Accessibility } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import OptimizedImage from '@/components/OptimizedImage';
import PageHero from '@/components/PageHero';

const ProgramsPage: React.FC = () => {
  const navigate = useNavigate();
  const programs = [
    {
      id: 'economic-empowerment',
      title: 'Economic Empowerment & Entrepreneurship',
      description: 'Supporting refugee self-reliance through entrepreneurship training and practical business support.',
      icon: Briefcase,
      image: '/images/official/photo_2024-11-28_13-05-01.jpg',
      color: 'from-emerald-500 to-teal-600',
      activities: [
        'Entrepreneurship and business skills training',
        'Mentorship and peer learning',
        'Linkages to opportunities and services',
        'Community-led capacity building',
      ],
      focus: 'Entrepreneurship and self-reliance',
    },
    {
      id: 'livelihood',
      title: 'Livelihood Program',
      description: 'Supporting skills development and pathways to livelihoods for refugees and host communities.',
      icon: Users,
      image: '/images/official/photo_2024-11-28_13-05-36.jpg',
      color: 'from-blue-500 to-indigo-600',
      activities: [
        'Skills training and coaching',
        'Work-readiness and employability support',
        'Community networks and referrals',
        'Support for small group initiatives',
      ],
      focus: 'Skills and livelihoods pathways',
    },
    {
      id: 'protection-gbv',
      title: 'Protection and GBV Program',
      description: 'Raising awareness and strengthening protection services to prevent and respond to gender-based violence.',
      icon: Shield,
      image: '/images/official/photo_2024-12-27_12-19-08.jpg',
      color: 'from-purple-500 to-pink-600',
      activities: [
        'GBV prevention awareness activities',
        'Community dialogue and referrals',
        'Protection-focused case support (with partners)',
        'Safe and respectful community engagement',
      ],
      focus: 'Safety, dignity, and protection',
    },
    {
      id: 'mhpss',
      title: 'Psychosocial Support and Mental Health (MHPSS)',
      description: 'Community-based psychosocial support to strengthen wellbeing and social cohesion.',
      icon: Heart,
      image: '/images/official/photo_2026-02-07_22-29-33-new.jpg',
      color: 'from-rose-500 to-red-600',
      activities: [
        'Group support sessions',
        'Peer support and community connections',
        'Child-friendly psychosocial activities through play',
        'Linkage to services with partners',
      ],
      focus: 'Wellbeing and social cohesion',
    },
    {
      id: 'child-youth',
      title: 'Child & Youth Program',
      description: 'Supporting refugee children and youth through education and community-based initiatives.',
      icon: BookOpen,
      image: '/images/official/photo_2024-11-28_13-05-40.jpg',
      color: 'from-amber-500 to-orange-600',
      activities: [
        'Back-to-school support and supplies',
        'Language support and learning assistance',
        'Parent and community engagement for retention',
        'Youth activities and mentorship',
      ],
      focus: 'Education and youth development',
    },
    {
      id: 'happy-family',
      title: 'Happy Family Program',
      description: 'Strengthening families through awareness, wellbeing support, and community connections.',
      icon: Home,
      image: '/images/official/photo_2024-11-28_13-05-42.jpg',
      color: 'from-cyan-500 to-blue-600',
      activities: [
        'Family awareness and support sessions',
        'Positive parenting and communication',
        'Community dialogue and referrals',
        'Wellbeing activities for families',
      ],
      focus: 'Family wellbeing and resilience',
    },
    {
      id: 'disability-support',
      title: 'Disability Support Program',
      description: 'Promoting inclusion and access to support for persons with disabilities within refugee and host communities.',
      icon: Accessibility,
      image: '/images/official/photo_2026-02-07_21-33-53.jpg',
      color: 'from-teal-500 to-emerald-600',
      activities: [
        'Inclusion and accessibility awareness',
        'Linkage to services and referrals (with partners)',
        'Community-led support and peer networks',
        'Advocacy for equitable access',
      ],
      focus: 'Inclusion and accessibility',
    },
  ];

  return (
    <article className="min-h-screen pt-20">
      <Seo
        title="Programs"
        description="Explore EFFR programs including economic empowerment, livelihoods, protection and GBV, psychosocial support (MHPSS), child and youth support, family wellbeing, and disability inclusion."
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
        ]}
      />
      {/* Hero Section */}
      <PageHero
        imageSrc="/images/official/photo_2024-11-28_13-05-39.jpg"
        badge={{ label: 'What We Do' }}
        title="Our Programs"
        description="Comprehensive programs designed to empower refugees and build sustainable, self-reliant communities."
      />

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2C5F6F] mb-4">
              Six Pillars of Empowerment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Each program addresses critical needs in refugee communities, working together to create holistic support systems.
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((program, idx) => (
              <div
                key={program.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative">
                    <OptimizedImage
                      src={program.image}
                      alt={program.title}
                      className="w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                      <div className={`absolute -bottom-4 ${idx % 2 === 1 ? '-left-4' : '-right-4'} bg-gradient-to-r ${program.color} text-white p-4 rounded-xl shadow-xl`}>
                        <program.icon className="w-8 h-8" />
                      </div>
                    </div>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2C5F6F] mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#2C5F6F] mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {program.activities.map((activity, actIdx) => (
                        <li key={actIdx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-[#D4A574] mr-3 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D4A574] font-semibold">{program.focus}</span>
                    <button
                      onClick={() => navigate(`/programs/${program.id}`)}
                      className="inline-flex items-center text-[#2C5F6F] font-semibold hover:text-[#D4A574] transition-colors group"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C5F6F] mb-4">
              Program Impact at a Glance
            </h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                onClick={() => navigate(`/programs/${program.id}`)}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer text-center group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-[#2C5F6F] text-sm mb-1">{program.title.split(' ').slice(0, 2).join(' ')}</h3>
                <p className="text-[#D4A574] text-xs font-medium">{program.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C5F6F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Support Our Programs
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Your contribution helps us expand our reach and deepen our impact.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
              onClick={() => navigate('/donate')}
                className="px-8 py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:shadow-xl transition-all"
              >
                Donate Now
              </button>
              <button
              onClick={() => navigate('/partnerships')}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Partner With Us
              </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default ProgramsPage;
