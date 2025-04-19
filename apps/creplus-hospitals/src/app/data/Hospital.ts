// const hospitals = [
//   { id: 1, name: 'Cure Plus Disha Hospital' },
//   { id: 2, name: 'Cure Plus Dharani Hospital' },
//   { id: 3, name: 'Cure Plus Kaveri Hospital' },
//   { id: 4, name: 'Cure Plus Krishna Hospital' },
//   { id: 5, name: 'Cure Plus Narasegowda Memorial Hospital' },
//   { id: 6, name: 'Cure Plus Bherya Hospital' },
//   { id: 7, name: 'Cure Plus Terakanambi Hospital' },
//   { id: 8, name: 'Cure Plus Shanivarasanthe Hospital' },
//   { id: 9, name: 'Cure Plus Ramapura Hospital' },
//   { id: 10, name: 'Cure Plus T. Narasipura Hospital' },
//   { id: 11, name: 'Cure Plus Handpost Hospital' },
//   { id: 12, name: 'Cure Plus Hosur Hospital' },
//   { id: 13, name: 'Cure Plus Halli Mysore Hospital' },
// ];



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
  id: number;
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
    mapIcon: IconType;
    phoneIcon: IconType;
  };
}

export const hospitals: Hospital[] = [
  {
    id: 1,
    name: 'Cure Plus Disha Hospital',
    location: 'Mysuru',
    icon: FaHospitalAlt,
    description: `CurePlus Disha Hospital has been setting benchmarks in quality healthcare since 2014.
A 40-bedded NABH-accredited facility with advanced operation theatres and 70+ OPD patients daily.
Known for world-class care and modern infrastructure.`,
    imageUrl: 'https://example.com/hospital-main.jpg',
    gallery: [
      'https://example.com/gallery1.jpg',
      'https://example.com/gallery2.jpg',
      'https://example.com/gallery3.jpg',
      'https://example.com/gallery4.jpg',
    ],
    services: [
      { label: 'General Surgery', icon: FaUserMd },
      { label: 'Orthopedics', icon: FaUserMd },
      { label: 'Gynecology', icon: FaUserMd },
      { label: 'Pediatrics', icon: FaUserMd },
    ],
    facilities: [
      { label: '40 Beds', icon: FaBed },
      { label: '2 Operation Theatres', icon: FaXRay },
      { label: 'Medico-Social Welfare Desk', icon: FaHospitalAlt },
    ],
    infrastructure:
      'Equipped with cutting-edge medical equipment and a modern facility to support high-volume surgeries and patient care.',
    contact: {
      address: 'Near Heritage Circle, Mysuru, Karnataka, India',
      phone: '+91-9876543210',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 2,
    name: 'CurePlus Dharani Hospital',
    location: 'Santhemarahalli, Yelandur Taluk, Chamarajanagara District',
    icon: FaHospitalAlt,
    description: `Established in 2017, CurePlus Dharani Hospital is a 16-bedded multi-specialty facility in Santhemarahalli, designed to provide modern, affordable healthcare to rural communities in Yelandur Taluk and surrounding areas. Serving over 67,500 patients from 90+ villages, it has become a trusted healthcare provider in Chamarajanagara District.`,
    imageUrl: 'https://example.com/dharani-main.jpg',
    gallery: [
      'https://example.com/dharani-gallery1.jpg',
      'https://example.com/dharani-gallery2.jpg',
      'https://example.com/dharani-gallery3.jpg',
      'https://example.com/dharani-gallery4.jpg',
    ],
    services: [
      { label: 'General Medicine', icon: FaUserMd },
      { label: 'Emergency Care', icon: FaUserMd },
      { label: 'Gynecology', icon: FaUserMd },
      { label: 'Pediatrics', icon: FaUserMd },
    ],
    facilities: [
      { label: '16 Beds', icon: FaBed },
      { label: 'Multi-Specialty Care', icon: FaHospitalAlt },
      { label: 'OPD & IPD Services', icon: FaXRay },
    ],
    infrastructure:
      'Equipped with essential diagnostic and treatment facilities to deliver efficient and modern care in a rural setting.',
    contact: {
      address: 'Santhemarahalli, Yelandur Taluk, Chamarajanagara District, Karnataka, India',
      phone: '+91-9876543211',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 3,
    name: 'CurePlus Kaveri Hospital',
    location: 'Kushalnagar, Somwarpet Taluk, Kodagu District',
    icon: FaHospitalAlt,
    description: `Launched in 2018 and expanded in 2022, CurePlus Kaveri Hospital is a 40-bedded NABH-accredited multi-specialty hospital in Kushalnagar. It serves as a major healthcare hub in Kodagu District, providing advanced surgical care, private wards, ICU, and audiometry services. Trusted as the best hospital in Kushalnagar.`,
    imageUrl: 'https://example.com/kaveri-main.jpg',
    gallery: [
      'https://example.com/kaveri-gallery1.jpg',
      'https://example.com/kaveri-gallery2.jpg',
      'https://example.com/kaveri-gallery3.jpg',
      'https://example.com/kaveri-gallery4.jpg',
    ],
    services: [
      { label: 'General Surgery', icon: FaUserMd },
      { label: 'ENT & Audiometry', icon: FaUserMd },
      { label: 'Critical Care', icon: FaUserMd },
      { label: 'Inpatient Care', icon: FaUserMd },
    ],
    facilities: [
      { label: '40 Beds', icon: FaBed },
      { label: 'ICU & OT', icon: FaXRay },
      { label: 'Private & Semi-Private Wards', icon: FaHospitalAlt },
    ],
    infrastructure:
      'Features modern operation theaters, advanced ICU, and private rooms to meet growing healthcare needs in Kodagu District.',
    contact: {
      address: 'Kushalnagar, Somwarpet Taluk, Kodagu District, Karnataka, India',
      phone: '+91-9876543212',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 4,
    name: 'CurePlus Krishna Hospital',
    location: 'Bettadapura, Piriyapatna Taluk, Mysore District',
    icon: FaHospitalAlt,
    description: `Established during the Covid-19 pandemic, CurePlus Krishna Hospital is a 20-bedded private multi-specialty center in Bettadapura. It is the only such hospital in Piriyapatna Taluk, providing advanced allopathic care to the region’s underserved population. Known as the best hospital in Bettadapura and Piriyapatna Taluk.`,
    imageUrl: 'https://example.com/krishna-main.jpg',
    gallery: [
      'https://example.com/krishna-gallery1.jpg',
      'https://example.com/krishna-gallery2.jpg',
      'https://example.com/krishna-gallery3.jpg',
      'https://example.com/krishna-gallery4.jpg',
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
      { label: 'Covid-19 Response Center', icon: FaXRay },
    ],
    infrastructure:
      'Built during the pandemic with a focus on accessibility and comprehensive medical care for rural populations.',
    contact: {
      address: 'Bettadapura, Piriyapatna Taluk, Mysore District, Karnataka, India',
      phone: '+91-9876543213',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 5,
    name: 'CurePlus Narasegowda Memorial Hospital',
    location: 'Chinakurali, Pandavapura Taluk, Mandya District',
    icon: FaHospitalAlt,
    description: `CurePlus Narasegowda Memorial Hospital, a 20-bedded multi-specialty Spoke center, was established in 2023. As part of Dr. M. D. Sachidananda Murthy Memorial Hospitals, it is the only private multi-specialty hospital in the region, offering 24/7 healthcare services.`,
    imageUrl: 'https://example.com/narasegowda-hospital.jpg',
    gallery: [
      'https://example.com/gallery1.jpg',
      'https://example.com/gallery2.jpg',
      'https://example.com/gallery3.jpg',
      'https://example.com/gallery4.jpg',
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
    ],
    infrastructure:
      'Equipped with emergency beds, separate male and female wards, an in-house pharmacy, and a pathology lab.',
    contact: {
      address: 'Chinakurali, Pandavapura Taluk, Mandya District, India',
      phone: '+91-9876543211',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 6,
    name: 'CurePlus Shanivarasanthe Hospital',
    location: 'Shanivarasanthe, Kodagu District',
    icon: FaHospitalAlt,
    description: `CurePlus Shanivarasanthe Hospital is a trusted healthcare provider in Kodagu, specializing in orthopedics, gynecology, pediatrics, and general medicine. This 20-bedded facility ensures accessible and high-quality care for the local community.`,
    imageUrl: 'https://example.com/shanivarasanthe-hospital.jpg',
    gallery: [
      'https://example.com/gallery1.jpg',
      'https://example.com/gallery2.jpg',
      'https://example.com/gallery3.jpg',
      'https://example.com/gallery4.jpg',
    ],
    services: [
      { label: 'Orthopedics', icon: FaUserMd },
      { label: 'Gynecology', icon: FaUserMd },
      { label: 'Pediatrics', icon: FaUserMd },
      { label: 'General Medicine', icon: FaUserMd },
    ],
    facilities: [
      { label: '20 Beds', icon: FaBed },
      { label: 'Advanced Diagnostic Tools', icon: FaXRay },
      { label: 'Private and Semi-Private Wards', icon: FaHospitalAlt },
    ],
    infrastructure:
      'State-of-the-art medical infrastructure, ensuring personalized and specialized treatments.',
    contact: {
      address: 'Shanivarasanthe, Kodagu District, India',
      phone: '+91-9876543212',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 7,
    name: 'CurePlus Ramapura Hospital',
    location: 'Ramapura, Chamarajanagar',
    icon: FaHospitalAlt,
    description: `CurePlus Ramapura Hospital is a modern 20-bedded healthcare facility offering specialized services in orthopedics and general medicine. It is dedicated to providing quality and affordable healthcare to the local community.`,
    imageUrl: 'https://example.com/ramapura-hospital.jpg',
    gallery: [
      'https://example.com/gallery1.jpg',
      'https://example.com/gallery2.jpg',
      'https://example.com/gallery3.jpg',
      'https://example.com/gallery4.jpg',
    ],
    services: [
      { label: 'Orthopedics', icon: FaUserMd },
      { label: 'General Medicine', icon: FaUserMd },
    ],
    facilities: [
      { label: '20 Beds', icon: FaBed },
      { label: 'Well-Equipped Inpatient Rooms', icon: FaHospitalAlt },
    ],
    infrastructure:
      'Equipped with modern medical tools and a dedicated team of expert medical professionals.',
    contact: {
      address: 'Ramapura, Chamarajanagar, India',
      phone: '+91-9876543213',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 8,
    name: 'CurePlus Terakanambi Hospital',
    location: 'Terakanambi, Chamarajanagar',
    icon: FaHospitalAlt,
    description: `CurePlus Terakanambi Hospital is a 20-bedded multi-specialty hospital, specializing in orthopedics and general medicine. It is committed to serving the healthcare needs of Chamarajanagar and surrounding areas.`,
    imageUrl: 'https://example.com/terakanambi-hospital.jpg',
    gallery: [
      'https://example.com/gallery1.jpg',
      'https://example.com/gallery2.jpg',
      'https://example.com/gallery3.jpg',
      'https://example.com/gallery4.jpg',
    ],
    services: [
      { label: 'Orthopedics', icon: FaUserMd },
      { label: 'General Medicine', icon: FaUserMd },
    ],
    facilities: [
      { label: '20 Beds', icon: FaBed },
      { label: 'Modern Diagnostic and Treatment Facilities', icon: FaXRay },
    ],
    infrastructure:
      'Equipped with modern diagnostic and treatment facilities to ensure effective patient care.',
    contact: {
      address: 'Terakanambi, Chamarajanagar, India',
      phone: '+91-9876543214',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 9,
    name: 'CurePlus Bherya Hospital',
    location: 'Bherya, Saligrama Taluk, Mysore',
    icon: FaHospitalAlt,
    description: `CurePlus Bherya Hospital is a modern 20-bedded healthcare center providing specialized services in orthopedics and general medicine. It is dedicated to delivering quality medical care to the local community.`,
    imageUrl: 'https://example.com/bherya-hospital.jpg',
    gallery: [
      'https://example.com/gallery1.jpg',
      'https://example.com/gallery2.jpg',
      'https://example.com/gallery3.jpg',
      'https://example.com/gallery4.jpg',
    ],
    services: [
      { label: 'Orthopedics', icon: FaUserMd },
      { label: 'General Medicine', icon: FaUserMd },
    ],
    facilities: [
      { label: '20 Beds', icon: FaBed },
      { label: 'Advanced Medical Infrastructure', icon: FaXRay },
    ],
    infrastructure:
      'Designed to provide high-quality medical care with modern infrastructure and expert medical professionals.',
    contact: {
      address: 'Bherya, Saligrama Taluk, Mysore, India',
      phone: '+91-9876543215',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 10,
    name: 'CurePlus T Narasipura Hospital',
    location: 'T Narasipura, Mysore',
    icon: FaHospitalAlt,
    description: `CurePlus T Narasipura Hospital is committed to delivering comprehensive and affordable healthcare services to the vibrant community of T Narasipura, Mysore. With a focus on specialized care and patient well-being, we are proud to be a trusted name in healthcare for the region.`,
    imageUrl: 'https://example.com/t-narasipura-hospital.jpg',
    gallery: [
      'https://example.com/gallery1.jpg',
      'https://example.com/gallery2.jpg',
      'https://example.com/gallery3.jpg',
      'https://example.com/gallery4.jpg',
    ],
    services: [
      { label: 'Orthopedics', icon: FaUserMd },
      { label: 'General Medicine', icon: FaUserMd },
    ],
    facilities: [
      { label: '20 Beds', icon: FaBed },
      { label: 'Advanced Medical Facilities', icon: FaXRay },
    ],
    infrastructure:
      'Equipped with modern medical technology and infrastructure to deliver top-notch care.',
    contact: {
      address: 'T Narasipura, Mysore, India',
      phone: '+91-9876543210',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 11,
    name: 'CurePlus Hand Post Hospital',
    location: 'H.D. Kote, Mysore',
    icon: FaHospitalAlt,
    description: `CurePlus Hand Post Hospital is dedicated to delivering high-quality healthcare services to the residents of H.D. Kote, Mysore. With state-of-the-art facilities and a patient-centric approach, we provide specialized care to meet the diverse medical needs of the community.`,
    imageUrl: 'https://example.com/hand-post-hospital.jpg',
    gallery: [
      'https://example.com/gallery1.jpg',
      'https://example.com/gallery2.jpg',
      'https://example.com/gallery3.jpg',
      'https://example.com/gallery4.jpg',
    ],
    services: [
      { label: 'Orthopedics', icon: FaUserMd },
      { label: 'General Medicine', icon: FaUserMd },
    ],
    facilities: [
      { label: '20 Beds', icon: FaBed },
      { label: 'Diagnostic Services', icon: FaXRay },
    ],
    infrastructure:
      'Comprehensive medical expertise with advanced diagnostic and rehabilitation services.',
    contact: {
      address: 'H.D. Kote, Mysore, India',
      phone: '+91-9876543211',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 12,
    name: 'CurePlus Hosur Hospital',
    location: 'Saligrama Taluk, Mysore',
    icon: FaHospitalAlt,
    description: `CurePlus Hosur Hospital is your trusted healthcare partner in Saligrama Taluk, Mysore. Our goal is to deliver accessible, high-quality medical care tailored to the needs of our community.`,
    imageUrl: 'https://example.com/hosur-hospital.jpg',
    gallery: [
      'https://example.com/gallery1.jpg',
      'https://example.com/gallery2.jpg',
      'https://example.com/gallery3.jpg',
      'https://example.com/gallery4.jpg',
    ],
    services: [
      { label: 'Orthopedics', icon: FaUserMd },
      { label: 'General Medicine', icon: FaUserMd },
    ],
    facilities: [
      { label: '20 Beds', icon: FaBed },
      { label: 'Modern Medical Facilities', icon: FaXRay },
    ],
    infrastructure:
      'Affordable and accessible healthcare with a focus on patient-centered care.',
    contact: {
      address: 'Saligrama Taluk, Mysore, India',
      phone: '+91-9876543212',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
  {
    id: 13,
    name: 'CurePlus Halli Mysuru Hospital',
    location: 'Halli Mysuru, Mysore',
    icon: FaHospitalAlt,
    description: `CurePlus Halli Mysuru Hospital is dedicated to providing exceptional healthcare services to the residents of Halli Mysuru and the surrounding areas. With a focus on affordability, accessibility, and quality care, we are proud to serve the community with a patient-centered approach.`,
    imageUrl: 'https://example.com/halli-mysuru-hospital.jpg',
    gallery: [
      'https://example.com/gallery1.jpg',
      'https://example.com/gallery2.jpg',
      'https://example.com/gallery3.jpg',
      'https://example.com/gallery4.jpg',
    ],
    services: [
      { label: 'Orthopedics', icon: FaUserMd },
      { label: 'General Medicine', icon: FaUserMd },
    ],
    facilities: [
      { label: '20 Beds', icon: FaBed },
      { label: 'Comprehensive Medical Facilities', icon: FaXRay },
    ],
    infrastructure:
      'Designed to provide high-quality medical care with modern infrastructure and expert medical professionals.',
    contact: {
      address: 'Halli Mysuru, Mysore, India',
      phone: '+91-9876543213',
      mapIcon: FaMapMarkerAlt,
      phoneIcon: FaPhoneAlt,
    },
  },
];
