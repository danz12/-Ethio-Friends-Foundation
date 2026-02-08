import React from 'react';
import { Briefcase, Users, Shield, Heart, BookOpen, Home, ArrowLeft, CheckCircle, Target, Users2, Accessibility, type LucideIcon } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import OptimizedImage from '@/components/OptimizedImage';

type ProgramActivity = { title: string; desc: string };

type Program = {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  image: string;
  objectives: string[];
  activities: ProgramActivity[];
  beneficiaries: string;
  stats: Record<string, string>;
  gallery: string[];
};

const programData: Record<string, Program> = {
  'economic-empowerment': {
    title: 'Economic Empowerment & Entrepreneurship',
    subtitle: 'Entrepreneurship and Self-Reliance',
    description:
      'This program supports refugee self-reliance through entrepreneurship-focused training, mentorship, and community-led support that helps participants build sustainable livelihoods.',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-600',
    image: '/images/official/photo_2024-11-28_13-05-01.jpg',
    objectives: [
      'Build practical entrepreneurship and business skills',
      'Strengthen self-reliance and income-generating capacity',
      'Support peer learning and mentorship',
      'Connect participants to opportunities and services where available',
    ],
    activities: [
      { title: 'Entrepreneurship Training', desc: 'Workshops on core business skills and practical planning.' },
      { title: 'Mentorship & Coaching', desc: 'Guidance through peer learning and community mentoring.' },
      { title: 'Skills Building', desc: 'Capacity building tailored to local opportunities and constraints.' },
      { title: 'Linkages & Referrals', desc: 'Connecting participants to services and opportunities with partners.' },
    ],
    beneficiaries: 'Refugees and host community members seeking entrepreneurship skills and support.',
    stats: { focus: 'Entrepreneurship', approach: 'Training & mentorship', model: 'Community-led' },
    gallery: [
      '/images/official/photo_2024-11-28_13-05-01.jpg',
      '/images/official/photo_2024-11-28_13-05-23.jpg',
      '/images/official/photo_2024-11-28_13-05-39.jpg',
    ],
  },
  'livelihood': {
    title: 'Livelihood Program',
    subtitle: 'Skills Development',
    description:
      'The Livelihood Program supports skills development and pathways to livelihoods through community-based learning, coaching, and connections to opportunities.',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
    image: '/images/official/photo_2024-11-28_13-05-36.jpg',
    objectives: [
      'Support vocational and practical skills development',
      'Increase employability and livelihood options',
      'Encourage peer learning and cooperative approaches where suitable',
      'Connect participants to services and opportunities with partners',
    ],
    activities: [
      { title: 'Skills Training', desc: 'Community-driven training aligned to local needs and context.' },
      { title: 'Work Readiness', desc: 'Guidance on workplace skills and preparedness.' },
      { title: 'Peer Learning', desc: 'Group learning and experience sharing for practical growth.' },
      { title: 'Referrals', desc: 'Linkages to partners and relevant services where available.' },
    ],
    beneficiaries: 'Working-age refugees and host community members seeking skills for livelihoods.',
    stats: { focus: 'Skills', approach: 'Training & coaching', model: 'Community-based' },
    gallery: [
      '/images/official/photo_2024-11-28_13-05-36.jpg',
      '/images/official/photo_2024-11-28_13-05-40.jpg',
      '/images/official/photo_2024-11-28_13-05-42.jpg',
    ],
  },
  'protection-gbv': {
    title: 'Protection and GBV Program',
    subtitle: 'Safety and Dignity',
    description:
      'This program supports protection and safety through community awareness, referrals, and collaboration with partners to strengthen GBV prevention and response.',
    icon: Shield,
    color: 'from-purple-500 to-pink-600',
    image: '/images/official/photo_2024-12-27_12-19-08.jpg',
    objectives: [
      'Raise awareness to prevent gender-based violence',
      'Promote safe and respectful community engagement',
      'Strengthen referral pathways with service providers and partners',
      'Support community capacity for protection and response',
    ],
    activities: [
      { title: 'Community Awareness', desc: 'Education and dialogue on GBV prevention and safety.' },
      { title: 'Referral Support', desc: 'Connecting individuals to appropriate services with partners.' },
      { title: 'Safe Engagement', desc: 'Promoting dignity, confidentiality, and safeguarding practices.' },
      { title: 'Capacity Building', desc: 'Training and tools to strengthen community response.' },
    ],
    beneficiaries: 'Women, girls, and vulnerable individuals in refugee and host communities.',
    stats: { focus: 'Protection', approach: 'Awareness & referrals', model: 'Partner-led services' },
    gallery: [
      '/images/official/photo_2024-12-27_12-19-08.jpg',
      '/images/official/photo_2024-12-27_12-19-17.jpg',
      '/images/official/photo_2026-02-07_22-18-48.jpg',
    ],
  },
  'mhpss': {
    title: 'Psychosocial Support and Mental Health (MHPSS)',
    subtitle: 'Wellbeing and Support',
    description:
      'The MHPSS program strengthens wellbeing through community-based psychosocial support and social cohesion activities, including child-friendly sessions through play, in partnership with service providers.',
    icon: Heart,
    color: 'from-rose-500 to-red-600',
    image: '/images/official/photo_2026-02-07_22-29-33-new.jpg',
    objectives: [
      'Provide community-based psychosocial support',
      'Strengthen resilience and social cohesion',
      'Support children through psychosocial activities and play',
      'Link individuals to services with partners where needed',
    ],
    activities: [
      { title: 'Group Sessions', desc: 'Facilitated psychosocial support sessions in community settings.' },
      { title: 'Social Cohesion Activities', desc: 'Activities that strengthen unity across communities.' },
      { title: 'Child-Friendly Support', desc: 'Psychosocial sessions for children through play.' },
      { title: 'Partner Coordination', desc: 'Coordination with partners for specialized support and assistance.' },
    ],
    beneficiaries: 'Refugees and host community members in need of psychosocial support.',
    stats: { focus: 'Wellbeing', approach: 'Community sessions', model: 'With partners' },
    gallery: [
      '/images/official/photo_2026-02-07_22-29-33-new.jpg',
      '/images/official/photo_2026-02-07_22-29-47-new.jpg',
      '/images/official/photo_2026-02-07_22-37-09-new.jpg',
    ],
  },
  'child-youth': {
    title: 'Child and Youth Program',
    subtitle: 'Education and Retention',
    description:
      "This program supports refugee children and youth through education assistance and community engagement to reduce dropout and strengthen learning, including language support and back-to-school initiatives.",
    icon: BookOpen,
    color: 'from-amber-500 to-orange-600',
    image: '/images/official/photo_2024-11-28_13-05-40.jpg',
    objectives: [
      'Support access to education for refugee children',
      'Reduce school dropout rates',
      'Provide practical learning support, including language assistance',
      'Engage parents and communities to support attendance and retention',
    ],
    activities: [
      { title: 'Back-to-School Support', desc: 'School bags and essential supplies to encourage enrollment.' },
      { title: 'Language Support', desc: 'Support such as Amharic learning assistance for school integration.' },
      { title: 'Parent Engagement', desc: 'Joint committees and community engagement to address barriers.' },
      { title: 'Teacher Support', desc: 'Working with schools and educators to support refugee learners.' },
    ],
    beneficiaries: 'Refugee children and youth, and the families and schools that support them.',
    stats: { focus: 'Education', approach: 'Community support', model: 'School partnership' },
    gallery: [
      '/images/official/photo_2024-11-28_13-05-40.jpg',
      '/images/official/photo_2024-11-28_13-05-39.jpg',
      '/images/official/photo_2024-11-28_13-05-01.jpg',
    ],
  },
  'happy-family': {
    title: 'Happy Family Program',
    subtitle: 'Family Wellbeing',
    description:
      'The Happy Family Program strengthens family wellbeing through awareness, psychosocial support, and community connections that promote healthy family dynamics.',
    icon: Home,
    color: 'from-cyan-500 to-blue-600',
    image: '/images/official/photo_2024-11-28_13-05-42.jpg',
    objectives: [
      'Strengthen family relationships and support systems',
      'Promote positive communication and wellbeing',
      'Encourage safe family environments',
      'Connect families to services and support with partners where needed',
    ],
    activities: [
      { title: 'Family Support Sessions', desc: 'Community-based sessions for wellbeing and family support.' },
      { title: 'Parenting & Communication', desc: 'Awareness on positive parenting and communication.' },
      { title: 'Referrals', desc: 'Connecting families to services and support with partners.' },
      { title: 'Community Activities', desc: 'Activities that bring families together and strengthen cohesion.' },
    ],
    beneficiaries: 'Refugee and host community families.',
    stats: { focus: 'Family wellbeing', approach: 'Community sessions', model: 'Support & referrals' },
    gallery: [
      '/images/official/photo_2024-11-28_13-05-42.jpg',
      '/images/official/photo_2026-02-07_21-33-53.jpg',
      '/images/official/photo_2026-02-07_22-18-48.jpg',
    ],
  },
  'disability-support': {
    title: 'Disability Support Program',
    subtitle: 'Inclusion and Accessibility',
    description:
      'This program promotes inclusion and access to support for persons with disabilities within refugee and host communities, through awareness, referrals, and community-led support.',
    icon: Accessibility,
    color: 'from-teal-500 to-emerald-600',
    image: '/images/official/photo_2026-02-07_21-33-53.jpg',
    objectives: [
      'Promote inclusion and equitable access to opportunities',
      'Raise awareness about accessibility and rights',
      'Strengthen community support networks',
      'Link individuals to services and support with partners',
    ],
    activities: [
      { title: 'Inclusion Awareness', desc: 'Community awareness and learning on disability inclusion.' },
      { title: 'Accessibility Support', desc: 'Identifying barriers and supporting practical improvements where possible.' },
      { title: 'Peer Networks', desc: 'Community-led peer support and connections.' },
      { title: 'Referrals', desc: 'Linkage to specialized services and partners when available.' },
    ],
    beneficiaries: 'Persons with disabilities in refugee and host communities and their families.',
    stats: { focus: 'Inclusion', approach: 'Awareness & support', model: 'Community-led' },
    gallery: [
      '/images/official/photo_2026-02-07_21-33-53.jpg',
      '/images/official/photo_2024-11-28_13-05-23.jpg',
      '/images/official/photo_2024-11-28_13-05-39.jpg',
    ],
  },
};

const ProgramDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { programId } = useParams();
  const program = programId ? programData[programId] : undefined;

  if (!program) {
    return (
      <article className="min-h-screen pt-32 text-center">
        <Seo
          title="Program Not Found"
          description="The program you are looking for does not exist or may have been moved."
          noIndex
        />
        <StructuredData
          breadcrumbs={[
            { name: 'Home', path: '/' },
            { name: 'Programs', path: '/programs' },
            { name: 'Not Found', path: programId ? `/programs/${programId}` : '/programs' },
          ]}
        />
        <h1 className="text-2xl font-bold text-gray-600">Program not found</h1>
        <button
          onClick={() => navigate('/programs')}
          className="mt-4 text-[#2C5F6F] hover:text-[#D4A574]"
        >
          Back to Programs
        </button>
      </article>
    );
  }

  const Icon = program.icon;

  return (
    <article className="min-h-screen pt-20">
      <Seo
        title={program.title}
        description={program.description}
        image={program.image}
        imageAlt={program.title}
        ogType="article"
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: program.title, path: programId ? `/programs/${programId}` : '/programs' },
        ]}
      />
      {/* Hero Section */}
      <section className="relative -mt-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <OptimizedImage
            src={program.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-75`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-teal-950/55" />
        </div>

        <div aria-hidden className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary/25 blur-3xl" />
          <div className="absolute -bottom-48 -left-48 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
          <div className="max-w-3xl">
            <div className="rounded-3xl bg-white/10 supports-[backdrop-filter]:bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.28)] p-6 sm:p-9">
              <button
                type="button"
                onClick={() => navigate('/programs')}
                className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Programs
              </button>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white/15 rounded-2xl ring-1 ring-white/20 flex items-center justify-center mr-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-white/80 font-medium">{program.subtitle}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 sm:mb-6">{program.title}</h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">{program.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white relative -mt-8 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-3 gap-8">
            {Object.entries(program.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mb-1">
                  {value}
                </div>
                <p className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#2C5F6F] mb-6 flex items-center">
                <Target className="w-8 h-8 mr-3 text-[#D4A574]" />
                Program Objectives
              </h2>
              <ul className="space-y-4">
                {program.objectives.map((obj: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#D4A574] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#2C5F6F] mb-6 flex items-center">
                <Users2 className="w-8 h-8 mr-3 text-[#D4A574]" />
                Target Beneficiaries
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="text-gray-700 text-lg">{program.beneficiaries}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C5F6F] mb-8 text-center">
            Key Activities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {program.activities.map((activity, idx: number) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#2C5F6F] mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2C5F6F] mb-8 text-center">
            Program Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {program.gallery.map((img: string, idx: number) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
                <OptimizedImage
                  src={img}
                  alt={`${program.title} ${idx + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 bg-gradient-to-r ${program.color}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Support This Program
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Your contribution helps us expand our reach and deepen our impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/donate')}
              className="px-8 py-4 bg-white text-[#2C5F6F] rounded-full font-semibold hover:shadow-xl transition-all"
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

export default ProgramDetailPage;
