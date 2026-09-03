import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Check, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin 
} from 'lucide-react';
import { Profile } from '../types/portfolio';
import { educationData } from '../data/education';
import { experienceData } from '../data/experience';
import { certificationsData } from '../data/certifications';
import { projectsData } from '../data/projects';
import { skillCategoriesData } from '../data/skills';

interface ResumeModalProps {
  profile: Profile;
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ profile, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0F1012] border border-[#2D2F36] rounded-xl shadow-2xl p-6 sm:p-10 text-[#F0F0F0] my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-[#2D2F36] pb-4 mb-6 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            <span className="text-sm font-mono uppercase tracking-widest text-[#F0F0F0]">
              Curriculum Vitae &bull; {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-teal-600 hover:bg-teal-500 border border-teal-500 rounded transition-colors shadow-sm"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="bg-[#16181D] border border-[#2D2F36] p-6 sm:p-10 rounded-lg space-y-8 print:border-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-[#2D2F36] pb-6 text-center sm:text-left print:border-black">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-white print:text-black">
              {profile.name}
            </h1>
            <div className="text-sm text-teal-400 font-mono mt-1 print:text-teal-700">
              {profile.title} &bull; Computer Engineering Undergraduate
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-[#80848C] font-mono print:text-gray-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-teal-400" />
                <span>{profile.email}</span>
              </span>
              {profile.phone && (
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-teal-400" />
                  <span>{profile.phone}</span>
                </span>
              )}
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-teal-400" />
                <span>{profile.location}</span>
              </span>
              <span className="flex items-center gap-1">
                <Github className="w-3 h-3 text-teal-400" />
                <span>github.com/ragasai3456-art</span>
              </span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-teal-400" />
                <span>linkedin.com/in/adem-raga-sai</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold border-b border-[#2D2F36] pb-1 print:border-black print:text-black">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-[#80848C] leading-relaxed print:text-gray-800">
              {profile.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold border-b border-[#2D2F36] pb-1 print:border-black print:text-black">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map(edu => (
                <div key={edu.id} className="flex justify-between items-start text-xs">
                  <div>
                    <div className="font-medium text-white print:text-black">{edu.institution}</div>
                    <div className="text-[#80848C] print:text-gray-700">{edu.degree} &bull; Aggregate: <span className="text-teal-400 print:text-teal-800 font-semibold">{edu.grade}</span></div>
                  </div>
                  <span className="font-mono text-[#80848C] print:text-gray-600 shrink-0">{edu.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Internships & Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold border-b border-[#2D2F36] pb-1 print:border-black print:text-black">
              Internships &amp; Practical Experience
            </h2>
            <div className="space-y-4">
              {experienceData.map(exp => (
                <div key={exp.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-start">
                    <div className="font-medium text-white print:text-black">
                      {exp.role} &bull; <span className="text-teal-400 print:text-teal-800">{exp.organization}</span>
                    </div>
                    <span className="font-mono text-[#80848C] print:text-gray-600 shrink-0">{exp.duration}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-[#80848C] print:text-gray-700">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold border-b border-[#2D2F36] pb-1 print:border-black print:text-black">
              Technical Projects
            </h2>
            <div className="space-y-4">
              {projectsData.map(proj => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-start">
                    <div className="font-medium text-white print:text-black">
                      {proj.title}
                    </div>
                    <span className="font-mono text-[#80848C] print:text-gray-600 shrink-0">{proj.date}</span>
                  </div>
                  <div className="text-[#80848C] print:text-gray-700">
                    {proj.shortDescription}
                  </div>
                  <div className="text-[11px] font-mono text-teal-400 print:text-teal-800">
                    Technologies: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold border-b border-[#2D2F36] pb-1 print:border-black print:text-black">
              Certifications &amp; Badges
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#80848C] print:text-gray-700">
              {certificationsData.map(c => (
                <li key={c.id} className="flex items-start gap-1.5">
                  <span className="text-teal-400 print:text-teal-800">&bull;</span>
                  <span><strong>{c.title}</strong> – {c.issuer} ({c.issueDate})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-teal-400 font-bold border-b border-[#2D2F36] pb-1 print:border-black print:text-black">
              Skills Summary
            </h2>
            <div className="text-xs text-[#80848C] print:text-gray-700 space-y-1">
              <div><strong className="text-white print:text-black">Programming:</strong> Java, Python, Data Structures &amp; Algorithms, OOP</div>
              <div><strong className="text-white print:text-black">Web &amp; Backend:</strong> React.js, Node.js, Java Servlets, JavaScript, HTML5, CSS3, REST APIs</div>
              <div><strong className="text-white print:text-black">Database:</strong> SQL, MySQL, MySQL Workbench, Schema Normalization (3NF)</div>
              <div><strong className="text-white print:text-black">Cloud &amp; DevOps:</strong> AWS EC2, AWS S3, AWS IAM, AWS Lambda, Linux, Git, GitHub</div>
              <div><strong className="text-white print:text-black">Data &amp; Tools:</strong> Pandas, Matplotlib, Power BI, Excel, Jupyter Notebook, Agile Methodology</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
