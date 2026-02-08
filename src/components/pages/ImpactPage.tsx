import React from 'react';
import { Award, BookOpen, ChevronRight, Handshake, Heart, Languages, Scale, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import PageHero from '@/components/PageHero';
import OptimizedImage from '@/components/OptimizedImage';
import { EFFR_PROFILE } from '@/lib/effrProfile';

const ImpactPage: React.FC = () => {
  const navigate = useNavigate();

  const impactStats = [
    {
      label: 'Families supported (Ramadan cash)',
      value: EFFR_PROFILE.achievements.relief.cashAssistanceFamilies.toLocaleString(),
      icon: Heart,
      color: 'bg-rose-500',
    },
    {
      label: 'Families supported (food baskets)',
      value: EFFR_PROFILE.achievements.relief.foodBasketFamilies.toLocaleString(),
      icon: Users,
      color: 'bg-emerald-500',
    },
    {
      label: 'Languages translated (labor law)',
      value: EFFR_PROFILE.achievements.legalAwareness.translatedLanguages.toLocaleString(),
      icon: Languages,
      color: 'bg-blue-500',
    },
    {
      label: 'Field study families (Back to School)',
      value: EFFR_PROFILE.achievements.backToSchool.fieldStudyFamilies.toLocaleString(),
      icon: BookOpen,
      color: 'bg-amber-500',
    },
    {
      label: 'Out-of-school children identified (approx.)',
      value: `~${EFFR_PROFILE.achievements.backToSchool.outOfSchoolChildrenApprox.toLocaleString()}`,
      icon: BookOpen,
      color: 'bg-cyan-500',
    },
    {
      label: 'Children in Amharic course',
      value: EFFR_PROFILE.achievements.backToSchool.amharicCourseChildren.toLocaleString(),
      icon: BookOpen,
      color: 'bg-purple-500',
    },
  ];

  const achievements = [
    {
      title: 'Relief Assistance',
      description:
        'Emergency relief support provided through community-based efforts and charitable donors.',
      icon: Heart,
      details: [
        `Ramadan cash assistance for ${EFFR_PROFILE.achievements.relief.cashAssistanceFamilies} families.`,
        `Food basket support for ${EFFR_PROFILE.achievements.relief.foodBasketFamilies} families.`,
      ],
      ctaLabel: 'See impact',
      to: '/impact',
    },
    {
      title: 'Ethiopian Labor Law Awareness',
      description:
        'An awareness project helping refugees understand labor rights under Ethiopian law.',
      icon: Scale,
      details: [
        `Theme: “${EFFR_PROFILE.achievements.legalAwareness.theme}”.`,
        `Translated into ${EFFR_PROFILE.achievements.legalAwareness.translatedLanguages} languages.`,
        `Supported by ${EFFR_PROFILE.achievements.legalAwareness.supporter} and implemented with ${EFFR_PROFILE.achievements.legalAwareness.partner}.`,
        `Phase 2 supported by ${EFFR_PROFILE.achievements.legalAwareness.phase2Supporter} in ${EFFR_PROFILE.achievements.legalAwareness.phase2Locations.join(
          ' and '
        )}.`,
      ],
      ctaLabel: 'Learn about the project',
      to: '/legal-awareness',
    },
    {
      title: 'Back to School (Lemi Kura)',
      description:
        'A pilot education initiative supporting refugee children’s access to education in Addis Ababa.',
      icon: BookOpen,
      details: [
        `Supported by ${EFFR_PROFILE.achievements.backToSchool.supporter}.`,
        `Field study conducted with ${EFFR_PROFILE.achievements.backToSchool.fieldStudyFamilies} families.`,
        `Approximately ${EFFR_PROFILE.achievements.backToSchool.outOfSchoolChildrenApprox} out-of-school children identified.`,
        `School supplies provided to ${EFFR_PROFILE.achievements.backToSchool.schoolSuppliesChildren} children.`,
        `${EFFR_PROFILE.achievements.backToSchool.amharicCourseDurationMonths}-month Amharic course for ${EFFR_PROFILE.achievements.backToSchool.amharicCourseChildren} children.`,
      ],
      ctaLabel: 'Explore programs',
      to: '/programs/child-youth',
    },
    {
      title: 'Psychosocial Support (MHPSS)',
      description:
        'Community-based psychosocial support and social cohesion activities implemented in partnership with service providers.',
      icon: Handshake,
      details: [
        `MHPSS partner: ${EFFR_PROFILE.achievements.partnerships.mhpssPartner}.`,
        'Child-friendly psychosocial activities and community support sessions (with partners).',
      ],
      ctaLabel: 'View MHPSS program',
      to: '/programs/mhpss',
    },
    {
      title: 'Advocacy & Recognition',
      description:
        'EFFR works to ensure refugee voices are heard and refugee-led solutions are meaningfully included.',
      icon: Award,
      details: [...EFFR_PROFILE.highlights],
      ctaLabel: 'About EFFR',
      to: '/about',
    },
  ];

  const galleryImages = [
    { src: '/images/official/photo_2024-11-28_13-05-01.jpg', caption: 'Community workshop' },
    { src: '/images/official/photo_2024-11-28_13-05-23.jpg', caption: 'Training session' },
    { src: '/images/official/photo_2024-11-28_13-05-36.jpg', caption: 'Group discussion' },
    { src: '/images/official/photo_2024-11-28_13-05-40.jpg', caption: 'Community gathering' },
    { src: '/images/official/photo_2026-02-07_21-33-53.jpg', caption: 'Community meeting' },
    { src: '/images/official/photo_2024-11-28_13-05-39.jpg', caption: 'Workshop participants' },
  ];

  return (
    <article className="min-h-screen pt-20">
      <Seo
        title="Impact"
        description="See EFFR’s impact and key activities from our official documents — relief assistance, legal awareness, education support, and psychosocial wellbeing."
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Impact', path: '/impact' },
        ]}
      />

      <PageHero
        imageSrc="/images/official/photo_2026-02-07_21-33-53.jpg"
        badge={{ label: 'Impact & Activities' }}
        title="Impact"
        description="A transparent overview of key activities and achievements highlighted in EFFR’s official documents."
      />

      {/* Stats */}
      <section className="-mt-10 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {impactStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievement cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Highlights</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Key Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              These highlights are based on EFFR’s official documents and activity summaries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-5">{item.description}</p>
                <ul className="space-y-3 mb-6">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span aria-hidden className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                      <span className="text-muted-foreground text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => navigate(item.to)}
                  className="inline-flex items-center text-secondary font-semibold text-sm hover:translate-x-1 transition-transform"
                >
                  {item.ctaLabel} <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">Our Work in Pictures</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <div key={img.src} className="relative rounded-xl overflow-hidden shadow-lg group">
                <OptimizedImage
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-medium">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C5F6F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Be Part of the Impact</h2>
          <p className="text-white/90 text-lg mb-8">
            Partner with EFFR or support our work to strengthen refugee-led solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate('/donate')}
              className="px-8 py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Support Our Work
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

export default ImpactPage;
