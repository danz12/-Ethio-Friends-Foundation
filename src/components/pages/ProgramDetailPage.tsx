import React from 'react';
import { Briefcase, Users, Shield, Heart, BookOpen, Home, ArrowLeft, CheckCircle, Target, Users2, type LucideIcon } from 'lucide-react';

interface ProgramDetailPageProps {
  programId: string;
  setCurrentPage: (page: string) => void;
}

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
    subtitle: 'Building Sustainable Livelihoods',
    description: 'Our Economic Empowerment program focuses on building sustainable livelihoods through entrepreneurship training, business development support, and access to microfinance opportunities. We believe that economic independence is key to refugee dignity and self-reliance.',
    icon: Briefcase,
    color: 'from-emerald-500 to-teal-600',
    image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503428_5f515e73.jpg',
    objectives: [
      'Develop entrepreneurial skills among refugees',
      'Facilitate access to microfinance and savings groups',
      'Create market linkages for refugee-owned businesses',
      'Provide ongoing mentorship and business support',
    ],
    activities: [
      { title: 'Business Skills Training', desc: 'Comprehensive workshops covering business planning, financial management, and marketing.' },
      { title: 'Microfinance Groups', desc: 'Village savings and loan associations to provide access to capital.' },
      { title: 'Market Access', desc: 'Connecting refugee entrepreneurs with local and regional markets.' },
      { title: 'Mentorship Program', desc: 'Pairing new entrepreneurs with experienced business owners.' },
    ],
    beneficiaries: 'Refugee adults (18+) with interest in starting or growing small businesses',
    stats: { reached: '500+', businesses: '150+', groups: '25' },
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503428_5f515e73.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287549968_1b361fc2.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287550924_b97c585c.jpg',
    ],
  },
  'livelihood': {
    title: 'Livelihood Program',
    subtitle: 'Skills for Independence',
    description: 'The Livelihood Program provides vocational skills training and employment opportunities to help refugees achieve economic independence. We focus on market-relevant skills that lead to sustainable employment.',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
    image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503617_ce61aba2.jpg',
    objectives: [
      'Provide market-relevant vocational training',
      'Facilitate job placement and employment',
      'Support cooperative formation',
      'Issue recognized skills certifications',
    ],
    activities: [
      { title: 'Vocational Training', desc: 'Courses in tailoring, carpentry, electronics, and other trades.' },
      { title: 'Job Placement', desc: 'Connecting trained refugees with employment opportunities.' },
      { title: 'Certification', desc: 'Providing recognized certificates for completed training.' },
      { title: 'Cooperative Support', desc: 'Helping groups form cooperatives for collective enterprise.' },
    ],
    beneficiaries: 'Working-age refugees seeking employment or vocational skills',
    stats: { trained: '800+', employed: '400+', cooperatives: '15' },
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503617_ce61aba2.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287556330_3745f45d.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287551494_08677bf2.jpg',
    ],
  },
  'protection-gbv': {
    title: 'Protection & Gender-Based Violence (GBV)',
    subtitle: 'Safety and Support for All',
    description: 'Our Protection & GBV program works to prevent gender-based violence and provide comprehensive support services to survivors. We create safe spaces and build community awareness to address this critical issue.',
    icon: Shield,
    color: 'from-purple-500 to-pink-600',
    image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287505032_a263e9ad.jpg',
    objectives: [
      'Prevent gender-based violence through awareness',
      'Provide support services to GBV survivors',
      'Create safe spaces for women and girls',
      'Build community capacity for GBV response',
    ],
    activities: [
      { title: 'Awareness Campaigns', desc: 'Community-wide education on GBV prevention and response.' },
      { title: 'Survivor Support', desc: 'Counseling, referrals, and case management for survivors.' },
      { title: 'Safe Spaces', desc: 'Women and girls safe spaces for support and empowerment.' },
      { title: 'Community Dialogue', desc: 'Engaging men and boys in GBV prevention.' },
    ],
    beneficiaries: 'Women, girls, and GBV survivors in refugee communities',
    stats: { reached: '1,200+', supported: '300+', spaces: '8' },
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287505032_a263e9ad.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287524015_3ed19abb.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287526096_911c3873.jpg',
    ],
  },
  'mhpss': {
    title: 'Psychosocial Support & Mental Health (MHPSS)',
    subtitle: 'Healing and Hope',
    description: 'The MHPSS program provides mental health services and community-based psychosocial support to help refugees heal from trauma and build resilience. In partnership with DRC, we offer comprehensive mental health care.',
    icon: Heart,
    color: 'from-rose-500 to-red-600',
    image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287509277_ccf1658b.jpg',
    objectives: [
      'Provide accessible mental health services',
      'Build community-based support networks',
      'Train peer counselors and support workers',
      'Reduce stigma around mental health',
    ],
    activities: [
      { title: 'Individual Counseling', desc: 'One-on-one sessions with trained counselors.' },
      { title: 'Group Therapy', desc: 'Support groups for shared healing experiences.' },
      { title: 'Peer Support', desc: 'Training community members as peer supporters.' },
      { title: 'Trauma Healing', desc: 'Specialized workshops for trauma recovery.' },
    ],
    beneficiaries: 'Refugees experiencing mental health challenges or trauma',
    stats: { supported: '600+', counselors: '30', groups: '20' },
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287509277_ccf1658b.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287570278_b23d1ebd.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287572746_e5472e29.jpg',
    ],
  },
  'child-youth': {
    title: 'Child & Youth Program',
    subtitle: 'Investing in the Future',
    description: 'Our Child & Youth Program supports the education and development of refugee children and youth through comprehensive programs that address educational, social, and recreational needs.',
    icon: BookOpen,
    color: 'from-amber-500 to-orange-600',
    image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287505751_03bf4158.jpg',
    objectives: [
      'Ensure access to quality education',
      'Provide educational materials and support',
      'Develop youth leadership skills',
      'Create safe recreational spaces',
    ],
    activities: [
      { title: 'Education Support', desc: 'School supplies, uniforms, and fee assistance.' },
      { title: 'Tutoring Programs', desc: 'After-school academic support and homework help.' },
      { title: 'Youth Leadership', desc: 'Training young people as community leaders.' },
      { title: 'Recreation', desc: 'Sports, arts, and cultural activities for youth.' },
    ],
    beneficiaries: 'Refugee children (5-17) and youth (18-24)',
    stats: { children: '1,500+', schools: '12', leaders: '100+' },
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287529903_7b6cea9a.png',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287524015_3ed19abb.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287526296_503a9063.jpg',
    ],
  },
  'happy-family': {
    title: 'Happy Family Program',
    subtitle: 'Strengthening Family Bonds',
    description: 'The Happy Family Program focuses on strengthening family bonds and promoting healthy family dynamics through education, counseling, and support services that help families thrive together.',
    icon: Home,
    color: 'from-cyan-500 to-blue-600',
    image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287506336_e4309f12.jpg',
    objectives: [
      'Strengthen family relationships',
      'Provide parenting skills education',
      'Offer family counseling services',
      'Promote positive family dynamics',
    ],
    activities: [
      { title: 'Parenting Workshops', desc: 'Skills training for effective, positive parenting.' },
      { title: 'Family Counseling', desc: 'Professional support for family challenges.' },
      { title: 'Conflict Resolution', desc: 'Training in healthy communication and conflict resolution.' },
      { title: 'Family Activities', desc: 'Bonding events and activities for families.' },
    ],
    beneficiaries: 'Refugee families seeking to strengthen their relationships',
    stats: { families: '400+', workshops: '50+', events: '30' },
    gallery: [
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287506336_e4309f12.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287549968_1b361fc2.jpg',
      'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287572721_85927ff1.jpg',
    ],
  },
};

const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ programId, setCurrentPage }) => {
  const program = programData[programId];

  if (!program) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold text-gray-600">Program not found</h1>
        <button
          onClick={() => setCurrentPage('programs')}
          className="mt-4 text-[#2C5F6F] hover:text-[#D4A574]"
        >
          Back to Programs
        </button>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${program.image}')` }}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-90`}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => setCurrentPage('programs')}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Programs
          </button>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <span className="text-white/80 font-medium">{program.subtitle}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {program.title}
          </h1>
          <p className="text-white/90 text-xl max-w-3xl leading-relaxed">
            {program.description}
          </p>
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
                <img
                  src={img}
                  alt={`${program.title} ${idx + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
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
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-white text-[#2C5F6F] rounded-full font-semibold hover:shadow-xl transition-all"
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

export default ProgramDetailPage;
