import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ShieldCheck 
} from 'lucide-react';
import { Profile } from '../types/portfolio';

interface FooterProps {
  profile: Profile;
  onOpenResume: () => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume, onOpenAudit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2D2F36] bg-[#0F1012] text-[#80848C] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Col 1: Identity & Positioning */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-[#16181D] border border-[#2D2F36] flex items-center justify-center font-mono font-bold text-xs text-teal-400">
                RS
              </div>
              <span className="text-sm font-semibold text-[#F0F0F0] tracking-tight">
                {profile.name}
              </span>
            </div>
            <p className="text-xs text-[#80848C] max-w-sm leading-relaxed">
              Full-Stack Developer &amp; Computer Engineering student at GITAM (8.78 CGPA). Focused on scalable backends, responsive interfaces, and relational databases.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-teal-400 bg-teal-950/30 border border-teal-800/50 rounded hover:bg-teal-900/40 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Source-of-Truth Content Audit</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <div className="text-[10px] uppercase tracking-[0.25em] text-[#F0F0F0] mb-2 font-sans font-semibold">
              Sections
            </div>
            <div className="grid grid-cols-2 gap-2 text-[#80848C]">
              <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
              <a href="#education" className="hover:text-teal-400 transition-colors">Education</a>
              <a href="#certifications" className="hover:text-teal-400 transition-colors">Certifications</a>
              <a href="#volunteering" className="hover:text-teal-400 transition-colors">Volunteering</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Col 3: Direct Connect & Back-to-Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <div className="flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded hover:border-teal-500/40 transition-colors"
                title="GitHub"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded hover:border-teal-500/40 transition-colors"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded hover:border-teal-500/40 transition-colors"
                title="Email"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenResume}
                className="p-2 text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded hover:border-teal-500/40 transition-colors"
                title="Resume"
                aria-label="Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-[#F0F0F0] bg-[#16181D] border border-[#2D2F36] rounded hover:border-teal-500/50 hover:text-teal-300 transition-all active:scale-95"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-teal-400" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#2D2F36] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <div>
            &copy; {currentYear} {profile.name}. All verified credentials, projects, and academic records preserved.
          </div>
          <div className="text-[#60646C]">
            Design Theme: <span className="text-[#80848C]">Professional Polish</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
