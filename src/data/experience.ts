import { Experience } from '../types/portfolio';

export const experienceData: Experience[] = [
  {
    id: "prodigy-infotech",
    role: "Full-Stack Web Development Intern",
    organization: "Prodigy InfoTech",
    duration: "1 March 2026 – 31 March 2026",
    displayDate: "March 2026",
    mode: "Virtual / Online",
    description: "Built full-stack web solutions combining Java Servlets backends, MySQL databases, and responsive frontends.",
    responsibilities: [
      "Developed backend services using Java Servlets, applying core Computer Science fundamentals and data structures.",
      "Designed and managed MySQL databases for structured storage, querying, and retrieval of application data.",
      "Integrated Java and Node.js backends with responsive frontend components to deliver seamless web solutions.",
      "Collaborated using Git version control and followed structured software development methodologies."
    ],
    technologies: ["Java Servlets", "Java", "MySQL", "Node.js", "JavaScript", "HTML5", "CSS3", "Git"],
    certificateAvailable: true,
    certificateNote: "Completed 1-month Full-Stack Web Development internship with certificate of completion."
  },
  {
    id: "apexplanet-analytics",
    role: "Data Analytics Intern",
    organization: "ApexPlanet Software Pvt. Ltd.",
    duration: "21 May 2026 – 19 July 2026 (8 weeks & 3 days)",
    displayDate: "May 2026 – July 2026",
    mode: "Virtual / Online",
    description: "Participated in assigned data analytics tasks, dataset preprocessing, exploratory data analysis, and documentation.",
    responsibilities: [
      "Cleaned and transformed tabular datasets using Python (Pandas) and Microsoft Excel to eliminate discrepancies.",
      "Performed exploratory data analysis (EDA) and created visual distributions using Matplotlib.",
      "Derived actionable data insights and thoroughly documented workflows and findings using Jupyter Notebook.",
      "Maintained version control and task artifacts using GitHub."
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Microsoft Excel", "Jupyter Notebook", "GitHub"],
    certificateAvailable: true,
    certificateNote: "Certificate of completion for 8-week virtual data analytics internship program."
  },
  {
    id: "servicenow-smartbridge",
    role: "ServiceNow Virtual Intern",
    organization: "ServiceNow / SmartBridge",
    programOrParentOrg: "SmartBridge & ServiceNow Virtual Internship Program",
    duration: "Completed May 2026",
    displayDate: "May 2026",
    mode: "Virtual / Online",
    description: "Completed comprehensive enterprise platform training spanning administration fundamentals, Agile workflows, and automated testing.",
    responsibilities: [
      "Studied ServiceNow Administration Fundamentals, core platform architecture, and table structures.",
      "Explored Automated Test Framework (ATF) essentials for automated verification of platform components.",
      "Implemented enterprise business logic and process automation using ServiceNow Flow Designer.",
      "Configured custom reports and metrics dashboards to support operational monitoring.",
      "Applied Agile methodologies and sprint-based project delivery practices."
    ],
    technologies: ["ServiceNow Platform", "Agile Methodology", "ATF (Automated Test Framework)", "Flow Designer", "Reports & Analytics"],
    certificateAvailable: true,
    certificateNote: "Certificate issued on 29 May 2026 covering Administration Fundamentals, ATF, Flows, and Agile."
  },
  {
    id: "aicte-aws-cloud",
    role: "Cloud Computing Intern",
    organization: "AICTE / AWS Academy",
    programOrParentOrg: "AWS Virtual Internship – Cloud Computing",
    duration: "May 2025 – June 2025",
    displayDate: "May 2025 – June 2025",
    mode: "Virtual / Online",
    description: "Hands-on virtual internship focusing on cloud infrastructure provisioning, serverless automation, and cloud security.",
    responsibilities: [
      "Deployed and managed Amazon EC2 instances for cloud-based application hosting and environment testing.",
      "Implemented serverless functions using AWS Lambda to automate operational cloud workflows.",
      "Configured IAM roles, permission policies, and security groups to enforce least-privilege cloud access.",
      "Utilized Amazon S3 for durable cloud object storage and static asset hosting."
    ],
    technologies: ["AWS EC2", "AWS Lambda", "AWS S3", "AWS IAM", "Cloud Architecture"],
    certificateAvailable: true,
    certificateNote: "Completed AICTE & AWS Academy Cloud Computing virtual internship program."
  }
];
