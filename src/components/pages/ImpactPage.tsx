import React, { useState } from 'react';
import { TrendingUp, Users, Heart, BookOpen, Briefcase, Shield, Calendar, MapPin, Award, ChevronRight, X } from 'lucide-react';

interface ImpactPageProps {
  setCurrentPage: (page: string) => void;
}

const ImpactPage: React.FC<ImpactPageProps> = ({ setCurrentPage }) => {
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const impactStats = [
    { label: 'Families Supported', value: '850+', icon: Users, color: 'bg-blue-500' },
    { label: 'Workshops Conducted', value: '120+', icon: Calendar, color: 'bg-emerald-500' },
    { label: 'Beneficiaries Reached', value: '5,000+', icon: Heart, color: 'bg-rose-500' },
    { label: 'Partner Organizations', value: '25+', icon: Award, color: 'bg-purple-500' },
    { label: 'Children Educated', value: '1,500+', icon: BookOpen, color: 'bg-amber-500' },
    { label: 'Jobs Created', value: '400+', icon: Briefcase, color: 'bg-cyan-500' },
  ];

  const achievements = [
    {
      title: 'Advocacy & Representation',
      description: 'Leading advocacy efforts for refugee rights and RLO inclusion in policy discussions at national and international levels.',
      icon: Shield,
      stats: '15+ policy engagements',
    },
    {
      title: 'Psychosocial Support Partnership',
      description: 'Partnered with Danish Refugee Council (DRC) to provide comprehensive psychosocial support services.',
      icon: Heart,
      stats: '600+ individuals supported',
    },
    {
      title: 'Cash & Food Assistance',
      description: 'Distributed emergency cash and food assistance to hundreds of vulnerable refugee families.',
      icon: Users,
      stats: '850+ families assisted',
    },
    {
      title: 'Education Materials',
      description: 'Provided school supplies, uniforms, and educational materials to refugee children.',
      icon: BookOpen,
      stats: '1,500+ children supported',
    },
    {
      title: 'Labor Law Awareness',
      description: 'Conducted workshops and campaigns on Ethiopian labor law rights for refugees.',
      icon: Briefcase,
      stats: '2,000+ participants',
    },
    {
      title: 'Social Cohesion',
      description: 'Organized community meetings and events promoting social cohesion between refugees and host communities.',
      icon: TrendingUp,
      stats: '50+ community events',
    },
  ];

  const successStories = [
    {
      name: 'Amina Mohammed',
      title: 'From Refugee to Entrepreneur',
      story: 'After fleeing conflict in her home country, Amina arrived in Ethiopia with nothing. Through EFFR\'s Economic Empowerment program, she learned business skills and received microfinance support. Today, she runs a successful tailoring business that employs three other refugees.',
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287570278_b23d1ebd.jpg',
      program: 'Economic Empowerment',
    },
    {
      name: 'Samuel Tesfaye',
      title: 'Healing Through Community',
      story: 'Samuel struggled with trauma after his displacement. The MHPSS program connected him with counseling services and a peer support group. Now recovered, he has become a peer counselor himself, helping others on their healing journey.',
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287572746_e5472e29.jpg',
      program: 'Psychosocial Support',
    },
    {
      name: 'Fatima Hassan',
      title: 'Education Opens Doors',
      story: 'Fatima\'s children were out of school for two years due to displacement. EFFR\'s Child & Youth program provided school supplies and tutoring support. Her eldest daughter is now top of her class and dreams of becoming a doctor.',
      image: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287572721_85927ff1.jpg',
      program: 'Child & Youth',
    },
  ];

  const galleryImages = [
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287549968_1b361fc2.jpg', caption: 'Community Workshop' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287550924_b97c585c.jpg', caption: 'Family Support' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287524015_3ed19abb.jpg', caption: 'Education Program' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287526096_911c3873.jpg', caption: 'Youth Activities' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287556330_3745f45d.jpg', caption: 'Community Meeting' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287551494_08677bf2.jpg', caption: 'Skills Training' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Our Impact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Activities & Impact
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              Real achievements and lasting change in refugee communities through our comprehensive programs and partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white relative -mt-8 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#2C5F6F] mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Achievements</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Key Accomplishments
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Highlights of our work and the difference we've made together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#2C5F6F]/10 rounded-xl flex items-center justify-center mb-4">
                  <achievement.icon className="w-7 h-7 text-[#2C5F6F]" />
                </div>
                <h3 className="text-xl font-bold text-[#2C5F6F] mb-2">{achievement.title}</h3>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                <span className="inline-block px-3 py-1 bg-[#D4A574]/10 text-[#D4A574] rounded-full text-sm font-semibold">
                  {achievement.stats}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Real Stories</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet the individuals whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedStory(idx)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-2 py-1 bg-[#D4A574] text-white text-xs rounded-full mb-2">
                      {story.program}
                    </span>
                    <h3 className="text-white font-bold text-lg">{story.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-[#2C5F6F] mb-2">{story.title}</h4>
                  <p className="text-gray-600 text-sm line-clamp-3">{story.story}</p>
                  <button className="mt-4 text-[#D4A574] font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    Read Full Story <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={successStories[selectedStory].image}
                alt={successStories[selectedStory].name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-[#D4A574]/10 text-[#D4A574] rounded-full text-sm font-semibold mb-3">
                {successStories[selectedStory].program}
              </span>
              <h2 className="text-2xl font-bold text-[#2C5F6F] mb-2">
                {successStories[selectedStory].name}
              </h2>
              <h3 className="text-lg text-gray-600 mb-4">
                {successStories[selectedStory].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {successStories[selectedStory].story}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Our Work in Pictures
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden shadow-lg group"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Be Part of Our Impact
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join us in creating lasting change for refugee communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Support Our Work
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

export default ImpactPage;
