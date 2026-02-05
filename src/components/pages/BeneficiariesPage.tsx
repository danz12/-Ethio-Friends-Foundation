import React from 'react';
import { Users, AlertTriangle, CheckCircle, Target, Globe, Heart, BookOpen, Briefcase, Shield, ArrowRight } from 'lucide-react';

interface BeneficiariesPageProps {
  setCurrentPage: (page: string) => void;
}

const BeneficiariesPage: React.FC<BeneficiariesPageProps> = ({ setCurrentPage }) => {
  const directBeneficiaries = [
    {
      group: 'Refugee Women',
      description: 'Women from various nationalities receiving economic empowerment, GBV protection, and psychosocial support.',
      count: '2,000+',
      icon: Users,
    },
    {
      group: 'Refugee Children & Youth',
      description: 'Children and young people accessing education support, recreational activities, and leadership programs.',
      count: '1,500+',
      icon: BookOpen,
    },
    {
      group: 'Refugee Families',
      description: 'Families receiving comprehensive support including food assistance, counseling, and family strengthening programs.',
      count: '850+',
      icon: Heart,
    },
    {
      group: 'Refugee Entrepreneurs',
      description: 'Individuals receiving business training, microfinance support, and market linkage assistance.',
      count: '500+',
      icon: Briefcase,
    },
  ];

  const indirectBeneficiaries = [
    'Host community members participating in social cohesion activities',
    'Employers gaining awareness of refugee employment rights',
    'Local businesses benefiting from refugee economic activities',
    'Government officials engaged in policy discussions',
    'Other RLOs learning from EFFR\'s model and experience',
  ];

  const nationalities = [
    { name: 'Eritrea', percentage: 45 },
    { name: 'South Sudan', percentage: 25 },
    { name: 'Somalia', percentage: 15 },
    { name: 'Yemen', percentage: 8 },
    { name: 'Other', percentage: 7 },
  ];

  const challenges = [
    {
      title: 'Limited Funding',
      description: 'Insufficient and unpredictable funding limits our ability to scale programs and reach more beneficiaries.',
      solution: 'Diversifying funding sources and building long-term partnerships with donors.',
      icon: AlertTriangle,
    },
    {
      title: 'Language Barriers',
      description: 'Refugees speak multiple languages, making communication and material development challenging.',
      solution: 'Developing multilingual materials and training community interpreters.',
      icon: Globe,
    },
    {
      title: 'Resource Constraints',
      description: 'Limited office space, equipment, and human resources affect program delivery.',
      solution: 'Seeking in-kind donations and volunteer support to supplement resources.',
      icon: Target,
    },
    {
      title: 'Access to Remote Areas',
      description: 'Reaching refugees in remote camps and settlements presents logistical challenges.',
      solution: 'Training community-based facilitators and using mobile outreach approaches.',
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Who We Serve</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Beneficiaries & Challenges
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              Understanding who we serve and the challenges we face in delivering impactful programs.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Beneficiaries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Direct Impact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Direct Beneficiaries
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The individuals and groups who directly benefit from our programs and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {directBeneficiaries.map((group, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-[#2C5F6F] rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                    <group.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-[#2C5F6F]">{group.group}</h3>
                      <span className="ml-3 px-3 py-1 bg-[#D4A574]/20 text-[#D4A574] rounded-full text-sm font-semibold">
                        {group.count}
                      </span>
                    </div>
                    <p className="text-gray-600">{group.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationalities Served */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Diversity</span>
              <h2 className="text-3xl font-bold text-[#2C5F6F] mt-2 mb-6">
                Nationalities We Serve
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                EFFR serves refugees from diverse nationalities and backgrounds, each with unique needs and experiences. Our programs are designed to be inclusive and culturally sensitive.
              </p>
              <div className="space-y-4">
                {nationalities.map((nat, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-[#2C5F6F]">{nat.name}</span>
                      <span className="text-gray-600">{nat.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-[#2C5F6F] to-[#D4A574] h-3 rounded-full transition-all duration-500"
                        style={{ width: `${nat.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287487818_f29a9c0a.jpg"
                alt="Diverse Community"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Indirect Beneficiaries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287556330_3745f45d.jpg"
                alt="Community Impact"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Wider Impact</span>
              <h2 className="text-3xl font-bold text-[#2C5F6F] mt-2 mb-6">
                Indirect Beneficiaries
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our work creates ripple effects that benefit the broader community beyond our direct program participants.
              </p>
              <ul className="space-y-3">
                {indirectBeneficiaries.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4A574] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Transparency</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Challenges We Face
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              We believe in transparency about the challenges we face and the solutions we're implementing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="w-14 h-14 bg-[#D4A574] rounded-xl flex items-center justify-center mb-4">
                  <challenge.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                <p className="text-white/80 mb-4">{challenge.description}</p>
                <div className="pt-4 border-t border-white/20">
                  <h4 className="text-[#D4A574] font-semibold text-sm mb-2">Our Solution:</h4>
                  <p className="text-white/70 text-sm">{challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C5F6F] mb-4">
              Total Impact at a Glance
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#2C5F6F] mb-2">5,000+</div>
              <p className="text-gray-600">Total Beneficiaries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#2C5F6F] mb-2">5+</div>
              <p className="text-gray-600">Nationalities Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#2C5F6F] mb-2">6</div>
              <p className="text-gray-600">Program Areas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#2C5F6F] mb-2">4+</div>
              <p className="text-gray-600">Regions Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4A574]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Help Us Reach More People
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Your support helps us overcome challenges and expand our impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-white text-[#2C5F6F] rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center"
            >
              Support Our Work
              <ArrowRight className="w-5 h-5 ml-2" />
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

export default BeneficiariesPage;
