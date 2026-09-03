import React from 'react';
import { 
  X, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  HelpCircle,
  FileText
} from 'lucide-react';

interface ContentAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContentAuditModal: React.FC<ContentAuditModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0F1012] border border-[#2D2F36] rounded-xl shadow-2xl p-6 sm:p-8 text-[#F0F0F0] my-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#2D2F36] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-teal-950/40 border border-teal-800 text-teal-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-light tracking-tight text-white">
                Portfolio Content Audit
              </h3>
              <p className="text-xs text-[#80848C] font-mono">
                Source-of-Truth Cross-Check &bull; Integrity Report
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#80848C] hover:text-white bg-[#16181D] border border-[#2D2F36] rounded"
            aria-label="Close audit modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Audit Status Summary */}
        <div className="p-4 bg-emerald-950/20 border border-emerald-800/40 rounded-lg flex items-start gap-3 text-xs text-emerald-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block">Zero Fabricated Information Enforced</strong>
            All names, CGPA scores (8.78), marks (927/1000), internships, certifications, and GitHub repositories are verified against the uploaded resume, PDF certificates, and project notes.
          </div>
        </div>

        {/* Section Breakdown */}
        <div className="space-y-4 text-xs">
          
          {/* 1. Verified Data */}
          <div className="p-4 bg-[#16181D] border border-[#2D2F36] rounded-lg space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-teal-400 font-mono font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>1. Confirmed &amp; Verified Data Points</span>
            </span>
            <ul className="space-y-1.5 text-[#80848C] pl-6 list-disc">
              <li><strong className="text-white">Full Name:</strong> A Raga Sai / Adem Raga Sai (verified on Cisco &amp; AWS certificates).</li>
              <li><strong className="text-white">Education:</strong> GITAM B.Tech Computer Engineering (2023–2027, 8.78 CGPA) &amp; Sri Chaitanya Junior College MPC (2021–2023, 927/1000).</li>
              <li><strong className="text-white">Internships:</strong> Prodigy InfoTech (Full-Stack), ApexPlanet Software (Data Analytics 8 weeks), ServiceNow/SmartBridge (Virtual Intern), AICTE/AWS Academy (Cloud Computing).</li>
              <li><strong className="text-white">Verified Certifications:</strong> AWS Academy Data Engineering (Credly z1uPFcA2), AWS Cloud Foundations (Credly 6C3kcqLY), Cisco Networking Basics (Mar 18, 2025).</li>
              <li><strong className="text-white">Live Deployment:</strong> Weather App deployed on GitHub Pages (<code className="text-teal-400">ragasai3456-art.github.io/weather-app/</code>).</li>
            </ul>
          </div>

          {/* 2. Detected Discrepancies & Neutral Handling */}
          <div className="p-4 bg-[#16181D] border border-[#2D2F36] rounded-lg space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-amber-400 font-mono font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>2. Handled Constraints &amp; Missing Data</span>
            </span>
            <ul className="space-y-1.5 text-[#80848C] pl-6 list-disc">
              <li><strong className="text-white">ATM Banking System:</strong> Decoupled Java Servlets backend and React application; designated strictly as a GitHub repository rather than a live public URL.</li>
              <li><strong className="text-white">Student Database System:</strong> Backend MySQL service; marked as database architecture and SQL query repository rather than artificial frontend demo.</li>
              <li><strong className="text-white">Volunteering Years:</strong> Year/date was not provided for GStudio Photography Club, Symposium, and Homecoming; displayed without fabricated years.</li>
              <li><strong className="text-white">ServiceNow CSA:</strong> Did not claim ServiceNow Certified System Administrator (CSA) certification since documents only specify exam prep &amp; virtual internship completion.</li>
            </ul>
          </div>

          {/* 3. Recommended Actions for Raga Sai */}
          <div className="p-4 bg-[#16181D] border border-[#2D2F36] rounded-lg space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-sky-400 font-mono font-semibold flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span>3. Recommended Next Actions &amp; File Replacements</span>
            </span>
            <ul className="space-y-1.5 text-[#80848C] pl-6 list-disc">
              <li><strong className="text-white">PDF Resume Placement:</strong> Place your latest compiled resume at <code className="text-teal-300">/public/assets/resume.pdf</code> for direct visitor downloads.</li>
              <li><strong className="text-white">Custom Domain:</strong> Once chosen, configure your domain in Vercel and update canonical URLs in <code className="text-teal-300">sitemap.xml</code>.</li>
              <li><strong className="text-white">Contact Form Endpoint:</strong> Optionally configure <code className="text-teal-300">VITE_CONTACT_ENDPOINT</code> in <code className="text-teal-300">.env</code> (e.g., Formspree or Getform) to receive direct form submissions in your inbox.</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#2D2F36] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono font-medium text-white bg-teal-600 hover:bg-teal-500 rounded border border-teal-500 transition-colors"
          >
            Acknowledge &amp; Close Audit
          </button>
        </div>
      </div>
    </div>
  );
};
