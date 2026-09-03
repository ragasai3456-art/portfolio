import { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: "weather-app",
    title: "Weather Web Application",
    date: "March 2026",
    category: "Web Development",
    featured: true,
    shortDescription: "A real-time weather application consuming weather APIs through a Node.js backend with dynamic frontend rendering.",
    problem: "Users require quick, accurate weather reports with key atmospheric parameters like temperature, humidity, and condition across global cities without complex navigation.",
    solution: "Developed a lightweight web service with a Node.js backend and clean client-side interface that consumes public weather APIs and dynamically parses JSON payloads for rapid updates.",
    architecture: "Client-side frontend communicating with a Node.js API service that proxies public weather endpoints, sanitizing queries and delivering formatted weather payloads.",
    keyFeatures: [
      "Real-time weather data retrieval using public weather APIs",
      "Dynamic weather metrics rendering: temperature, humidity, wind speed, and atmospheric conditions",
      "City-based instant lookup with asynchronous Fetch/Axios API querying",
      "Responsive weather status cards with dynamic weather condition indicators"
    ],
    engineeringDecisions: [
      "Separated API retrieval logic to prevent unnecessary client requests and keep responses structured",
      "Utilized native Fetch & Axios to handle promise-based asynchronous data fetching with structured error handling",
      "Parsed structured JSON responses for lightweight DOM rendering"
    ],
    challenges: [
      "Managing unpredictable network latency when querying third-party APIs and handling non-existent city queries gracefully",
      "Formatting units and condition statuses dynamically based on returned API payloads"
    ],
    outcome: "Successfully deployed a fast, lightweight live application on GitHub Pages providing instant real-time weather inquiries.",
    role: "Full-Stack Developer (API integration, Node.js backend proxy, responsive UI)",
    technologies: ["JavaScript", "Node.js", "Fetch API", "Axios", "HTML5", "CSS3", "REST APIs"],
    githubUrl: "https://github.com/ragasai3456-art/weather-app",
    liveDemoUrl: "https://ragasai3456-art.github.io/weather-app/",
    uiMockupType: "weather"
  },
  {
    id: "atm-banking-system",
    title: "ATM Banking System",
    date: "April 2026",
    category: "Full Stack",
    featured: true,
    shortDescription: "A full-stack banking application with a React.js interface, Java Servlets backend, and transactional balance management.",
    problem: "Traditional simulated banking systems often lack responsive client interfaces or have tightly coupled business logic that makes state updates sluggish during transactions.",
    solution: "Engineered a decoupled multi-tier banking web application with a modular React.js frontend for card authentication and transactions, backed by Java Servlets for secure transaction verification.",
    architecture: "React.js client handling state transitions and input validation → HTTP REST endpoints powered by Java Servlets → Database persistence layer managing account ledgers and balance states.",
    keyFeatures: [
      "Card Number and PIN authentication interface with credential validation",
      "Core banking transaction workflows: Balance Inquiry, Withdrawals, Deposits, and Credit transactions",
      "Synchronized state management using React Hooks (useState, useEffect) for immediate balance reflection",
      "Backend transaction processing logic developed in Java Servlets with validation safeguards"
    ],
    engineeringDecisions: [
      "Employed Java Servlets to implement clean object-oriented transaction business logic and session handling",
      "Leveraged React Hooks on the frontend to manage transactional state transitions without requiring full-page reloads",
      "Enforced separation of concerns between authentication endpoints and balance update handlers"
    ],
    challenges: [
      "Preventing overdraft race conditions and validating balance integrity before applying debit/withdrawal operations",
      "Managing state consistency between the Java Servlet responses and client-side balance counters"
    ],
    outcome: "Engineered a robust full-stack prototype demonstrating secure account management, transaction logging, and real-time state synchronization.",
    role: "Full-Stack Developer (React frontend architecture, Java Servlets API development, transaction logic)",
    technologies: ["React.js", "Java Servlets", "Java", "Object-Oriented Programming (OOP)", "React Hooks", "HTML5", "CSS3"],
    githubUrl: "https://github.com/ragasai3456-art/ATMSystem/tree/main",
    localDevUrl: "http://localhost:8081/ATMSystem/login.html",
    uiMockupType: "atm"
  },
  {
    id: "student-database-system",
    title: "Student Database System",
    date: "February 2026",
    category: "Databases & APIs",
    featured: true,
    shortDescription: "A relational database management system designed with normalized schemas and SQL CRUD operations for student records.",
    problem: "Academic institutions require dependable, relational data structures to maintain student enrollment records, course enrollments, and academic standings without anomalies or redundancy.",
    solution: "Designed and implemented a normalized relational MySQL database schema supporting comprehensive CRUD operations, coupled with automated testing validation.",
    architecture: "Relational schema designed in MySQL Workbench → Optimized SQL queries with foreign key constraints → Automated validation test suites verifying query outcomes and endpoint stability.",
    keyFeatures: [
      "Normalized relational schema modeling student profiles, course enrollments, and academic records",
      "Complete suite of optimized SQL queries supporting Create, Read, Update, and Delete (CRUD) actions",
      "Data integrity preservation through primary keys, foreign keys, and cascading rules",
      "Integration of automated software testing frameworks to validate schema behavior and API endpoints"
    ],
    engineeringDecisions: [
      "Designed schema with proper normal forms (3NF) to eliminate data redundancy and anomalies during updates",
      "Wrote parameterized queries to uphold data consistency across concurrent record modifications",
      "Implemented test cases to systematically verify data query accuracy before release"
    ],
    challenges: [
      "Structuring complex relational mappings between students, departments, and course enrollments efficiently",
      "Ensuring query execution speed remained high with indexed key constraints"
    ],
    outcome: "Delivered a thoroughly tested relational database architecture capable of reliable student record management and zero integrity violations.",
    role: "Database & Backend Developer (Schema design, SQL query optimization, automated test framework validation)",
    technologies: ["SQL", "MySQL", "MySQL Workbench", "Database Normalization", "Automated Testing", "Data Modeling"],
    githubUrl: "https://github.com/ragasai3456-art/Student-Database-System-MySQL",
    uiMockupType: "database"
  }
];
