import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Award, 
  Target, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { journeyData } from '../data/journey';

export const Journey: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-teal-400" />;
      case 'certification':
        return <Award className="w-4 h-4 text-sky-400" />;
      case 'project':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'internship':
        return <Briefcase className="w-4 h-4 text-teal-400" />;
      case 'goal':
        return <Target className="w-4 h-4 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-teal-400" />;
    }
  };

  return (
    <section id="journey" className="py-20 border-b border-[#2D2F36] bg-[#0F1012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-teal-400"></span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-teal-400 font-mono">
              08 &bull; Career Pathway
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F0F0F0]">
            Professional <span className="text-teal-400 font-normal">Journey</span>
          </h2>
          <p className="mt-2 text-sm text-[#80848C] max-w-xl">
            Tracing academic milestones, industry certifications, practical engineering builds, internships, and upcoming career goals.
          </p>
        </div>

        {/* Visual Timeline Path */}
        <div className="relative border-l border-[#2D2F36] ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
          {journeyData.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#0F1012] border border-[#2D2F36] group-hover:border-teal-400 flex items-center justify-center transition-colors">
                <div className="w-2 h-2 rounded-full bg-teal-400" />
              </div>

              {/* Card */}
              <div className="p-6 bg-[#16181D] border border-[#2D2F36] group-hover:border-teal-500/40 rounded-xl transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded bg-[#1A1C20] border border-[#2D2F36] text-teal-400 flex items-center gap-1.5">
                    {getIcon(step.category)}
                    <span>{step.phase}</span>
                  </span>
                  <span className="text-xs font-mono text-[#80848C]">
                    {step.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-medium text-[#F0F0F0] mt-1">
                  {step.title}
                </h3>

                <div className="text-xs font-mono text-[#80848C] mt-0.5">
                  {step.institutionOrOrg}
                </div>

                <p className="text-xs sm:text-sm text-[#80848C] leading-relaxed mt-3">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
