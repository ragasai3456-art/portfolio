import React, { useState } from 'react';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { Certification } from '../types/portfolio';

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="py-20 border-b border-[#2D2F36] bg-[#0F1012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-teal-400"></span>
              <span className="text-[11px] uppercase tracking-[0.35em] text-teal-400 font-mono">
                06 &bull; Verified Credentials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F0F0F0]">
              Certifications &amp; <span className="text-teal-400 font-normal">Badges</span>
            </h2>
            <p className="mt-2 text-sm text-[#80848C] max-w-xl">
              Authentic industry credentials issued by AWS Academy, Cisco Networking Academy, Google, and ServiceNow. Includes verified Credly links.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-950/30 border border-teal-800/40 text-teal-300 text-xs font-mono">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>{certifications.length} Industry Verified Credentials</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 bg-[#16181D] border border-[#2D2F36] hover:border-teal-500/50 rounded-xl flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Header & Issuer */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-[#1A1C20] border border-[#2D2F36] text-teal-400">
                      {cert.badgeType}
                    </span>
                    {cert.courseHours && (
                      <span className="text-[10px] font-mono text-[#80848C] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-teal-400" />
                        <span>{cert.courseHours}</span>
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono text-[#80848C]">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-medium text-[#F0F0F0] group-hover:text-teal-300 transition-colors">
                  {cert.title}
                </h3>

                <div className="text-xs text-[#80848C] mt-1 font-mono">
                  Issuer: <span className="text-[#F0F0F0]">{cert.issuer}</span>
                </div>

                {/* Topics Covered */}
                <div className="mt-4 pt-3 border-t border-[#2D2F36]/60 space-y-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block">
                    Curriculum &amp; Competencies:
                  </span>
                  <ul className="space-y-1 text-xs text-[#80848C]">
                    {cert.topics.slice(0, 3).map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-teal-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Verification Link */}
              <div className="mt-6 pt-4 border-t border-[#2D2F36] flex items-center justify-between">
                {cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors font-mono"
                  >
                    <span>Verify on Credly</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] text-[#80848C] font-mono flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>Certificate Available</span>
                  </span>
                )}

                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/40">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
