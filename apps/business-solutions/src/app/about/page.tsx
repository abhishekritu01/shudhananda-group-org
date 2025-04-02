import { FaTrophy, FaShareAlt, FaBookOpen, FaHandsHelping, FaTasks, FaSmile, FaLightbulb, FaBalanceScale, FaUsers, FaSync, FaChartBar, FaHandshake, FaLeaf } from 'react-icons/fa';
import FooterSection from '../component/FooterSection';
import SecondNavBar from '../component/SecondNavBar';
const values = [
  {
    name: 'Be world-class',
    description: 'Deliver world-class solutions that meet high standards of quality and excellence. Strive for the best in everything we do.',
    icon: <FaTrophy className="text-4xl text-blue-600" />
  },
  {
    name: 'Share everything you know',
    description: 'Encourage knowledge sharing within the team. Collaboration and continuous learning help us grow together.',
    icon: <FaShareAlt className="text-4xl text-green-600" />
  },
  {
    name: 'Always learning',
    description: 'Embrace a growth mindset. Stay ahead of industry trends by continuously learning and improving skills.',
    icon: <FaBookOpen className="text-4xl text-purple-600" />
  },
  {
    name: 'Be supportive',
    description: 'Foster a supportive work culture where team members help each other succeed. Teamwork drives collective success.',
    icon: <FaHandsHelping className="text-4xl text-yellow-600" />
  },
  {
    name: 'Take responsibility',
    description: 'Be accountable for actions and decisions. Integrity and commitment to our work ensure long-term success.',
    icon: <FaTasks className="text-4xl text-red-600" />
  },
  {
    name: 'Enjoy downtime',
    description: 'Work-life balance is essential. Taking breaks helps maintain productivity, creativity, and overall well-being.',
    icon: <FaSmile className="text-4xl text-pink-600" />
  },
  {
    name: 'Be innovative',
    description: 'Encourage thinking outside the box. Explore new ideas to drive continuous improvement and transformation.',
    icon: <FaLightbulb className="text-4xl text-orange-600" />
  },
  {
    name: 'Be ethical',
    description: 'Maintain integrity and transparency in all business dealings. Respect and honesty are fundamental values.',
    icon: <FaBalanceScale className="text-4xl text-teal-600" />
  },
  {
    name: 'Be customer-centric',
    description: 'Our clients are our priority. Listen to their needs and tailor solutions to provide maximum satisfaction and value.',
    icon: <FaUsers className="text-4xl text-indigo-600" />
  },
  {
    name: 'Be adaptable',
    description: 'Adaptability is key in a changing world. Be open to new strategies and embrace evolving market demands.',
    icon: <FaSync className="text-4xl text-cyan-600" />
  },
  {
    name: 'Be data-driven',
    description: 'Use data to guide decision-making. Analytics help in making informed, strategic business choices.',
    icon: <FaChartBar className="text-4xl text-gray-600" />
  },
  {
    name: 'Be collaborative',
    description: 'Success comes through strong partnerships. Work closely with clients and colleagues for shared growth.',
    icon: <FaHandshake className="text-4xl text-lime-600" />
  },
  {
    name: 'Be sustainable',
    description: 'Commit to sustainability. Minimize environmental impact while delivering high-value solutions to clients.',
    icon: <FaLeaf className="text-4xl text-green-700" />
  }
];
const stats = [
  { label: 'Years of Excellence', value: '14+' },
  { label: 'Members Served', value: '600,000+' },
  { label: 'Industries Covered', value: '10+' },
  { label: 'Team Strength', value: '100+' },
];
const navItems = [
  { name: "Home", link: "/" },
  { name: "Careers", link: "/careers" },
  { name: "About Us", link: "/about" },
];
const team = [
  {
    name: 'Dr, Arjun Sachidanand',
    role: 'Managing Director',
    imageUrl: '/ArjunSachidanand.jpeg',
   
    
  },
  // More people...
]
const page = () => {
  return (
    <div className="bg-white">
      <SecondNavBar navItems={navItems} />
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
              className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                    Empowering Innovation Across <span className="text-orange-600">Industries</span>
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Founded in 2010 as SAS Poorna Arogya Healthcare, SBPL has evolved into a multi-sector enterprise spanning
                    healthcare, IT, insurance, banking, and more. With a strong foundation in affordable healthcare, we expanded
                    into IT & ITES in 2019 and continue driving innovation from our Mysore headquarters. Today, our ventures include
                    hospitals, pharmaceuticals, hospitality, organic farming, and cutting-edge IT solutions, with a growing team
                    dedicated to excellence.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our <span className="text-orange-600">Mission</span></h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600">
                  At SBPL, our mission is to drive innovation across multiple industries, from healthcare and IT to finance and hospitality.
                  We are committed to delivering cutting-edge solutions that improve lives, foster sustainable growth, and create lasting impact.
                </p>
                <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                  Our journey began in 2010 with a vision to provide affordable healthcare. Over the years, we expanded into IT & ITES,
                  insurance, and various other sectors, continuously evolving to meet the changing needs of our clients. Today, with a
                  dedicated team operating from Mysore, we strive to push boundaries and set new industry standards.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            className="aspect-5/2 w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our <span className="text-orange-600">Values</span></h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              {/* sbpl */}
              SBPL is committed to upholding the highest standards of integrity, transparency, and excellence in all our endeavors.
              We believe in fostering a culture of collaboration, innovation, and continuous learning, empowering our team to deliver exceptional results for our clients and communities.

            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-gray-900">{value.icon}</div>
                  <dt className="font-semibold text-gray-900">{value.name}</dt>
                </div>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>

        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8 my-20">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our <span className="text-orange-600"> Team</span></h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              {/* sbpl */}
              Our team is a diverse group of professionals with expertise in various fields, including healthcare, IT, finance, and hospitality.
              We are united by a common goal: to drive innovation and deliver exceptional solutions that make a positive impact on society.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img alt="" src={person.imageUrl} className="mx-auto size-24 rounded-full" />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm/6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Footer section */}
        <FooterSection />
      </main>
    </div>
  )
}
export default page
