import React from 'react';
import { ArrowRight, CheckCircle, Globe, Handshake, Heart, Lightbulb, Target, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import OptimizedImage from '@/components/OptimizedImage';
import PageHero from '@/components/PageHero';
import { EFFR_PROFILE } from '@/lib/effrProfile';

const PartnershipsPage: React.FC = () => {
  const navigate = useNavigate();

  const partnerTypes = [
    {
      title: 'Donors & Funders',
      description: 'Support community-led programs through contributions aligned with refugee empowerment.',
      icon: Heart,
      benefits: ['Program-focused support', 'Transparent communication', 'Shared learning and updates'],
    },
    {
      title: 'Implementing Partners',
      description: 'Collaborate on program delivery and referral pathways with service providers.',
      icon: Handshake,
      benefits: ['Joint activity planning', 'Coordination and referrals', 'Community-informed delivery'],
    },
    {
      title: 'Technical Partners',
      description: 'Provide expertise, training, and capacity building support to strengthen delivery quality.',
      icon: Lightbulb,
      benefits: ['Capacity development', 'Tools and training support', 'Knowledge exchange'],
    },
    {
      title: 'Advocacy Partners',
      description: 'Join efforts that amplify refugee voices and strengthen meaningful inclusion of RLOs.',
      icon: Globe,
      benefits: ['Joint advocacy and communication', 'Policy engagement support', 'Network collaboration'],
    },
  ];

  const currentPartners = [
    { name: 'Danish Refugee Council (DRC)', type: 'MHPSS partnership' },
    { name: 'UNHCR', type: 'Education support' },
    { name: 'U.S. Refugee Self-Reliance Initiative (RSRI)', type: 'Legal awareness supporter' },
    { name: 'Refugees and Returnees Service (RRS)', type: 'Legal awareness partner' },
    { name: 'Hilton Foundation', type: 'Supporter (Phase 2 – legal awareness project)' },
    { name: 'African Refugee Women Led Network (ARWNET)', type: 'Network leadership' },
  ];

  const recommendations = [
    {
      title: 'Capacity Building',
      description: 'Invest in training, mentorship, and organizational development support for RLOs.',
      icon: Target,
    },
    {
      title: 'Flexible Support',
      description: 'Provide support that can adapt to evolving needs and community priorities.',
      icon: Heart,
    },
    {
      title: 'Meaningful Inclusion',
      description: 'Include refugee-led organizations in decision-making and program design discussions.',
      icon: Users,
    },
    {
      title: 'Partnership Alignment',
      description: 'Build partnerships that respect safeguarding, accountability, and local laws and standards.',
      icon: Globe,
    },
  ];

  const volunteerRoles = [
    { title: 'Program Support', description: 'Assist with community activities and logistics support.' },
    { title: 'Skills Training', description: 'Share professional skills through training and mentoring.' },
    { title: 'Translation', description: 'Support translation and review of program materials.' },
    { title: 'Communications', description: 'Help document activities, prepare content, and share updates.' },
    { title: 'Fundraising', description: 'Support outreach and fundraising initiatives.' },
    { title: 'Research', description: 'Support documentation, learning, and reporting.' },
  ];

  return (
    <article className="min-h-screen pt-20">
      <Seo
        title="Partnerships"
        description="Partner with EFFR as a donor, implementing partner, technical partner, or volunteer to support refugee-led solutions in Ethiopia."
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Partnerships', path: '/partnerships' },
        ]}
      />

      <PageHero
        imageSrc="/images/official/photo_2024-11-28_13-05-39.jpg"
        badge={{ label: 'Work With Us' }}
        title="Partnerships & Collaboration"
        description="Join EFFR in empowering refugee communities through meaningful partnerships and community-led programming."
      />

      {/* Partnership Types */}
      <section className="-mt-10 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-10">
            <div className="text-center mb-12">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Partner With Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Ways to Partner</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We welcome partnerships aligned with our mission and safeguarding standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {partnerTypes.map((type) => (
                <div key={type.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5">
                    <type.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{type.title}</h3>
                  <p className="text-muted-foreground mb-5">{type.description}</p>
                  <ul className="space-y-3">
                    {type.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Network</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Partners & Supporters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Examples of partners and supporters referenced in our official documents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPartners.map((partner) => (
              <div key={partner.name} className="bg-gray-50 rounded-2xl p-7 shadow-sm">
                <h3 className="text-lg font-bold text-primary">{partner.name}</h3>
                <p className="text-muted-foreground mt-1">{partner.type}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-primary/5 border border-primary/10 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-primary mb-3">Organizational highlights</h3>
            <ul className="space-y-3">
              {EFFR_PROFILE.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Good Partnerships</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">What Helps RLOs Thrive</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Volunteer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Ways to Volunteer</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Volunteers can strengthen learning, documentation, and program delivery support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role) => (
              <div
                key={role.title}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                <p className="text-white/70">{role.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center"
            >
              Apply to Volunteer
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Donations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Support Our Work</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Make a Donation</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Your support helps strengthen refugee-led programs including relief assistance, education support,
                legal awareness, psychosocial wellbeing, and inclusion.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Relief support for vulnerable households',
                  'Education support and child & youth initiatives',
                  'Legal awareness and advocacy materials',
                  'Psychosocial support (with partners)',
                ].map((item) => (
                  <div key={item} className="flex items-start">
                    <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => navigate('/donate')}
                className="px-8 py-4 bg-gradient-to-r from-secondary to-gold-600 text-white rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </button>
            </div>
            <div className="relative">
              <OptimizedImage
                src="/images/official/photo_2026-02-07_21-33-53.jpg"
                alt="EFFR community session"
                className="rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">{EFFR_PROFILE.establishedYear}</div>
                <div className="text-sm text-white/80">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4A574]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-white/90 text-lg mb-8">Contact us to discuss partnership opportunities.</p>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Contact Us
          </button>
        </div>
      </section>
    </article>
  );
};

export default PartnershipsPage;
