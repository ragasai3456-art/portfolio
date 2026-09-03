export interface Profile {
  name: string;
  alternateName?: string;
  title: string;
  roleDescription: string;
  summary: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  resumeFileName: string;
  languages: string[];
  status: string;
  careerGoals: string;
  avatarUrl?: string;
}

export type ProjectCategory = 'All' | 'Full Stack' | 'Web Development' | 'Databases & APIs';

export interface Project {
  id: string;
  title: string;
  date: string;
  category: ProjectCategory;
  shortDescription: string;
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  engineeringDecisions: string[];
  challenges: string[];
  outcome: string;
  role: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string; // Only set if public live deployment exists!
  localDevUrl?: string; // e.g. http://localhost:8081 for internal reference
  screenshotNote?: string;
  featured: boolean;
  uiMockupType?: 'weather' | 'atm' | 'database';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  programOrParentOrg?: string;
  duration: string;
  displayDate: string;
  mode?: 'Virtual / Online' | 'On-site' | 'Hybrid';
  description: string;
  responsibilities: string[];
  technologies: string[];
  certificateAvailable: boolean;
  certificateNote?: string;
  verificationUrl?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  duration: string;
  graduationYear: string;
  grade: string;
  highlights: string[];
  coursework?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  courseHours?: string;
  credentialId?: string;
  verificationUrl?: string;
  badgeType: 'AWS' | 'Cisco' | 'Google' | 'ServiceNow';
  topics: string[];
  certificateAvailable: boolean;
}

export interface VolunteeringItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  period?: string;
  contributions: string[];
  skillsDemonstrated: string[];
  category: 'Club & Creative' | 'College Event';
}

export type SkillProficiency = 'Experienced' | 'Working Knowledge' | 'Academic Exposure' | 'Project Experience';

export interface SkillItem {
  name: string;
  proficiency: SkillProficiency;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface JourneyMilestone {
  year: string;
  phase: string;
  title: string;
  institutionOrOrg: string;
  description: string;
  category: 'education' | 'internship' | 'project' | 'certification' | 'goal';
}
