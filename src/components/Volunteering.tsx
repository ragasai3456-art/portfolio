import React from 'react';
import { 
  Camera, 
  Users, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { VolunteeringItem } from '../types/portfolio';

interface VolunteeringProps {
  items: VolunteeringItem[];
}

export const VolunteeringSection: React.FC<VolunteeringProps> = ({ items }) => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Club')) return <Camera className="w-4 h-4 text-teal-400" />;
    return <Users className="w-4 h-4 text-teal-400" />;
  };

  return (
    <section id="volunteering" className="py-20 border-b border-[#2D2F36] bg-[#0F1012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-teal-400"></span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-teal-400 font-mono">
              07 &bull; Community &amp; Extracurricular
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F0F0F0]">
            Volunteering &amp; <span className="text-teal-400 font-normal">Activities</span>
          </h2>
          <p className="mt-2 text-sm text-[#80848C] max-w-xl">
            Demonstrating teamwork, visual creativity, initiative, and responsibility beyond software engineering. Maintained distinctly as extracurricular engagements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#16181D] border border-[#2D2F36] hover:border-teal-500/40 rounded-xl flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#1A1C20] border border-[#2D2F36] text-teal-400 flex items-center gap-1.5">
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </span>
                  <span className="text-xs font-mono text-[#80848C]">
                    {item.organization}
                  </span>
                </div>

                <h3 className="text-base font-medium text-[#F0F0F0] group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>

                <div className="text-xs text-teal-400/90 font-mono mt-0.5">
                  Role: {item.role}
                </div>

                {/* Contributions */}
                <div className="mt-4 pt-3 border-t border-[#2D2F36]/60 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block">
                    Contributions:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#80848C]">
                    {item.contributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Demonstrated skills */}
              <div className="mt-6 pt-4 border-t border-[#2D2F36]">
                <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block mb-2">
                  Demonstrated Strengths:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {item.skillsDemonstrated.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#0F1012] border border-[#2D2F36] text-[#80848C]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
