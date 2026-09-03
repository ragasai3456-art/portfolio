import { Certification } from '../types/portfolio';

export const certificationsData: Certification[] = [
  {
    id: "aws-data-engineering",
    title: "AWS Academy Graduate – Data Engineering",
    issuer: "AWS Academy",
    issueDate: "18 June 2025",
    courseHours: "40 hours",
    badgeType: "AWS",
    verificationUrl: "https://www.credly.com/go/z1uPFcA2",
    certificateAvailable: true,
    topics: [
      "Data pipeline architectures and cloud data processing",
      "AWS analytical services and distributed data ingestion",
      "Cloud storage configurations with Amazon S3",
      "Scalable data transformation and data engineering workflows"
    ]
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    issueDate: "19 May 2025",
    courseHours: "20 hours",
    badgeType: "AWS",
    verificationUrl: "https://www.credly.com/go/6C3kcqLY",
    certificateAvailable: true,
    topics: [
      "AWS Cloud architectural principles and core global infrastructure",
      "Compute services (Amazon EC2, AWS Lambda)",
      "Identity & Access Management (IAM) security policies",
      "Cloud security best practices, networking, and billing"
    ]
  },
  {
    id: "cisco-networking-basics",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    issueDate: "18 March 2025",
    badgeType: "Cisco",
    certificateAvailable: true,
    topics: [
      "Network communication concepts, topologies, and connections",
      "Network protocols and communication standards",
      "Ethernet communication and framing",
      "IPv4 & IPv6 addressing architectures and subnetting",
      "Router configurations and packet routing mechanisms",
      "Network troubleshooting tools and wireless networking"
    ]
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    issueDate: "Listed on Resume",
    badgeType: "Google",
    certificateAvailable: true,
    topics: [
      "Data cleaning, processing, and integrity verification",
      "SQL data manipulation, aggregation, and query design",
      "Data visualizations and dashboarding techniques",
      "Data-driven decision making and statistical analysis"
    ]
  },
  {
    id: "servicenow-admin-fundamentals",
    title: "ServiceNow Virtual Internship & Administration Fundamentals",
    issuer: "ServiceNow / SmartBridge",
    issueDate: "29 May 2026",
    badgeType: "ServiceNow",
    certificateAvailable: true,
    topics: [
      "ServiceNow Administration Fundamentals & platform navigation",
      "ServiceNow Micro Certification curriculum",
      "Automated Test Framework (ATF) Essentials",
      "Business process automation with ServiceNow Flows",
      "Report generation and system performance analytics",
      "Introduction to Agile methodologies in enterprise environments"
    ]
  }
];
