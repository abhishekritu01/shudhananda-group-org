'use client';

import React, { useState } from 'react';
import Footer from '../component/FooterSection';
import { useEffect } from 'react';

type FAQ = {
    question: string;
    answer: string;
};

const faqs: FAQ[] = [
    {
        question: 'What all locations are CurePlus Hospitals based in?',
        answer: 'We are currently located in Mysuru, Hassan, Mandya, Chamarajanagar, and Kodagu.',
    },
    {
        question: 'What services does CurePlus Hospitals provide?',
        answer:
            'We offer emergency care, general medicine, diagnostics, pharmacy services, specialist consultations, and more.',
    },
    {
        question: 'Do you have a pharmacy in the hospital?',
        answer: 'Yes, every CurePlus Hospital includes a fully stocked in-house pharmacy.',
    },
    {
        question: 'Do you have female doctors and staff available?',
        answer:
            'Yes, we have qualified female doctors, nurses, and support staff across all departments to ensure patient comfort and care.',
    },
    {
        question: 'Are specialists available for women and children?',
        answer:
            'Yes, we have expert gynecologists, pediatricians, and women’s health specialists at all major branches.',
    },
    {
        question: 'Why is CurePlus Hospitals considered one of the best healthcare providers in Karnataka?',
        answer:
            'Because CurePlus Hospitals brings together a team of highly skilled medical professionals, cutting-edge technology, and a deep-rooted commitment to compassionate care. We serve not just urban centers but also rural and semi-urban communities, ensuring that quality healthcare is accessible to all.',
    },
];

const FAQItem: React.FC<{
    faq: FAQ;
    isOpen: boolean;
    onClick: () => void;
}> = ({ faq, isOpen, onClick }) => (
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

const Page: React.FC = () => {
    useEffect(() => {
  document.title = 'FAQs | CurePlus Hospitals';
}, []);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <>
            {/* ✅ Header removed */}
            <main className="max-w-5xl mx-auto px-6 md:px-8 py-16">
                <section className="mb-12 text-center">
                    <h1 className="text-5xl font-extrabold text-purple-500 mb-4">Frequently Asked Questions</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Have questions about CurePlus Hospitals? We&apos;ve got answers to help you feel confident and informed.
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


