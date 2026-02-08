import React, { useMemo, useState } from 'react';
import { Download, ExternalLink, Facebook, FileText, Filter, Image, Play, Send, Video, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import OptimizedImage from '@/components/OptimizedImage';
import PageHero from '@/components/PageHero';

type GalleryItem = {
  src: string;
  category: 'workshops' | 'community' | 'programs';
  caption: string;
};

type DownloadItem = {
  title: string;
  category: string;
  href: string;
};

const MediaPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<'all' | GalleryItem['category']>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'community', label: 'Community' },
    { id: 'programs', label: 'Programs' },
  ] as const;

  const galleryImages: GalleryItem[] = [
    { src: '/images/official/photo_2024-11-28_13-05-01.jpg', category: 'workshops', caption: 'Workshop session' },
    { src: '/images/official/photo_2024-11-28_13-05-23.jpg', category: 'workshops', caption: 'Training presentation' },
    { src: '/images/official/photo_2024-11-28_13-05-36.jpg', category: 'programs', caption: 'Small group discussion' },
    { src: '/images/official/photo_2024-11-28_13-05-39.jpg', category: 'community', caption: 'Community workshop participants' },
    { src: '/images/official/photo_2024-11-28_13-05-40.jpg', category: 'community', caption: 'Community gathering' },
    { src: '/images/official/photo_2024-11-28_13-05-42.jpg', category: 'community', caption: 'Community meeting' },
    { src: '/images/official/photo_2024-12-27_12-19-06.jpg', category: 'community', caption: 'Community event speaker' },
    { src: '/images/official/photo_2024-12-27_12-19-08.jpg', category: 'community', caption: 'Community event participant' },
    { src: '/images/official/photo_2024-12-27_12-19-17.jpg', category: 'community', caption: 'Community event group' },
    { src: '/images/official/photo_2026-02-07_21-33-53.jpg', category: 'workshops', caption: 'Working session' },
    { src: '/images/official/photo_2026-02-07_22-18-48.jpg', category: 'community', caption: 'Workshop participants' },
  ];

  const downloads: DownloadItem[] = [
    {
      title: 'EFFR profile & achievements (PDF)',
      category: 'Reports',
      href: `${import.meta.env.BASE_URL}docs/effr-achievements-2025.pdf`,
    },
    {
      title: 'EFFR code of conduct (PDF)',
      category: 'Policies',
      href: `${import.meta.env.BASE_URL}docs/effr-code-of-conduct.pdf`,
    },
  ];

  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') return galleryImages;
    return galleryImages.filter((img) => img.category === activeFilter);
  }, [activeFilter, galleryImages]);

  return (
    <article className="min-h-screen pt-20">
      <Seo
        title="Media"
        description="Browse photos and official documents from EFFR's work empowering refugee communities in Ethiopia."
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Media', path: '/media' },
        ]}
      />

      <PageHero
        imageSrc="/images/official/photo_2024-11-28_13-05-39.jpg"
        badge={{ label: 'Media Center' }}
        title="Media & Resources"
        description="Explore photos and download official documents showcasing our work."
      />

      {/* Filters */}
      <section className="-mt-10 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-sm p-6 md:p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center">
                <Filter className="w-5 h-5 text-secondary mr-2" />
                <h2 className="text-lg font-bold text-primary">Photo Gallery</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === filter.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img) => (
              <button
                type="button"
                key={img.src}
                className="relative rounded-xl overflow-hidden shadow-lg group"
                onClick={() => setLightboxImage(img)}
              >
                <OptimizedImage
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-44 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-medium line-clamp-2">{img.caption}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                className="w-full max-h-[75vh] object-contain bg-black"
                loading="eager"
              />
              <div className="p-4 bg-black/80">
                <p className="text-white/90 text-sm">{lightboxImage.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Videos (placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h2 className="text-3xl font-bold text-primary flex items-center">
              <Video className="w-8 h-8 mr-3 text-secondary" />
              Videos
            </h2>
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-teal-700 transition-colors shadow-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Coming soon
            </button>
          </div>

          <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-10 text-center">
            <Image className="w-10 h-10 text-secondary mx-auto mb-3" />
            <p className="text-muted-foreground">
              Video highlights can be added here when available.
            </p>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-secondary"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-gray-900 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video content coming soon</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Downloadable Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
              <FileText className="w-8 h-8 mr-3 text-secondary" />
              Downloadable Resources
            </h2>
            <p className="text-muted-foreground">Official documents currently available on the website.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloads.map((resource) => (
              <div key={resource.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded font-medium">
                    {resource.category}
                  </span>
                </div>
                <h3 className="font-bold text-primary mb-2">{resource.title}</h3>
                <a
                  href={resource.href}
                  className="w-full py-2 bg-primary text-white rounded-lg font-medium hover:bg-teal-700 transition-colors flex items-center justify-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media (placeholder links) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Connect With Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Add your official social links when available.
            </p>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center px-8 py-4 bg-[#1877F2] text-white rounded-xl font-semibold hover:shadow-xl transition-all"
            >
              <Facebook className="w-6 h-6 mr-3" />
              Facebook
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
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
          <h2 className="text-3xl font-bold text-white mb-4">Share Our Story</h2>
          <p className="text-white/90 text-lg mb-8">
            Help us spread awareness about refugee-led empowerment by sharing our content.
          </p>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </article>
  );
};

export default MediaPage;

