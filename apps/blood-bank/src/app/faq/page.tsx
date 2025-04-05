'use client';

import React, { useState } from 'react';
import Footer from '../component/Footer';
import HeaderNavigation from '../component/HeaderNavigation';

type FAQ = {
  question: string;
  answer: string;
};

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Who We Are', href: '/story', current: false },
  { name: 'Can I Donate?', href: '/donate', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Blood Facts', href: '/facts', current: true },
];

const faqs: FAQ[] = [
  {
    question: 'Does blood donation hurt?',
    answer: 'The process involves a quick needle prick, but most donors experience minimal discomfort.',
  },
  {
    question: 'How long does it take?',
    answer:
      'The donation itself takes about 10–15 minutes, with the entire process (including screening) lasting around 30–45 minutes.',
  },
  {
    question: 'How often can I donate?',
    answer:
      'Whole blood donations can be made every 56 days (about 2 months), while platelet donations can be done more frequently.',
  },
  {
    question: 'Who can donate blood?',
    answer:
      'Most healthy individuals aged 18–65 and weighing at least 50kg can donate. A basic health screening is done before each donation.',
  },
  {
    question: 'Is blood donation safe?',
    answer:
      'Yes, it’s a very safe process. Sterile, single-use equipment is used for every donor, and medical professionals monitor the entire process.',
  },
  {
    question: 'What should I do after donating?',
    answer:
      'Drink plenty of fluids, rest, and avoid strenuous physical activity for the rest of the day. Eat iron-rich foods to help replenish your body.',
  },
  {
    question: 'Can I donate if I have a tattoo or piercing?',
    answer:
      'Yes, you can donate if it’s been more than 6 months since your last tattoo or piercing, and it was done at a licensed facility.',
  },
];

const FAQItem: React.FC<{
  faq: FAQ;
  isOpen: boolean;
  onClick: () => void;
}> = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 p-3 hover:bg-gray-50 transition duration-300 ease-in-out">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-800">{faq.question}</span>
        <span className="text-xl text-gray-500">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-5 pr-6 text-gray-600 transition-all duration-300 ease-in-out">
          {faq.answer}
        </div>
      )}
    </div>
  );
};

const Page: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <HeaderNavigation navigation={navigation} />
      <main className="max-w-5xl mx-auto px-6 md:px-8 py-16">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-red-700 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about blood donation? We&apos;ve got answers to help you feel confident and informed.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-2xl divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
