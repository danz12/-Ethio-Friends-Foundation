import React, { useState } from 'react';
import { Heart, Check, CreditCard, Calendar, Shield, Mail, User, ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface DonatePageProps {
  setCurrentPage: (page: string) => void;
}

const DonatePage: React.FC<DonatePageProps> = ({ setCurrentPage }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly' | 'yearly'>('one-time');
  const [donorInfo, setDonorInfo] = useState({ name: '', email: '' });
  const [step, setStep] = useState<'amount' | 'info' | 'payment' | 'success'>('amount');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const suggestedAmounts = [
    { value: 25, label: '$25', impact: 'School supplies for one child' },
    { value: 50, label: '$50', impact: 'Food assistance for one family' },
    { value: 100, label: '$100', impact: 'Vocational training for one person' },
    { value: 500, label: '$500', impact: 'Support a community workshop' },
  ];

  const getAmount = () => {
    if (customAmount) return parseFloat(customAmount);
    return selectedAmount || 0;
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleContinueToInfo = () => {
    if (getAmount() < 1) {
      setError('Please select or enter a donation amount');
      return;
    }
    setError('');
    setStep('info');
  };

  const handleContinueToPayment = () => {
    if (!donorInfo.name || !donorInfo.email) {
      setError('Please fill in all required fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donorInfo.email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setStep('payment');
  };

  const handleProcessDonation = async () => {
    setIsProcessing(true);
    setError('');

    try {
      // Save donation to database
      const { error: dbError } = await supabase
        .from('donations')
        .insert({
          donor_name: donorInfo.name,
          donor_email: donorInfo.email,
          amount: getAmount(),
          frequency: frequency,
          status: 'completed',
        });

      if (dbError) throw dbError;

      // Simulate payment processing delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStep('success');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An error occurred. Please try again.';
      setError(message);
    } finally {
      setIsProcessing(false);
    }
  };

  const frequencyLabel = {
    'one-time': 'One-time',
    'monthly': 'Monthly',
    'yearly': 'Yearly',
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#2C5F6F] to-[#1a3d47]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#D4A574]/20 rounded-full mb-6">
            <Heart className="w-4 h-4 text-[#D4A574] mr-2" />
            <span className="text-[#D4A574] text-sm font-medium">Make a Difference Today</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Support Our Mission
          </h1>
          <p className="text-white/90 text-xl max-w-2xl mx-auto">
            Your donation empowers refugee communities through education, livelihoods, and protection programs.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {['amount', 'info', 'payment'].map((s, idx) => (
              <React.Fragment key={s}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                  step === s ? 'bg-[#D4A574] text-white' : 
                  ['amount', 'info', 'payment'].indexOf(step) > idx ? 'bg-[#2C5F6F] text-white' : 
                  'bg-gray-200 text-gray-500'
                }`}>
                  {['amount', 'info', 'payment'].indexOf(step) > idx ? <Check className="w-5 h-5" /> : idx + 1}
                </div>
                {idx < 2 && (
                  <div className={`w-16 h-1 mx-2 ${
                    ['amount', 'info', 'payment'].indexOf(step) > idx ? 'bg-[#2C5F6F]' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Step 1: Amount Selection */}
            {step === 'amount' && (
              <div>
                <h2 className="text-2xl font-bold text-[#2C5F6F] mb-6 text-center">
                  Choose Your Donation Amount
                </h2>

                {/* Frequency Selection */}
                <div className="flex justify-center mb-8">
                  <div className="inline-flex bg-gray-100 rounded-full p-1">
                    {(['one-time', 'monthly', 'yearly'] as const).map((freq) => (
                      <button
                        key={freq}
                        onClick={() => setFrequency(freq)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                          frequency === freq
                            ? 'bg-[#2C5F6F] text-white'
                            : 'text-gray-600 hover:text-[#2C5F6F]'
                        }`}
                      >
                        {frequencyLabel[freq]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Suggested Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {suggestedAmounts.map((amount) => (
                    <button
                      key={amount.value}
                      onClick={() => handleAmountSelect(amount.value)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedAmount === amount.value && !customAmount
                          ? 'border-[#D4A574] bg-[#D4A574]/10'
                          : 'border-gray-200 hover:border-[#2C5F6F]'
                      }`}
                    >
                      <div className="text-2xl font-bold text-[#2C5F6F]">{amount.label}</div>
                      <div className="text-xs text-gray-500 mt-1">{amount.impact}</div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter a custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                    <input
                      type="number"
                      min="1"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent"
                    />
                  </div>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleContinueToInfo}
                  className="w-full py-4 bg-gradient-to-r from-[#D4A574] to-[#c49464] text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                >
                  Continue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            )}

            {/* Step 2: Donor Information */}
            {step === 'info' && (
              <div>
                <h2 className="text-2xl font-bold text-[#2C5F6F] mb-6 text-center">
                  Your Information
                </h2>

                <div className="bg-[#2C5F6F]/5 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Donation Amount:</span>
                    <span className="text-xl font-bold text-[#2C5F6F]">
                      ${getAmount().toFixed(2)} {frequency !== 'one-time' && `/ ${frequency === 'monthly' ? 'month' : 'year'}`}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep('amount')}
                    className="flex-1 py-4 border-2 border-gray-200 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleContinueToPayment}
                    className="flex-1 py-4 bg-gradient-to-r from-[#D4A574] to-[#c49464] text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center"
                  >
                    Continue
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 'payment' && (
              <div>
                <h2 className="text-2xl font-bold text-[#2C5F6F] mb-6 text-center">
                  Complete Your Donation
                </h2>

                <div className="bg-[#2C5F6F]/5 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Donor:</span>
                    <span className="font-medium text-[#2C5F6F]">{donorInfo.name}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium text-[#2C5F6F]">{donorInfo.email}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <span className="text-gray-600">Total:</span>
                    <span className="text-2xl font-bold text-[#D4A574]">
                      ${getAmount().toFixed(2)} {frequency !== 'one-time' && `/ ${frequency === 'monthly' ? 'month' : 'year'}`}
                    </span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <CreditCard className="w-5 h-5 text-[#2C5F6F] mr-2" />
                    <span className="font-semibold text-[#2C5F6F]">Payment Information</span>
                  </div>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2C5F6F] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Shield className="w-4 h-4 mr-2 text-green-600" />
                  Your payment is secured with SSL encryption
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    onClick={() => setStep('info')}
                    className="flex-1 py-4 border-2 border-gray-200 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                    disabled={isProcessing}
                  >
                    Back
                  </button>
                  <button
                    onClick={handleProcessDonation}
                    disabled={isProcessing}
                    className="flex-1 py-4 bg-gradient-to-r from-[#D4A574] to-[#c49464] text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Heart className="w-5 h-5 mr-2" />
                        Complete Donation
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Success */}
            {step === 'success' && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-[#2C5F6F] mb-4">
                  Thank You for Your Generosity!
                </h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Your donation of <span className="font-bold text-[#D4A574]">${getAmount().toFixed(2)}</span> will help empower refugee communities. A confirmation email has been sent to {donorInfo.email}.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setStep('amount');
                      setSelectedAmount(50);
                      setCustomAmount('');
                      setDonorInfo({ name: '', email: '' });
                    }}
                    className="px-6 py-3 bg-[#2C5F6F] text-white rounded-lg font-semibold hover:bg-[#1a3d47] transition-colors"
                  >
                    Make Another Donation
                  </button>
                  <button
                    onClick={() => setCurrentPage('home')}
                    className="px-6 py-3 border-2 border-[#2C5F6F] text-[#2C5F6F] rounded-lg font-semibold hover:bg-[#2C5F6F]/5 transition-colors"
                  >
                    Return Home
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Trust Badges */}
          {step !== 'success' && (
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-600" />
                Secure Payment
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-[#2C5F6F]" />
                Cancel Anytime
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-[#D4A574]" />
                100% Tax Deductible
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#2C5F6F] mb-8">Your Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[#D4A574] mb-2">5,000+</div>
              <p className="text-gray-600">Beneficiaries Reached</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[#D4A574] mb-2">850+</div>
              <p className="text-gray-600">Families Supported</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-[#D4A574] mb-2">120+</div>
              <p className="text-gray-600">Workshops Conducted</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonatePage;
