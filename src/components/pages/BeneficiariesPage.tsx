import React from 'react';
import { Accessibility, ArrowRight, BookOpen, Globe, Heart, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import PageHero from '@/components/PageHero';
import { EFFR_PROFILE } from '@/lib/effrProfile';

const BeneficiariesPage: React.FC = () => {
  const navigate = useNavigate();

  const beneficiaryGroups = [
    {
      title: 'Refugees from different nationalities and religions',
      description:
        'EFFR serves refugees from diverse backgrounds through community-led programs and advocacy.',
      icon: Globe,
    },
    {
      title: 'Women and girls',
      description:
        'Programs support protection, GBV prevention, wellbeing, and economic empowerment for women and girls.',
      icon: Shield,
    },
    {
      title: 'Children and youth',
      description:
        'Education support, language learning, psychosocial activities, and youth-focused community initiatives.',
      icon: BookOpen,
    },
    {
      title: 'Families',
      description:
        'Family-focused wellbeing support and relief assistance for vulnerable households, supported by community networks.',
      icon: Heart,
    },
    {
      title: 'Persons with disabilities',
      description:
        'Inclusion and access to support through awareness, referrals, and community-led peer support networks.',
      icon: Accessibility,
    },
    {
      title: 'Host communities',
      description:
        'EFFR works to strengthen social inclusion and cohesion with host community members through joint activities.',
      icon: Users,
    },
  ];

  const challenges = [
    {
      title: 'Language and information barriers',
      description:
        'Refugees may face challenges accessing information due to language differences and limited resources.',
    },
    {
      title: 'Protection risks',
      description:
        'Vulnerable groups may face heightened protection risks, including gender-based violence and exploitation.',
    },
    {
      title: 'Education disruptions',
      description:
        'Displacement can interrupt schooling and create barriers to enrollment, retention, and learning support.',
    },
    {
      title: 'Access and inclusion',
      description:
        'Persons with disabilities may face additional barriers to services, mobility, and participation.',
    },
  ];

  return (
    <article className="min-h-screen pt-20">
      <Seo
        title="Beneficiaries"
        description="Learn who EFFR serves — refugees from different nationalities and religions, women, children, youth, families, persons with disabilities, and host communities."
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Beneficiaries', path: '/beneficiaries' },
        ]}
      />

      <PageHero
        imageSrc="/images/official/photo_2024-11-28_13-05-40.jpg"
        badge={{ label: 'Who We Serve' }}
        title="Beneficiaries"
        description="EFFR supports refugees and host communities through programs that promote inclusion, protection, wellbeing, and self-reliance."
      />

      {/* Beneficiary groups */}
      <section className="-mt-10 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Direct Beneficiaries</h2>
              <p className="mt-2 text-muted-foreground">
                EFFR’s mission is to empower refugees from different nationalities and religions and facilitate social
                inclusion into the local community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beneficiaryGroups.map((group) => (
                <div key={group.title} className="bg-gray-50 rounded-2xl p-7 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5">
                    <group.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{group.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gray-50 border border-black/5 shadow-sm p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Programs</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">How We Support</h2>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  EFFR works across several program areas including protection, livelihoods, psychosocial wellbeing,
                  education, and inclusion.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-teal-700 transition-colors shadow-sm"
              >
                Explore programs
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EFFR_PROFILE.programs.map((program) => (
                <div key={program.id} className="rounded-2xl bg-white/90 ring-1 ring-black/5 p-5">
                  <p className="font-semibold text-primary">{program.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Learn more on the program detail page.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Context</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Challenges We Work On</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Common challenges that affect refugees and host communities and inform our program design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                <p className="text-white/80">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4A574]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Help Us Reach More People</h2>
          <p className="text-white/90 text-lg mb-8">
            Your support helps strengthen community-led programs and services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate('/donate')}
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center"
            >
              Support Our Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              type="button"
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

export default BeneficiariesPage;

