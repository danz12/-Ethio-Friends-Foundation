import React from 'react';
import { Handshake, Heart, Users, Globe, Award, CheckCircle, ArrowRight, Building, Lightbulb, Target } from 'lucide-react';

interface PartnershipsPageProps {
  setCurrentPage: (page: string) => void;
}

const PartnershipsPage: React.FC<PartnershipsPageProps> = ({ setCurrentPage }) => {
  const partnerTypes = [
    {
      title: 'Donors & Funders',
      description: 'Support our programs through financial contributions that directly impact refugee communities.',
      icon: Heart,
      benefits: [
        'Direct impact on refugee lives',
        'Regular impact reports',
        'Recognition in our communications',
        'Tax-deductible contributions',
      ],
    },
    {
      title: 'Implementing Partners',
      description: 'Collaborate with us on program implementation and service delivery.',
      icon: Handshake,
      benefits: [
        'Joint program development',
        'Shared resources and expertise',
        'Expanded reach and impact',
        'Collaborative learning',
      ],
    },
    {
      title: 'Technical Partners',
      description: 'Provide technical expertise, training, and capacity building support.',
      icon: Lightbulb,
      benefits: [
        'Skills transfer opportunities',
        'Innovation partnerships',
        'Research collaboration',
        'Knowledge exchange',
      ],
    },
    {
      title: 'Advocacy Partners',
      description: 'Join us in advocating for refugee rights and policy change.',
      icon: Globe,
      benefits: [
        'Joint advocacy campaigns',
        'Policy engagement',
        'Media collaboration',
        'Network expansion',
      ],
    },
  ];

  const currentPartners = [
    { name: 'Danish Refugee Council', type: 'Implementing Partner' },
    { name: 'UNHCR Ethiopia', type: 'Technical Partner' },
    { name: 'ARWNEY', type: 'Network Partner' },
    { name: 'Ethiopian Government (ARRA)', type: 'Government Partner' },
  ];

  const recommendations = [
    {
      title: 'Capacity Building',
      description: 'Invest in RLO capacity building through training, mentorship, and organizational development support.',
      icon: Target,
    },
    {
      title: 'Direct Funding',
      description: 'Provide direct, flexible funding to refugee-led organizations to enable sustainable programming.',
      icon: Heart,
    },
    {
      title: 'Meaningful Inclusion',
      description: 'Include RLOs in decision-making processes and policy discussions at all levels.',
      icon: Users,
    },
    {
      title: 'European Collaboration',
      description: 'Facilitate partnerships between European organizations and RLOs for knowledge exchange and support.',
      icon: Globe,
    },
  ];

  const volunteerRoles = [
    { title: 'Program Support', description: 'Assist with program implementation and community activities' },
    { title: 'Skills Training', description: 'Share your professional skills with refugee communities' },
    { title: 'Translation', description: 'Help translate materials into multiple languages' },
    { title: 'Communications', description: 'Support our media and communications efforts' },
    { title: 'Fundraising', description: 'Help us raise awareness and funds' },
    { title: 'Research', description: 'Contribute to our research and documentation' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Work With Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Partnerships & Collaboration
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              Join us in empowering refugee communities through meaningful partnerships, donations, and volunteer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Ways to Partner
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We welcome partnerships that align with our mission of refugee empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#2C5F6F] rounded-xl flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C5F6F] mb-3">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <h4 className="font-semibold text-[#2C5F6F] mb-3">Benefits:</h4>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-[#D4A574] mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-[#2C5F6F] text-white rounded-full font-semibold hover:bg-[#1a3d47] transition-colors inline-flex items-center"
            >
              Become a Partner
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Our Network</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Current Partners
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPartners.map((partner, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-[#2C5F6F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-[#2C5F6F]" />
                </div>
                <h3 className="font-bold text-[#2C5F6F] mb-1">{partner.name}</h3>
                <p className="text-[#D4A574] text-sm">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Our Recommendations</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Supporting RLO Sustainability
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Key recommendations for donors and partners to effectively support refugee-led organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="flex items-start p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-14 h-14 bg-[#D4A574] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <rec.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2C5F6F] mb-2">{rec.title}</h3>
                  <p className="text-gray-600">{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Get Involved</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Volunteer With Us
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Share your skills and time to make a difference in refugee communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                <p className="text-white/70">{role.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center"
            >
              Apply to Volunteer
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Support Our Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-6">
                Make a Donation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Your financial support enables us to continue our vital work empowering refugee communities. Every contribution makes a difference.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#D4A574]/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <span className="text-gray-700">$25 provides school supplies for one child</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#D4A574]/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <span className="text-gray-700">$50 supports one family with food assistance</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#D4A574]/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <span className="text-gray-700">$100 funds vocational training for one person</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#D4A574]/20 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-[#D4A574]" />
                  </div>
                  <span className="text-gray-700">$500 supports a community workshop</span>
                </div>
              </div>
              <button
                onClick={() => setCurrentPage('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#D4A574] to-[#c49464] text-white rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </button>
            </div>
            <div className="relative">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287549968_1b361fc2.jpg"
                alt="Community Support"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#2C5F6F] text-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-sm text-white/80">Goes to programs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4A574]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today to discuss partnership opportunities.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-4 bg-white text-[#2C5F6F] rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default PartnershipsPage;
