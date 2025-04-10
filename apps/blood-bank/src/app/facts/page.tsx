import {
    FaChartBar,
    FaHeart,
    FaNotesMedical,
    FaSyringe,
    FaTint,
  } from 'react-icons/fa';
  import { MdBloodtype, MdLocalHospital } from 'react-icons/md';
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
      title: 'Did You Know? The Power of Blood Donation',
      content: (
        <>
          <p>
            Every year, India needs approximately <strong>5 crore units of blood</strong>,
            but only <strong>2.5 crore units</strong> are donated — a huge shortfall.
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Someone needs blood every <strong>2 seconds</strong>.</li>
            <li><strong>38,000+</strong> donations are needed daily.</li>
            <li><strong>30 million+</strong> components transfused annually.</li>
            <li><strong>1 million+</strong> cancer patients need blood regularly.</li>
            <li>Accident victims may require up to <strong>50 units</strong>.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <FaHeart className="text-red-600" />,
      title: 'Key Facts About Blood Donation',
      content: (
        <>
          <p>
            Donated blood helps save lives in surgeries, trauma, cancer treatment, and childbirth.
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>You can donate at blood banks, camps, or mobile vans.</li>
          </ul>
          <h3 className="font-semibold mt-4 flex items-center gap-2 text-gray-800">
            <FaNotesMedical /> Before You Donate:
          </h3>
          <ul className="list-disc ml-5 mt-1 space-y-1">
            <li>Registration takes about 5 minutes.</li>
            <li>Health checks include BP, weight, and hemoglobin levels.</li>
            <li>Your donation history is reviewed.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <FaSyringe className="text-red-600" />,
      title: 'Blood Donation Process',
      content: (
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Completely safe, uses sterile one-time-use needles.</li>
          <li>Steps: Register → Health Check → Donation → Refreshment.</li>
          <li>Takes <strong>&lt;15 minutes</strong> to donate, ~45 mins total.</li>
          <li>Only 1 unit (out of 10 in your body) is taken.</li>
          <li>Red cells: donate every 3 months; Platelets: every 7 days.</li>
          <li>All donated blood is tested for major diseases.</li>
        </ul>
      ),
    },
    {
      icon: <MdBloodtype className="text-red-600" />,
      title: 'Blood and Its Components',
      content: (
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li><strong>RBCs:</strong> Carry oxygen to body tissues.</li>
          <li><strong>WBCs:</strong> Fight infections and immune response.</li>
          <li><strong>Platelets:</strong> Aid in clotting and healing.</li>
          <li><strong>Plasma:</strong> Transports nutrients and hormones.</li>
        </ul>
      ),
    },
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
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  };
  
  export default Page;
  