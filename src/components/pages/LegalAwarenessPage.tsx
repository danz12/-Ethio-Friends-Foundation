import React from 'react';
import { ArrowRight, BookOpen, FileText, Handshake, Languages, MapPin, Scale, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import PageHero from '@/components/PageHero';
import { EFFR_PROFILE } from '@/lib/effrProfile';

const LegalAwarenessPage: React.FC = () => {
  const navigate = useNavigate();

  const project = EFFR_PROFILE.achievements.legalAwareness;

  const activities = [
    {
      title: 'Awareness sessions and workshops',
      description: 'Community sessions focused on labor rights and how to access support and referrals.',
      icon: Users,
    },
    {
      title: 'Focus group discussions (FGDs)',
      description: 'Community dialogue to understand barriers, risks, and information needs.',
      icon: BookOpen,
    },
    {
      title: 'Advocacy tools and materials',
      description: 'Posters, brochures, and other practical materials to help communicate key messages.',
      icon: FileText,
    },
    {
      title: 'Multilingual translation',
      description: `Materials translated into ${project.translatedLanguages} languages to improve accessibility.`,
      icon: Languages,
    },
  ];

  const downloads = [
    {
      title: 'EFFR profile & achievements (PDF)',
      href: `${import.meta.env.BASE_URL}docs/effr-achievements-2025.pdf`,
    },
    {
      title: 'EFFR code of conduct (PDF)',
      href: `${import.meta.env.BASE_URL}docs/effr-code-of-conduct.pdf`,
    },
  ];

  return (
    <article className="min-h-screen pt-20">
      <Seo
        title="Legal Awareness"
        description="EFFR’s Ethiopian Labor Law awareness project supports refugees with accessible, multilingual legal information and community-based learning."
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Legal Awareness', path: '/legal-awareness' },
        ]}
      />

      <PageHero
        imageSrc="/images/official/photo_2024-11-28_13-05-01.jpg"
        badge={{ label: 'Special Project', icon: Scale }}
        title="Ethiopian Labor Law Awareness"
        description={`“${project.theme}” — supporting refugees with knowledge of labor rights under Ethiopian law.`}
      >
        <div className="mt-4 flex flex-wrap gap-3">
          <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm">
            Supported by {project.supporter}
          </span>
          <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm">
            Implemented with {project.partner}
          </span>
          <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm">
            Translated into {project.translatedLanguages} languages
          </span>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-secondary to-gold-600 px-6 py-3 text-white font-semibold hover:shadow-xl hover:shadow-[#D4A574]/30 transition-all"
          >
            Get Support
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button
            type="button"
            onClick={() => navigate('/media')}
            className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/[0.16] border border-white/20 px-6 py-3 text-white font-semibold transition-colors"
          >
            Media & Resources
          </button>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="-mt-10 pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Project Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              This project is designed to help refugees understand labor rights under Ethiopian law and access
              practical information through community-based learning, translated materials, and partner coordination.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-sm font-semibold text-primary mb-2">Support</p>
                <p className="text-muted-foreground">
                  Supporter: <span className="font-semibold text-primary">{project.supporter}</span>
                </p>
                <p className="text-muted-foreground mt-2">
                  Partner: <span className="font-semibold text-primary">{project.partner}</span>
                </p>
              </div>
              <div className="rounded-2xl bg-gray-50 p-6">
                <p className="text-sm font-semibold text-primary mb-2">Phase 2</p>
                <p className="text-muted-foreground">
                  Supported by <span className="font-semibold text-primary">{project.phase2Supporter}</span>
                </p>
                <p className="text-muted-foreground mt-2 flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-secondary" />
                  {project.phase2Locations.join(' and ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">What the Project Includes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Activities and outputs described in the official project summary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-gray-50 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5">
                  <activity.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{activity.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Documents</span>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2">Downloads</h2>
                <p className="text-muted-foreground mt-2">
                  Official documents currently available on the website.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary text-sm font-semibold">
                <Handshake className="w-4 h-4" />
                More project materials can be added later
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {downloads.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="rounded-2xl bg-white/90 ring-1 ring-black/5 p-5 hover:shadow-md transition-shadow"
                >
                  <p className="font-semibold text-primary">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Open PDF</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C5F6F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Support Legal Awareness</h2>
          <p className="text-white/90 text-lg mb-8">
            Help us expand vital information and support for refugees and host communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate('/donate')}
              className="px-8 py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Support This Project
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

export default LegalAwarenessPage;

