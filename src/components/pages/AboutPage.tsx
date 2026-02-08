import React from 'react';
import { Award, BookOpen, Briefcase, CheckCircle, Eye, Scale, Shield, Target, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import PageHero from '@/components/PageHero';
import { EFFR_PROFILE } from '@/lib/effrProfile';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const objectiveCards = [
    { icon: Target, title: 'Awareness', description: EFFR_PROFILE.objectives[0] },
    { icon: Scale, title: 'Advocacy', description: EFFR_PROFILE.objectives[1] },
    { icon: Shield, title: 'Protection', description: EFFR_PROFILE.objectives[2] },
    { icon: Briefcase, title: 'Empowerment', description: EFFR_PROFILE.objectives[3] },
    { icon: BookOpen, title: 'Education', description: EFFR_PROFILE.objectives[4] },
  ];

  const values = [
    { title: 'Dignity & respect', desc: 'Treat all beneficiaries with respect and protect their dignity.' },
    { title: 'Inclusion & equality', desc: 'Promote equal access and inclusion, including support for special needs.' },
    { title: 'Safeguarding (PSEA)', desc: 'Zero tolerance for sexual exploitation, abuse, harassment, or misuse of power.' },
    { title: 'Confidentiality', desc: 'Protect personal data and sensitive information shared by community members.' },
    { title: 'Accountability', desc: 'Use resources responsibly and avoid conflicts of interest and corruption.' },
    { title: 'Learning & capacity', desc: 'Strengthen skills, teamwork, and a safe and professional working environment.' },
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
        title="About Us"
        description="Learn about EFFR (Ethio Friends Foundation for Refugees) — Ethiopia's first formally registered refugee-led organization — and our mission, vision, and objectives."
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
      />

      <PageHero
        imageSrc="/images/official/photo_2024-11-28_13-05-01.jpg"
        badge={{ label: 'About EFFR', icon: Award }}
        title="Who We Are"
        description="A refugee-led organization working to empower refugees from different nationalities and religions through community-led programs and advocacy."
      />

      {/* Mission / Vision */}
      <section className="-mt-10 pb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-sm px-6 py-8 md:px-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary font-semibold text-sm">
                  <Target className="h-4 w-4" />
                  Mission
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{EFFR_PROFILE.mission}</p>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary font-semibold text-sm">
                  <Eye className="h-4 w-4" />
                  Vision
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{EFFR_PROFILE.vision}</p>
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/80 ring-1 ring-black/5 p-5">
                <p className="text-sm font-semibold text-primary">Established</p>
                <p className="mt-1 text-2xl font-bold text-primary">{EFFR_PROFILE.establishedYear}</p>
              </div>
              <div className="rounded-2xl bg-white/80 ring-1 ring-black/5 p-5">
                <p className="text-sm font-semibold text-primary">Official registration</p>
                <p className="mt-1 text-lg font-bold text-primary">{EFFR_PROFILE.officialRegistrationDate}</p>
              </div>
              <div className="rounded-2xl bg-white/80 ring-1 ring-black/5 p-5 sm:col-span-2 lg:col-span-1">
                <p className="text-sm font-semibold text-primary">Highlights</p>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  {EFFR_PROFILE.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Aim For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Our Objectives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Objectives summarized from EFFR’s official documents.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectiveCards.map((obj) => (
              <div key={obj.title} className="bg-gray-50 rounded-2xl p-7 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5">
                  <obj.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{obj.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{obj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Programs</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Program Areas</h2>
              </div>
              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-teal-700 transition-colors shadow-sm"
              >
                View programs
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {EFFR_PROFILE.programs.map((program) => (
                <div key={program.id} className="rounded-2xl bg-white/90 ring-1 ring-black/5 p-5">
                  <p className="font-semibold text-primary">{program.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Learn more in the Programs section.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What Guides Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Core Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Principles reflected in EFFR’s code of conduct and community-focused approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-gray-50 rounded-2xl p-7 shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-5">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">Downloads</h2>
            <p className="text-muted-foreground mb-6">
              Official documents available for download.
            </p>
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
      <section className="py-16 bg-[#D4A574]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Mission</h2>
          <p className="text-white/90 text-lg mb-8">
            Support refugee-led solutions through partnership, volunteering, or donations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Get Involved
            </button>
            <button
              type="button"
              onClick={() => navigate('/donate')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Donate
            </button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default AboutPage;

