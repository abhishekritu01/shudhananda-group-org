// import {
//     FaChartBar,
//     FaHeart,
//     FaNotesMedical,
//     FaSyringe,
//     FaTint,
//   } from 'react-icons/fa';
//   import { MdBloodtype, MdLocalHospital } from 'react-icons/md';
//   import Footer from '../component/Footer';
//   import HeaderNavigation from '../component/HeaderNavigation';
  
//   const navigation = [
//     { name: 'Home', href: '/', current: false},
//     { name: 'Who We Are', href: '/story', current :false},
//     { name: 'Blood Facts', href: '/facts', current: true },
//     { name: 'Can I donate', href: '/donate', current: false },
//     { name: 'FAQs' ,href:'/faq',current :false},
//     {name: 'Join Us', href: '/join', current: false}
//   ];
  
//   const factsSections = [
//     {
//       icon: <FaTint className="text-red-600" />,
//       title: 'Did You Know? The Power of Blood Donation',
//       content: (
//         <>
//           <p>
//             Every year, India needs approximately <strong>5 crore units of blood</strong>,
//             but only <strong>2.5 crore units</strong> are donated — a huge shortfall.
//           </p>
//           <ul className="list-disc ml-5 mt-2 space-y-1">
//             <li>Someone needs blood every <strong>2 seconds</strong>.</li>
//             <li><strong>38,000+</strong> donations are needed daily.</li>
//             <li><strong>30 million+</strong> components transfused annually.</li>
//             <li><strong>1 million+</strong> cancer patients need blood regularly.</li>
//             <li>Accident victims may require up to <strong>50 units</strong>.</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       icon: <FaHeart className="text-red-600" />,
//       title: 'Key Facts About Blood Donation',
//       content: (
//         <>
//           <p>
//             Donated blood helps save lives in surgeries, trauma, cancer treatment, and childbirth.
//           </p>
//           <ul className="list-disc ml-5 mt-2 space-y-1">
//             <li>You can donate at blood banks, camps, or mobile vans.</li>
//           </ul>
//           <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
//             <FaNotesMedical /> Before You Donate:
//           </h3>
//           <ul className="list-disc ml-5 mt-1 space-y-1">
//             <li>Registration takes about 5 minutes.</li>
//             <li>Health checks include BP, weight, and hemoglobin levels.</li>
//             <li>Your donation history is reviewed.</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       icon: <FaSyringe className="text-red-600" />,
//       title: 'Blood Donation Process',
//       content: (
//         <ul className="list-disc ml-5 mt-2 space-y-1">
//           <li>Completely safe, uses sterile one-time-use needles.</li>
//           <li>Steps: Register → Health Check → Donation → Refreshment.</li>
//           <li>Takes <strong>&lt;15 minutes</strong> to donate, ~45 mins total.</li>
//           <li>Only 1 unit (out of 10 in your body) is taken.</li>
//           <li>Red cells: donate every 3 months; Platelets: every 7 days.</li>
//           <li>All donated blood is tested for major diseases.</li>
//         </ul>
//       ),
//     },
//     {
//       icon: <MdBloodtype className="text-red-600" />,
//       title: 'Blood and Its Components',
//       content: (
//         <ul className="list-disc ml-5 mt-2 space-y-1">
//           <li><strong>RBCs:</strong> Carry oxygen to body tissues.</li>
//           <li><strong>WBCs:</strong> Fight infections and immune response.</li>
//           <li><strong>Platelets:</strong> Aid in clotting and healing.</li>
//           <li><strong>Plasma:</strong> Transports nutrients and hormones.</li>
//         </ul>
//       ),
//     },
//   ];
  
//   const bloodTypes = [
//     ['O-', 'Universal donor, can donate to all types.'],
//     ['O+', 'Most common, can donate to positive types.'],
//     ['A-', 'Can donate to A-, A+, AB-, AB+.'],
//     ['A+', 'Second most common, to A+, AB+.'],
//     ['B-', 'Rare, can donate to B-, B+, AB-, AB+.'],
//     ['B+', 'Can donate to B+, AB+.'],
//     ['AB-', 'Universal plasma donor.'],
//     ['AB+', 'Universal recipient.'],
//     ['A2', 'Subtype of A, slightly different antigens.'],
//     ['A2B', 'Rare AB subtype with unique properties.'],
//   ];
  
//   const compatibility = [
//     ['O-', 'All types', 'O-'],
//     ['O+', 'O+, A+, B+, AB+', 'O-, O+'],
//     ['A-', 'A-, A+, AB-, AB+', 'A-, O-'],
//     ['A+', 'A+, AB+', 'A-, A+, O-, O+'],
//     ['B-', 'B-, B+, AB-, AB+', 'B-, O-'],
//     ['B+', 'B+, AB+', 'B-, B+, O-, O+'],
//     ['AB-', 'AB-, AB+', 'AB-, A-, B-, O-'],
//     ['AB+', 'AB+', 'All types'],
//   ];
  
//   const Page = () => {
//     return (
//       <>
//         <HeaderNavigation navigation={navigation} />
//         <main className="px-4 md:px-12 py-12 bg-gray-50 text-gray-800 font-sans">
//           <div className="max-w-6xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-10">
//               🩸 Blood Facts That Matter
//             </h1>
  
//             <div className="space-y-12">
//               {factsSections.map(({ icon, title, content }, idx) => (
//                 <section
//                   key={idx}
//                   className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200"
//                 >
//                   <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-2">
//                     {icon} {title}
//                   </h2>
//                   <div className="text-gray-700 text-base">{content}</div>
//                 </section>
//               ))}
  
//               {/* Blood Types Table */}
//               <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
//                 <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-4">
//                   <FaChartBar /> 10 Main Blood Types
//                 </h2>
//                 <p>In addition to the 8 main blood types, subtypes like A2 and A2B exist.</p>
//                 <div className="overflow-x-auto mt-4">
//                   <table className="w-full table-auto border border-gray-300 text-sm">
//                     <thead className="bg-red-100 text-left">
//                       <tr>
//                         <th className="border px-4 py-2">Blood Type</th>
//                         <th className="border px-4 py-2">Description</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {bloodTypes.map(([type, desc], i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="border px-4 py-2 font-semibold">{type}</td>
//                           <td className="border px-4 py-2">{desc}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </section>
  
//               {/* Compatibility Table */}
//               <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
//                 <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-4">
//                   <MdLocalHospital /> Blood Compatibility Chart
//                 </h2>
//                 <div className="overflow-x-auto mt-4">
//                   <table className="w-full table-auto border border-gray-300 text-sm">
//                     <thead className="bg-red-100 text-left">
//                       <tr>
//                         <th className="border px-4 py-2">Blood Type</th>
//                         <th className="border px-4 py-2">Can Donate To</th>
//                         <th className="border px-4 py-2">Can Receive From</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {compatibility.map(([type, donateTo, receiveFrom], i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="border px-4 py-2 font-semibold">{type}</td>
//                           <td className="border px-4 py-2">{donateTo}</td>
//                           <td className="border px-4 py-2">{receiveFrom}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </main>
//         <Footer />
//       </>
//     );
//   };
  
//   export default Page;
  

// 'use client';
// import {
//     FaChartBar,
//     FaHeart,
//     FaNotesMedical,
//     FaSyringe,
//     FaTint,
//     FaUsers,
//     FaClipboardCheck,
//     FaCalendarAlt,
//     FaCookieBite,
//     FaRegHandshake
//   } from 'react-icons/fa';
//   import { MdBloodtype, MdLocalHospital, MdOutlineVolunteerActivism } from 'react-icons/md';
//   import Footer from '../component/Footer';
//   import HeaderNavigation from '../component/HeaderNavigation';
  
//   const navigation = [
//     { name: 'Home', href: '/', current: false},
//     { name: 'Who We Are', href: '/story', current :false},
//     { name: 'Blood Facts', href: '/facts', current: true },
//     { name: 'Can I donate', href: '/donate', current: false },
//     { name: 'FAQs' ,href:'/faq',current :false},
//     {name: 'Join Us', href: '/join', current: false}
//   ];
  
//   const factsSections = [
//     {
//       icon: <FaTint className="text-red-600" />,
//       title: 'Why Donate Blood?',
//       content: (
//         <>
//           <p>
//             Because one donation can save multiple lives and one day, it could be yours. Every drop helps accident victims, surgery patients, cancer fighters, and more. 100% of our local blood supply comes from volunteers. No substitutes. Just people like you.
//           </p>
//           <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
//             <FaUsers /> Who Can Donate?
//           </h3>
//           <p>You're eligible to give blood if you:</p>
//           <ul className="list-disc ml-5 mt-2 space-y-1">
//             <li>Are 18 years or older</li>
//             <li>Weigh at least 55 kg</li>
//             <li>Are in good general health</li>
//             <li>Have hemoglobin level of at least 12.5 g/dL</li>
//             <li>Have not donated blood in the last 3 months</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       icon: <FaHeart className="text-red-600" />,
//       title: 'The Donation Experience',
//       content: (
//         <>
//           <h3 className="font-semibold flex items-center gap-2 text-gray-800">
//             <FaSyringe /> Does It Hurt to Give Blood?
//           </h3>
//           <p>Most donors feel only a brief pinch when the needle goes in. The entire blood draw typically takes less than 10 minutes.</p>
          
//           <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
//             <FaClipboardCheck /> How Should I Prepare?
//           </h3>
//           <ul className="list-disc ml-5 mt-1 space-y-1">
//             <li>Get a good night's sleep</li>
//             <li>Eat a healthy meal</li>
//             <li>Stay hydrated (water is best)</li>
//             <li>Avoid caffeine and alcohol</li>
//             <li>Bring your ID and donor card if you have one</li>
//           </ul>
          
//           <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
//             <FaCalendarAlt /> What Happens When I Donate?
//           </h3>
//           <ul className="list-disc ml-5 mt-1 space-y-1">
//             <li><strong>Check-in:</strong> Fill out a brief health questionnaire</li>
//             <li><strong>Mini Checkup:</strong> We check your pulse, blood pressure, temperature, and hemoglobin</li>
//             <li><strong>Donation:</strong> 500ml of blood (about one pint)</li>
//             <li><strong>Recovery:</strong> Enjoy juice and snacks</li>
//             <li><strong>Total time:</strong> 40-50 minutes</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       icon: <FaNotesMedical className="text-red-600" />,
//       title: 'Blood Components and Their Uses',
//       content: (
//         <>
//           <h3 className="font-semibold flex items-center gap-2 text-gray-800">
//             <MdBloodtype /> What Happens to My Blood?
//           </h3>
//           <ul className="list-disc ml-5 mt-1 space-y-1">
//             <li>Your blood is tested for infections</li>
//             <li>It's separated into components (red cells, platelets, plasma)</li>
//             <li>Sent to local hospitals and trauma centers</li>
//           </ul>
          
//           <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
//             <FaChartBar /> Component Uses:
//           </h3>
//           <ul className="list-disc ml-5 mt-1 space-y-1">
//             <li><strong>Red Cells:</strong> Restore blood loss from surgery or trauma</li>
//             <li><strong>Platelets:</strong> Help cancer patients and control bleeding</li>
//             <li><strong>Plasma:</strong> Treat burn victims and help stop bleeding</li>
//             <li><strong>Cryoprecipitate:</strong> Used for clotting factor deficiencies</li>
//           </ul>
          
//           <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
//             <FaCalendarAlt /> Donation Frequency:
//           </h3>
//           <ul className="list-disc ml-5 mt-1 space-y-1">
//             <li><strong>Whole blood:</strong> Every 8 weeks</li>
//             <li><strong>Platelets:</strong> Every 7 days (up to 24 times/year)</li>
//             <li><strong>Plasma:</strong> Every 28 days</li>
//             <li><strong>Double red cells:</strong> Every 16 weeks</li>
//           </ul>
//         </>
//       ),
//     },
//     {
//       icon: <MdOutlineVolunteerActivism className="text-red-600" />,
//       title: 'Hosting a Blood Drive',
//       content: (
//         <>
//           <h3 className="font-semibold flex items-center gap-2 text-gray-800">
//             <FaRegHandshake /> Why Host a Blood Drive?
//           </h3>
//           <p>One person can help save hundreds of lives by hosting a blood drive. It's a rewarding experience.</p>
          
//           <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
//             <FaClipboardCheck /> Key Responsibilities:
//           </h3>
//           <ul className="list-disc ml-5 mt-1 space-y-1">
//             <li>Provide a suitable location with adequate space</li>
//             <li>Publicize the blood drive in your community</li>
//             <li>Organize a recruitment committee</li>
//             <li>Schedule donor appointments</li>
//             <li>Follow up with thank you messages</li>
//           </ul>
          
//           <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
//             <FaCalendarAlt /> Blood Drive Process:
//           </h3>
//           <p><strong>Before:</strong> Coordinate with our team, choose date/location, recruit volunteers and donors</p>
//           <p><strong>Day of:</strong> Arrive early, stay available, manage appointments</p>
//           <p><strong>After:</strong> Receive collection report, celebrate success, provide feedback</p>
//         </>
//       ),
//     },
//     {
//       icon: <MdLocalHospital className="text-red-600" />,
//       title: 'Blood Science and Functions',
//       content: (
//         <>
//           <h3 className="font-semibold flex items-center gap-2 text-gray-800">
//             <FaHeart /> Functions of Blood:
//           </h3>
//           <ul className="list-disc ml-5 mt-1 space-y-1">
//             <li>Transports oxygen and nutrients to the lungs and tissues</li>
//             <li>Forms clots to prevent excess blood loss</li>
//             <li>Carries waste products to kidneys and liver</li>
//             <li>Fights infections through white blood cells</li>
//             <li>Regulates body temperature</li>
//             <li>Transports hormones and chemical messengers</li>
//           </ul>
          
//           <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
//             <FaChartBar /> Complete Blood Count (CBC):
//           </h3>
//           <p>A CBC test provides important information about:</p>
//           <ul className="list-disc ml-5 mt-1 space-y-1">
//             <li>Red blood cells (count, hemoglobin, hematocrit)</li>
//             <li>White blood cells (count and differential)</li>
//             <li>Platelets (count)</li>
//             <li>Can help diagnose anemia, infections, and other disorders</li>
//           </ul>
//         </>
//       ),
//     }
//   ];
  
//   const bloodTypes = [
//     ['O-', 'Universal donor, can donate to all types.'],
//     ['O+', 'Most common, can donate to positive types.'],
//     ['A-', 'Can donate to A-, A+, AB-, AB+.'],
//     ['A+', 'Second most common, to A+, AB+.'],
//     ['B-', 'Rare, can donate to B-, B+, AB-, AB+.'],
//     ['B+', 'Can donate to B+, AB+.'],
//     ['AB-', 'Universal plasma donor.'],
//     ['AB+', 'Universal recipient.'],
//     ['A2', 'Subtype of A, slightly different antigens.'],
//     ['A2B', 'Rare AB subtype with unique properties.'],
//   ];
  
//   const compatibility = [
//     ['O-', 'All types', 'O-'],
//     ['O+', 'O+, A+, B+, AB+', 'O-, O+'],
//     ['A-', 'A-, A+, AB-, AB+', 'A-, O-'],
//     ['A+', 'A+, AB+', 'A-, A+, O-, O+'],
//     ['B-', 'B-, B+, AB-, AB+', 'B-, O-'],
//     ['B+', 'B+, AB+', 'B-, B+, O-, O+'],
//     ['AB-', 'AB-, AB+', 'AB-, A-, B-, O-'],
//     ['AB+', 'AB+', 'All types'],
//   ];

//   const bloodComponents = [
//     ['Plasma', 'Liquid portion (55% of blood), carries cells, nutrients, hormones, proteins', 'Treats burns, clotting disorders, immune deficiencies'],
//     ['Red Blood Cells', 'Carry oxygen, contain hemoglobin (40-45% of blood)', 'Treats anemia, blood loss, surgery patients'],
//     ['Platelets', 'Small cell fragments that help clotting (1% of blood)', 'Helps cancer patients, controls bleeding'],
//     ['White Blood Cells', 'Fight infection (1% of blood)', 'Rarely transfused, used for severe infections'],
//     ['Cryoprecipitate', 'Rich in clotting factors from plasma', 'Treats hemophilia, fibrinogen deficiencies']
//   ];
  
//   const Page = () => {
//     return (
//       <>
//         <HeaderNavigation navigation={navigation} />
//         <main className="px-4 md:px-12 py-12 bg-gray-50 text-gray-800 font-sans">
//           <div className="max-w-6xl mx-auto">
//             <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-10">
//               🩸 Blood Facts That Matter
//             </h1>
  
//             <div className="space-y-12">
//               {factsSections.map(({ icon, title, content }, idx) => (
//                 <section
//                   key={idx}
//                   className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200"
//                 >
//                   <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-2">
//                     {icon} {title}
//                   </h2>
//                   <div className="text-gray-700 text-base">{content}</div>
//                 </section>
//               ))}
  
//               {/* Blood Types Table */}
//               <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
//                 <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-4">
//                   <FaChartBar /> 10 Main Blood Types
//                 </h2>
//                 <p>In addition to the 8 main blood types, subtypes like A2 and A2B exist.</p>
//                 <div className="overflow-x-auto mt-4">
//                   <table className="w-full table-auto border border-gray-300 text-sm">
//                     <thead className="bg-red-100 text-left">
//                       <tr>
//                         <th className="border px-4 py-2">Blood Type</th>
//                         <th className="border px-4 py-2">Description</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {bloodTypes.map(([type, desc], i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="border px-4 py-2 font-semibold">{type}</td>
//                           <td className="border px-4 py-2">{desc}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </section>
  
//               {/* Compatibility Table */}
//               <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
//                 <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-4">
//                   <MdLocalHospital /> Blood Compatibility Chart
//                 </h2>
//                 <div className="overflow-x-auto mt-4">
//                   <table className="w-full table-auto border border-gray-300 text-sm">
//                     <thead className="bg-red-100 text-left">
//                       <tr>
//                         <th className="border px-4 py-2">Blood Type</th>
//                         <th className="border px-4 py-2">Can Donate To</th>
//                         <th className="border px-4 py-2">Can Receive From</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {compatibility.map(([type, donateTo, receiveFrom], i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="border px-4 py-2 font-semibold">{type}</td>
//                           <td className="border px-4 py-2">{donateTo}</td>
//                           <td className="border px-4 py-2">{receiveFrom}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </section>

//               {/* Blood Components Table */}
//               <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
//                 <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-4">
//                   <FaChartBar /> Blood Components and Their Uses
//                 </h2>
//                 <div className="overflow-x-auto mt-4">
//                   <table className="w-full table-auto border border-gray-300 text-sm">
//                     <thead className="bg-red-100 text-left">
//                       <tr>
//                         <th className="border px-4 py-2">Component</th>
//                         <th className="border px-4 py-2">Description</th>
//                         <th className="border px-4 py-2">Medical Uses</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {bloodComponents.map(([component, desc, uses], i) => (
//                         <tr key={i} className="hover:bg-gray-50">
//                           <td className="border px-4 py-2 font-semibold">{component}</td>
//                           <td className="border px-4 py-2">{desc}</td>
//                           <td className="border px-4 py-2">{uses}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </section>
//             </div>
//           </div>
//         </main>
//         <Footer />
//       </>
//     );
//   };
  
//   export default Page;






'use client';
import {
    FaChartBar,
    FaHeart,
    FaNotesMedical,
    FaSyringe,
    FaTint,
    FaUsers,
    FaClipboardCheck,
    FaCalendarAlt,
    FaCookieBite,
    FaRegHandshake
  } from 'react-icons/fa';
  import { MdBloodtype, MdLocalHospital, MdOutlineVolunteerActivism } from 'react-icons/md';
  import Footer from '../component/Footer';
  import HeaderNavigation from '../component/HeaderNavigation';
  
  const navigation = [
    { name: 'Home', href: '/', current: false},
    { name: 'Who We Are', href: '/story', current :false},
    { name: 'Blood Facts', href: '/facts', current: true },
    { name: 'Can I donate', href: '/donate', current: false },
    { name: 'FAQs' ,href:'/faq',current :false},
    {name: 'Join Us', href: '/join', current: false}
  ];
  
  const factsSections = [
    {
      icon: <FaTint className="text-red-600" />,
      title: 'Why Donate Blood?',
      content: (
        <>
          <p>
            Because one donation can save multiple lives and one day, it could be yours. Every drop helps accident victims, surgery patients, cancer fighters, and more. 100% of our local blood supply comes from volunteers. No substitutes. Just people like you.
          </p>
          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaUsers /> Who Can Donate?
          </h3>
          <p>You&apos;re eligible to give blood if you:</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Are 18 years or older</li>
            <li>Weigh at least 55 kg</li>
            <li>Are in good general health</li>
            <li>Have hemoglobin level of at least 12.5 g/dL</li>
            <li>Have not donated blood in the last 3 months</li>
          </ul>
        </>
      ),
    },
    {
      icon: <FaHeart className="text-red-600" />,
      title: 'The Donation Experience',
      content: (
        <>
          <h3 className="font-semibold flex items-center gap-2 text-gray-800">
            <FaSyringe /> Does It Hurt to Give Blood?
          </h3>
          <p>Most donors feel only a brief pinch when the needle goes in. The entire blood draw typically takes less than 10 minutes.</p>
          
          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaClipboardCheck /> How Should I Prepare?
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Get a good night&apos;s sleep</li>
            <li>Eat a healthy meal</li>
            <li>Stay hydrated (water is best)</li>
            <li>Avoid caffeine and alcohol</li>
            <li>Bring your ID and donor card if you have one</li>
          </ul>
          
          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaCalendarAlt /> What Happens When I Donate?
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li><strong>Check-in:</strong> Fill out a brief health questionnaire</li>
            <li><strong>Mini Checkup:</strong> We check your pulse, blood pressure, temperature, and hemoglobin</li>
            <li><strong>Donation:</strong> 500ml of blood (about one pint)</li>
            <li><strong>Recovery:</strong> Enjoy juice and snacks</li>
            <li><strong>Total time:</strong> 40-50 minutes</li>
          </ul>

          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaNotesMedical /> Can I Donate if I&apos;m on Medication?
          </h3>
          <p>In most cases, yes. Many common medications won&apos;t prevent you from donating, but it depends. A donor specialist will review your health history confidentially and let you know for sure.</p>
        </>
      ),
    },
    {
      icon: <FaNotesMedical className="text-red-600" />,
      title: 'Blood Components and Their Uses',
      content: (
        <>
          <h3 className="font-semibold flex items-center gap-2 text-gray-800">
            <MdBloodtype /> What Happens to My Blood?
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Your blood is tested for infections</li>
            <li>It&apos;s separated into components (red cells, platelets, plasma)</li>
            <li>Sent to local hospitals and trauma centers</li>
          </ul>
          
          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaChartBar /> Component Uses:
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li><strong>Red Cells:</strong> Restore blood loss from surgery or trauma</li>
            <li><strong>Platelets:</strong> Help cancer patients and control bleeding</li>
            <li><strong>Plasma:</strong> Treat burn victims and help stop bleeding</li>
            <li><strong>Cryoprecipitate:</strong> Used for clotting factor deficiencies</li>
          </ul>
          
          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaCalendarAlt /> Donation Frequency:
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li><strong>Whole blood:</strong> Every 8 weeks</li>
            <li><strong>Platelets:</strong> Every 7 days (up to 24 times/year)</li>
            <li><strong>Plasma:</strong> Every 28 days</li>
            <li><strong>Double red cells:</strong> Every 16 weeks</li>
          </ul>

          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaClipboardCheck /> Don&apos;t Know Your Blood Type?
          </h3>
          <p>No problem - you don&apos;t need to. After your first donation, we&apos;ll send you a donor card with your blood type.</p>
        </>
      ),
    },
    {
      icon: <MdOutlineVolunteerActivism className="text-red-600" />,
      title: 'Hosting a Blood Drive',
      content: (
        <>
          <h3 className="font-semibold flex items-center gap-2 text-gray-800">
            <FaRegHandshake /> Why Host a Blood Drive?
          </h3>
          <p>One person can help save hundreds of lives by hosting a blood drive. It&apos;s a rewarding experience.</p>
          
          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaClipboardCheck /> Key Responsibilities:
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Provide a suitable location with adequate space</li>
            <li>Publicize the blood drive in your community</li>
            <li>Organize a recruitment committee</li>
            <li>Schedule donor appointments</li>
            <li>Follow up with thank you messages</li>
          </ul>
          
          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaCalendarAlt /> Blood Drive Process:
          </h3>
          <p><strong>Before:</strong> Coordinate with our team, choose date/location, recruit volunteers and donors</p>
          <p><strong>Day of:</strong> Arrive early, stay available, manage appointments</p>
          <p><strong>After:</strong> Receive collection report, celebrate success, provide feedback</p>

          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaUsers /> What the Host Provides:
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li><strong>Location:</strong> A large, open room with enough space to ensure donor privacy</li>
            <li><strong>Volunteers:</strong> Individuals to assist with recruiting and scheduling</li>
            <li><strong>Donors:</strong> Responsible for recruiting and scheduling donors</li>
          </ul>
        </>
      ),
    },
    {
      icon: <MdLocalHospital className="text-red-600" />,
      title: 'Blood Science and Functions',
      content: (
        <>
          <h3 className="font-semibold flex items-center gap-2 text-gray-800">
            <FaHeart /> Functions of Blood:
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Transports oxygen and nutrients to the lungs and tissues</li>
            <li>Forms clots to prevent excess blood loss</li>
            <li>Carries waste products to kidneys and liver</li>
            <li>Fights infections through white blood cells</li>
            <li>Regulates body temperature</li>
            <li>Transports hormones and chemical messengers</li>
          </ul>
          
          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaChartBar /> Complete Blood Count (CBC):
          </h3>
          <p>A CBC test provides important information about:</p>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Red blood cells (count, hemoglobin, hematocrit)</li>
            <li>White blood cells (count and differential)</li>
            <li>Platelets (count)</li>
            <li>Can help diagnose anemia, infections, and other disorders</li>
          </ul>

          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaNotesMedical /> Where Do Blood Cells Come From?
          </h3>
          <p>Blood cells develop from hematopoietic stem cells and are formed in the bone marrow through hematopoiesis. These stem cells can differentiate into red blood cells, white blood cells, and platelets. They circulate in the blood and bone marrow throughout life.</p>
        </>
      ),
    },
    {
      icon: <FaCookieBite className="text-red-600" />,
      title: 'After Donation Care',
      content: (
        <>
          <h3 className="font-semibold flex items-center gap-2 text-gray-800">
            <FaHeart /> Post-Donation Tips:
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Drink extra fluids for the next 24-48 hours</li>
            <li>Avoid strenuous physical activity for 5 hours</li>
            <li>Keep the bandage on for several hours</li>
            <li>Eat iron-rich foods to help replenish your supply</li>
            <li>If you feel lightheaded, lie down with feet elevated</li>
          </ul>
          
          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaClipboardCheck /> When to Contact Us:
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>If you experience dizziness that persists</li>
            <li>Notice bleeding from the donation site</li>
            <li>Develop signs of infection (redness, swelling)</li>
            <li>Remember any health information you forgot to mention</li>
          </ul>

          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaRegHandshake /> Still Have Questions?
          </h3>
          <p>We&apos;re here to help. Speak with one of our donor specialists or visit www.cureplusbloodbank.com for more information.</p>
        </>
      ),
    }
  ];
  
  const bloodTypes = [
    ['O-', 'Universal donor, can donate to all types.'],
    ['O+', 'Most common, can donate to positive types.'],
    ['A-', 'Can donate to A-, A+, AB-, AB+.'],
    ['A+', 'Second most common, to A+, AB+.'],
    ['B-', 'Rare, can donate to B-, B+, AB-, AB+.'],
    ['B+', 'Can donate to B+, AB+.'],
    ['AB-', 'Universal plasma donor.'],
    ['AB+', 'Universal recipient.'],
    ['A2', 'Subtype of A, slightly different antigens.'],
    ['A2B', 'Rare AB subtype with unique properties.'],
  ];
  
  const compatibility = [
    ['O-', 'All types', 'O-'],
    ['O+', 'O+, A+, B+, AB+', 'O-, O+'],
    ['A-', 'A-, A+, AB-, AB+', 'A-, O-'],
    ['A+', 'A+, AB+', 'A-, A+, O-, O+'],
    ['B-', 'B-, B+, AB-, AB+', 'B-, O-'],
    ['B+', 'B+, AB+', 'B-, B+, O-, O+'],
    ['AB-', 'AB-, AB+', 'AB-, A-, B-, O-'],
    ['AB+', 'AB+', 'All types'],
  ];

  const bloodComponents = [
    ['Plasma', 'Liquid portion (55% of blood), carries cells, nutrients, hormones, proteins', 'Treats burns, clotting disorders, immune deficiencies'],
    ['Red Blood Cells', 'Carry oxygen, contain hemoglobin (40-45% of blood)', 'Treats anemia, blood loss, surgery patients'],
    ['Platelets', 'Small cell fragments that help clotting (1% of blood)', 'Helps cancer patients, controls bleeding'],
    ['White Blood Cells', 'Fight infection (1% of blood)', 'Rarely transfused, used for severe infections'],
    ['Cryoprecipitate', 'Rich in clotting factors from plasma', 'Treats hemophilia, fibrinogen deficiencies']
  ];

  const bloodFacts = [
    ['Average adult blood volume', '10-11 pints (4.7-5.5 liters)'],
    ['Amount donated', '1 pint (500ml) per donation'],
    ['Time to replace pint', '24-48 hours for fluids, 4-6 weeks for red cells'],
    ['Blood cells per drop', 'About 5 million red cells, 7,000-25,000 white cells, 150,000-400,000 platelets'],
    ['Lifespan of red cells', '120 days'],
    ['Blood speed in arteries', 'About 1 foot per second'],
    ['Total blood vessels', 'About 60,000 miles worth in adult body']
  ];
  
  const Page = () => {
    return (
      <>
        <HeaderNavigation navigation={navigation} />
        <main className="px-4 md:px-12 py-12 bg-gray-50 text-gray-800 font-sans">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-red-600 mb-10">
              🩸 Blood Facts That Matter
            </h1>
  
            <div className="space-y-12">
              {factsSections.map(({ icon, title, content }, idx) => (
                <section
                  key={idx}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200"
                >
                  <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-2">
                    {icon} {title}
                  </h2>
                  <div className="text-gray-700 text-base">{content}</div>
                </section>
              ))}
  
              {/* Blood Types Table */}
              <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-4">
                  <FaChartBar /> 10 Main Blood Types
                </h2>
                <p>In addition to the 8 main blood types, subtypes like A2 and A2B exist.</p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full table-auto border border-gray-300 text-sm">
                    <thead className="bg-red-100 text-left">
                      <tr>
                        <th className="border px-4 py-2">Blood Type</th>
                        <th className="border px-4 py-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bloodTypes.map(([type, desc], i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="border px-4 py-2 font-semibold">{type}</td>
                          <td className="border px-4 py-2">{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
  
              {/* Compatibility Table */}
              <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-4">
                  <MdLocalHospital /> Blood Compatibility Chart
                </h2>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full table-auto border border-gray-300 text-sm">
                    <thead className="bg-red-100 text-left">
                      <tr>
                        <th className="border px-4 py-2">Blood Type</th>
                        <th className="border px-4 py-2">Can Donate To</th>
                        <th className="border px-4 py-2">Can Receive From</th>
                      </tr>
                    </thead>
                    <tbody>
                      {compatibility.map(([type, donateTo, receiveFrom], i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="border px-4 py-2 font-semibold">{type}</td>
                          <td className="border px-4 py-2">{donateTo}</td>
                          <td className="border px-4 py-2">{receiveFrom}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Blood Components Table */}
              <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-4">
                  <FaChartBar /> Blood Components and Their Uses
                </h2>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full table-auto border border-gray-300 text-sm">
                    <thead className="bg-red-100 text-left">
                      <tr>
                        <th className="border px-4 py-2">Component</th>
                        <th className="border px-4 py-2">Description</th>
                        <th className="border px-4 py-2">Medical Uses</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bloodComponents.map(([component, desc, uses], i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="border px-4 py-2 font-semibold">{component}</td>
                          <td className="border px-4 py-2">{desc}</td>
                          <td className="border px-4 py-2">{uses}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Blood Facts Table */}
              <section className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold text-red-500 flex items-center gap-2 mb-4">
                  <FaHeart /> Amazing Blood Facts
                </h2>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full table-auto border border-gray-300 text-sm">
                    <thead className="bg-red-100 text-left">
                      <tr>
                        <th className="border px-4 py-2">Fact</th>
                        <th className="border px-4 py-2">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bloodFacts.map(([fact, detail], i) => (
                        <tr key={i} className="hover:bg-gray-50">
                          <td className="border px-4 py-2 font-semibold">{fact}</td>
                          <td className="border px-4 py-2">{detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  };
  
  export default Page;