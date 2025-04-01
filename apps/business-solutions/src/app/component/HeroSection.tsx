// 'use client';

// import { useEffect, useState } from "react";
// import { FaArrowDown } from "react-icons/fa";
// import { MdBusiness, MdHealthAndSafety, MdSecurity } from "react-icons/md";

// const HeroSection = () => {
//   const words = ["Technology", "Innovation", "Excellence"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative bg-white text-gray-900 py-28 px-6 my-10 sm:py-32 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Hero Title */}
//         <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
//           Transforming Industries with <span className="text-indigo-600">{words[index]}</span>
//         </h1>

//         {/* Hero Description */}
//         <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
//           Sudhanand Business Solutions (SBPL) is revolutionizing industries with cutting-edge IT, 
//           healthcare, insurance, and cybersecurity solutions. Our mission is to drive innovation 
//           and efficiency through AI, automation, and data-driven strategies.
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-10 flex justify-center gap-6">
//           <a
//             href="#services"
//             className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md 
//                       hover:bg-indigo-700 transition duration-300 ease-in-out flex items-center gap-2"
//           >
//             <MdBusiness /> Explore Our Solutions
//           </a>
//           {/* <a
//             href="#contact"
//             className="px-6 py-3 text-lg font-semibold text-indigo-600 border border-indigo-600 rounded-lg 
//                       hover:bg-indigo-600 hover:text-white transition duration-300 ease-in-out flex items-center gap-2"
//           >
//             <MdHealthAndSafety /> Get in Touch
//           </a> */}
//         </div>

//         {/* Services Overview */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
//           <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
//             <MdBusiness className="text-indigo-600 text-4xl" />
//             <div>
//               <h3 className="text-xl font-semibold">IT & ITES</h3>
//               <p className="text-gray-700">Innovative software and AI solutions for businesses.</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
//             <MdHealthAndSafety className="text-green-600 text-4xl" />
//             <div>
//               <h3 className="text-xl font-semibold">Healthcare</h3>
//               <p className="text-gray-700">Affordable healthcare solutions with cutting-edge technology.</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
//             <MdSecurity className="text-red-600 text-4xl" />
//             <div>
//               <h3 className="text-xl font-semibold">Cybersecurity</h3>
//               <p className="text-gray-700">Protecting businesses with ethical hacking and data security.</p>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Down Indicator */}
//         <div className="mt-14 flex flex-col items-center">
//           <span className="text-gray-600 text-sm">Scroll Down</span>
//           <FaArrowDown className="text-gray-600 text-2xl mt-2 animate-bounce" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



'use client'
import { useEffect, useState } from "react";
import { MdBusiness, MdHealthAndSafety, MdSecurity } from "react-icons/md";

const HeroSection = () => {
  const words = ["Technology", "Innovation", "Excellence"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">

      <main>
        <div className="relative isolate">
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
                  <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 sm:leading-[4.5rem]">
                    Transforming Industries with{" "}
                    <span className="text-orange-600">{words[index]}</span>
                  </h1>

                  <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                    Sudhanand Business Solutions (SBPL) is revolutionizing industries with cutting-edge IT,
                    healthcare, insurance, and cybersecurity solutions. Our mission is to drive innovation           and efficiency through AI, automation, and data-driven strategies.        </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
                      Live demo <span aria-hidden="true">→</span>
                    </a> */}
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        alt=""
                        src="1.jpeg"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt=""
                        src="2.jpeg"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="3.jpeg"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt=""
                        src="4.jpeg"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg h-40"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt=""
                        src="5.jpeg"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg h-80"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
                <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
                  <MdBusiness className="text-indigo-600 text-4xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">IT & ITES</h3>
                    <p className="text-gray-700">Innovative software and AI solutions for businesses.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
                  <MdHealthAndSafety className="text-green-600 text-4xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Healthcare</h3>
                    <p className="text-gray-700">Affordable healthcare solutions with cutting-edge technology.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
                  <MdSecurity className="text-red-600 text-4xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Cybersecurity</h3>
                    <p className="text-gray-700">Protecting businesses with ethical hacking and data security.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroSection