import React from 'react';
import { Briefcase, Users, Shield, Heart, BookOpen, Home, ArrowRight, CheckCircle } from 'lucide-react';

interface ProgramsPageProps {
  setCurrentPage: (page: string) => void;
}

const ProgramsPage: React.FC<ProgramsPageProps> = ({ setCurrentPage }) => {
  const programs = [
    {
      id: 'economic-empowerment',
      title: 'Economic Empowerment & Entrepreneurship',
      description: 'Building sustainable livelihoods through entrepreneurship training, business development support, and access to microfinance opportunities.',
      icon: Briefcase,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503428_5f515e73.jpg',
      color: 'from-emerald-500 to-teal-600',
      activities: [
        'Business skills training workshops',
        'Microfinance and savings groups',
        'Market linkage support',
        'Entrepreneurship mentorship',
      ],
      beneficiaries: '500+ entrepreneurs supported',
    },
    {
      id: 'livelihood',
      title: 'Livelihood Program',
      description: 'Providing vocational skills training and employment opportunities to help refugees achieve economic independence.',
      icon: Users,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503617_ce61aba2.jpg',
      color: 'from-blue-500 to-indigo-600',
      activities: [
        'Vocational training courses',
        'Job placement assistance',
        'Skills certification programs',
        'Cooperative formation support',
      ],
      beneficiaries: '800+ individuals trained',
    },
    {
      id: 'protection-gbv',
      title: 'Protection & Gender-Based Violence (GBV)',
      description: 'Preventing gender-based violence and providing comprehensive support services to survivors.',
      icon: Shield,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287505032_a263e9ad.jpg',
      color: 'from-purple-500 to-pink-600',
      activities: [
        'GBV prevention awareness campaigns',
        'Survivor support services',
        'Safe spaces for women and girls',
        'Community dialogue sessions',
      ],
      beneficiaries: '1,200+ individuals reached',
    },
    {
      id: 'mhpss',
      title: 'Psychosocial Support & Mental Health (MHPSS)',
      description: 'Providing mental health services and community-based psychosocial support to help refugees heal and thrive.',
      icon: Heart,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287509277_ccf1658b.jpg',
      color: 'from-rose-500 to-red-600',
      activities: [
        'Individual counseling sessions',
        'Group therapy programs',
        'Peer support networks',
        'Trauma healing workshops',
      ],
      beneficiaries: '600+ individuals supported',
    },
    {
      id: 'child-youth',
      title: 'Child & Youth Program',
      description: 'Supporting the education and development of refugee children and youth through comprehensive programs.',
      icon: BookOpen,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287505751_03bf4158.jpg',
      color: 'from-amber-500 to-orange-600',
      activities: [
        'Education material distribution',
        'After-school tutoring programs',
        'Youth leadership development',
        'Recreational activities',
      ],
      beneficiaries: '1,500+ children and youth',
    },
    {
      id: 'happy-family',
      title: 'Happy Family Program',
      description: 'Strengthening family bonds and promoting healthy family dynamics through education and support.',
      icon: Home,
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287506336_e4309f12.jpg',
      color: 'from-cyan-500 to-blue-600',
      activities: [
        'Parenting skills workshops',
        'Family counseling services',
        'Conflict resolution training',
        'Family bonding activities',
      ],
      beneficiaries: '400+ families supported',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Our Programs
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              Comprehensive programs designed to empower refugees and build sustainable, self-reliant communities.
            </p>
          </div>
        </div>
      </section>

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
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-2xl shadow-2xl w-full"
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
                    <span className="text-[#D4A574] font-semibold">{program.beneficiaries}</span>
                    <button
                      onClick={() => setCurrentPage(`program-${program.id}`)}
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
                onClick={() => setCurrentPage(`program-${program.id}`)}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer text-center group"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-[#2C5F6F] text-sm mb-1">{program.title.split(' ').slice(0, 2).join(' ')}</h3>
                <p className="text-[#D4A574] text-xs font-medium">{program.beneficiaries.split(' ')[0]}</p>
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
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Donate Now
            </button>
            <button
              onClick={() => setCurrentPage('partnerships')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
