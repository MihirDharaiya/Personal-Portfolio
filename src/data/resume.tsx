import { Icons } from "@/components/icons";
import { Certificate } from "crypto";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mihir Dharaiya",
  initials: "MD",
  url: "https://mihirdharaiya.com",
  location: "Toronto, ON",
  locationLink: "https://www.google.com/maps/place/Toronto,+ON/@43.7181228,-79.5428633,11z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.653226!4d-79.3831843!16zL20vMGg3aDY?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Data enthusiast skilled in statistical analysis, data visualization, and machine learning.",
  summary:
  "👋 Hello! I'm a 🎯 Data Enthusiast with a passion for transforming raw data into actionable insights. I specialize in using analytics to drive meaningful solutions, with experience in diverse projects like predictive modeling, dashboard creation, and data migration. Let’s connect to explore how data-driven strategies can elevate your business!",
  avatarUrl: "/m.jpeg",
  skills: [
    "Python",
    "SQL",
    "R Programming",
    "Tableau",
    "Power BI",
    "Machine Learning",
    "Data Exploration",
    "Data Visualization",
    "Micrsoft Excel",
    "Macros",
    "VBA",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Go",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    //{ href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mdharaiya800@gmail.com",
    tel: "+14375576807",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MihirDharaiya",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mihir-dharaiya/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/DharaiyaMihir",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Loblaw Companies Limited",
      href: "https://www.loblaw.ca/",
      badges: [],
      location: "Toronto",
      title: "Market Analyst Co-op",
      logoUrl: "/LCL.png",
      start: "January 2025",
      end: "April 2025",
      description:
      "Leveraged Python and Large Language Models (LLMs) to automate web scraping and data cleaning for competitor price matching, significantly improving accuracy and operational efficiency. Conducted SQL analysis to uncover trends for category teams, enabling a strategic $3M+ beverage partnership. Analyzed customer purchasing behavior and generated product recommendations using SQL, enabling pricing strategies that boosted sales and enhanced engagement. Optimized complex Excel-based tools by refactoring VBA scripts, reducing computation time from 20+ minutes to under 1 minute and accelerating decision-making for the merchandising team. Skills: Python, LLMs, SQL, Excel, VBA, Macros, Git, Data Analysis, Retail Analytics, Automation"
    },
    {
      company: "Royal Canadian Insitute for Science",
      href: "https://www.rciscience.ca/",
      badges: [],
      location: "Toronto",
      title: "Student Data Analyst",
      logoUrl: "/rciscience_logo.jpeg",
      start: "April 2024",
      end: "June 2024",
      description:
      "Directed a cross-functional initiative to migrate analytics infrastructure from Universal Analytics to Google Analytics 4, improving tracking accuracy by 25%. Evaluated web traffic and social engagement data, deriving insights that informed content strategy and drove a 30% increase in website traffic. Produced actionable dashboards and visual reports in Tableau through robust EDA, aligning recommendations with strategic business objectives. Skills: Google Analytics 4, Tableau, EDA, Python, SQL, Data Visualization, Social Media Analytics"
    },
    {
      company: "Indus University",
      badges: [],
      href: "https://www.indusuni.ac.in/",
      location: "India",
      title: "Data Analyst Intern",
      logoUrl: "/indus.webp",
      start: "June 2022",
      end: "August 2022",
      description:
      "Spearheaded the development of a performance tracking platform for social media creators across YouTube, Twitter, and Instagram, enabling enhanced content strategies. Applied machine learning models for Twitter sentiment analysis using Python, automating insight generation and improving creator engagement by 10%. Designed interactive Power BI dashboards that empowered users to self-monitor performance, resulting in an 8% increase in online visibility. Skills: Python, Power BI, Machine Learning, Sentiment Analysis, Social Media Analytics, SQL"
    },
    {
      company: "Coding Ninjas",
      href: "https://www.codingninjas.com/",
      badges: [],
      location: "India",
      title: "Teaching Assistant",
      logoUrl: "/CodingNinjas.png",
      start: "September 2021",
      end: "January 2022",
      description:
        "Mentored over 500 students in resolving complex inquiries related to Data Structures and Algorithms in Java, showcasing strong domain expertise and communication skills. Managed challenging debugging and optimization scenarios, improving code efficiency and problem-solving approaches, while fostering a learning-focused environment.Earned a 4.7/5 rating for consistently delivering high-quality assistance, demonstrating active listening, problem resolution, and clear communication skills.",
    },
  ],
  education: [
    {
      school: "Northeastern University",
      href: "https://www.northeastern.edu/",
      degree: "Master of Professional Studies in Analytics",
      logoUrl: "/Northeastern.webp",
      start: "2023",
      end: "2025",
    },
    {
      school: "Indus University",
      href: "https://www.indusuni.ac.in/",
      degree: "B.Tech in Computer Science & Engineering",
      logoUrl: "/indus.webp",
      start: "2019",
      end: "2023",
    },
  ],
  certifications: [
    {
      title: "Power BI Data Analyst Associate",
      href: "https://learn.microsoft.com/en-us/users/mihirdharaiya-5742/credentials/certification/data-analyst-associate?tab=credentials-tab",
      active: true,
      description: "Microsoft",
      links: [
        {
          type: "Microsoft",
          href: "https://learn.microsoft.com/en-us/users/mihirdharaiya-5742/credentials/certification/data-analyst-associate?tab=credentials-tab",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pl300.png",
    },
    {
      title: "Google Data Analytics",
      href: "https://www.coursera.org/account/accomplishments/specialization/N59F8ZVJFUVR",
      active: true,
      links: [
        {
          type: "Coursera",
          href: "https://www.coursera.org/account/accomplishments/specialization/N59F8ZVJFUVR",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/coursera.png",
    },
    {
      title: "The Ultimate MySQL Bootcamp",
      href: "https://www.udemy.com/certificate/UC-7c9e5e4a-3db8-4a61-9062-8ba78ecc41e2/",
      active: true,
      links: [
        {
          type: "Udemy",
          href: "https://www.udemy.com/certificate/UC-7c9e5e4a-3db8-4a61-9062-8ba78ecc41e2/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sql.png",
    },
    {
      title: "Introduction to R",
      href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a88ab67cfc600f069bdde176cac62c5495658b0f",
      active: true,
      links: [
        {
          type: "Datacamp",
          href: "https://www.datacamp.com/completed/statement-of-accomplishment/course/a88ab67cfc600f069bdde176cac62c5495658b0f",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/r.png",
    },
    
  ],
  projects: [
    {
      title: "SyncScribe AI",
      href: "https://github.com/aryan-michael/syncscribe-ai",
      active: true,
      description:
      "Transform your meetings into actionable insights with AI-powered transcription summaries and intelligent analysis.",
      technologies: [
        "Python",
        "Large Language Model(LLMs)",
        "Cohere API",
        "Google Speech-to-Text API",
        "Vertex AI",
        "Gemini",
        "Next.js",
        "Flask"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aryan-michael/syncscribe-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/syncscribe.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Valorant Statistics",
      href: "https://github.com/MihirDharaiya/Valorant-Statistics",
      active: true,
      description:
        "Built a Power BI dashboard that reduced player scouting time by 8%, providing real-time insights on player statistics across agents and maps based on past tournament data. Analyzed a dataset of over 80,000 entries with diverse variables, offering comprehensive insights into player performance and strategic decisions.",
      technologies: [
        "Microsoft Power BI",
        "Microsoft Excel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MihirDharaiya/Valorant-Statistics",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ValorantStatistics.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "TTC Subway Delay Prediction",
      href: "https://magicui.design",
      active: true,
      description:
        "Designed a platform using supervised machine learning techniques to predict subway delays, improving the commuter experience in Toronto by 15%. Executed ETL processes and conducted Exploratory Data Analysis (EDA) using Python and SQL, uncovering critical patterns that enhanced insights into delay factors.",
      technologies: [
        "Python",
        "SQL",
        "Microsoft Excel",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MihirDharaiya/TTC-Subway-Delay-Prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ttc.webp",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "GitFlux",
      href: "https://llm.report",
      active: true,
      description:
        "Optimized GitHub account switching with a command-line app with seamless integration into npm, reducing manual switch time by 50% through an intuitive menu and safeguards for default accounts.",
      technologies: [
        "Go Lang",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MihirDharaiya/gitflux",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gitflux.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Creator-IT",
      href: "https://github.com/MihirDharaiya/creator_it",
      active: true,
      description:
        "Creator-IT is SEO optimisation and recommendation website for Youtubers, Instagram creators and other platforms creators. Helps content creators in generating video titles, hashtags and much more.",
      technologies: [
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MihirDharaiya/creator_it",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/creatorit.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Customer Churn Analysis",
      href: "https://github.com/MihirDharaiya/Telecom-Customer-Churn-Analysis",
      active: true,
      description:
        "This project aims to delve into customer churn within a company primarily operating in California. By analyzing different factors influencing customer attrition, we seek insights to guide strategic decision-making and improve efforts in retaining customers.",
      technologies: [
        "Microsoft Excel",
        "Tableau",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MihirDharaiya/Telecom-Customer-Churn-Analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ChurnAnalysis.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Airbnb Real Estate Listings Analysis",
      href: "https://github.com/MihirDharaiya/Airbnb-Real-Estate-Listings-Analysis",
      active: true,
      description:
        "This project is focused on the analysis of the the Airbnb's Real Estate Listings dataset which is avaiable on kaggle.",
      technologies: [
        "R Programming",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MihirDharaiya/Airbnb-Real-Estate-Listings-Analysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/airbnb.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Indus Uni App",
      href: "https://github.com/MihirDharaiya/IndusUniApp",
      active: true,
      description:
        "The project is dedicated to addressing students inquiries and enhancing transparency between faculty members and students. There has been an 80% reduction in resolution time. The applications involved are IndusAchiever, IndusFaculty, and AdminPortal.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "ReactNative"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MihirDharaiya/IndusUniApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/indusuniapp.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Mobile Price Prediction",
      href: "https://github.com/MihirDharaiya/Mobile-Price-Prediction",
      active: true,
      description:
        "Developed a Python-based Mobile Phone Price Prediction model for accurate forecasting of mobile phone prices, enhancing decision-making in the tech market.",
      technologies: [
        "Python",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/MihirDharaiya/Mobile-Price-Prediction",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mobile.jpg",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "GenAI Genesis 2025",
      dates: "March 21st - 23rd, 2025",
      location: "Toronto, Ontario",
      description:
      "Built a tool that transforms meetings into actionable insights using AI-powered transcription, smart summaries, and intelligent analysis.",
      image:
        "/genai.svg",
      mlh: "https://genaigenesis.ca/",
      links: [],
    },
    {
      title: "Telus Data for Good",
      dates: "November 6th - 7th, 2024",
      location: "Toronto, Ontario",
      description:
        "Developed a machine learning model to predict traffic congestion during the Taylor Swift Eras Tour in downtown areas. The model identified high-risk zones for congestion and provided actionable recommendations for traffic management, enhancing the flow and minimizing delays during the event",
      image:
        "/Northeastern.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    // {
    //   title: "ETH Toronto",
    //   dates: "August 13th - 15th, 2024",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
    //   links: [
    //     {
    //       title: "Organization",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/ethdocnet",
    //     },
    //   ],
    // },
    {
      title: "Walmart Hackathon",
      dates: "October 12th - 13th, 2023",
      location: "Toronto, Ontario",
      description:
        "We proposed a model to prioritize store space allocation based on department sales efficiency and availability, addressing Walmart's challenge of reducing store size while maximizing product display to enhance product visibility in compact layouts.",
      image:
        "/Northeastern.png",
      links: [],
    },
    // {
    //   title: "Smart India Hackathon",
    //   dates: "January 18th - 20th, 2021",
    //   location: "Gujarat, India",
    //   description:
    //     "Developed a web application which delivers university campus wide events in real time to all students.",
    //   image:
    //     "/Northeastern.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
