import React from 'react';
import { Database, Lock, Mail, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import PageHero from '@/components/PageHero';

const PrivacyPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <article className="min-h-screen pt-20">
      <Seo
        title="Privacy Policy"
        description="Read the EFFR privacy policy describing how we collect, use, and protect your information."
      />
      <StructuredData
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy' },
        ]}
      />
      {/* Hero */}
      <PageHero
        imageSrc="/images/official/photo_2024-11-28_13-05-39.jpg"
        badge={{ label: 'Legal' }}
        title="Privacy Policy"
        description="We respect your privacy and are committed to protecting your personal information."
      >
        <p className="text-white/70 text-sm">Last updated: February 5, 2026</p>
      </PageHero>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-10 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Database className="w-6 h-6 mr-3 text-secondary" />
                Information We Collect
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>
                  Contact form details (name, email, subject, inquiry type, and message) to respond to your request.
                </li>
                <li>
                  Newsletter subscription email to send updates (you can unsubscribe anytime).
                </li>
                <li>
                  Donation records (such as donor name, email, amount, and frequency) for administration and reporting.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Users className="w-6 h-6 mr-3 text-secondary" />
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>To communicate with you and provide support or program information.</li>
                <li>To improve our website, programs, and services.</li>
                <li>To send newsletters and announcements when you opt in.</li>
                <li>To maintain internal records and measure impact.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-secondary" />
                Data Sharing & Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share data only with trusted service providers
                (for example, website hosting and database services) to operate our website and communicate with you.
                We use reasonable security measures to protect information from unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-secondary" />
                Your Choices
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>You can request access, correction, or deletion of your information.</li>
                <li>You can unsubscribe from newsletters at any time.</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6">
              <h3 className="text-lg font-bold text-primary mb-2 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-secondary" />
                Contact
              </h3>
              <p className="text-muted-foreground">
                For privacy questions or requests, contact us at{' '}
                <a className="text-primary font-semibold hover:underline" href="mailto:info@effr.org">
                  info@effr.org
                </a>
                .
              </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-teal-700 transition-colors"
                  >
                    Go to Contact Form
                  </button>
                  <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
                  >
                    Back to Home
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default PrivacyPage;
