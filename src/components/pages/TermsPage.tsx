import React from 'react';
import { AlertTriangle, FileText, HeartHandshake, Mail } from 'lucide-react';

interface TermsPageProps {
  setCurrentPage: (page: string) => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-teal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Terms of Service
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              These terms help protect our community and clarify how this website can be used.
            </p>
            <p className="text-white/70 text-sm mt-4">
              Last updated: February 5, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur-md border border-black/5 shadow-sm p-8 md:p-10 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-secondary" />
                Using This Website
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Use the site for lawful purposes and in a way that respects others.</li>
                <li>Do not attempt to disrupt, misuse, or gain unauthorized access to the site or its data.</li>
                <li>Content is provided for general informational purposes.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <HeartHandshake className="w-6 h-6 mr-3 text-secondary" />
                Donations & Support
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Donations are voluntary contributions to support our programs. Where possible, we maintain records
                for administration and reporting. If you have questions about donating, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-secondary" />
                Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to keep information accurate and up to date, we do not guarantee completeness or
                accuracy of all content at all times. Links to third-party sites are provided for convenience and do
                not imply endorsement.
              </p>
            </div>

            <div className="rounded-2xl bg-primary/5 border border-primary/10 p-6">
              <h3 className="text-lg font-bold text-primary mb-2 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-secondary" />
                Contact
              </h3>
              <p className="text-muted-foreground">
                Questions about these terms? Email{' '}
                <a className="text-primary font-semibold hover:underline" href="mailto:info@effr.org">
                  info@effr.org
                </a>
                .
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-white font-semibold hover:bg-teal-700 transition-colors"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setCurrentPage('home')}
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
