
'use client';
import FooterSection from "@/app/component/FooterSection";
import SecondNavBar from "@/app/component/SecondNavBar";
import { useParams } from "next/navigation";
import { FaUserTie, FaUsers, FaClipboardList, FaCheckCircle } from 'react-icons/fa';

const teams = [
    {
        id: "team-001",
        name: "Policy Processing Team",
        description:
            "The backbone of insurance, banking, and healthcare policy management, ensuring accuracy, compliance, and efficiency at every stage.",
        leadership: {
            leaderName: "Ms. Ashwini A.",
            experience: "Over 10 years of experience in digital marketing, sales, and policy management.",
        },
        teamSize: 50,
        coreServices: [
            "Pre-Underwriting – Risk assessment and document verification",
            "New Business Review – Fast-tracking policy approvals",
            "Policy Servicing – Managing policy changes and renewals",
            "Quality Assurance – Ensuring compliance with industry standards",
            "Voice & Chat Support – Handling customer queries and claims processing",
        ],
        keyStrengths: [
            "Speed & Accuracy – Faster approvals and claim settlements",
            "Multi-Sector Expertise – Insurance, healthcare, and banking",
            "Tech-Driven Solutions – AI, automation, and analytics",
        ],
        impact: {
            policyholdersServed: 600000,
            partnerHospitalsOnboarded: 120,
            fasterClaimProcessing: "30% reduction in claim processing time",
        },
    },
    {
        id: "team-002",
        name: "Pre-Claims Team (Scout Team)",
        description:
            "Specializes in efficient claims management, ensuring accuracy, compliance, and timely resolution.",
        leadership: {
            leaderName: "Ms. Chandana",
            experience: "Senior employee and founding member with expertise in claims processing.",
        },
        teamSize: 15,
        coreServices: [
            "Pre-Claims Email Management – Handling inquiries and escalations",
            "Daily Claims Processing – Verifying policy forms and documents",
            "ShareFile Management – Managing claim-related document links",
            "Loss Assessment & Fee Bill Payments – Damage calculations and payments",
            "Pre-Adjusting Claims – Reviewing claims for modifications",
            "Adding Adjusters' Licenses & Additional Insured – Documentation compliance",
            "Drafting & Managing Letters – Professional communication for claims",
        ],
        keyStrengths: [
            "Accuracy & Compliance – Minimized errors",
            "Faster Processing – Streamlined workflows",
            "Fraud Protection – Advanced fraud detection",
            "Global Expertise – Multi-sector and international handling",
        ],
    },
    {
        id: "team-003",
        name: "Software Development Team",
        description:
            "Delivers cutting-edge, scalable, and secure software solutions to enhance business operations.",
        leadership: {
            leaderName: "TBD",
            experience: "Over a decade in software development and academic research.",
        },
        teamSize: 30,
        coreServices: [
            "Programming: Java, HTML, CSS, JavaScript, Bootstrap, Ajax",
            "Enterprise Solutions: Servlets, JSP, API Integration",
            "Database Management: Oracle 19c, PostgreSQL, MS Access",
            "Data Science & AI: NumPy, Pandas, Matplotlib",
            "Cloud & Security: XAMPP, Encryption, Cybersecurity",
        ],
        keyStrengths: [
            "Parallel Implementation – Ensuring smooth transitions",
            "Phase-by-Phase Rollout – Reducing risk and optimizing performance",
            "Modular Development – Independent feature testing",
        ],
    },
    {
        id: "team-004",
        name: "Software Testing Team",
        description:
            "Dedicated to delivering high-quality results through manual and automated testing methodologies.",
        leadership: {
            leaderName: "Nagashree Nagaraj",
            experience: "10 years in Java, Python, Selenium, SAP HANA, and API testing.",
        },
        teamSize: 20,
        coreServices: [
            "Test Planning – Functional, regression, performance testing",
            "Test Case Development – Manual and automated tests",
            "Defect & Automation Management – Tracking and optimizing testing",
            "Collaboration & Continuous Improvement – Refining strategies",
        ],
        keyStrengths: [
            "Web & Mobile Apps – Selenium, Cypress, Appium",
            "API Testing – Postman, RestAssured",
            "Performance Testing – JMeter, LoadRunner",
            "Security Testing – OWASP ZAP, Burp Suite",
        ],
    },
    {
        id: "team-005",
        name: "Data Engineering & Data Analysis Team",
        description:
            "Transforms raw data into actionable insights, supporting analytics, risk assessment, and business intelligence.",
        leadership: {
            leaderName: "Panduranga B P",
            experience: "Expert in Python, SQL, and BI tools with over 2 years of experience.",
        },
        teamSize: 5,
        coreServices: [
            "Data Integration & ETL – Using Python, SQL, and Dimensional Insights",
            "Data Pipeline & Orchestration – Managing workflows efficiently",
            "Data Storage & Management – Amazon Redshift, columnar databases",
            "Business Intelligence & Visualization – Power BI, Sisense",
            "Cloud Platforms – AWS (EC2), experience with GCP",
            "Raters & Insurance Data – Managing pricing models and rules",
            "SQL Queries for Reporting – Extracting policy, claims, and fraud data",
            "JSON & API Integration – Automating data fetching",
            "Python Scripting – Automating repetitive tasks",
            "Supporting Actuarial & Business Teams – Data insights for pricing",
        ],
        keyStrengths: [
            "Insurance – Managing ETL and BI solutions for premium calculations",
            "Banking – Enhancing fraud detection and compliance",
            "Healthcare – Improving patient records and analytics",
        ],
    },
];

const navItems = [
    { name: "Home", link: "/" },
    { name: "Careers", link: "/careers" },
    { name: "About Us", link: "/about" },
];

const Page = () => {
    const params = useParams();
    const team = teams.find((t) => t.id === params.id);
    if (!team) {
        return (
            <div className="text-center text-2xl font-bold mt-10 text-red-600">Team Not Found</div>
        );
    }
    return (
        <>
            <SecondNavBar navItems={navItems} />
            <div className="min-h-screen bg-gray-100 py-20 px-6 sm:px-8 lg:px-12">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                    {/* Header Section */}
                    <div className="p-10 bg-gradient-to-r from-orange-900 to-indigo-900 text-white text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight mb-3">{team.name}</h1>
                        <p className="text-lg text-blue-100 opacity-90">{team.description}</p>
                    </div>

                    {/* Content Section */}
                    <div className="p-10 space-y-10">
                        {/* Leadership Section */}
                        <div className="flex items-center space-x-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="bg-orange-100 p-4 rounded-lg">
                                <FaUserTie className="text-orange-600 text-3xl" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Leadership</h2>
                                <p className="text-orange-600 font-medium">{team.leadership.leaderName}</p>
                                <p className="text-gray-700 mt-1">{team.leadership.experience}</p>
                            </div>
                        </div>

                        {/* Team Size */}
                        <div className="flex items-center space-x-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="bg-orange-100 p-4 rounded-lg">
                                <FaUsers className="text-orange-600 text-3xl" />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-900">Team Composition</h2>
                                <p className="text-orange-600 font-medium">{team.teamSize} professionals</p>
                            </div>
                        </div>

                        {/* Core Services */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="flex items-center mb-4">
                                <FaClipboardList className="text-orange-600 text-3xl mr-3" />
                                <h2 className="text-xl font-semibold text-gray-900">Core Services</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8">
                                {team.coreServices.map((service, index) => (
                                    <div key={index} className="border-l-4 border-orange-600 pl-4 py-2">
                                        <p className="text-gray-700">{service}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Strengths */}
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="flex items-center mb-4">
                                <FaCheckCircle className="text-orange-600 text-3xl mr-3" />
                                <h2 className="text-xl font-semibold text-gray-900">Key Strengths</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8">
                                {team.keyStrengths.map((strength, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-300 shadow-sm">
                                        <p className="text-gray-700">{strength}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
};

export default Page;