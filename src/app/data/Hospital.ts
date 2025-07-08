  import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaHospitalAlt,
    FaUserMd,
    FaBed,
    FaXRay,
  } from 'react-icons/fa';
  import { IconType } from 'react-icons';


  export interface Hospital {

    slug: string;
    name: string;
    location: string;
    icon: IconType;
    description: string;
    imageUrl: string;
    gallery: string[];
    services: { label: string; icon: IconType }[];
    facilities: { label: string; icon: IconType }[];
    infrastructure: string;
    contact: {
      address: string;
      phone: string;
      email?: string;
      mapIcon: IconType;
      phoneIcon: IconType;

    };
    keywords?: string[];
    meta: {
      title: string;
      description: string;
      robots: string;
      charset: string;
      language: string;
      author: string;
    };
    specialists?: string;
    beds?: string;
    departments?: string;
    icons?: string;
  }

  export const hospitals: Hospital[] = [
    {

      slug: 'cureplus-disha-hospital',
      name: 'CurePlus Disha Hospital – Your Trusted Multi-Speciality Hospital in Mysuru',
      location: 'Mysuru',
      icon: FaHospitalAlt,
      description: `Established in 2014, CurePlus Disha Hospital is a leading NABH-accredited multi-specialty hospital in Mysuru. As the flagship of the CurePlus  Hospitals chain, it offers affordable, accessible, and world-class healthcare. With 40 beds and two advanced operation theatres, the hospital performs 80 to 100 surgeries monthly, serving diverse medical needs with expertise and care.

  The hospital’s modern infrastructure and cutting-edge equipment ensure high standards in patient care. Treating around 70 outpatients daily, it provides expert consultations across specialties, supported by a Medico-Social Welfare Help Desk that ensures a smooth and compassionate healthcare experience.

  Strategically located in the culturally rich city of Mysuru, CurePlus Disha Hospital plays a vital role in improving the region's healthcare. With its focus on excellence, innovation, and community well-being, it has earned the trust of patients and is widely regarded as the best hospital in Mysore.`,
      imageUrl: '/cureplus/cureplus.png',
      gallery: [
        '/cureplus/cureplus1.png',
        '/cureplus/cureplus2.png',
        '/cureplus/cureplus3.png',
        '/cureplus/cureplus4.png',
      ],
      services: [
        { label: 'General Surgery', icon: FaUserMd },
        { label: 'Orthopedics', icon: FaUserMd },
        { label: 'Gynecology', icon: FaUserMd },
        { label: 'Pediatrics', icon: FaUserMd },
        { label: 'Urology', icon: FaUserMd },
        { label: 'ENT', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
        { label: 'Dermatology', icon: FaUserMd },
        { label: 'Neurology', icon: FaUserMd },
        { label: 'Pathology', icon: FaUserMd },
        { label: 'Physiotherapy', icon: FaUserMd },
        { label: 'Emergency Medicine', icon: FaUserMd },
      ],

      facilities: [
        { label: '40+ Beds', icon: FaBed },
        { label: '2 Operation Theatres', icon: FaXRay },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: 'UCG Scanning', icon: FaXRay },
        { label: 'Physiotherapy', icon: FaXRay },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray and USG Scanning', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.',
      contact: {
        address: 'https://maps.app.goo.gl/e5YUVZqDLjf5Ctq2A',
        phone: '+0821-2454798',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: 'Best Multi-Specialty Hospital in Mysuru | CurePlus Disha',
        description:
          'CurePlus Disha Hospital is the best multi-specialty hospital in Mysuru, offering advanced healthcare, expert doctors, and compassionate care under one roof.',
        robots: 'index,follow',
        charset: 'utf-8',
        language: 'English',
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-dharani-hospital',
      name: 'CurePlus Dharani Hospital – The Best Hospital in Chamarajanagara',
      location: 'Santhemarahalli, Yelandur Taluk, Chamarajanagara District',
      icon: FaHospitalAlt,
      description: `Dharani Hospital, established in 2017 in Santhemarahalli, Yelandur Taluk, Chamarajanagara District, was founded to address the region’s long-standing lack of quality healthcare. As part of the CurePlus Disha Hospital and CurePlus  Hospitals chain, this 16-bedded multi-specialty center offers modern, affordable, and accessible medical care to rural communities.

  Serving over 67,500 patients from nearly 90 villages, Dharani Hospital has become a vital healthcare provider in the region. Its strategic location makes it easily accessible to nearby towns such as Chamarajanagar, Kollegal, Hannur, and Gundlupet, reinforcing its role as the best hospital in Yelandur.

  With state-of-the-art infrastructure, skilled medical professionals, and a commitment to compassionate care, Dharani Hospital continuously sets new benchmarks for rural healthcare. It stands as a beacon of hope and progress, ensuring no individual is deprived of essential medical services and helping bridge the healthcare gap in underserved areas.`,
      imageUrl: '/dharni/dharni.png ',
      gallery: [
        '/dharni/dharni1.png',
        '/dharni/dharni2.png',
        '/dharni/dharni3.png',
        '/dharni/dharni4.png',
      ],
      services: [
        { label: 'General Medicine', icon: FaUserMd },
        { label: 'Emergency Care', icon: FaUserMd },
        { label: 'Gynecology', icon: FaUserMd },
        { label: 'Pediatrics', icon: FaUserMd },
      ],
      facilities: [
        { label: '16+ Beds', icon: FaBed },
        { label: 'Multi-Specialty Care', icon: FaHospitalAlt },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray ', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'Equipped with essential diagnostic and treatment facilities to deliver efficient and modern care in a rural setting.',
      contact: {
        address: 'https://maps.app.goo.gl/NLJ7EPcbZGtLmmNb7',
        phone: '+08226-297298',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: " Best Hospital in Chamarajanagara & Yelandur | CurePlus Dharani",
        description:
          " CurePlus Dharani Hospital is the best hospital in Chamarajanagara and Yelandur, providing expert care, advanced facilities, and trusted multi-specialty services.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-kaveri-hospital',
      name: 'CurePlus Kaveri Hospital – Your Trusted Multi-Specialty Hospital in Kushalnagar',
      location: 'Kushalnagar, Somwarpet Taluk, Kodagu District',
      icon: FaHospitalAlt,
      description: `
      Established in 2018, CurePlus Kaveri Hospital in Kushalnagar was launched by the Sudhanand Group as part of the CurePlus  Hospitals chain. Initially a 20-bedded facility, it underwent a major expansion in 2022 and now operates as a 40-bedded NABH-accredited multi-specialty hospital. Equipped with a state-of-the-art operation theater, advanced ICU, audiometry services, and both private and semi-private wards, it stands as the second hub of the hospital group.

  CurePlus Kaveri Hospital is the only NABH-accredited healthcare center in Kushalnagar and is recognized for delivering exceptional, patient-centric care. Its expert medical team, modern infrastructure, and commitment to quality have earned it a reputation as the best hospital in Kushalnagar.

  Strategically located, the hospital is easily accessible to patients from across Kodagu District. By combining advanced technology with compassionate service, CurePlus Kaveri Hospital continues to lead in providing reliable, affordable healthcare to the region.
      `,
      imageUrl: '/kaveri/kaveri1.png',
      gallery: [

        '/kaveri/kaveri2.png',
        '/kaveri/kaveri3.png',
        '/kaveri/kaveri4.png',
        '/kaveri/kaveri5.png',
      ],
      services: [
        { label: 'General Surgery', icon: FaUserMd },
        { label: 'ENT & Audiometry', icon: FaUserMd },
        { label: 'Critical Care', icon: FaUserMd },
        { label: 'Inpatient Care', icon: FaUserMd },
        { label: 'Urology', icon: FaUserMd },
        { label: 'ENT', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
        { label: 'Dermatology', icon: FaUserMd },
        { label: 'Neurology', icon: FaUserMd },
        { label: 'Pathology', icon: FaUserMd },
        { label: 'Physiotherapy', icon: FaUserMd },
        { label: 'Emergency Medicine', icon: FaUserMd },
      ],
      facilities: [
        { label: '40+ Beds', icon: FaBed },
        { label: '2 Operation Theatres', icon: FaXRay },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: 'UCG Scanning', icon: FaXRay },
        { label: 'Physiotherapy', icon: FaXRay },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray and USG Scanning', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },

      ],
      infrastructure:
        'Features modern operation theaters, advanced ICU, and private rooms to meet growing healthcare needs in Kodagu District.',
      contact: {
        address: 'https://maps.app.goo.gl/ANFA2nHdcCUZPN2r6',
        phone: '+08276 298998',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: "Best Multi-Specialty Hospital in Kushalnagar | CurePlus Kaveri",
        description:
          " CurePlus Kaveri Hospital is the best multi-specialty hospital in Kushalnagar, providing quality healthcare with advanced technology and expert medical teams.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-krishna-hospital',
      name: 'CurePlus Krishna Hospital – Best Hospital in Bettadapura',
      location: 'Bettadapura, Piriyapatna Taluk, Mysore District',
      icon: FaHospitalAlt,
      description: `
      CurePlus Krishna Hospital, located in Bettadapura, Piriyapatna Taluk, Mysore District, serves as a beacon of healthcare excellence in rural Karnataka. Established by the Sudhanand Group during the Covid-19 pandemic, this 20-bedded multi-specialty hospital addresses critical medical needs in the region. Known for its advanced allopathic healthcare services, CurePlus Krishna Hospital stands out as the premier healthcare facility in Bettadapura and Piriyapatna Taluk, catering to a population of approximately 2,50,000 across various villages and towns. With a commitment to affordability and quality, the hospital offers modern infrastructure, skilled medical professionals, and comprehensive care ranging from life-saving treatments to preventive services. It remains accessible to residents of nearby areas like Kamplapura, Gorahalli, and Ravandur, ensuring every patient receives compassionate care and effective medical solutions. CurePlus Krishna Hospital continues to uphold its reputation as a trusted healthcare provider, blending compassion with state-of-the-art medical expertise to enhance the well-being of rural communities.
      `,
      imageUrl: '/krishna/krishna1.png',
      gallery: [
        '/krishna/krishna2.png',
        '/krishna/krishna3.png',
        '/krishna/krishna4.png',
        '/krishna/krishna5.png',
      ],
      services: [
        { label: 'Multi-Specialty Care', icon: FaUserMd },
        { label: 'Outpatient & Inpatient Services', icon: FaUserMd },
        { label: 'Preventive Health Checkups', icon: FaUserMd },
        { label: 'Emergency Services', icon: FaUserMd },
      ],
      facilities: [
        { label: '20 Beds', icon: FaBed },
        { label: 'Private Multi-Specialty Facility', icon: FaHospitalAlt },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray ', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'Built during the pandemic with a focus on accessibility and comprehensive medical care for rural populations.',
      contact: {
        address: 'https://maps.app.goo.gl/tHunWhw7754NTR9Q6',
        phone: '+08223-275798',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: "Best Hospital in Bettadapura | CurePlus Krishna Hospital",
        description:
          "CurePlus Krishna Hospital is the best hospital in Bettadapura, offering advanced multi-specialty care. Trusted by families across nearby towns and villages.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-narasegowda-memorial-hospital',
      name: 'CurePlus Narasegowda Memorial Hospital – Best Multi-Specialty Hospital in Chinakurali',
      location: 'Chinakurali, Pandavapura Taluk, Mandya District',
      icon: FaHospitalAlt,
      description: `
      CurePlus Narasegowda Memorial Hospital, established in 2023 by Sudhanand Health Care Solutions Pvt. Ltd., is a 20-bedded multi-specialty Spoke center located in Chinakurali, Pandavapura Taluk, Mandya District. As the only private multi-specialty hospital in the area, it offers round-the-clock, affordable healthcare through both outpatient and inpatient services. The hospital is equipped with a dedicated Emergency Medicine Department, separate male and female wards, a fully functional pathology lab, X-ray diagnostics, physiotherapy, in-house pharmacy, and 24/7 ambulance services. These modern facilities enable the hospital to provide efficient and comprehensive medical care to the local community. Named by Dr. Arjun Sachidanand in memory of his grandfather, Mr. Narasegowda, the hospital stands as a heartfelt tribute and a symbol of quality healthcare. CurePlus Narasegowda Memorial Hospital has quickly earned its reputation as the best hospital in Chinakurali, delivering compassionate, reliable, and accessible healthcare to the region’s residents.
      
      `,
      imageUrl: '/narasegowda/narasaregoda1.png',
      gallery: [
        '/narasegowda/narasaregoda2.png',
        '/narasegowda/narasaregoda3.png',
        '/narasegowda/narasaregoda4.png',
        '/narasegowda/narasaregoda5.png',
      ],
      services: [
        { label: 'Emergency Medicine', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
        { label: 'Orthopedics', icon: FaUserMd },
      ],
      facilities: [
        { label: '20 Beds', icon: FaBed },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: 'Diagnostic X-Ray Services', icon: FaXRay },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray ', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'Equipped with emergency beds, separate male and female wards, an in-house pharmacy, and a pathology lab.',
      contact: {
        address: 'https://maps.app.goo.gl/8BWQfireFUAzaNSC6',
        phone: '+08236-200466',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: "Best Hospital in Chinakurali | CurePlus Narasegowda Hospital",
        description:
          "CurePlus Narasegowda Memorial Hospital is the best multi-specialty hospital in Chinakurali, providing quality care, advanced treatments, and trusted doctors.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-hospital-shanivarasanthe',
      name: ' CurePlus Hospital Shanivarasanthe – Best Hospital in Kodagu & Shanivarasanthe ',
      location: 'Shanivarasanthe, Kodagu District',
      icon: FaHospitalAlt,
      description: `
      CurePlus Shanivarasanthe Hospital, located in the scenic town of Shanivarasanthe in Kodagu, is a leading 20-bedded multi-specialty hospital dedicated to providing exceptional and affordable healthcare. Renowned as the best hospital in Shanivarasanthe and one of the top hospitals in Kodagu, it offers specialized services in orthopedics, gynecology, pediatrics, and general medicine. The hospital features modern infrastructure, including advanced diagnostic tools and well-equipped treatment rooms, ensuring a comfortable and safe environment for all patients. Backed by a team of experienced orthopedic surgeons, gynecologists, pediatricians, and general physicians, CurePlus Shanivarasanthe Hospital delivers personalized, compassionate, and timely care. With its patient-centric approach and commitment to community well-being, the hospital continues to earn trust and recognition across the region. It stands as a reliable healthcare partner, combining medical expertise with a heartfelt dedication to improving lives and enhancing health outcomes for the people of Kodagu.
      `,

      imageUrl: '/shanivarasanthe/shanivarasanthe.png',
      gallery: [
        '/shanivarasanthe/shanivarasanthe2.png',
        '/shanivarasanthe/shanivarasanthe3.png',
        '/shanivarasanthe/shanivarasanthe4.png',
        '/shanivarasanthe/shanivarasanthe1.png',
      ],
      services: [
        { label: 'Orthopedics', icon: FaUserMd },
        { label: 'Gynecology', icon: FaUserMd },
        { label: 'Pediatrics', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
      ],
      facilities: [
        { label: '15+ Beds', icon: FaBed },
        { label: 'Advanced Diagnostic Tools', icon: FaXRay },
        { label: 'Private and Semi-Private Wards', icon: FaHospitalAlt },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray ', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'State-of-the-art medical infrastructure, ensuring personalized and specialized treatments.',
      contact: {
        address: 'https://maps.app.goo.gl/MYikzXmK7RpcV7vV9',
        phone: '+9035193777',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: "Best Hospital in Shanivarasanthe & Kodagu |CurePlus Hospital",
        description:
          "CurePlus Hospital Shanivarasanthe is the best hospital in Kodagu, offering trusted multi-specialty care, modern facilities, and expert medical professionals.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-hospital-ramapura',
      name: 'CurePlus Hospital Ramapura – Best Multi-Specialty Facility in Ramapura',
      location: 'Ramapura, Chamarajanagar',
      icon: FaHospitalAlt,
      description: `CurePlus Ramapura Hospital, located in the heart of Ramapura, Chamarajanagar, is a 20-bedded multi-specialty facility recognized for delivering high-quality, patient-centered healthcare. Known as the best hospital in Ramapura and among the top in Chamarajanagara, it specializes in orthopedics and general medicine, offering expert treatment for bone and joint issues as well as comprehensive primary care. The hospital is equipped with modern diagnostic tools and well-maintained inpatient rooms to ensure comfort, safety, and efficiency in medical service delivery. A dedicated team of experienced orthopedic specialists and general physicians provides compassionate, personalized care tailored to each patient’s unique needs. Committed to community health, CurePlus Ramapura Hospital strives to make advanced and affordable healthcare accessible to all, while building lasting trust through its empathetic approach. With a focus on wellness and recovery, the hospital continues to serve as a reliable healthcare partner for individuals and families across the Chamarajanagar region.`,
      imageUrl: '/rampura/rampura.png',
      gallery: [
        '/rampura/rampura1.png',
        '/rampura/rampura2.png',
        '/rampura/rampura3.png',
        '/rampura/rampura4.png',
      ],
      services: [
        { label: 'Orthopedics', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
      ],
      facilities: [
        { label: '15+ Beds', icon: FaBed },
        { label: 'Well-Equipped Inpatient Rooms', icon: FaHospitalAlt },
      ],
      infrastructure:
        'Equipped with modern medical tools and a dedicated team of expert medical professionals.',
      contact: {
        address: 'https://maps.app.goo.gl/GMn84wQe71EFL3MY7',
        phone: '+08225-272200',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: "Best Hospital in Ramapura | CurePlus Multi-Specialty Care",
        description:
          "CurePlus Hospital Ramapura is the best hospital in Ramapura, offering advanced multi-specialty facilities, expert doctors, and compassionate healthcare services.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-hospital-terakanambi',
      name: 'CurePlus Hospital Terakanambi – Best Hospital in Terakanambi & Chamarajanagar',
      location: 'Terakanambi, Chamarajanagar',
      icon: FaHospitalAlt,
      description: `
      CurePlus Terakanambi Hospital, nestled in the peaceful town of Terakanambi, Chamarajanagar, is dedicated to providing high-quality, accessible healthcare services. Recognized for its reliability and patient-centered approach, the hospital specializes in orthopedics and general medicine, addressing a wide range of health conditions—from injuries and joint issues to chronic illnesses and preventive care. With a modern 20-bed facility, CurePlus Terakanambi Hospital ensures a safe, comfortable, and healing environment for patients. Equipped with advanced diagnostic and treatment tools, the hospital delivers efficient, timely, and effective care. Its team of experienced orthopedic specialists and general physicians is known for compassionate, personalized treatment that prioritizes patient well-being at every step. Conveniently located and easily accessible, the hospital serves not just Terakanambi but also the surrounding communities in Chamarajanagar. Committed to affordability and excellence, CurePlus Terakanambi Hospital continues to be a trusted healthcare destination, combining modern medical expertise with a caring, community-focused approach.
      `,
      imageUrl: '/terakanamb/terakanamb.png',
      gallery: [
        '/terakanamb/terakanamb1.png',
        '/terakanamb/terakanamb2.png',
        '/terakanamb/terakanamb3.png',
        '/terakanamb/terakanamb4.png',
      ],
      services: [
        { label: 'Orthopedics', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
      ],
      facilities: [
        { label: '15+ Beds', icon: FaBed },
        { label: 'Modern Diagnostic and Treatment Facilities', icon: FaXRay },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray ', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'Equipped with modern diagnostic and treatment facilities to ensure effective patient care.',
      contact: {
        address: 'https://maps.app.goo.gl/zynYXQqALWVGHCFR6',
        phone: '+08229-222044',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: "Best Hospital in Terakanambi & Chamarajanagar | CurePlus",
        description:
          "CurePlus Hospital Terakanambi is the best hospital in Terakanambi and Chamarajanagar, delivering trusted multi-specialty care with expert doctors and modern facilities.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-hospital-bherya',
      name: 'CurePlus Hospital Bherya – Best in Orthopedics & General Medicine',
      location: 'Bherya, Saligrama Taluk, Mysore',
      icon: FaHospitalAlt,
      description: `CurePlus Bherya Hospital, located in Bherya, Saligrama Taluk, Mysore, is a trusted center for quality healthcare in the region. As a 20-bedded facility, the hospital is dedicated to offering personalized, affordable, and effective medical services to the local community. Specializing in orthopedics and general medicine, CurePlus Bherya Hospital addresses a wide range of health concerns—from bone and joint issues to comprehensive general medical care. The hospital is equipped with modern infrastructure and advanced diagnostic tools, ensuring accurate, timely, and efficient treatment in a comfortable and well-maintained environment. With a dedicated team of experienced orthopedic specialists and general physicians, the hospital follows a compassionate, patient-first approach, focusing on personalized care and optimal outcomes. Easily accessible to residents across Saligrama Taluk, CurePlus Bherya Hospital continues to set the standard for healthcare in the area. It stands as a beacon of hope and wellness, delivering reliable, community-focused care to everyone it serves.`,
      imageUrl: '/bheraya/bheraya.png',
      gallery: [
        '/bheraya/bherya1.png',
        '/bheraya/bherya2.png',
        '/bheraya/bherya3.png',
        '/bheraya/bherya4.png',
      ],
      services: [
        { label: 'Orthopedics', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
      ],
      facilities: [
        { label: '15+ Beds', icon: FaBed },
        { label: 'Advanced Medical Infrastructure', icon: FaXRay },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray ', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'Designed to provide high-quality medical care with modern infrastructure and expert medical professionals.',
      contact: {
        address: 'https://maps.app.goo.gl/JEtVdXkhLQwNmMz19',
        phone: '+08223-200604',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: "Best Hospital in Bherya | Orthopedics & General Medicine",
        description:
          "CurePlus Hospital Bherya is the best hospital in Bherya, known for expert care in orthopedics and general medicine with trusted doctors and modern facilities.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-hospital-t-narasipura',
      name: 'CurePlus Hospital T. Narasipura – Best Hospital in T. Narasipura',
      location: 'T Narasipura, Mysore',
      icon: FaHospitalAlt,
      description: `CurePlus T Narasipura Hospital, located in T Narasipura, Mysore, is dedicated to delivering accessible, affordable, and high-quality healthcare to the local community. Specializing in orthopedics and general medicine, the hospital provides expert treatment for bone and joint conditions, routine consultations, and care for various medical concerns. With a 20-bed facility equipped with advanced medical technology, patients receive timely and efficient care in a comfortable environment. A unique feature of the hospital is its provision of generic medicines, ensuring that essential treatments remain cost-effective for all. The compassionate team of orthopedic specialists, general practitioners, and support staff is committed to offering personalized and patient-centered services with empathy and integrity. Conveniently located in the heart of T Narasipura, the hospital is easily accessible, positioning itself as a trusted healthcare provider in the region. CurePlus T Narasipura Hospital continues to uphold its mission of being a reliable, community-focused hub for comprehensive medical care.`,
      imageUrl: '/Narasipura/Narasipura.png',
      gallery: [
        '/Narasipura/Narasipura1.png',
        '/Narasipura/Narasipura2.png',
        '/Narasipura/Narasipura3.png',
        '/Narasipura/Narasipura4.png',
      ],
      services: [
        { label: 'Orthopedics', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
      ],
      facilities: [
        { label: '20 Beds', icon: FaBed },
        { label: 'Advanced Medical Facilities', icon: FaXRay },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray ', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'Equipped with modern medical technology and infrastructure to deliver top-notch care.',
      contact: {
        address: 'https://maps.app.goo.gl/AcHB5SysGmJi11YJ7',
        phone: '+08227-200940',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: " Best Hospital in T. Narasipura | CurePlus Hospital",
        description:
          "CurePlus Hospital T. Narasipura offers advanced healthcare services and is recognized as the best hospital in T. Narasipura for quality care and trusted treatment.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-hospital-handpost',
      name: 'CurePlus Hospital Hand Post – Best Hospital in Handpost & H.D. Kote',
      location: 'H.D. Kote, Mysore',
      icon: FaHospitalAlt,
      description: `CurePlus Hand Post Hospital, located in H.D. Kote, Mysore, is dedicated to providing high-quality and accessible healthcare to the local community. With a focus on orthopedics and general medicine, the hospital offers expert care for a range of health conditions—from bone and joint disorders to general medical issues. Our 20-bed facility is equipped with modern infrastructure to ensure efficient and comfortable treatment for every patient. Committed to affordability, the hospital also provides a range of generic medicines, ensuring cost-effective access to essential treatments. The compassionate team of orthopedic specialists, general physicians, and support staff is devoted to offering personalized, patient-first care at every stage—from consultation to recovery. Conveniently located in Hand Post, H.D. Kote, CurePlus Hospital is a trusted healthcare destination for residents of Mysore and nearby areas. We strive to deliver timely, effective, and empathetic care that prioritizes the well-being of every individual we serve.`,
      imageUrl: '/handPost/handpost1.png',
      gallery: [
        '/handPost/handpost2.png',
        '/handPost/handpost3.png',
        '/handPost/handpost4.png',
        '/handPost/handpost5.png',
      ],
      services: [
        { label: 'Orthopedics', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
      ],
      facilities: [
        { label: '20 Beds', icon: FaBed },
        { label: 'Diagnostic Services', icon: FaXRay },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray ', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'Comprehensive medical expertise with advanced diagnostic and rehabilitation services.',
      contact: {
        address: 'https://maps.app.goo.gl/wjtJez9mw5KxBR8K7',
        phone: '+8228257300',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: "Best Hospital in Handpost & H.D. Kote | CurePlus Hospital",
        description:
          "CurePlus Hospital Hand Post is the best hospital in Handpost and H.D. Kote, offering trusted multi-specialty care with expert doctors and modern medical services.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-hospital-hosur',
      name: 'CurePlus Hospital Hosur – Best Hospital near Saligrama',
      location: 'Saligrama Taluk, Mysore',
      icon: FaHospitalAlt,
      description: `CurePlus Hosur Hospital, located in Saligrama Taluk, Mysore, is committed to providing high-quality, accessible healthcare tailored to the needs of the local community. Specializing in orthopedics and general medicine, our experienced doctors offer expert care for bone and joint issues, as well as comprehensive treatment for common medical conditions. Our 20-bed facility features clean, comfortable inpatient rooms, advanced diagnostic tools, and a dedicated orthopedic rehabilitation unit to support recovery. We also offer a fully stocked onsite pharmacy with both generic and branded medicines, ensuring that treatment remains affordable and within reach. At CurePlus Hosur Hospital, we believe in a patient-first approach, delivering compassionate care that addresses each individual's unique health concerns. Our team of skilled specialists and support staff is devoted to creating a positive, healing environment for every patient. Conveniently located in Hosur, we are proud to serve as a trusted healthcare partner for residents across Saligrama Taluk and beyond.`,
      imageUrl: '/hosur/hosur.png',
      gallery: [
        '/hosur/hosur1.png',
        '/hosur/hosur2.png',
        '/hosur/hosur3.png',
        '/hosur/hosur4.png',
      ],
      services: [
        { label: 'Orthopedics', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
      ],
      facilities: [
        { label: '20 Beds', icon: FaBed },
        { label: 'Modern Medical Facilities', icon: FaXRay },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray ', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'Affordable and accessible healthcare with a focus on patient-centered care.',
      contact: {
        address: 'https://maps.app.goo.gl/MzEWrMsqqTZxuxWG9',
        phone: '+8223283350',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: "Best Hospital in Saligrama | CurePlus Hospital Hosur",
        description:
          "CurePlus Hospital Hosur is the best hospital near Saligrama, delivering quality healthcare with multi-specialty services, expert doctors, and modern facilities.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
    {

      slug: 'cureplus-hospital-halli-mysore',
      name: 'CurePlus Hospital Halli Mysuru – Best Hospital in Halli Mysore ',
      location: 'Halli Mysuru, Mysore',
      icon: FaHospitalAlt,
      description: `CurePlus Halli Mysuru Hospital is committed to delivering high-quality, affordable healthcare to the residents of Halli Mysuru and nearby areas. With a focus on patient-centered care, we offer specialized services in orthopedics and general medicine. Whether you need treatment for bone and joint disorders or general health concerns, our experienced doctors provide accurate diagnoses and effective treatment plans. To ensure affordability, we offer a range of generic medicines, making essential treatments accessible to all. Our 20-bed inpatient facility is clean, comfortable, and equipped to support a smooth recovery. Backed by modern medical infrastructure, we strive to deliver efficient, timely care. At the heart of our hospital is a compassionate team of orthopedic specialists, general physicians, and support staff, dedicated to understanding and addressing each patient's unique needs. Conveniently located in Halli Mysuru, our hospital is easily accessible and ready to serve the community with dependable, personalized healthcare solutions.`,
      imageUrl: '/halli/halli.png',
      gallery: [
        '/halli/halli1.png',
        '/halli/halli2.png',
        '/halli/halli3.png',
        '/halli/halli4.png',
      ],
      services: [
        { label: 'Orthopedics', icon: FaUserMd },
        { label: 'General Medicine', icon: FaUserMd },
      ],
      facilities: [
        { label: '20 Beds', icon: FaBed },
        { label: 'Comprehensive Medical Facilities', icon: FaXRay },
        { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
        { label: '24/7 Ambulance Service', icon: FaHospitalAlt },
        { label: '24/7 Pharmacy Services', icon: FaHospitalAlt },
        { label: 'Expert Care by Qualified Medical Practitioners', icon: FaHospitalAlt },
        { label: 'OPD & IPD Services', icon: FaXRay },
        { label: 'X-Ray ', icon: FaXRay },
        { label: 'Pathology Lab', icon: FaXRay },
      ],
      infrastructure:
        'Designed to provide high-quality medical care with modern infrastructure and expert medical professionals.',
      contact: {
        address: 'https://maps.app.goo.gl/PmQWaFAauoosnHkq6',
        phone: '+08175-273114',
        mapIcon: FaMapMarkerAlt,
        phoneIcon: FaPhoneAlt,
      },
      meta: {
        title: "Best Hospital in Halli Mysore | CurePlus Hospital",
        description:
          " CurePlus Hospital Halli Mysuru is the best hospital in Halli Mysore, offering advanced healthcare services, expert doctors, and reliable multi-specialty care.",
        robots: "index,follow",
        charset: "utf-8",
        language: "English",
        author: 'CurePlus Hospitals',
      },
    },
  ];
