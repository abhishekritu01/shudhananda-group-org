export const teams = [
    {
        id: "team-001",
        name: "Policy Processing Team",
        image: "/teamlead/aswani.jpeg",
        groupphoto: "ppa.jpeg",
        description:
            "The backbone of insurance, banking, and healthcare policy management, ensuring accuracy, compliance, and efficiency at every stage.",
        leadership: {
            leaderName: "Ms. Ashwini A.",
            experience: "Dynamic and results-driven professional with over 10 years of experience in digital marketing, sales strategy, and policy management. Proven expertise in driving brand growth through data-driven marketing campaigns, optimizing sales funnels, and crafting clear, compliant content for policy communication. Adept at cross-functional collaboration, market analysis, and delivering impactful messaging that aligns with organizational goals. Passionate about using digital tools and insights to enhance customer engagement, increase revenue, and ensure policy clarity across stakeholder groups.",
        },
        teamSize: 50,
        coreServices: [
            "Pre-Underwriting – Risk assessment and document verification",
            "New Business Review – Fast-tracking policy approvals",
            "Policy Servicing – Managing policy changes and renewals",
            "Quality Assurance – Ensuring compliance with industry standards",
            // "Voice & Chat Support – Handling customer queries and claims processing",
        ],
        keyStrengths: [
            "Speed & Accuracy – Quick approvals & settlements",
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
        name: "Pre-Claims Team ",
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.34.34.jpeg",
        groupphoto: "claims_bookrolls.JPG",
        description:
            "Specializes in efficient claims management, ensuring accuracy, compliance, and timely resolution.",
        leadership: {
            leaderName: "Ms. Chandana",
            experience: "Chandana has 5+ years of experience running her own business in the hospitality industry. She then started her career in house insurance as a Claims Process Associate at Cabrillo Coastal General Insurance, where she has worked for 3 years. For the past year, she has been leading the team.",
        },
        teamSize: 15,
        coreServices: [
            "Claims Processing – End-to-end pre-claims support",
            "File Handling – Documentation & validation checks",
            "Claim Letters – Standardized & custom letter drafting",
            "Invoice Review – Verifying and processing payments",
            "Triage Support – Prioritization during surge seasons",
        ],
        keyStrengths: [
            "High-Volume Handling – Efficient even during peaks",
            "Compliance – Strong regulatory and documentation focus",
            "Agility – Flexible response to urgent claim scenarios",

        ],
    },
    {
        id: "team-004",
        name: "Software Testing Team",
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.35.03.jpeg",
        groupphoto: "Testing.JPG",
        description:
            "Dedicated to delivering high-quality results through manual and automated testing methodologies.",
        leadership: {
            leaderName: "Nagashree Nagaraj",
            experience: "5+ years of QA-driven development in Agile/DevOps environments. Advanced proficiency in Java & Python for scalable automation solutions. Expert in designing and implementing end-to-end test suites using Selenium WebDriver, TestNG, PyTest, and BDD frameworks (Cucumber/Behave). Skilled in REST/SOAP testing using Postman, REST Assured, and integration validations with Swagger/OpenAPI specs. In-depth knowledge of SAP HANA data models, SQLScript, and performance optimization in enterprise environments. Seamless test integration with Jenkins, GitLab CI, and Dockerized test environments.",
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
        name: "Data Engineering",
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.36.48.jpeg",
        groupphoto: "data.JPG",
        description:
            "Transforming raw data into valuable insights with smart integration and automation.",
        leadership: {
            leaderName: "Panduranga B P",
            experience: "A highly competent Data Engineering and Analysis professional with experience in utilizing tools like SQL, Matillion, Apache Airflow, and Sisense to facilitate data-driven decision-making. Possesses a track record of moving data extraction processes to make them more efficient and scalable. Demonstrates great flexibility to new technologies, with successful project integration with Dimensional Insight.",
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
        ],
        keyStrengths: [
            "Insurance – ETL & BI solutions for pricing and claims",
            // "Analytics – Data-driven insights for business decisions",
            "Healthcare – Enhancing patient data analytics"

        ],
    },
    {
        id: "team-006",
        name: "Data Analysis",
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.45.52.jpeg",
        groupphoto: "data.jPG",
        description:
            "Driving insurance analytics and automation through advanced data tools and insights.",
        leadership: {
            leaderName: "Sourav Singh",
            experience: "A results-driven data professional with deep expertise in data management, premium modeling, and data engineering solutions. Skilled in utilizing tools such as Excel, ASTEC, Python, and SQL to streamline data workflows and support strategic pricing initiatives. Experienced in cleaning, transforming, and analyzing large-scale insurance datasets to drive actionable insights. Proficient in automating processes through Python scripting and API integrations, and delivering robust reporting and visualization to actuarial and business teams.",
        },
        teamSize: 4,
        coreServices: [
            "Raters & Insurance Data – Managing raters (Excel, ASTEC, Python) for premium calculations",
            "Data Cleaning & Transformation – Using Pandas, NumPy, and SQL to clean and prepare insurance data",
            "SQL Queries for Reporting – Extracting policy, claims, and premium data for analysis",
            "API Integration – Automating data exchange via JSON & requests",
            "Python Scripting – Automating repetitive data tasks",
            " Reporting & Analysis – Excel, SQL, Pandas for dashboards"
        ],
        toolsAndTechnologies: [
            "Data Storage & Retrieval – SQL for querying insurance databases",
            "Data Processing & Analysis – Python (Pandas, NumPy, ASTEC, JSON)",
            "Insurance Raters – Excel-based and ASTEC-based models",
            "Data Automation – Python scripts for ETL and task scheduling",
            "APIs & Data Exchange – JSON, APIs (requests module)",
            "Reporting & Visualization – Excel, Pandas, SQL for aggregated reports"
        ],
        keyStrengths: [
            "Insurance – Managing raters and insurance data models for premium adjustments",
            "Analytics – Cleaning, transforming, and analyzing large insurance datasets",
            "Automation – Streamlining data workflows and reporting through Python scripting"
        ],
    },
    {
        id: "team-007",
        name: "Accounts",
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.39.53.jpeg",
        groupphoto: "account.JPG",
        description:
            "Specializing in all financial operations in compliance with US GAAP and regulations.",
        leadership: {
            leaderName: "Mr. Akshay Othayoth",
            experience: "I have 5+ years of hands-on experience in Accounts Payable, where I managed the end-to-end invoice processing cycle, including verifying vendor invoices, matching with purchase orders, resolving discrepancies, and ensuring timely payments.",
        },
        teamSize: 10,
        coreServices: [
            "Bookkeeping – Daily entries & general ledger management",
            "Invoicing – Client billing and tracking",
            "Accounts Payable – Vendor payments and tracking",
            "Accounts Receivable – Client collections",
            "US Financial Reporting – GAAP-specific statements",
            "Account Reconciliation – Ensuring data accuracy",
        ],
        keyStrengths: [
            "Timely Closures – Daily accuracy in finances",
            "Client-Centric – Flexible to client needs",
            "Collaboration – Works with cross-functional teams",
            "Detail-Oriented – High accuracy & precision",
            "Integrity – Maintains data confidentiality",
        ],
    },
    {
        id: "team-008",
        name: "Bookrolls Team",
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.34.34.jpeg",
        groupphoto: "claims_bookrolls.JPG",
        description:
            "Delivering personalized insurance solutions through expert risk assessment, transparent communication, and client-focused coverage.",
        leadership: {
            leaderName: "Ms. Chandana",
            experience: "Chandana has  5+ years of experience running her own business in the hospitality industry. She then started her career in house insurance as a Claims Process Associate at Cabrillo Coastal General Insurance, where she has worked for 3 years. For the past year, she has been leading the team.",
        },
        teamSize: 6,
        coreServices: [
            "Quote Generation – Based on property, location, and insurance need",
            "Risk Assessment – Evaluating location, age & safety features",
            "Coverage Explanation – Clear breakdown of policy types",
            "Extra Coverage – Flood, earthquake & high-value protection",
            "Application Filing – Accurate, preference-based submission",
        ],
        keyStrengths: [
            "Open Communication – Sharing ideas and feedback freely",
            "Goal Alignment – Common purpose with clear direction",
            "Inclusion & Respect – Every member is valued",
            "Conflict Resolution – Addressing issues early, constructively",
            "Celebration Culture – Recognizing big & small wins",

        ],
    },
    {
        id: "team-009",
        name: "CAT Modeling",
        image: "/teamlead/WhatsApp Image 2025-04-25 at 11.45.52 (1).jpeg",
        groupphoto: "ppa.jpeg",
        description:
            "Delivering advanced catastrophe risk solutions through simulation-based modeling, strategic risk planning, and proactive disaster readiness.",
        leadership: {
            leaderName: "Bharti",
            experience: "Have experience of more than 3 years in Data Science, Business analytics along with Catastrophic Modeling in the Insurance domain. Currently, leading CAT modeling team and working as Risk Analyst at Sudhanand Business Solutions Private Limited. Have an expertise of SQL, Python, Tableau, Power BI, Machine Learning, AIR and software like AIR cloud use for NAT-CAT modeling. Other than this, have an interest of singing. playing guitar, cricket, badminton and love to watching anime.",
        },
        teamSize: 5,
        coreServices: [
            "CAT Risk Modeling – Simulating natural disaster impact using hazard, exposure & vulnerability data",
            "Portfolio Analysis – Evaluating property exposure across geographies and identifying risk concentration",
            "Reinsurance Strategy – Structuring layers with informed attachment points, limits & pricing",
            "Scenario Planning – Running disaster simulations for preparedness and capital planning",
            "Loss Estimation – Projecting financial impact for various catastrophe events",
        ],
        keyStrengths: [
            "Analytical Expertise – Translating complex data into actionable insights",
            "Proactive Planning – Anticipating risk before it strikes",
            "Strategic Decision Making – Guiding underwriting, pricing & growth",
            "Collaboration – Working cross-functionally with underwriting and reinsurance teams",
            "Preparedness Culture – Prioritizing readiness for high-impact events",

        ],
    },
];