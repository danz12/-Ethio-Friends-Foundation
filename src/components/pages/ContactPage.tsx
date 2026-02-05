import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ContactPageProps {
  setCurrentPage: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    inquiryType: 'general',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          inquiry_type: formData.inquiryType,
          message: formData.message,
        });

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        inquiryType: 'general',
        message: '',
      });
    } catch (err: unknown) {
      setSubmitStatus('error');
      const message = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setErrorMessage(message);
    }
  };

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'donation', label: 'Donation' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'volunteer', label: 'Volunteer' },
    { value: 'media', label: 'Media Inquiry' },
    { value: 'program', label: 'Program Information' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Addis Ababa, Ethiopia', 'Bole Sub-City'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@effr.org', 'partnerships@effr.org'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+251 911 000 000', '+251 911 111 111'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday', '9:00 AM - 5:00 PM (EAT)'],
    },
  ];

  const faqs = [
    {
      question: 'How can I donate to EFFR?',
      answer: 'You can donate through our contact form by selecting "Donation" as the inquiry type, or reach out to us directly via email for bank transfer details.',
    },
    {
      question: 'Can I volunteer with EFFR?',
      answer: 'Yes! We welcome volunteers with various skills. Fill out the contact form with "Volunteer" as the inquiry type and tell us about your interests and availability.',
    },
    {
      question: 'How can my organization partner with EFFR?',
      answer: 'We welcome partnerships with organizations that share our mission. Contact us through the form or email partnerships@effr.org to discuss collaboration opportunities.',
    },
    {
      question: 'Where does EFFR operate?',
      answer: 'EFFR operates primarily in Addis Ababa and various refugee camps across Ethiopia, including Dire Dawa, Jijiga, and Gambella regions.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
              Contact Us
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              We'd love to hear from you. Whether you want to donate, partner, volunteer, or learn more about our work, reach out to us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#2C5F6F] mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2C5F6F] mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you within 2-3 business days.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="text-[#D4A574] font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent transition-all"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent transition-all"
                          placeholder="Subject of your message"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent transition-all resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="flex items-center p-4 bg-red-50 rounded-lg text-red-700">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="w-full py-4 bg-gradient-to-r from-[#D4A574] to-[#c49464] text-white rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {submitStatus === 'loading' ? (
                        <span className="animate-pulse">Sending...</span>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-[#2C5F6F] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2C5F6F] mb-1">{info.title}</h3>
                      {info.details.map((detail, dIdx) => (
                        <p key={dIdx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="bg-[#2C5F6F] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[#D4A574] transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2C5F6F]/10 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#2C5F6F] mx-auto mb-4" />
              <p className="text-[#2C5F6F] font-medium">Addis Ababa, Ethiopia</p>
              <p className="text-gray-600 text-sm">Bole Sub-City</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#D4A574] font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl font-bold text-[#2C5F6F] mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-[#2C5F6F] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#D4A574]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join us in empowering refugee communities across Ethiopia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('partnerships')}
              className="px-8 py-4 bg-white text-[#2C5F6F] rounded-full font-semibold hover:shadow-xl transition-all"
            >
              Partner With Us
            </button>
            <button
              onClick={() => setCurrentPage('programs')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
