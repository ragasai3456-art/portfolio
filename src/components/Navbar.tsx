import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  FileText, 
  Github, 
  Linkedin,
  ShieldCheck
} from 'lucide-react';
import { Profile } from '../types/portfolio';

interface NavbarProps {
  profile: Profile;
  darkMode: boolean;
  toggleDarkMode: () => void;
  onOpenResume: () => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  darkMode,
  toggleDarkMode,
  onOpenResume,
  onOpenAudit
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Volunteering', href: '#volunteering' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0F1012]/90 border-b border-[#2D2F36] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Name */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
          aria-label="A Raga Sai Portfolio Home"
        >
          <div className="w-9 h-9 rounded-md bg-[#16181D] border border-[#2D2F36] flex items-center justify-center font-mono font-bold text-sm text-teal-400 group-hover:border-teal-500/50 transition-colors">
            RS
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[#F0F0F0] group-hover:text-white transition-colors">
              {profile.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#80848C]">
              Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          <div className="flex items-center gap-5 text-xs font-medium tracking-wider uppercase text-[#80848C]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white hover:border-b hover:border-teal-400 py-1 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-4 w-px bg-[#2D2F36]" />

          {/* Social Links & Actions */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#80848C] hover:text-white hover:bg-[#1A1C20] rounded border border-transparent hover:border-[#2D2F36] transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#80848C] hover:text-white hover:bg-[#1A1C20] rounded border border-transparent hover:border-[#2D2F36] transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Audit Button */}
            <button
              onClick={onOpenAudit}
              className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium tracking-wide text-teal-300 bg-teal-950/40 border border-teal-800/60 rounded hover:bg-teal-900/50 transition-colors"
              title="View Source-of-Truth Content Audit"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>Audit</span>
            </button>

            {/* Resume CTA */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium tracking-wide text-white bg-teal-600 hover:bg-teal-500 rounded border border-teal-500 shadow-sm transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-[#80848C] hover:text-white hover:bg-[#1A1C20] rounded border border-[#2D2F36] transition-all"
              aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu triggers */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-teal-300 bg-teal-950/40 border border-teal-700/50 rounded"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </button>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#2D2F36] bg-[#0F1012] px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider text-[#80848C]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2.5 px-3 rounded bg-[#16181D] border border-[#2D2F36] hover:text-white hover:border-teal-500/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#2D2F36] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  onOpenAudit();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-1 px-3 py-1.5 text-xs text-teal-300 bg-teal-950/40 border border-teal-800 rounded"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Audit</span>
              </button>
            </div>

            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-teal-600 rounded border border-teal-500"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
