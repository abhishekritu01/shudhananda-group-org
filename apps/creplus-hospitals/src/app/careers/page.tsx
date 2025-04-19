// import React from 'react';
// import { FaBriefcase, FaRegSmile } from 'react-icons/fa';
// import Link from 'next/link';

// const page = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
//           Explore Careers at CurePlus
//         </h1>
//         <p className="text-lg text-gray-600">
//           Join our mission to revolutionize healthcare across rural India. Be part of a passionate team dedicated to
//           making a difference.
//         </p>
//       </div>

//       {/* Career Opportunities */}
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">Current Openings</h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {[
//             {
//               title: 'Full Stack Developer',
//               description:
//                 'We are looking for a passionate Full Stack Developer to build robust web applications, leveraging cutting-edge technologies.',
//               location: 'Bengaluru, Karnataka',
//             },
//             {
//               title: 'Healthcare Consultant',
//               description:
//                 'Help us improve healthcare delivery by advising on operational strategies and patient care processes.',
//               location: 'Mysuru, Karnataka',
//             },
//             {
//               title: 'Marketing Specialist',
//               description:
//                 'Join our marketing team to craft campaigns that help raise awareness about our healthcare initiatives.',
//               location: 'Remote/India',
//             },
//             {
//               title: 'Data Scientist',
//               description:
//                 'Analyze healthcare data and provide insights that help improve patient outcomes and operational efficiency.',
//               location: 'Bengaluru, Karnataka',
//             },
//           ].map((job, index) => (
//             <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">{job.title}</h3>
//               <p className="text-gray-600 text-sm mb-4">{job.description}</p>
//               <p className="text-gray-500 text-sm">{job.location}</p>
//               <Link href="/careers/[jobId]" as={`/careers/${index}`}>
//                 <p className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-800 font-medium">
//                   Apply Now <FaBriefcase className="w-5 h-5" />
//                 </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="text-center mt-16">
//         <h3 className="text-2xl font-bold text-gray-800 mb-4">Not finding your ideal role?</h3>
//         <p className="text-lg text-gray-600 mb-6">
//           Don’t worry, we’re always looking for passionate people. Share your resume with us!
//         </p>
//         <Link href="/careers/submit-resume">
//           <p className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition">
//             Submit Your Resume <FaRegSmile className="w-5 h-5" />
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default page;



const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Explore Careers at CurePlus
        </h1>
        <p className="text-lg text-gray-600">
          Join our mission to revolutionize healthcare across rural India. Be part of a passionate team dedicated to
          making a difference.
        </p>
      </div>

      {/* Coming Soon Section */}
      <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">🚀 Coming Soon!</h2>
        <p className="text-xl text-gray-700">
          We&apos;re working on some exciting career opportunities. Check back soon to explore our job openings and become a part of our growing team!
        </p>
      </div>

      {/* CTA Section */}
      {/* <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Not finding your ideal role?</h3>
        <p className="text-lg text-gray-600 mb-6">
          Don’t worry, we’re always looking for passionate people. Share your resume with us!
        </p>
        <Link href="/careers/submit-resume">
          <p className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-medium rounded-full hover:bg-blue-800 transition">
            Submit Your Resume <FaRegSmile className="w-5 h-5" />
          </p>
        </Link>
        
      </div> */}
    </div>
  );
};

export default CareersPage;

