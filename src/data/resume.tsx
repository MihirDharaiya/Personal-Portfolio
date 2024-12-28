import { Icons } from "@/components/icons";
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
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      company: "Royal Canadian Insitute for Science",
      href: "https://www.rciscience.ca/",
      badges: [],
      location: "Toronto",
      title: "Student Data Analyst",
      logoUrl: "/rciscience_logo.jpeg",
      start: "April 2024",
      end: "June 2024",
      description:
        "Led a cross-functional team to design and implement an ETL data migration architecture from Universal Analytics to Google Analytics 4, ensuring seamless data tracking continuity and improving data accuracy by 25%.Evaluated social network traffic data in depth and leveraged data-driven insights to enhance the social media content strategy, driving a 30% increase in website traffic.Developed comprehensive data reports in Tableau by conducting Exploratory Data Analysis (EDA), delivering actionable insights and practical recommendations that aligned with key business goals.",
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
        "Directed the development of a versatile platform for social media creators, addressing the challenge of enhancing content strategy across YouTube, Twitter, and Instagram, successfully meeting business requirements.Implemented machine learning techniques for Twitter sentiment analysis using Python, automating insight generation for creators, leading to a 10% increase in engagement and demonstrating proficiency in advanced analytics.Facilitated creators growth by designing user-friendly Power BI dashboards, enabling them to independently enhance content, resulting in an 8% increase in online presence.",
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
      logoUrl: "/northeastern.webp",
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
  projects: [
    {
      title: "Valorant Statistics",
      href: "https://app.powerbi.com/view?r=eyJrIjoiNGZiYWUyMjgtZmUyYS00NDY1LTlmYzgtNmY4MWYxMmVmYzUxIiwidCI6ImE4ZWVjMjgxLWFhYTMtNGRhZS1hYzliLTlhMzk4YjkyMTVlNyIsImMiOjN9&pageName=ReportSection6b109e940a393b49ebe0",
      active: true,
      description:
        "Built a Power BI dashboard that reduced player scouting time by 8%, providing real-time insights on player statistics across agents and maps based on past tournament data. Analyzed a dataset of over 80,000 entries with diverse variables, offering comprehensive insights into player performance and strategic decisions.",
      technologies: [
        "Microsoft Power BI",
        "Microsoft Excel",
      ],
      links: [
        {
          type: "Dashboard",
          href: "https://app.powerbi.com/view?r=eyJrIjoiNGZiYWUyMjgtZmUyYS00NDY1LTlmYzgtNmY4MWYxMmVmYzUxIiwidCI6ImE4ZWVjMjgxLWFhYTMtNGRhZS1hYzliLTlhMzk4YjkyMTVlNyIsImMiOjN9&pageName=ReportSection6b109e940a393b49ebe0",
          icon: <Icons.globe className="size-3" />,
        },
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
