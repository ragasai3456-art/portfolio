import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  ChevronDown, 
  ChevronUp,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { Experience } from '../types/portfolio';

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceSection: React.FC<ExperienceProps> = ({ experiences }) => {
  const [expandedId, setExpandedId] = useState<string | null>(experiences[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-20 border-b border-[#2D2F36] bg-[#0F1012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-teal-400"></span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-teal-400 font-mono">
              03 &bull; Career &amp; Internships
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F0F0F0]">
            Work <span className="text-teal-400 font-normal">Experience</span>
          </h2>
          <p className="mt-2 text-sm text-[#80848C] max-w-xl">
            Practical industry internships verified by completion certificates in Full-Stack Web Development, Data Analytics, ServiceNow Administration, and Cloud Infrastructure.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className="bg-[#16181D] border border-[#2D2F36] rounded-xl overflow-hidden transition-all hover:border-[#3E424D]"
              >
                {/* Clickable Header */}
                <div 
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0F1012] border border-[#2D2F36] flex items-center justify-center shrink-0 text-teal-400">
                      <Briefcase className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-medium text-[#F0F0F0]">
                          {exp.role}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded bg-teal-950/40 text-teal-300 border border-teal-800/40 font-mono">
                          {exp.organization}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-1 text-xs text-[#80848C] font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-teal-400" />
                          <span>{exp.duration}</span>
                        </span>
                        {exp.mode && (
                          <span className="text-[#80848C]">
                            &bull; {exp.mode}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    {exp.certificateAvailable && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-800/40">
                        <Award className="w-3 h-3" />
                        <span>Certificate Verified</span>
                      </span>
                    )}

                    <div className="p-1 text-[#80848C]">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#2D2F36] bg-[#0F1012]/40 space-y-4 animate-in fade-in duration-150">
                    <p className="text-sm text-[#80848C] leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-teal-400 font-mono block">
                        Responsibilities &amp; Practical Contributions:
                      </span>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-[#80848C]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Tag Group */}
                    <div className="pt-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block mb-2">
                        Technologies &amp; Tools Used:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map(t => (
                          <span 
                            key={t}
                            className="px-2.5 py-0.5 text-xs font-mono rounded bg-[#16181D] border border-[#2D2F36] text-[#F0F0F0]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certificate note */}
                    {exp.certificateNote && (
                      <div className="text-[11px] text-[#80848C] font-mono flex items-center gap-2 pt-2 border-t border-[#2D2F36]/60">
                        <Award className="w-3.5 h-3.5 text-teal-400" />
                        <span>{exp.certificateNote}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
