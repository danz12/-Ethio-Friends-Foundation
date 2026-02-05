import React, { useState } from 'react';
import { Image, Video, FileText, Download, Play, X, Filter, ExternalLink, Facebook, Send } from 'lucide-react';

interface MediaPageProps {
  setCurrentPage: (page: string) => void;
}

const MediaPage: React.FC<MediaPageProps> = ({ setCurrentPage }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'community', label: 'Community Events' },
    { id: 'programs', label: 'Programs' },
  ];

  const galleryImages = [
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287549968_1b361fc2.jpg', category: 'community', caption: 'Community Support Event' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287550924_b97c585c.jpg', category: 'programs', caption: 'Family Program Session' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287524015_3ed19abb.jpg', category: 'programs', caption: 'Education Initiative' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287526096_911c3873.jpg', category: 'programs', caption: 'Youth Development' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287556330_3745f45d.jpg', category: 'community', caption: 'Community Meeting' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287551494_08677bf2.jpg', category: 'workshops', caption: 'Skills Training Workshop' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503428_5f515e73.jpg', category: 'workshops', caption: 'Economic Empowerment Workshop' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503617_ce61aba2.jpg', category: 'programs', caption: 'Livelihood Training' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287505032_a263e9ad.jpg', category: 'workshops', caption: 'Protection Awareness' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287509277_ccf1658b.jpg', category: 'programs', caption: 'MHPSS Session' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287529903_7b6cea9a.png', category: 'programs', caption: 'Child Education' },
    { src: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287526296_503a9063.jpg', category: 'community', caption: 'Youth Activities' },
  ];

  const videos = [
    { title: 'EFFR Impact Story 2025', duration: '4:32', thumbnail: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287487818_f29a9c0a.jpg' },
    { title: 'Labor Law Awareness Campaign', duration: '3:15', thumbnail: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287503428_5f515e73.jpg' },
    { title: 'Community Voices: Success Stories', duration: '5:48', thumbnail: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287549968_1b361fc2.jpg' },
    { title: 'Youth Program Highlights', duration: '2:56', thumbnail: 'https://d64gsuwffb70l.cloudfront.net/698470e793dd34d81ce542cb_1770287524015_3ed19abb.jpg' },
  ];

  const resources = [
    { title: 'EFFR Annual Report 2025', type: 'PDF', size: '4.2 MB', category: 'Reports' },
    { title: 'Labor Rights Brochure (English)', type: 'PDF', size: '1.8 MB', category: 'Brochures' },
    { title: 'Program Overview Poster', type: 'PDF', size: '2.1 MB', category: 'Posters' },
    { title: 'Know Your Rights Guide', type: 'PDF', size: '3.5 MB', category: 'Guides' },
    { title: 'Community Awareness Poster', type: 'PDF', size: '1.5 MB', category: 'Posters' },
    { title: 'Volunteer Handbook', type: 'PDF', size: '2.8 MB', category: 'Guides' },
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Media Center</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Media & Resources
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              Explore our photo galleries, videos, and downloadable resources showcasing our work and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#2C5F6F] mb-2 flex items-center">
                <Image className="w-8 h-8 mr-3 text-[#D4A574]" />
                Photo Gallery
              </h2>
              <p className="text-gray-600">Images from our workshops, programs, and community events.</p>
            </div>
            <div className="flex items-center mt-4 md:mt-0 space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-[#2C5F6F] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage(img.src)}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#D4A574]"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Videos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2C5F6F] mb-2 flex items-center">
              <Video className="w-8 h-8 mr-3 text-[#D4A574]" />
              Videos
            </h2>
            <p className="text-gray-600">Watch our awareness videos and impact stories.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, idx) => (
              <div
                key={idx}
                onClick={() => setVideoModalOpen(true)}
                className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-14 h-14 bg-[#D4A574] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#2C5F6F] group-hover:text-[#D4A574] transition-colors">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
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
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Downloadable Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#2C5F6F] mb-2 flex items-center">
              <FileText className="w-8 h-8 mr-3 text-[#D4A574]" />
              Downloadable Resources
            </h2>
            <p className="text-gray-600">Access our reports, brochures, posters, and advocacy materials.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-[#2C5F6F]/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-[#2C5F6F]" />
                  </div>
                  <span className="px-2 py-1 bg-[#D4A574]/10 text-[#D4A574] text-xs rounded font-medium">
                    {resource.category}
                  </span>
                </div>
                <h3 className="font-bold text-[#2C5F6F] mb-2">{resource.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{resource.type} • {resource.size}</p>
                <button className="w-full py-2 bg-[#2C5F6F] text-white rounded-lg font-medium hover:bg-[#1a3d47] transition-colors flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2C5F6F] mb-4">Connect With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow us on social media for the latest updates, stories, and community news.
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 bg-[#1877F2] text-white rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              <Facebook className="w-6 h-6 mr-3" />
              Facebook
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 bg-[#0088cc] text-white rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              <Send className="w-6 h-6 mr-3" />
              Telegram
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2C5F6F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Share Our Story
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Help us spread awareness about refugee empowerment by sharing our content.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="px-8 py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default MediaPage;
