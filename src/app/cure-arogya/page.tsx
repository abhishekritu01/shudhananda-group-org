'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '../component/FooterSection';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

interface ComingSoonCardProps {
    title: string;
    description: string;
    features: string[];
    accentColor?: 'purple' | 'blue';
    }


const ComingSoonCard = ({ title, description, features, accentColor = 'purple' }: ComingSoonCardProps) => {
  const colorClasses = {
    purple: 'border-purple-200 bg-purple-50',
    blue: 'border-blue-200 bg-blue-50'
  };

  return (
    <motion.div 
      variants={fadeIn}
      className={`relative rounded-xl border-2 ${colorClasses[accentColor]} p-6 overflow-hidden shadow-sm`}
    >
      <div className="absolute top-4 right-4 bg-white text-purple-600 px-3 py-1 text-xs font-bold rounded-full border border-purple-200">
        COMING SOON
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="mb-5 text-gray-600">{description}</p>
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      <div className="h-10 bg-gray-100 rounded animate-pulse"></div>
    </motion.div>
  );
};

const CureArogyaComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');



const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log({ email, selectedPlan });
    setSubmitted(true);
};

  const kutumbaFeatures = [
    "Family coverage (up to 5 members)",
    "25% discount on consultations",
    "15% discount on diagnostics",
    "Priority scheduling",
    "Telemedicine included"
  ];

  const hiriyaFeatures = [
    "Specialized senior care",
    "25% discount on all services",
    "Quarterly health screenings",
    "Dedicated care coordinator",
    "Home sample collection"
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 to-blue-50 py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Launching Soon</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Cure+ Arogya Healthcare Card
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re building something special! Be the first to know when we launch our exclusive healthcare plans with <span className="font-semibold text-purple-600">25% savings</span>.
            </p>
            <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
              {!submitted ? (
                <>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">Get early access</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                        I&apos;m interested in:
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            id="kutumba"
                            name="plan"
                            type="radio"
                            value="kutumba"
                            checked={selectedPlan === 'kutumba'}
                            onChange={() => setSelectedPlan('kutumba')}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                          />
                          <label htmlFor="kutumba" className="ml-3 block text-sm text-gray-700">
                            Kutumba Family Plan
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="hiriya"
                            name="plan"
                            type="radio"
                            value="hiriya"
                            checked={selectedPlan === 'hiriya'}
                            onChange={() => setSelectedPlan('hiriya')}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                          />
                          <label htmlFor="hiriya" className="ml-3 block text-sm text-gray-700">
                            Hiriya Nagarika Senior Plan
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="both"
                            name="plan"
                            type="radio"
                            value="both"
                            checked={selectedPlan === 'both'}
                            onChange={() => setSelectedPlan('both')}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                          />
                          <label htmlFor="both" className="ml-3 block text-sm text-gray-700">
                            Both Plans
                          </label>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
                    >
                      Notify Me on Launch
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We&apos;ve added you to our early access list. You&apos;ll be the first to know when we launch Cure+ Arogya.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Preview Section */}
      <section className="py-16 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Plans We&apos;re Preparing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here&apos;s a preview of the healthcare benefits we&apos;re building for you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ComingSoonCard
            title="Kutumba Plan"
            description="Comprehensive healthcare coverage for families"
            features={kutumbaFeatures}
            accentColor="purple"
          />
          <ComingSoonCard
            title="Hiriya Nagarika Plan"
            description="Specialized healthcare for senior citizens"
            features={hiriyaFeatures}
            accentColor="blue"
          />
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Progress</h2>
            <p className="text-gray-600">
              We&apos;re working hard to bring you these healthcare solutions
            </p>
          </motion.div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Plan Development</span>
                <span className="text-sm text-gray-500">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-purple-600 h-2.5 rounded-full" 
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Partner Onboarding</span>
                <span className="text-sm text-gray-500">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: '72%' }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">System Integration</span>
                <span className="text-sm text-gray-500">63%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-teal-600 h-2.5 rounded-full" 
                  style={{ width: '63%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-purple-50 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Don&apos;t Miss Out on 25% Savings</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our waiting list and we&apos;ll notify you as soon as applications open
            </p>
            <Link href="#early-access">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg text-lg"
              >
                Join Waiting List
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CureArogyaComingSoon;