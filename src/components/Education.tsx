import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen, 
  CheckCircle2,
  Building
} from 'lucide-react';
import { EducationItem } from '../types/portfolio';

interface EducationProps {
  educationList: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ educationList }) => {
  return (
    <section id="education" className="py-20 border-b border-[#2D2F36] bg-[#0F1012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-teal-400"></span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-teal-400 font-mono">
              05 &bull; Academic Background
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F0F0F0]">
            Education &amp; <span className="text-teal-400 font-normal">Qualifications</span>
          </h2>
          <p className="mt-2 text-sm text-[#80848C] max-w-xl">
            Undergraduate and higher secondary academic records with verifiable CGPA and score metrics.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="p-8 bg-[#16181D] border border-[#2D2F36] rounded-xl flex flex-col justify-between relative group hover:border-teal-500/40 transition-colors"
            >
              <div>
                {/* Header with grade badge */}
                <div className="flex items-start justify-between gap-4 border-b border-[#2D2F36] pb-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-teal-400 text-xs font-mono mb-1">
                      <Building className="w-3.5 h-3.5" />
                      <span>{edu.institution}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium text-[#F0F0F0]">
                      {edu.degree}
                    </h3>
                    {edu.fieldOfStudy && (
                      <div className="text-xs text-[#80848C] mt-0.5">
                        Specialization: <span className="text-[#F0F0F0]">{edu.fieldOfStudy}</span>
                      </div>
                    )}
                  </div>

                  <div className="text-right shrink-0">
                    <div className="px-3 py-1 bg-teal-950/40 border border-teal-800/60 rounded text-teal-300 font-mono text-sm font-semibold">
                      {edu.grade}
                    </div>
                    <span className="text-[10px] text-[#80848C] font-mono block mt-1">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block">
                    Key Academic Highlights:
                  </span>
                  <ul className="space-y-2">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#80848C]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Major Coursework */}
              {edu.coursework && (
                <div className="pt-4 border-t border-[#2D2F36]">
                  <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-teal-400" />
                    <span>Relevant Coursework:</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map(c => (
                      <span
                        key={c}
                        className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-[#0F1012] border border-[#2D2F36] text-[#80848C]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
