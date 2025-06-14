import React, { useState, useEffect, useRef } from 'react';

// Google Analytics Measurement ID - REPLACE THIS WITH YOUR ACTUAL GA MEASUREMENT ID
const GA_MEASUREMENT_ID = 'YOUR_GA_MEASUREMENT_ID'; // Example: 'G-XXXXXXXXXX'

// Data from Resume (extracted from resume.pdf)
const resumeData = {
  name: "Sameer Kumar Choudhary",
  title: "Senior Web Application Architect & Consultant",
  summary: "Highly motivated Senior Web Application Architect & Consultant with over 9+ years of experience in architecting and delivering robust, scalable web solutions. Expertise in Python, PHP, and various CMS/LMS platforms, with a strong foundation in Azure cloud. Passionate about AI/ML and data technologies to build innovative, data-driven solutions. Proven ability to lead cross-functional teams in agile environments.",
  contact: {
	name: "Sameer Kumar Choudhary",
    address: "Harvest Lane Phoenixville PA-19460",
    mobile: "+1 (484) 782-8476",
    email: "sameerkchoudhary14@gmail.com",
    linkedin: "https://www.linkedin.com/in/sameerkchoudhary14", // Placeholder - please replace with actual LinkedIn URL
    github: "https://github.com/sameerkchoudhary", // Placeholder - please replace with actual GitHub URL
    drupal: "https://www.drupal.org/u/sameerkchoudhary", // Placeholder - please replace with actual Drupal URL
  },
  experience: [
    {
      company: "Capgemini America",
      role: "Senior Software Engineer, Financial Services",
      dates: "July 2022 - Present",
      description: [
        "Architected design and development of SEI Developer Portal using (Drupal, PostgreSQL, Nginx, APIGEE, Vagrant, SiteMinder, and PHP) focusing on scalability, performance, and security.",
        "Spearheaded collaboration with cross-functional teams to migrate Developer Portal from Drupal 9 to Drupal 10 using Vagrant and Kubernetes, enhancing scalability and performance.",
        "Created high-level design and architecture documents using Confluence to standardize and improve key developer portal processes such as Devportal segregation into public and private instances (improving security), User Onboarding (reducing onboarding time by 60%), API versioning reducing API Doc Creation time to 60 secs and Application onboarding with Apigee.",
        "Architected and developed Custom Module for API Doc Versioning integrated with Bitbucket and Gitlab emphasizing modularity using Drupal's Entity Types, Fields API, and Taxonomy to structure API references for increased Developer experience.",
        "Developed and customized Drupal Apigee modules to integrate with Apigee Edge for application analytics, API product management, and data flow for application creation and role-based access control (RBAC) for API products. Leveraged Redocly's framework to enhance API documentation readability, reducing support requests by 10%.",
        "Architected the information architecture and Developer Portal experience by designing and implementing the Marketplace, File Integrations, Knowledgebase, and Blogs pages, leveraging Drupal Field APIs, Paragraphs, Views, Pathauto, Webforms, Layout Builder, Taxonomy, Entity API, and Entity Reference, Menu API, and Block System improving content management efficiency and information. Resulting in 20% increase in user satisfaction with site navigation.",
        "Collaborated with the UI/UX design team via Figma for the development of the portal's enhanced and compelling user interface.",
        "Developed automated support ticket creation for consumers to report product issues or recommendations.",
        "Developed custom Drupal module to implement granular cookie consent, manage user preferences integration with OneTrust's Platform. Ensuring compliance with GDPR and CCPA regulations to adhere to data privacy best practices and reducing legal risk.",
        "Engineered and customized website themes sing Drupal Paragraphs, ensuring responsive design, SEO optimization, and adherence to W3C/WCAG accessibility standards.",
        "Responded to IBM Pen Test reports and contributed patching on priority.",
        "Contributed to Developer Portal's security by adding Veracode and Burp Suite scans to the codebase and engaged in quarterly Veracode training to maintain awareness of evolving security practices.",
        "Evaluated existing business processes and Presented findings and recommendations to executive-level stakeholders, effectively communicating key insights and action plans.",
        "Onboarded and mentored novel resources, handled estimations, client interactions, requirement gathering, demos, project documentation, and deployments.",
        "Developed internal web platforms using Python and Django for data visualization of User, Apps, Reports on API Docs, Broken link checker, and Alerts.",
      ],
    },
    {
      company: "SEI AI Centre of Excellence",
      role: "Products & Services",
      dates: "2022 - Present (concurrent with Capgemini America)",
      description: [
        "Designed and developed AI-driven services within an Agentic Framework, utilizing Azure AI Services and Cosmos DB, following microservices principles to enable independent scaling and deployment of AI functionalities.",
        "Developing an automated AI agent for WCAG, ADA Compliance, SEO and other Web standards checker and report generator.",
        "Led the ideation and development of various use cases including intelligent document automation for contract and subscription document processing.",
        "Collaborated in a Team size of 6 people to develop internal AI agents (FOSS Approval Request Form, SEI GPT for knowledgebase) using Streamlit, LangGraph, LangChain Azure OpenAI for Agentic Framework.",
        "Designed and conceptualized AI agent integration with the Apigee Developer Portal, projecting a 50% increase in user visits and interactions.",
      ],
    },
    {
      company: "Capgemini",
      role: "Senior Consultant, Financial Services",
      dates: "April 2019 - July 2022",
      description: [
        "Collaborated on new architecture design and development plan of SEI Developer Portal for more secure and robust platform.",
        "Migrated SEI Developer Portal from Drupal 7 to new symphony architecture of Drupal 9 successfully with immediate result in performance and access.",
        "Collaborated with the UI/UX design team via Figma for the development of the portal's user interface.",
        "Supported infrastructure setup and configuration in various environments.",
        "Implemented user onboarding flow integrating SiteMinder, Apigee, Jira, and Drupal.",
        "Implemented Postman Collection embeddings to API Docs for better Developer experience.",
        "Custom Drupal Module to Integrate Matomo Analytics to SEI Developer Portal for User & Event tracking and reporting.",
        "Design, Development and Maintenance of Developer portal using Drupal 7, Apigee, PostgreSQL, Nginx.",
        "Developed custom Drupal Module dynamic PDF generation from API Products pages supporting SEI brandings and standards using PHP Libraries leading to 50% increase in page visits.",
        "Responded to Pen Test reports and coordinated patching it on priority.",
      ],
    },
    {
        company: "LiquidHub",
        role: "Consultant, Digital Practice",
        dates: "May 2018 - April 2019",
        description: [
            "Projects: PACT, Counsyl, AirClass, Liquid Learning (Internal Learning Platform), Centre of Excellence (CoE).",
            "Rebuilt AirClass websites in Drupal 7 hosted on Acquia and local setup using Acquia Dev Desktop.",
            "Migrated AirClass from Drupal 7 to Drupal 8, upgrading custom Modules and custom theme to Drupal 8 standards.",
            "Revamped Internal e-Learning website of LiquidHub built using LAMP stack and Moodle as LMS.",
            "Redesigned PACT WordPress websites to new design, with complex functionality of integrating Annual Award Webform, workflows and with considerations to WCAG standards and SEO.",
            "Integrated Google Analytics to PACT WordPress portal for monitoring user traffic and event tracking.",
            "Integration of Salesforce CRM and Zoho CRM with Drupal portals.",
            "Redesigned Counsyl WordPress website to new design with integrations to APIs, Google Analytics and Job Board.",
            "Worked on custom modules, plugins, theming, migration, bug fixing, release, and maintenance.",
            "Developed Analytics Report Dashboard using Google Data Data Studio for SharePoint websites.",
            "Contributed to Centre of Excellence (CoE) on RFPs with Pre-Sales Team and helped in providing support in design and specifications.",
            "Contributed Drupal 8 Modules like Drupal Chatbot using Drupal and Dialogflow and Twitter Tweets Module to Drupal community as part of practice.",
        ]
    },
    {
        company: "Freelancer/Consultant",
        role: "Freelancer/Consultant",
        dates: "March 2017 - May 2018",
        description: [
            "Responsive Web Design and development to hosting.",
            "Python automation project for web scrapping and data cleaning.",
        ]
    },
    {
        company: "Endeavour Software Solutions",
        role: "Software Engineer, Digital Practice",
        dates: "January 2017 - March 2017",
        description: [
            "Worked on customizing Flyingkart E-commerce website using CakePHP, MySQL, HTML, CSS3 and Bootstrap to build a Responsive Design.",
            "Explored and ideated to have Web as Mobile app. Developed a basic APK Android studio to be hosted at Playstore, leading to 50% increase in User visits.",
            "Worked on Integrating Google Analytics to the website to capture User visits, journeys and clicks.",
        ]
    },
    {
        company: "Centre for Development of Advanced Computing",
        role: "Project Engineer I, Research & Development",
        dates: "November 2014 - December 2016",
        description: [
            "Worked on initial PoCs to validate various CMS platforms like WordPress, Drupal and Plone in terms of stability, complexity and developing custom tailored features.",
            "Developed 23 Multi-Lingual and Multi-Site Portals having 50K Users using Plone CMS and Python leveraging its MVC-like architecture to manage complex content and user interactions as Full Stack Developer.",
            "Developed and Introduced OTP based login and Integrated SSO using LDAP and increased the user onboarding and visits by 50%.",
            "Conceptualized and Integrated Related Languages Content Links Portlet feature in 23 Portals for similar contents in Web Page based on Page Metadata, leading to increase in visit of Users on each portal by 25%",
            "Integration of Keyboard support for multiple Indian Languages using jQuery Libraries and Screen reader as part of WCAG compliance initiatives.",
            "Enhancement and Development of GUI of Vikaspedia Home pages with different Home page Doodles and Internal Pages (Donors, Mobile Applications, Volunteers, SNA's etc.), leading to increase user visits on the landing page.",
            "Development of multi-site architecture for in a single Plone instance to optimize the resource usage",
            "Developed and maintained RESTful APIs, ensuring adherence to REST principles for seamless integration and data accessibility.",
            "Automated e-Delivery of monthly newsletters to more more than 62,000 users which improved traffic",
            "Python Trainer for students of C-DAC's DITISS (PG Diploma in IT Infrastructure Systems and Security) for consecutive 2 batches.",
            "Provided technical expertise throughout all phases of the project, ensuring accurate execution of designs and specifications.",
            "Engaged in industry forums and workshops to stay abreast of new trends and technologies, applying insights to enhance project performance.",
            "Conducted research to identify and evaluate new technologies and concepts.",
        ]
    }
  ],
  skills: {
    languages: [
      { name: "Python" },
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "React", status: "developing" },
      { name: "Angular", status: "developing" }, // Example: Go language is being developed
      { name: "TypeScript", status: "developing" } // Example: TypeScript is being developed
    ],
    databases: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" }
    ],
    frameworks: [
      { name: "Django" },
      { name: "Symphony" },
      { name: "Flask" },
      { name: "CakePHP" }
    ],
    cmsLms: [
      { name: "Drupal (10, 9, 8, 7)" },
      { name: "WordPress" },
      { name: "Moodle" },
      { name: "Plone" },
      { name: "Joomla" }
    ],
    cloudComputing: [
      { name: "Azure", status: "developing" },
    ],
    aiMl: [
      { name: "NLP" },
      { name: "Scikit-Learn" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "Matplotlib" },
      { name: "Streamlit" },
      { name: "Web Crawling (Scrapy, Beautifulsoup, Selenium)" }
    ],
    dataTechnologies: [
      { name: "Google Analytics" },
      { name: "Matomo Analytics" },
      { name: "Data Studio" }
    ],
    tools: [
      { name: "Git" },
      { name: "Jira" },
      { name: "Bitbucket" },
      { name: "Confluence" },
	  { name: "Composer" },
	  { name: "Drush" }
    ],
	operatingsystems: [
	  { name: "Linux" },
	  { name: "Windows" }
	],
    securityTesting: [
      { name: "Veracode Static Scan" },
      { name: "Burp Suite" }
    ],
    apis: [
      { name: "REST APIs" }
    ],
    agileMethodologies: [
      { name: "Scrum" },
      { name: "Kanban" },
      { name: "SAFe" }
    ],
    softwareDesignPrinciples: [
	  { name: "DevOps practices" },
      { name: "Scalability" },
      { name: "Reliability" },
      { name: "Security" },
      { name: "Performance" },
      { name: "System Design" },
      { name: "Integration" },
      { name: "Design Patterns" }
    ],
    complianceDataPrivacy: [
      { name: "GDPR" },
      { name: "Data Privacy" },
      { name: "Consent Management" }
    ],
  },
  projects: [
    {
      title: "Drupal Chatbot",
      description: "To automate customer experience and enquiries using Drupal and AI",
      technologies: ["AI", "Drupal", "NLP"],
      link: "#", // Placeholder
      githubLink: "https://github.com/sameerkchoudhary/drupal-chatbot" // Placeholder
    },
    {
      title: "Twitter Tweets",
      description: "To enhance social media engagement with configurable blocks",
      technologies: ["Twitter API", "Drupal", "Blocks"],
      link: "#", // Placeholder
      githubLink: "https://github.com/sameerkchoudhary/twitter-tweets-module" // Placeholder
    },
    {
      title: "SAUKHYAMASTHU",
      description: "A web Platform for Self-Reporting, Visualizations & Insights, COVID-19 Information to combat Pandemic",
      technologies: ["IBM Cloud", "DB2", "Python", "Flask", "IBM Watson"],
      link: "#", // Placeholder
      githubLink: "https://github.com/sameerkchoudhary/SAUKHYAMASTHU" // Placeholder
    },
    {
      title: "PDF-Deidentification",
      description: "Web Based Tool to De-Identify or Redact PII information in PDF or Receipts before publishing",
      technologies: ["Python", "Django", "Python Libraries- pdfminer", "pdfrw", "OpenCV"],
      link: "#", // Placeholder
      githubLink: "https://github.com/sameerkchoudhary/PDF-Deidentification" // Placeholder
    },
  ],
  education: [
    {
      institution: "Haldia Institute of Technology",
      degree: "B-Tech - Information Technology",
      dates: "August 2010 - June 2014",
      details: ["GPA: 8.1", "Relevant coursework: Data Structures and Algorithms, Database Management, Software Engineering, Operating System"],
    },
    {
      institution: "IIIT-H",
      degree: "M-Tech - Computer Science (Partially Completed)",
      dates: "July 2017 - August 2018",
      details: ["Enrolled to Part Time Master of Technology", "Course Undertaken: CSE540 Research in Information Technology, CSE445 Data Warehousing and Data Mining, CSE418 Principles of Information Security"],
    },
  ],
  certifications: [
    { name: "Certified SAFE® 6 Scrum Master (SSM) | Scaled Agile, Inc. | June 2025", link: "https://www.credly.com/badges/80800461-9a60-4536-bd7a-bdd2a5df9971" }, // Placeholder link
    { name: "CAST Imaging Certified User by CAST Imaging Certification Program, July 2024", link: "https://www.linkedin.com/in/sameer-kumar-choudhary/details/certifications/1737771780845/single-media-viewer/?type=DOCUMENT&profileId=ACoAAA33a3wBz445wLTvH4Q0Jw11pnoGqNQ2MgY" }, // Placeholder link
    { name: "Design Research & Design Thinking Feb 2025", link: "https://lnkd.in/euKvPAWd" },
    { name: "LO- Aspiring Architect by Capgemini Global Certification Board, September 2023", link: "https://www.linkedin.com/in/sameer-kumar-choudhary/details/certifications/1737771329467/single-media-viewer/?type=DOCUMENT&profileId=ACoAAA33a3wBz445wLTvH4Q0Jw11pnoGqNQ2MgY" },
    { name: "Connected Manager from Capgemini + HARVARD Manage Mentor / Spark, 23rd Jan 2023", link: "https://www.linkedin.com/in/sameer-kumar-choudhary/details/certifications/1737770764019/single-media-viewer/?type=IMAGE&profileId=ACoAAA33a3wBz445wLTvH4Q0Jw11pnoGqNQ2MgY" },
    { name: "Fundamentals of Project Planning and Management by University of Virginia 2021", link: "https://www.coursera.org/account/accomplishments/verify/KUTHXP6347VU" },
  ],
  achievements: [
    { name: "Awarded 'Most Creative Solution' at the SEI Enterprise Hackathon (Dec 2024) for an architecture design for an in-house Document Management System using Python, Django, and an open-source tech stack.", link: "#" },
    { name: "Awarded 'Time to Market Solution' at the SEI AI-Thon (Nov 2024) for automating open-source library requests and Infosec approvals using Azure OpenAI, Streamlit, LangChain, and SharePoint API.", link: "#" },
    { name: "Awarded 'Time to Market Solution' at the SEI Enterprise Hackathon (June 2024) for Sales Funnel enabled Demo Experience Platform with capability to experience the Products and Offerings on demand.", link: "#" },
    { name: "CPR/First-Aid and Blood-Borne Pathogens Training in accordance with American Heart Association Heartsaver First Aid CPR AED Program, Nov 2024", link: "https://ecards.heart.org/api/relay/v1/ecard/getfullpdf?eCardUId=0518D41E-1931-4A02-9213-ACBA6BB205A4&langId=1" },
    { name: "Contributed to the successful planning and execution of multiple Technology Events for over 200 attendees", link: "#" },
    { name: "Participated in building COVID-19 Web Based Solutions at IBM Call for Code 2020 using AI Python, Django, IBM Watson, IBM DB2", link: "https://github.com/samhaldia/SAUKHYAMASTHU" },
    { name: "Capgemini Art from Waste 2019 Winner", link: "https://www.linkedin.com/in/sameer-kumar-choudhary/details/honors/1749843396189/single-media-viewer?type=DOCUMENT&profileId=ACoAAA33a3wBz445wLTvH4Q0Jw11pnoGqNQ2MgY&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_honors_details%3BT9aQ0KmtQ5aFkd%2BY212sVw%3D%3D" },
    { name: "Tech-Fiesta Capgemini 2019: Bagged Gold category Winning Award in Capgemini Tech-Fiesta Hackathon 2019 for building a Drowsiness detection web/mobile app for Drivers using Python, OpenCV, Dango, Live Stream app", link: "linkedin.com/in/sameer-kumar-choudhary/details/honors/1749842791443/single-media-viewer?type=IMAGE&profileId=ACoAAA33a3wBz445wLTvH4Q0Jw11pnoGqNQ2MgY&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_honors_details%3BxcMhyu42TiG0wO5m4Kxjlw%3D%3D" },
    { name: "Participated in Call for Code IBM 2019 on Disaster Recovery Management using Artificial Intelligence using Python, Django, Computer Vision, IBM Watson, IBM DB2", link: "https://www.linkedin.com/in/sameer-kumar-choudhary/details/certifications/1749844700753/single-media-viewer?type=IMAGE&profileId=ACoAAA33a3wBz445wLTvH4Q0Jw11pnoGqNQ2MgY&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BSajXHgzCR5S74nyZIymSkg%3D%3D" },
    { name: "Presented Paper at IACC-2016: Certificate of Appreciation for presenting a paper on Simple and Secure OTP based Authentication Mechanism for Content Management Systems - Plone as a case in 6th IEEE International Advance Computing Conference (IACC-2016)", link: "https://www.linkedin.com/in/sameer-kumar-choudhary/details/honors/1749843862039/single-media-viewer?type=IMAGE&profileId=ACoAAA33a3wBz445wLTvH4Q0Jw11pnoGqNQ2MgY&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_honors_details%3BT9aQ0KmtQ5aFkd%2BY212sVw%3D%3D" },
  ],
};

// Helper for smooth scrolling
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  return (
    // The header will always have a subtle shadow for better definition, transitioning color on scroll
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl py-3' : 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
        {/* Logo/Name: Changed to "Portfolio" to avoid name duplication with the Hero section */}
        <h1 className={`text-2xl font-bold text-white transition-colors duration-300`}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="hover:text-blue-200 transition-colors">
            SKC
          </a>
        </h1>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden focus:outline-none text-white`} // Always white for visibility against any header background
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>

        {/* Navigation - Desktop */}
        <nav className={`hidden lg:flex items-center space-x-6`}>
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
              // Nav links are always white for better contrast with the header's potential blue background
              // Hover effect provides a subtle white semi-transparent background and text remains white for consistency.
              className={`text-white hover:bg-white hover:bg-opacity-20 hover:text-white font-medium transition-all duration-300 rounded-full py-2 px-4`}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1zVi7EY5hHJIpi4uRckdgGUX0qnsNfWYy/view?usp=sharing" // Placeholder for resume download
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-cyan-700 px-5 py-2 rounded-full shadow-lg hover:bg-cyan-100 transition-all duration-300 transform hover:scale-105"
          >
            Download CV
          </a>
        </nav>

        {/* Navigation - Mobile */}
        <nav className={`lg:hidden w-full ${isMenuOpen ? 'block bg-gradient-to-r from-blue-600 to-cyan-500 p-4 rounded-b-lg shadow-xl' : 'hidden'} mt-4`}>
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); setIsMenuOpen(false); }}
              className="block text-white hover:bg-white hover:bg-opacity-20 hover:text-white font-medium py-2 px-4 transition-colors rounded-md"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1zVi7EY5hHJIpi4uRckdgGUX0qnsNfWYy/view?usp=sharing" // Placeholder for resume download
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 bg-cyan-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
};

// Section Wrapper for Scroll Reveal Animation
const Section = ({ id, title, children, disableAnimation = false }) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(disableAnimation);

  useEffect(() => {
    if (!disableAnimation) {
      const currentRef = ref.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [hasAnimated, ref, disableAnimation]);

  const animationClasses = disableAnimation || hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10';

  return (
    <section id={id} ref={ref} className={`py-12 md:py-16 transition-all duration-700 ease-out transform ${animationClasses}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12 relative pb-4">
            {title}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-cyan-500 rounded-full"></span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="hero" className="relative h-screen bg-gradient-to-br from-blue-700 to-cyan-500 flex items-center justify-center text-white overflow-hidden">
      {/* Background Shapes for visual interest */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-white opacity-10 rounded-full mix-blend-overlay animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-300 opacity-10 rounded-full mix-blend-overlay animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-300 opacity-10 rounded-full mix-blend-overlay animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Adjusted font size for the name in Hero section */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 pt-8 animate-fade-in-top">
          {resumeData.name}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in animation-delay-500">
          {resumeData.title}
        </p>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed mb-12 animate-fade-in animation-delay-1000">
          {resumeData.summary}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-1500">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-white text-cyan-700 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-cyan-100 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-white hover:text-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </button>
        </div>
        {/* Ensured adequate bottom padding for social icons */}
        <div className="flex justify-center space-x-6 mt-12 pb-8 animate-fade-in-up animation-delay-2000">
          {/* LinkedIn Icon */}
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-white hover:text-cyan-200 transform hover:scale-125 transition-all duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          {/* GitHub Icon */}
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-white hover:text-cyan-200 transform hover:scale-125 transition-all duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.207 11.387.6.111.82-.26.82-.577v-2.02c-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.24.183 1.24 1.13.084 1.75-1.03 1.75-1.895 0-1.895-1.93-1.65-2.88-1.428-.182-.158-.041-.24.129-.304.887-.142 1.815.195 2.158 1.09.816 1.838 2.535 1.303 3.125 1.144.08-.22.316-.49.608-.602-2.4-.265-4.92-1.2-4.92-5.302 0-1.17.41-2.123 1.09-2.875-.11-.265-.47-1.36.104-2.836 0 0 .89-.29 2.91 1.09.84-.233 1.73-.35 2.62-.35s1.78.117 2.62.35c2.02-1.38 2.91-1.09 2.91-1.09.577 1.476.216 2.57.104 2.836.68 0 1.09.954 1.09 2.875 0 4.11-2.52 5.037-4.92 5.302.318.275.602.82.602 1.655v2.463c0 .318.22.69.82.577C20.562 21.799 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          {/* Email Icon */}
          <a href={`mailto:${resumeData.contact.email}`} aria-label="Email"
            className="text-white hover:text-cyan-200 transform hover:scale-125 transition-all duration-300">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.003 5.884L10.001 11.5L18.003 5.884C17.72 5.378 17.163 5 16.5 5H3.5C2.837 5 2.28 5.378 2.003 5.884ZM2 7.373V16.5C2 17.328 2.672 18 3.5 18H16.5C17.328 18 18 17.328 18 16.5V7.373L10.001 13L2.003 7.373ZM20 5H3.5C2.672 5 2 5.672 2 6.5V17.5C2 18.328 2.672 19 3.5 19H20.5C21.328 19 22 18.328 22 17.5V6.5C22 5.672 21.328 5 20.5 5H20Z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-1 flex justify-center lg:justify-end">
          <img
            src="/images/profile-pic.jpg" // Placeholder image
            alt="Sameer Kumar Choudhary"
            className="rounded-full shadow-lg w-64 h-64 object-cover animate-fade-in transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:col-span-2 text-slate-700 leading-relaxed text-lg animate-fade-in-up animation-delay-200">
          <p className="mb-4">
            {resumeData.summary}
          </p>
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">Why Choose Me?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><span className="font-semibold text-cyan-600">Scalability Expert:</span> Proven track record in architecting and delivering robust, scalable web solutions.</li>
            <li><span className="font-semibold text-cyan-600">Agile Leader:</span> Strong ability to lead cross-functional teams in agile environments.</li>
            <li><span className="font-semibold text-cyan-600">AI/ML Passion:</span> Enthusiastic about AI/ML and data technologies to build innovative, data-driven solutions.</li>
            <li><span className="font-semibold text-cyan-600">Versatile Tech Stack:</span> Expertise across Python, PHP, CMS/LMS, and Azure cloud.</li>
            <li><span className="font-semibold text-cyan-600">Documentation & Standardization:</span> Experience creating high-level design and architecture documents to standardize processes.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

// Experience Section
const Experience = () => {
  return (
    <Section id="experience" title="Professional Experience" disableAnimation={true}> {/* Disable animation for Experience section */}
      <div className="space-y-12 block">
        {resumeData.experience.map((job, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4 flex-wrap">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{job.company}</h3>
                <p className="text-xl font-semibold text-cyan-600">{job.role}</p>
              </div>
              <p className="text-slate-500 font-medium text-lg">{job.dates}</p>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700">
              {job.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Skills Section
const Skills = () => {
  const skillCategories = [
    { title: "Programming Languages", skills: resumeData.skills.languages },
    { title: "Databases", skills: resumeData.skills.databases },
    { title: "Frameworks", skills: resumeData.skills.frameworks },
    { title: "CMS/LMS", skills: resumeData.skills.cmsLms },
    { title: "Cloud Computing", skills: resumeData.skills.cloudComputing },
    { title: "AI/ML(Developing)", skills: resumeData.skills.aiMl },
    { title: "Data Technologies", skills: resumeData.skills.dataTechnologies },
    { title: "Tools", skills: resumeData.skills.tools },
	{ title: "Operating Systems", skills: resumeData.skills.operatingsystems },
    { title: "Security Testing Tools", skills: resumeData.skills.securityTesting },
    { title: "APIs", skills: resumeData.skills.apis },
    { title: "Agile Methodologies", skills: resumeData.skills.agileMethodologies },
    { title: "Software Design Principles", skills: resumeData.skills.softwareDesignPrinciples },
    { title: "Compliance and Data Privacy", skills: resumeData.skills.complianceDataPrivacy },
  ];

  return (
    <Section id="skills" title="My Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
              {/* Using a placeholder SVG icon for categories */}
              <svg className="w-6 h-6 text-cyan-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  // Check if skill is an object and has a status, otherwise assume it's a string
                  className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md cursor-pointer
                             ${skill.status === 'developing'
                                ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 hover:text-yellow-900' // Different style for developing skills
                                : 'bg-cyan-100 text-cyan-700 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white'
                             }`}
                >
                  {typeof skill === 'object' ? skill.name : skill}
                  {skill.status === 'developing' && (
                    <span className="ml-1 text-xs font-semibold">(Developing)</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Projects Section
const Projects = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
            <p className="text-slate-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium
                             transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-600 hover:underline font-semibold"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l-6 6m6-6l-3.5 3.5M16 4h4v4"/>
                  </svg>
                </a>
              )}
              {project.githubLink && project.githubLink !== '#' && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-700 hover:text-blue-600 hover:underline font-semibold"
                >
                  View on GitHub
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.207 11.387.6.111.82-.26.82-.577v-2.02c-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.24.183 1.24 1.13.084 1.75-1.03 1.75-1.895 0-1.895-1.93-1.65-2.88-1.428-.182-.158-.041-.24.129-.304.887-.142 1.815.195 2.158 1.09.816 1.838 2.535 1.303 3.125 1.144.08-.22.316-.49.608-.602-2.4-.265-4.92-1.2-4.92-5.302 0-1.17.41-2.123 1.09-2.875-.11-.265-.47-1.36.104-2.836 0 0 .89-.29 2.91 1.09.84-.233 1.73-.35 2.62-.35s1.78.117 2.62.35c2.02-1.38 2.91-1.09 2.91-1.09.577 1.476.216 2.57.104 2.836.68 0 1.09.954 1.09 2.875 0 4.11-2.52 5.037-4.92 5.302.318.275.602.82.602 1.655v2.463c0 .318.22.69.82.577C20.562 21.799 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Education Section
const Education = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8">
        {resumeData.education.map((edu, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-slate-800">{edu.institution}</h3>
            <p className="text-xl font-semibold text-cyan-600 mb-2">{edu.degree}</p>
            <p className="text-slate-500 mb-4">{edu.dates}</p>
            <ul className="list-disc list-outside ml-5 space-y-1 text-slate-700">
              {edu.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Certifications & Achievements Section
const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications & Achievements">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Certifications</h3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700">
            {resumeData.certifications.map((cert, index) => (
              <li key={index}>
                {cert.link && cert.link !== '#' ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:underline font-semibold"
                  >
                    {cert.name}
                  </a>
                ) : (
                  <span>{cert.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Achievements</h3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700">
            {/* Iterating over achievements with potential links */}
            {resumeData.achievements.map((achieve, index) => (
              <li key={index}>
                {/* Conditionally render as a link if 'link' property exists and is not '#' */}
                {achieve.link && achieve.link !== '#' ? (
                  <a
                    href={achieve.link}
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice for target="_blank"
                    className="text-cyan-600 hover:underline font-semibold"
                  >
                    {achieve.name}
                  </a>
                ) : (
                  <span>{achieve.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(''); // 'success', 'error', 'sending'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // In a real application, you would send this data to a backend server.
    // For this frontend-only demo, we'll simulate a submission.
    console.log('Form Data Submitted:', formData);

    setTimeout(() => {
      // Simulate success or error
      const success = Math.random() > 0.3; // 70% chance of success
      if (success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <Section id="contact" title="Get in Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-up">
          <h3 className="text-3xl font-bold text-slate-800 mb-6">Contact Me Directly</h3>
          <div className="space-y-4 text-slate-700 text-lg">
            <p className="flex items-center">
              <svg className="w-6 h-6 text-cyan-500 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              {resumeData.contact.name}
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 text-cyan-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.003 5.884L10.001 11.5L18.003 5.884C17.72 5.378 17.163 5 16.5 5H3.5C2.837 5 2.28 5.378 2.003 5.884ZM2 7.373V16.5C2 17.328 2.672 18 3.5 18H16.5C17.328 18 18 17.328 18 16.5V7.373L10.001 13L2.003 7.373ZM20 5H3.5C2.672 5 2 5.672 2 6.5V17.5C2 18.328 2.672 19 3.5 19H20.5C21.328 19 22 18.328 22 17.5V6.5C22 5.672 21.328 5 20.5 5H20Z"/>
              </svg>
              <a href={`mailto:${resumeData.contact.email}`} className="text-cyan-600 hover:underline">{resumeData.contact.email}</a>
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 text-cyan-500 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              {resumeData.contact.address}
            </p>
            <p className="flex items-center">
              <svg className="w-6 h-6 text-cyan-500 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z"/></svg>
              <a href={`tel:${resumeData.contact.mobile}`} className="text-cyan-600 hover:underline">{resumeData.contact.mobile}</a>
            </p>
          </div>
          <div className="flex space-x-6 mt-8 justify-center">
            {/* LinkedIn Icon */}
            <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
               className="text-slate-700 hover:text-cyan-500 transform hover:scale-125 transition-all duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            {/* GitHub Icon */}
            <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
               className="text-slate-700 hover:text-cyan-500 transform hover:scale-125 transition-all duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.799 8.207 11.387.6.111.82-.26.82-.577v-2.02c-3.338.724-4.043-1.61-4.043-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.24.183 1.24 1.13.084 1.75-1.03 1.75-1.895 0-1.895-1.93-1.65-2.88-1.428-.182-.158-.041-.24.129-.304.887-.142 1.815.195 2.158 1.09.816 1.838 2.535 1.303 3.125 1.144.08-.22.316-.49.608-.602-2.4-.265-4.92-1.2-4.92-5.302 0-1.17.41-2.123 1.09-2.875-.11-.265-.47-1.36.104-2.836 0 0 .89-.29 2.91 1.09.84-.233 1.73-.35 2.62-.35s1.78.117 2.62.35c2.02-1.38 2.91-1.09 2.91-1.09.577 1.476.216 2.57.104 2.836.68 0 1.09.954 1.09 2.875 0 4.11-2.52 5.037-4.92 5.302.318.275.602.82.602 1.655v2.463c0 .318.22.69.82.577C20.562 21.799 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            {/* Email Icon */}
            <a href={`mailto:${resumeData.contact.email}`} aria-label="Email"
               className="text-slate-700 hover:text-cyan-500 transform hover:scale-125 transition-all duration-300">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.003 5.884L10.001 11.5L18.003 5.884C17.72 5.378 17.163 5 16.5 5H3.5C2.837 5 2.28 5.378 2.003 5.884ZM2 7.373V16.5C2 17.328 2.672 18 3.5 18H16.5C17.328 18 18 17.328 18 16.5V7.373L10.001 13L2.003 7.373ZM20 5H3.5C2.672 5 2 5.672 2 6.5V17.5C2 18.328 2.672 19 3.5 19H20.5C21.328 19 22 18.328 22 17.5V6.5C22 5.672 21.328 5 20.5 5H20Z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg animate-fade-in-up animation-delay-200">
          <h3 className="text-3xl font-bold text-slate-800 mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-slate-700 text-lg font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-slate-700 text-lg font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-slate-700 text-lg font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                placeholder="Hello Sameer, I'd like to discuss a project..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'success' && (
              <p className="text-green-600 mt-4 text-center">Message sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 mt-4 text-center">Failed to send message. Please try again later.</p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

// Footer Component (defined outside App)
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href={`mailto:${resumeData.contact.email}`} className="hover:text-cyan-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};


// Main App Component
function App() {
  // Google Analytics setup
  useEffect(() => {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'YOUR_GA_MEASUREMENT_ID') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
        // Initial page view tracking
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      };
    } else {
      console.warn("Google Analytics Measurement ID is not set. Please replace 'YOUR_GA_MEASUREMENT_ID' with your actual GA ID.");
    }
  }, []); // Empty dependency array means this runs once on mount
  
  return (
    <div className="font-sans antialiased text-slate-800 bg-gray-50">
      <Header />
      <main className="pt-24"> {/* Adjusted padding to ensure no content is hidden behind the fixed header */}
        <Hero />
        {/* The About section now has a distinct background color */}
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;