import React from 'react';
import { Target, Eye, Heart, Users, Shield, BookOpen, Scale, Globe, Award, CheckCircle } from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  const objectives = [
    {
      icon: Scale,
      title: 'Refugee Rights Advocacy',
      description: 'Advocating for the rights and dignity of refugees at local, national, and international levels.',
    },
    {
      icon: Users,
      title: 'Economic & Social Empowerment',
      description: 'Building sustainable livelihoods and fostering social integration within host communities.',
    },
    {
      icon: Shield,
      title: 'GBV Prevention',
      description: 'Preventing gender-based violence and providing support services to survivors.',
    },
    {
      icon: BookOpen,
      title: 'Education Support',
      description: 'Ensuring access to quality education for refugee children and youth.',
    },
    {
      icon: Heart,
      title: 'Health Awareness',
      description: 'Promoting health education and access to healthcare services.',
    },
    {
      icon: Globe,
      title: 'Cultural Awareness',
      description: 'Fostering cultural understanding and social cohesion between refugees and host communities.',
    },
  ];

  const milestones = [
    { year: '2018', title: 'Foundation Established', description: 'EFFR was founded as Ethiopia\'s first Refugee-Led Organization.' },
    { year: '2019', title: 'ARWNEY Membership', description: 'Became a member and chair of the African Refugee Women Led Network.' },
    { year: '2020', title: 'DRC Partnership', description: 'Partnered with Danish Refugee Council for psychosocial support programs.' },
    { year: '2021', title: 'Legal Awareness Project', description: 'Launched the Ethiopian Labor Law awareness initiative.' },
    { year: '2022', title: 'Expanded Programs', description: 'Reached over 5,000 beneficiaries across multiple programs.' },
    { year: '2023', title: 'International Recognition', description: 'Recognized as a leading RLO in the Horn of Africa region.' },
  ];

  const team = [
    {
      name: 'Dr. Amara Tesfaye',
      role: 'Executive Director',
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287570278_b23d1ebd.jpg',
    },
    {
      name: 'Samuel Bekele',
      role: 'Programs Manager',
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287572746_e5472e29.jpg',
    },
    {
      name: 'Fatima Hassan',
      role: 'Community Outreach',
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287572721_85927ff1.jpg',
    },
    {
      name: 'Daniel Mekonnen',
      role: 'Advocacy Lead',
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287625209_b24d1e96.png',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Who We Are
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              EFFR is the first official Refugee-Led Organization (RLO) in Ethiopia, dedicated to empowering refugees through advocacy, protection, and sustainable development programs.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2C5F6F] mb-6">
                Ethiopia's Pioneer in Refugee-Led Development
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with the belief that refugees are not just recipients of aid but agents of change, EFFR has grown to become a leading voice for refugee rights and empowerment in Ethiopia and the broader Horn of Africa region.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a member and chair of the African Refugee Women Led Network (Ethiopia – ARWNEY), we work to ensure that refugee voices are heard in policy discussions and that refugee-led initiatives receive the support they need to thrive.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our organization serves refugees from diverse nationalities and backgrounds, including those from Eritrea, South Sudan, Somalia, Yemen, and other countries seeking safety and opportunity in Ethiopia.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287549968_1b361fc2.jpg"
                alt="EFFR Community"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#D4A574] text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">8+</div>
                <div className="text-sm">Years of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#2C5F6F]">
              <div className="w-16 h-16 bg-[#2C5F6F]/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#2C5F6F]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C5F6F] mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Building empowered refugee communities through training and rehabilitation, where every refugee has the opportunity to live with dignity, contribute to society, and achieve their full potential.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#D4A574]">
              <div className="w-16 h-16 bg-[#D4A574]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#D4A574]" />
              </div>
              <h3 className="text-2xl font-bold text-[#2C5F6F] mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower refugees from diverse nationalities through advocacy, protection, livelihoods, psychosocial support, legal awareness, and education initiatives that promote self-reliance and dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Our Goals</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Key Objectives
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our work is guided by these core objectives that drive meaningful change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 bg-[#2C5F6F] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#D4A574] transition-colors">
                  <objective.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2C5F6F] mb-2">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <span className="text-[#D4A574] font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-white font-bold text-xl mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-white/70">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-[#D4A574] rounded-full items-center justify-center z-10 flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Our People</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Dedicated professionals committed to refugee empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C5F6F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-bold text-[#2C5F6F]">{member.name}</h3>
                <p className="text-[#D4A574] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">What Guides Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Dignity', desc: 'Respecting the inherent worth of every person' },
              { title: 'Empowerment', desc: 'Building capacity for self-reliance' },
              { title: 'Inclusion', desc: 'Ensuring all voices are heard' },
              { title: 'Integrity', desc: 'Acting with honesty and transparency' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-[#2C5F6F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#2C5F6F] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4A574]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Mission
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Together, we can create lasting change for refugee communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-white text-[#2C5F6F] rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Get Involved
            </button>
            <button
              onClick={() => setCurrentPage('programs')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
