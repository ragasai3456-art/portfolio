import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Languages, 
  Camera, 
  MapPin, 
  Check, 
  Terminal,
  Server
} from 'lucide-react';
import { Profile } from '../types/portfolio';

interface AboutProps {
  profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 border-b border-[#2D2F36] bg-[#0F1012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-teal-400"></span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-teal-400 font-mono">
              01 &bull; Profile &amp; Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F0F0F0]">
            About <span className="text-teal-400 font-normal">Me</span>
          </h2>
          <p className="mt-2 text-sm text-[#80848C] max-w-xl">
            Software Developer and Computer Engineering student combining core computer science fundamentals with hands-on full-stack, cloud, and database engineering.
          </p>
        </div>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story (8 Cols) */}
          <div className="lg:col-span-8 space-y-6 text-[#80848C] text-base leading-relaxed">
            <p>
              I am currently pursuing my <strong className="text-[#F0F0F0] font-medium">B.Tech in Computer Engineering</strong> at <strong className="text-[#F0F0F0] font-medium">Gandhi Institute of Technology and Management (GITAM)</strong>, maintaining a cumulative <strong className="text-teal-400 font-medium">8.78 CGPA</strong>. My academic coursework has established a rigorous foundation in Object-Oriented Programming, Data Structures &amp; Algorithms, Database Management Systems, and Computer Networks.
            </p>

            <p>
              Across multiple internships and engineering projects, I have developed practical expertise in both backend and frontend development. At <strong className="text-[#F0F0F0] font-medium">Prodigy InfoTech</strong>, I engineered backend services using <strong className="text-[#F0F0F0] font-medium">Java Servlets</strong> and structured <strong className="text-[#F0F0F0] font-medium">MySQL</strong> databases, linking them with responsive web components. During my cloud internship with <strong className="text-[#F0F0F0] font-medium">AICTE &amp; AWS Academy</strong>, I provisioned Amazon EC2 instances, automated serverless routines using <strong className="text-[#F0F0F0] font-medium">AWS Lambda</strong>, and enforced strict security access with <strong className="text-[#F0F0F0] font-medium">AWS IAM</strong> roles.
            </p>

            <p>
              Additionally, my analytical internship at <strong className="text-[#F0F0F0] font-medium">ApexPlanet Software</strong> gave me extensive experience preprocessing data using <strong className="text-[#F0F0F0] font-medium">Python (Pandas)</strong>, performing exploratory data analysis with <strong className="text-[#F0F0F0] font-medium">Matplotlib</strong>, and documenting findings in Jupyter Notebooks.
            </p>

            <p>
              Beyond technical engineering, I bring a strong collaborative mindset and creative perspective. I am an active photography member of the <strong className="text-[#F0F0F0] font-medium">GStudio Photography Club</strong> at GITAM, where I practice visual storytelling, composition, and team cooperation. I have also volunteered for major campus events including the College Technical Symposium and Homecoming.
            </p>

            {/* Core Development Focus Matrix */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#16181D] border border-[#2D2F36]">
                <div className="flex items-center gap-2 text-[#F0F0F0] text-sm font-medium mb-1">
                  <Server className="w-4 h-4 text-teal-400" />
                  <span>Backend &amp; Relational Databases</span>
                </div>
                <p className="text-xs text-[#80848C]">
                  Proficient in Java Servlets, OOP principles, SQL CRUD operations, and normalized schema design (3NF).
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#16181D] border border-[#2D2F36]">
                <div className="flex items-center gap-2 text-[#F0F0F0] text-sm font-medium mb-1">
                  <Terminal className="w-4 h-4 text-teal-400" />
                  <span>Cloud Workflows &amp; APIs</span>
                </div>
                <p className="text-xs text-[#80848C]">
                  AWS Academy Cloud &amp; Data Engineering graduate with real deployment and serverless automation experience.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Metadata (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Quick Facts Card */}
            <div className="p-6 bg-[#16181D] border border-[#2D2F36] rounded-lg space-y-4">
              <div className="border-b border-[#2D2F36] pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  <h3 className="text-xs uppercase tracking-[0.3em] text-[#80848C] font-mono">
                    Engineering Profile
                  </h3>
                </div>
                <div className="text-base font-medium text-[#F0F0F0]">
                  {profile.name}
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[11px] text-teal-400 font-mono">
                    Adem Raga Sai
                  </span>
                  <span className="text-[#2D2F36]">&bull;</span>
                  <span className="text-[11px] text-[#80848C] font-mono">
                    Computer Engineering
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-[#80848C] block text-[10px] uppercase tracking-wider">Full Name</span>
                  <span className="text-[#F0F0F0] font-medium">{profile.name} (Adem Raga Sai)</span>
                </div>

                <div>
                  <span className="text-[#80848C] block text-[10px] uppercase tracking-wider">Education</span>
                  <span className="text-[#F0F0F0] font-medium">B.Tech Computer Engineering (2023–2027)</span>
                  <span className="text-teal-400 block font-mono">GITAM &bull; 8.78 CGPA</span>
                </div>

                <div>
                  <span className="text-[#80848C] block text-[10px] uppercase tracking-wider">Location</span>
                  <span className="text-[#F0F0F0] font-medium">{profile.location}</span>
                </div>

                <div>
                  <span className="text-[#80848C] block text-[10px] uppercase tracking-wider">Languages</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {profile.languages.map(lang => (
                      <span key={lang} className="px-2 py-0.5 rounded bg-[#1A1C20] border border-[#2D2F36] text-[11px] text-[#F0F0F0]">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[#80848C] block text-[10px] uppercase tracking-wider">Extracurricular</span>
                  <span className="text-[#F0F0F0]">Photography Member, GStudio Club</span>
                  <span className="text-[#80848C] block text-[11px]">Symposium &amp; Homecoming Volunteer</span>
                </div>
              </div>
            </div>

            {/* Academic Track Badge */}
            <div className="p-4 bg-teal-950/20 border border-teal-800/40 rounded-lg">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <GraduationCap className="w-4 h-4" />
                <span>Academic Consistency</span>
              </div>
              <p className="text-xs text-[#80848C]">
                Ranked with 927/1000 in 12th Intermediate MPC and 8.78 CGPA in university Computer Engineering.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
