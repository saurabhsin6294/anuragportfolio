// ============================================================
// portfolioData.js — Centralized configuration for Anurag Tiwari's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Anurag Tiwari",
  firstName: "Anurag",
  brandName: "Anurag",
  title: "Data Analyst & Data Scientist",
  location: "Lucknow, India",
  phone: "+91 81126-02692",
  emails: {
    primary: "anuragtiwariii.work@gmail.com",
    secondary: "anuragtiwariii.work@gmail.com",
  },
  summary:
    "Fresher Data Analyst with a B.Com background and hands-on training from Console Flare Data Science Bootcamp. Skilled in Python (pandas, NumPy), SQL, Excel, and Power BI. Enthusiastic about analyzing data and supporting data-driven decision-making.",
  resumeUrl: "/Anurag_Tiwari_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/saurabhsin6294/spsportfolio", // Fallback placeholder
  linkedin: "https://www.linkedin.com/in/saurabh-pratap-singh-4a9968253", // Fallback placeholder
  instagram: "#",
};

export const heroContent = {
  greeting: "Hi, I'm Anurag Tiwari",
  titleHighlight: "Data Analyst & Scientist",
  subtitle:
    "I extract actionable insights from complex datasets using Python, SQL, Power BI, and Tableau to drive business growth.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:anuragtiwariii.work@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Anurag,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Anurag_Tiwari_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Anurag Tiwari</span>, a Fresher Data Analyst based in Lucknow, India. Leveraging a B.Com background and bootcamp training from Console Flare, I bridge the gap between complex raw data and strategic business decision-making.`,
  techStack: ["Python", "SQL", "Power BI", "Tableau"],
};

export const skillsContent = {
  badge: "My Methodology",
  heading: "Turning Raw Data Into Strategic Business Decisions",
  description:
    "I follow a structured pipeline of data collection, wrangling, exploratory analysis, and visual dashboard design.",
  cards: [
    {
      number: "01",
      title: "Data Extraction",
      text: "Gathering structural and unstructured datasets from SQL databases, CSVs, and Excel sheets safely.",
    },
    {
      number: "02",
      title: "Data Wrangling",
      text: "Cleaning and processing datasets using Python (pandas, NumPy) to handle null values, duplicates, and data modeling.",
    },
    {
      number: "03",
      title: "Exploratory Analysis",
      text: "Performing descriptive statistics and logical SQL queries to discover sales trends, customer behavior, and market patterns.",
    },
    {
      number: "04",
      title: "Visualization",
      text: "Building interactive, real-time dashboards in Power BI and Tableau to deliver clear reports for executive decision-makers.",
    },
  ],
  endText: "Ready to analyze!",
};

// Brand New Technical Skills Data for Data Analyst
export const technicalSkills = {
  categories: [
    {
      title: "Programming & Scripts",
      skills: [
        { name: "Python (pandas, NumPy)", level: 85 },
        { name: "SQL (Queries & Joins)", level: 82 },
        { name: "Python Basic Coding", level: 75 }
      ]
    },
    {
      title: "BI & Visualization Tools",
      skills: [
        { name: "Power BI", level: 88 },
        { name: "Tableau", level: 80 },
        { name: "MS Excel (Pivot, VLOOKUP)", level: 90 }
      ]
    },
    {
      title: "Data Analytics Concepts",
      skills: [
        { name: "Data Cleaning & Wrangling", level: 85 },
        { name: "Exploratory Data Analysis", level: 82 },
        { name: "Data Modeling", level: 78 },
        { name: "Sales Trend Analysis", level: 80 }
      ]
    },
    {
      title: "Business & Commerce",
      skills: [
        { name: "Financial Tracking", level: 85 },
        { name: "Marketing Strategy Insights", level: 80 },
        { name: "Descriptive Statistics", level: 75 }
      ]
    }
  ]
};

// Brand New Leadership / Bootcamps Data
export const leadershipList = [
  {
    title: "Console Flare Data Science Bootcamp",
    description: "Successfully completed intensive hands-on bootcamp training covering Data Wrangling, SQL database queries, and BI visualization pipelines.",
    role: "Bootcamp Graduate",
    badge: "Bootcamp"
  },
  {
    title: "Marketing Strategy Project - Brindavan Bottlers",
    description: "Assisted senior marketing teams in analyzing regional distributor sales and designing promotional campaigns based on data insights.",
    role: "Strategic Analyst Support",
    badge: "Marketing"
  },
  {
    title: "B.Com Graduation Studies - Goel Institute",
    description: "Studied business accounting, statistics, audit procedures, and retail commerce, forming a strong financial and commercial foundation.",
    role: "Business Studies",
    badge: "Academic"
  }
];

// Brand New Internships / Experience Data
export const internshipsList = [
  {
    organization: "Brindavan Bottlers Pvt. Ltd.",
    role: "Marketing Intern & Data Analyst",
    duration: "June 2024 – August 2024",
    skills: [
      "Analyzed beverage sales data to identify trends and regional distributor insights.",
      "Developed and implemented interactive data visualization dashboards using Power BI and Tableau.",
      "Assisted in developing target marketing strategies and campaigns based on data-driven insights."
    ],
    tech: ["Power BI", "Tableau", "Excel", "SQL", "Sales Analysis"]
  }
];

// Brand New Soft Skills Data
export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Working seamlessly with cross-functional marketing and technical teams." },
  { name: "Effective Communication", icon: "💬", desc: "Translating technical data metrics into simple, actionable business speak." },
  { name: "Problem-Solving", icon: "🧩", desc: "Deconstructing ambiguous database queries into clean analytical steps." },
  { name: "Time Management", icon: "⏰", desc: "Managing multiple project dashboards and research targets efficiently." },
  { name: "Adaptability", icon: "🌟", desc: "Quick to pick up new analytics libraries, statistical methodologies, and BI features." }
];

export const projects = [
  {
    id: "sales-dashboard",
    number: "01",
    badge: "🚀 Brindavan Bottlers",
    title: "Sales Performance & Trend Dashboard",
    description:
      "Designed and developed a comprehensive Power BI and Tableau dashboard analyzing historical beverage sales data for Brindavan Bottlers Pvt. Ltd. It visualizes sales distribution across geographic regions, highlights top-performing products, and details seasonal trends to assist marketing campaigns.",
    techTags: ["Power BI", "Tableau", "MS Excel", "Sales Trends"],
    links: {
      github: "#",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "feedback-analysis",
    number: "02",
    badge: "Python Analysis",
    title: "Customer Reviews Sentiment Pipeline",
    description:
      "Created a data analysis pipeline in Python using pandas and NumPy to parse, clean, and analyze customer feedback datasets. Generates descriptive statistics and visual graphs of satisfaction drivers to help businesses target customer pain points.",
    techTags: ["Python", "pandas", "NumPy", "Jupyter Notebook", "SQL"],
    links: {
      github: "#",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "financial-analysis",
    number: "03",
    badge: "SQL & Excel",
    title: "Business Financial Margin Tracker",
    description:
      "A B.Com case-study application designed in MS Excel and SQL to calculate monthly recurring revenue, operational expenses, and product profit margins, outputting clean database records and pivot analysis templates.",
    techTags: ["MS Excel", "SQL", "Data Cleansing", "Pivot Tables"],
    links: {
      github: "#",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Console Flare Data Science Bootcamp",
      issuer: "Console Flare",
      icon: "📊",
    },
    {
      name: "Excel for Data Analysis",
      issuer: "Console Flare",
      icon: "📈",
    },
    {
      name: "SQL Database Querying",
      issuer: "Udemy",
      icon: "🗄️",
    },
    {
      name: "Power BI Dashboard Design",
      issuer: "Console Flare",
      icon: "📉",
    }
  ],
  viewAllUrl: "#",
};

export const education = {
  degree: "B. Com – Bachelor of Commerce",
  institution: "GOEL INSTITUTE OF TECHNOLOGY AND MANAGEMENT",
  graduation: "2025",
  twelfth: "Intermediate – Commerce (2022)",
  tenth: "High School – CBSE (2020)",
};

export const footerContent = {
  taglines: [
    "Data Analytics & Science",
    "Python · SQL · Power BI · Excel",
    "Data-Driven Decisions",
  ],
  credential: "B.Com Graduate · Console Flare Bootcamp",
  copyright: `© ${new Date().getFullYear()} Anurag Tiwari | All Rights Reserved`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
