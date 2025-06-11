// import React from 'react';
// import { FaUserCheck, FaUserTimes, FaHandHoldingHeart, FaNotesMedical, FaHeartbeat, FaProcedures, FaTruckMoving, FaUserShield } from 'react-icons/fa';
// import HeaderNavigation from '../component/HeaderNavigation';
// import Footer from '../component/Footer';

// const navigation = [
//   { name: 'Home', href: '/', current: false },
//   { name: 'Who We Are', href: '/story', current: false },
//   { name: 'Blood Facts', href: '/facts', current: false },
//   { name: 'Can I Donate?', href: '/donate', current: true },
//   { name: 'Contact', href: '/contact', current: false },
// ];

// const criteriaSection = [
//   {
//     icon: <FaUserCheck className="text-red-600 text-xl inline-block mr-2" />,
//     title: "Who Can Donate?",
//     points: [
//       "Age: 18 to 65 years. (Some regions: 17+ with parental consent)",
//       "Weight: At least 50 kg (110 lbs)",
//       "Hemoglobin: ≥12.5 g/dL (women), ≥13 g/dL (men)",
//       "Health: Must be in good general health",
//       "Donation Frequency: Whole blood (3 months for men, 4 for women), Platelets (every 7 days)",
//       "Blood Pressure: 90/60 to 140/90 mmHg",
//       "Recent Surgery: Avoid if major surgery in past 6 months",
//       "Pregnancy: Wait 6 months post childbirth",
//     ],
//   },
//   {
//     icon: <FaUserTimes className="text-red-600 text-xl inline-block mr-2" />,
//     title: "Who Cannot Donate?",
//     points: [
//       "Recent infections (cold, flu, etc.): wait 2 weeks",
//       "Uncontrolled chronic illnesses (diabetes, heart, kidney)",
//       "HIV/AIDS, Hepatitis B/C, Syphilis",
//       "Recent tattoos or piercings (wait 6–12 months)",
//       "Certain medications (e.g., blood thinners)",
//       "Alcohol or drug use in past 24 hours",
//       "Travel to malaria-prone regions (wait 3 months)",
//     ],
//   },
// ];

// const dosAndDonts = [
//   {
//     icon: <FaNotesMedical className="text-green-600 text-xl inline-block mr-2" />,
//     title: "Do’s Before and After Donation",
//     points: [
//       "Eat a healthy meal beforehand",
//       "Stay hydrated before and after donation",
//       "Sleep well the night before",
//       "Carry an official ID",
//       "Wear loose, comfortable clothing",
//       "Rest 10-15 mins post donation",
//       "Consume iron-rich food (e.g., spinach, beans)",
//       "Report dizziness or nausea to staff",
//     ],
//   },
//   {
//     icon: <FaNotesMedical className="text-red-600 text-xl inline-block mr-2" />,
//     title: "Don’ts Before and After Donation",
//     points: [
//       "Don’t smoke or drink alcohol 24 hours before/after",
//       "Don’t donate on an empty stomach",
//       "Avoid strenuous activity for 24 hours",
//       "Don’t rush out post-donation",
//       "Don’t donate if feeling unwell",
//       "Avoid aspirin/blood thinners 48 hours before platelet donation",
//     ],
//   },
// ];

// const donationJourney = [
//   {
//     icon: <FaHandHoldingHeart className="text-red-500 text-xl inline-block mr-2" />,
//     title: "1. Collection & Transportation",
//     detail: "Blood is collected, labeled, and sent to labs for testing.",
//   },
//   {
//     icon: <FaProcedures className="text-blue-600 text-xl inline-block mr-2" />,
//     title: "2. Separation into Components",
//     detail: `Separated into Red Blood Cells (RBCs), Platelets, and Plasma.`,
//   },
//   {
//     icon: <FaHeartbeat className="text-pink-600 text-xl inline-block mr-2" />,
//     title: "3. Infection Screening",
//     detail: `All donations are tested for HIV, Hepatitis B/C, Syphilis, Malaria, and more.`,
//   },
//   {
//     icon: <FaUserShield className="text-purple-600 text-xl inline-block mr-2" />,
//     title: "4. Safety Checks & Eligibility",
//     detail: `Blood is cleared only after passing all safety protocols.`,
//   },
//   {
//     icon: <FaProcedures className="text-yellow-600 text-xl inline-block mr-2" />,
//     title: "5. Storage",
//     detail: "Stored in specialized medical fridges/freezers until needed.",
//   },
//   {
//     icon: <FaTruckMoving className="text-green-600 text-xl inline-block mr-2" />,
//     title: "6. Transport & Delivery",
//     detail: "Packed in temperature-controlled containers for delivery.",
//   },
//   {
//     icon: <FaHandHoldingHeart className="text-teal-600 text-xl inline-block mr-2" />,
//     title: "7. Reaching the Right Patient",
//     detail: "Your blood reaches a patient in need—often within 10 days!",
//   },
// ];

// const Page = () => {
//   return (
//     <>
//       <HeaderNavigation navigation={navigation} />
//       <main className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
//         <h1 className="text-3xl font-bold text-center mb-8 text-red-700">Eligibility Criteria for Blood Donation</h1>

//         {criteriaSection.map((section, i) => (
//           <div key={i} className="mb-8">
//             <h2 className="text-2xl font-semibold mb-4">{section.icon} {section.title}</h2>
//             <ul className="list-disc list-inside space-y-2">
//               {section.points.map((point, j) => <li key={j}>{point}</li>)}
//             </ul>
//           </div>
//         ))}

//         <h2 className="text-2xl font-bold mt-12 mb-6 text-blue-700">Do’s and Don’ts for Blood Donation</h2>
//         {dosAndDonts.map((section, i) => (
//           <div key={i} className="mb-6">
//             <h3 className="text-xl font-semibold mb-3">{section.icon} {section.title}</h3>
//             <ul className="list-disc list-inside space-y-2">
//               {section.points.map((point, j) => <li key={j}>{point}</li>)}
//             </ul>
//           </div>
//         ))}

//         <h2 className="text-2xl font-bold mt-12 mb-6 text-green-700">What Happens to Donated Blood?</h2>
//         <div className="space-y-6">
//           {donationJourney.map((step, i) => (
//             <div key={i}>
//               <h3 className="text-xl font-semibold">{step.icon} {step.title}</h3>
//               <p className="ml-6 mt-1 text-gray-700">{step.detail}</p>
//             </div>
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Page;



// import React from 'react';
// import { FaUserCheck, FaUserTimes, FaHeartbeat, FaTint, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
// import HeaderNavigation from '../component/HeaderNavigation';
// import Footer from '../component/Footer';

// const navigation = [
//   { name: 'Home', href: '/', current: false },
//   { name: 'Who We Are', href: '/story', current: false },
//   { name: 'Blood Facts', href: '/facts', current: false },
//   { name: 'Eligibility', href: '/donate', current: true },
//   { name: 'Contact', href: '#', current: false },
// ];

// const EligibilitySection = () => (
//   <section className="max-w-5xl mx-auto px-4 py-8">
//     <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-red-600">
//       <FaHeartbeat className="text-red-500" /> Eligibility Criteria for Blood Donation
//     </h2>
//     <p className="text-gray-700 mb-4">To ensure the safety of both the donor and recipient, blood donation is subject to certain eligibility criteria. You can donate blood if you meet the following requirements:</p>

//     <div className="grid md:grid-cols-2 gap-6 mb-10">
//       <div>
//         <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-green-700">
//           <FaUserCheck /> Who Can Donate?
//         </h3>
//         <ul className="list-disc ml-6 text-gray-800 space-y-2">
//           <li>Age: 18–65 years (some regions allow 17-year-olds with consent).</li>
//           <li>Weight: At least 50 kg (110 lbs).</li>
//           <li>Haemoglobin: Min. 12.5 g/dL (women), 13 g/dL (men).</li>
//           <li>Good general health and no active illness.</li>
//           <li>Donation frequency:
//             <ul className="ml-4 list-disc">
//               <li>Whole blood: Every 3 months (men), 4 months (women).</li>
//               <li>Platelets: Every 7 days, up to 24 times/year.</li>
//             </ul>
//           </li>
//           <li>Healthy blood pressure (90/60 to 140/90 mmHg).</li>
//           <li>No major surgeries in last 6 months.</li>
//           <li>6+ months after childbirth (for women).</li>
//         </ul>
//       </div>

//       <div>
//         <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-red-700">
//           <FaUserTimes /> Who Cannot Donate?
//         </h3>
//         <ul className="list-disc ml-6 text-gray-800 space-y-2">
//           <li>Recent colds, flu, or fever (wait 2 weeks).</li>
//           <li>Chronic illnesses like diabetes, heart or kidney disorders.</li>
//           <li>Bloodborne infections (HIV, Hep B/C, STIs).</li>
//           <li>Recent tattoos or piercings (6–12 months).</li>
//           <li>Medications like antibiotics, blood thinners.</li>
//           <li>Alcohol/drug use in last 24 hours.</li>
//           <li>Recent travel to malaria-endemic areas (wait 3 months).</li>
//         </ul>
//       </div>
//     </div>

//     <div className="mb-10">
//       <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-700">
//         <FaCheckCircle /> Do’s (Before & After Donation)
//       </h3>
//       <ul className="list-disc ml-6 text-gray-800 space-y-2">
//         <li>Eat a healthy meal beforehand.</li>
//         <li>Stay well-hydrated before and after donation.</li>
//         <li>Get enough rest before donating.</li>
//         <li>Carry an official ID to the donation site.</li>
//         <li>Wear loose, comfortable clothing.</li>
//         <li>Rest for 10–15 minutes post-donation.</li>
//         <li>Eat iron-rich foods (spinach, beans, meat).</li>
//         <li>Report any side effects immediately.</li>
//       </ul>
//     </div>

//     <div className="mb-10">
//       <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-600">
//         <FaExclamationTriangle /> Don’ts (Before & After Donation)
//       </h3>
//       <ul className="list-disc ml-6 text-gray-800 space-y-2">
//         <li>No smoking/alcohol 24 hrs before & after.</li>
//         <li>Don’t donate on an empty stomach.</li>
//         <li>Avoid intense physical activity post-donation.</li>
//         <li>Don’t leave immediately after donating—rest!</li>
//         <li>Don’t donate if feeling unwell or taking certain meds.</li>
//         <li>Avoid aspirin/blood thinners 48 hrs before platelet donation.</li>
//       </ul>
//     </div>

//     <div>
//       <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-red-600">
//         <FaTint /> What Happens to Donated Blood?
//       </h2>
//       <ol className="list-decimal ml-6 text-gray-800 space-y-3">
//         <li><strong>Collection & Transportation:</strong> Blood is labeled, sampled, and sent to labs.</li>
//         <li><strong>Component Separation:</strong> Into RBCs, Platelets, and Plasma.</li>
//         <li><strong>Screening:</strong> Tests for HIV, Hepatitis B/C, Syphilis, Malaria, etc.</li>
//         <li><strong>Safety Check:</strong> Blood is not used unless fully tested and approved.</li>
//         <li><strong>Storage:</strong> Blood is stored in fridges/freezers after labeling.</li>
//         <li><strong>Safe Transport:</strong> Delivered in temperature-controlled units.</li>
//         <li><strong>Usage:</strong> Blood reaches patients within ~10 days.</li>
//       </ol>
//     </div>
//   </section>
// );

// const BloodEligibilityPage = () => {
//   return (
//     <>
//       <HeaderNavigation navigation={navigation} />
//       <main className="bg-gray-50 py-10">
//         <EligibilitySection />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default BloodEligibilityPage;








import React from 'react';
import { FaUserCheck, FaUserTimes, FaHeartbeat, FaTint, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import HeaderNavigation from '../component/HeaderNavigation';
import Footer from '../component/Footer';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Who We Are', href: '/story', current: false },
  { name: 'Blood Facts', href: '/facts', current: false },
  { name: 'Can I donate', href: '/donate', current: true },
  { name: 'FAQs' ,href:'/faq',current :false},
  {name: 'Join Us', href: '/join', current: false}

];



const EligibilitySection = () => (
  <section className="max-w-5xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-red-600">
      <FaHeartbeat className="text-red-500" /> Eligibility Criteria for Blood Donation
    </h2>
    <p className="text-gray-700 mb-4">To ensure the safety of both the donor and recipient, blood donation is subject to certain eligibility criteria. You can donate blood if you meet the following requirements:</p>

    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-green-700">
          <FaUserCheck /> Who Can Donate?
        </h3>
        <ul className="list-disc ml-6 text-gray-800 space-y-2">
          <li>Age: 18–65 years (some regions allow 17-year-olds with consent).</li>
          <li>Weight: At least 50 kg (110 lbs).</li>
          <li>Haemoglobin: Min. 12.5 g/dL (women), 13 g/dL (men).</li>
          <li>Good general health and no active illness.</li>
          <li>Donation frequency:
            <ul className="ml-4 list-disc">
              <li>Whole blood: Every 3 months (men), 4 months (women).</li>
              <li>Platelets: Every 7 days, up to 24 times/year.</li>
            </ul>
          </li>
          <li>Healthy blood pressure (90/60 to 140/90 mmHg).</li>
          <li>No major surgeries in last 6 months.</li>
          <li>6+ months after childbirth (for women).</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-red-700">
          <FaUserTimes /> Who Cannot Donate?
        </h3>
        <ul className="list-disc ml-6 text-gray-800 space-y-2">
          <li>Recent colds, flu, or fever (wait 2 weeks).</li>
          <li>Chronic illnesses like diabetes, heart or kidney disorders.</li>
          <li>Bloodborne infections (HIV, Hep B/C, STIs).</li>
          <li>Recent tattoos or piercings (6–12 months).</li>
          <li>Medications like antibiotics, blood thinners.</li>
          <li>Alcohol/drug use in last 24 hours.</li>
          <li>Recent travel to malaria-endemic areas (wait 3 months).</li>
        </ul>
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-6 mb-10">
    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-700">
        <FaCheckCircle /> Do’s (Before & After Donation)
      </h3>
      <ul className="list-disc ml-6 text-gray-800 space-y-2">
        <li>Eat a healthy meal beforehand.</li>
        <li>Stay well-hydrated before and after donation.</li>
        <li>Get enough rest before donating.</li>
        <li>Carry an official ID to the donation site.</li>
        <li>Wear loose, comfortable clothing.</li>
        <li>Rest for 10–15 minutes post-donation.</li>
        <li>Eat iron-rich foods (spinach, beans, meat).</li>
        <li>Report any side effects immediately.</li>
      </ul>
    </div>

    <div className="mb-10">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-600">
        <FaExclamationTriangle /> Don’ts (Before & After Donation)
      </h3>
      <ul className="list-disc ml-6 text-gray-800 space-y-2">
        <li>No smoking/alcohol 24 hrs before & after.</li>
        <li>Don’t donate on an empty stomach.</li>
        <li>Avoid intense physical activity post-donation.</li>
        <li>Don’t leave immediately after donating—rest!</li>
        <li>Don’t donate if feeling unwell or taking certain meds.</li>
        <li>Avoid aspirin/blood thinners 48 hrs before platelet donation.</li>
      </ul>
    </div>
    </div>

    <div  className='mb-10'>
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-red-600 ">
        <FaTint /> What Happens to Donated Blood?
      </h2>
      <ol className="list-decimal ml-6 text-gray-800 space-y-3">
        <li><strong>Collection & Transportation:</strong> Blood is labeled, sampled, and sent to labs.</li>
        <li><strong>Component Separation:</strong> Into RBCs, Platelets, and Plasma.</li>
        <li><strong>Screening:</strong> Tests for HIV, Hepatitis B/C, Syphilis, Malaria, etc.</li>
        <li><strong>Safety Check:</strong> Blood is not used unless fully tested and approved.</li>
        <li><strong>Storage:</strong> Blood is stored in fridges/freezers after labeling.</li>
        <li><strong>Safe Transport:</strong> Delivered in temperature-controlled units.</li>
        <li><strong>Usage:</strong> Blood reaches patients within ~10 days.</li>
      </ol>
    </div>
  </section>
);

const BloodEligibilityPage = () => {
  return (
    <>
      <HeaderNavigation navigation={navigation} />
      <main className="bg-gray-50 py-10">
        <EligibilitySection />
      </main>
      <Footer />
    </>
  );
};

export default BloodEligibilityPage;
