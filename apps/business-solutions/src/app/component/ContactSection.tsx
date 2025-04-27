// 'use client';
// import Link from 'next/link';
// import React, { useState } from 'react';

// interface FormData {
//   name: string;
//   email: string;
//   message: string;
// }

// const ContactUsSection = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [responseMessage, setResponseMessage] = useState('');

//   // Handle Input Changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     console.log(`Updating ${name}:`, value); // Debugging
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle Form Submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMessage('');

//     try {
//       const response = await fetch('/api/email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setResponseMessage('Your message has been sent successfully.');
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         setResponseMessage('Failed to send the message. Please try again later.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setResponseMessage('An error occurred while sending the message.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="relative py-20 px-6 lg:py-28 lg:px-8 overflow-hidden" id="contact">
//       <div className="mx-auto max-w-6xl text-center relative z-10">
//         <h2 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl animate-fade-in-up">
//           Get In Touch <span className="text-orange-600">With Us</span>
//         </h2>
//         <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in">
//           Have a question? We&apos;re here to assist you. Get in touch with our team for any inquiries, suggestions, or support.
//         </p>
//       </div>

//       <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
//         {/* Left Side - Text */}
//         <div className="flex flex-col justify-center items-start space-y-6 p-6 md:p-10">
//           <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
//             We&apos;re here to help!
//           </h3>
//           <p className="text-lg text-gray-600 max-w-md">
//             Whether you’re looking for more information about our products, need support, or just want to chat, our team is ready to assist. Reach out, and we’ll get back to you as soon as possible.
//           </p>
//           <div className="text-lg text-gray-600 flex gap-2">
//             For quick assistance, email us at{' '}
//             <div className="animate-bounce">
//               <Link href="mailto:info@sudhanandgroup.com" className="text-orange-600 font-semibold hover:text-orange-800 transition duration-300 text-xs sm:text-sm">
//                 info@sudhanandgroup.com
//               </Link>
//             </div>
//             .
//           </div>
//         </div>

//         {/* Right Side - Form */}
//         <div className="flex justify-center items-center">
//           <form onSubmit={handleSubmit} className="w-full p-8 rounded-lg shadow-lg space-y-8 max-w-lg mx-auto bg-white border border-gray-300">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Name Input */}
//               <div>
//                 <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="p-4 w-full bg-white border border-gray-300 rounded-lg focus:ring-orange-500 focus:ring-2 transition-all duration-300 ease-in-out"
//                   placeholder="John Doe"
//                 />
//               </div>

//               {/* Email Input */}
//               <div>
//                 <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="p-4 w-full bg-white border border-gray-300 rounded-lg focus:ring-orange-500 focus:ring-2 transition-all duration-300 ease-in-out"
//                   placeholder="john.doe@example.com"
//                 />
//               </div>
//             </div>

//             {/* Message Textarea */}
//             <div>
//               <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="p-4 w-full bg-white border border-gray-300 rounded-lg text-zinc-900 focus:ring-orange-500 focus:ring-2 transition-all duration-300 ease-in-out"
//                 rows={6}
//                 placeholder="Type your message here"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 disabled={loading || !formData.name || !formData.email || !formData.message}
//                 className={`rounded-md bg-gradient-to-r from-orange-600 to-orange-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ${
//                   loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-orange-800 hover:to-orange-600'
//                 } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition duration-300`}
//               >
//                 {loading ? 'Sending...' : 'Send Message'}
//               </button>

//               {/* Response Message */}
//               {responseMessage && <p className="mt-4 text-gray-600">{responseMessage}</p>}
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUsSection;




'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUsSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-t from-gray-50 to-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Matched to TestimonialSection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            Get In <span className="text-orange-600">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Have a question? We&apos;re here to assist you with any inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Information (matches testimonials layout) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-orange-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Whether you need support or just want to chat, our team is ready to assist.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-1.5"></div>
                  <div>
                    <span className="text-gray-700 font-medium">Email us at:</span>
                    <Link 
                      href="mailto:info@sudhanandgroup.com" 
                      className="block text-orange-600 hover:text-orange-800 transition"
                    >
                      info@sudhanandgroup.com
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Quick response time</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Dedicated support team</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form (matches testimonials card style) */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="p-3 text-zinc-900 w-full bg-white border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="p-3 text-zinc-900 w-full bg-white border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="p-3 text-zinc-900 w-full bg-white border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition"
                    rows={5}
                    placeholder="Type your message here"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading || !formData.name || !formData.email || !formData.message}
                    className={`w-full rounded-lg px-4 py-3 font-semibold text-white shadow-md ${
                      loading ? 'bg-orange-400 cursor-not-allowed' : 'bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600'
                    } transition duration-300`}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                {responseMessage && (
                  <p className={`text-center mt-4 ${
                    responseMessage.includes('success') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {responseMessage}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Matching Footer Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-orange-50 px-6 py-3 rounded-full border border-orange-200">
            <p className="text-gray-700 font-medium">
              We typically respond within 24 hours
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUsSection;