import React, { useState } from 'react';
import { Scale, BookOpen, Users, Globe, Download, Play, Calendar, MapPin, FileText, Languages, ChevronRight, X } from 'lucide-react';

interface LegalAwarenessPageProps {
  setCurrentPage: (page: string) => void;
}

const LegalAwarenessPage: React.FC<LegalAwarenessPageProps> = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'so', name: 'Somali', flag: '🇸🇴' },
    { code: 'sw', name: 'Swahili', flag: '🇰🇪' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'am', name: 'Amharic', flag: '🇪🇹' },
  ];

  const objectives = [
    'Educate refugees about their labor rights under Ethiopian law',
    'Provide accessible, multilingual legal information',
    'Empower refugees to advocate for their rights in the workplace',
    'Build awareness among employers about refugee employment rights',
    'Create advocacy tools for wider dissemination',
  ];

  const activities = [
    {
      title: 'Awareness Workshops',
      description: 'Interactive sessions explaining labor law provisions and rights',
      icon: Users,
      count: '45+ workshops conducted',
    },
    {
      title: 'Focus Group Discussions',
      description: 'Community dialogues to understand challenges and needs',
      icon: BookOpen,
      count: '30+ focus groups',
    },
    {
      title: 'Creative Advocacy Tools',
      description: 'Posters, brochures, and cartoon-based materials',
      icon: FileText,
      count: '12 materials created',
    },
    {
      title: 'Multilingual Resources',
      description: 'Materials translated into 6 languages for accessibility',
      icon: Languages,
      count: '6 languages covered',
    },
  ];

  const resources = [
    { title: 'Labor Rights Guide (English)', type: 'PDF', size: '2.4 MB' },
    { title: 'Labor Rights Guide (Arabic)', type: 'PDF', size: '2.6 MB' },
    { title: 'Know Your Rights Poster', type: 'PDF', size: '1.2 MB' },
    { title: 'Employer Guidelines', type: 'PDF', size: '1.8 MB' },
    { title: 'Workshop Presentation', type: 'PDF', size: '3.1 MB' },
    { title: 'Cartoon Awareness Booklet', type: 'PDF', size: '4.5 MB' },
  ];

  const workshops = [
    { date: 'January 15, 2026', location: 'Addis Ababa', participants: 45 },
    { date: 'January 22, 2026', location: 'Dire Dawa', participants: 38 },
    { date: 'February 5, 2026', location: 'Jijiga', participants: 52 },
    { date: 'February 19, 2026', location: 'Gambella', participants: 41 },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#D4A574]/20 rounded-full mb-6">
                <Scale className="w-4 h-4 text-[#D4A574] mr-2" />
                <span className="text-[#D4A574] text-sm font-medium">Special Project</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ethiopian Labor Law for Refugees
              </h1>
              <p className="text-white/90 text-xl leading-relaxed mb-6">
                "Let Your Voice of Success Get Heard" — Empowering refugees with knowledge of their labor rights under Ethiopian law.
              </p>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang.code}
                    className="px-3 py-1 bg-white/10 rounded-full text-white text-sm"
                  >
                    {lang.flag} {lang.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503428_5f515e73.jpg"
                alt="Legal Awareness Workshop"
                className="rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setVideoModalOpen(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 bg-[#D4A574] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#D4A574]"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video content would play here</p>
                <p className="text-sm text-gray-400 mt-2">3-5 minute awareness video</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <section className="bg-white border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'activities', label: 'Activities' },
              { id: 'resources', label: 'Resources' },
              { id: 'workshops', label: 'Workshops' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#D4A574] text-[#2C5F6F]'
                    : 'border-transparent text-gray-500 hover:text-[#2C5F6F]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-16">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-[#2C5F6F] mb-6">Project Overview</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    The Ethiopian Labor Law for Refugees project is a comprehensive initiative designed to educate refugees about their employment rights under Ethiopian law. Through workshops, focus groups, and creative advocacy tools, we empower refugees to understand and advocate for their rights in the workplace.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This project addresses a critical gap in refugee awareness about legal protections available to them, helping to prevent exploitation and promote fair employment practices.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-[#2C5F6F] mb-4">Project Objectives</h3>
                  <ul className="space-y-3">
                    {objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-6 h-6 bg-[#D4A574]/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-[#D4A574] text-sm font-bold">{idx + 1}</span>
                        </div>
                        <span className="text-gray-600">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-[#2C5F6F] rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">2,000+</div>
                    <p className="text-white/80">Participants Reached</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">45+</div>
                    <p className="text-white/80">Workshops Conducted</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">6</div>
                    <p className="text-white/80">Languages Covered</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">12</div>
                    <p className="text-white/80">Materials Created</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activities Tab */}
          {activeTab === 'activities' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#2C5F6F] mb-4">Project Activities</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our comprehensive approach includes multiple activities to ensure effective knowledge transfer and community engagement.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {activities.map((activity, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-14 h-14 bg-[#2C5F6F]/10 rounded-xl flex items-center justify-center mb-4">
                      <activity.icon className="w-7 h-7 text-[#2C5F6F]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2C5F6F] mb-2">{activity.title}</h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <span className="inline-block px-3 py-1 bg-[#D4A574]/10 text-[#D4A574] rounded-full text-sm font-semibold">
                      {activity.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2C5F6F] mb-6">Creative Advocacy Tools</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="w-16 h-16 bg-[#D4A574]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-[#D4A574]" />
                    </div>
                    <h4 className="font-bold text-[#2C5F6F] mb-2">Posters</h4>
                    <p className="text-gray-600 text-sm">Visual awareness materials for community spaces</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="w-16 h-16 bg-[#D4A574]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-[#D4A574]" />
                    </div>
                    <h4 className="font-bold text-[#2C5F6F] mb-2">Brochures</h4>
                    <p className="text-gray-600 text-sm">Detailed guides on labor rights and protections</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="w-16 h-16 bg-[#D4A574]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-[#D4A574]" />
                    </div>
                    <h4 className="font-bold text-[#2C5F6F] mb-2">Cartoon Materials</h4>
                    <p className="text-gray-600 text-sm">Engaging illustrated content for all literacy levels</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#2C5F6F] mb-4">Downloadable Resources</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Access our multilingual materials to learn about labor rights and share with your community.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#2C5F6F]/10 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-[#2C5F6F]" />
                      </div>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{resource.type}</span>
                    </div>
                    <h3 className="font-bold text-[#2C5F6F] mb-2">{resource.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{resource.size}</p>
                    <button className="w-full py-2 bg-[#D4A574] text-white rounded-lg font-medium hover:bg-[#c49464] transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-[#2C5F6F]/5 rounded-2xl p-8 text-center">
                <Globe className="w-12 h-12 text-[#2C5F6F] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#2C5F6F] mb-2">Available in 6 Languages</h3>
                <p className="text-gray-600 mb-6">
                  All materials are available in Arabic, Somali, Swahili, French, English, and Amharic.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {languages.map((lang) => (
                    <span
                      key={lang.code}
                      className="px-4 py-2 bg-white rounded-full text-[#2C5F6F] font-medium shadow"
                    >
                      {lang.flag} {lang.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Workshops Tab */}
          {activeTab === 'workshops' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#2C5F6F] mb-4">Upcoming Workshops</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Join our upcoming workshops to learn about your labor rights under Ethiopian law.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {workshops.map((workshop, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center text-[#D4A574] mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium">{workshop.date}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{workshop.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#2C5F6F]">{workshop.participants}</div>
                        <p className="text-gray-500 text-sm">Expected</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setCurrentPage('contact')}
                      className="w-full py-2 border-2 border-[#2C5F6F] text-[#2C5F6F] rounded-lg font-medium hover:bg-[#2C5F6F] hover:text-white transition-colors"
                    >
                      Register Interest
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-[#D4A574] rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Host a Workshop</h3>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Interested in hosting a labor law awareness workshop in your community? Contact us to arrange a session.
                </p>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-8 py-3 bg-white text-[#2C5F6F] rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 bg-[#2C5F6F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Support Legal Awareness
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Help us expand this vital program to reach more refugees across Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Support This Project
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

export default LegalAwarenessPage;
