import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Cloud, 
  BarChart3, 
  Terminal, 
  Layers, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';
import { SkillCategory, SkillProficiency } from '../types/portfolio';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const [filterProficiency, setFilterProficiency] = useState<string>('All');

  const getProficiencyBadgeStyle = (prof: SkillProficiency) => {
    switch (prof) {
      case 'Experienced':
        return 'bg-teal-950/40 text-teal-300 border-teal-800/60';
      case 'Working Knowledge':
        return 'bg-sky-950/40 text-sky-300 border-sky-800/60';
      case 'Project Experience':
        return 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60';
      case 'Academic Exposure':
        return 'bg-slate-800/50 text-slate-300 border-slate-700/60';
      default:
        return 'bg-[#1A1C20] text-[#80848C] border-[#2D2F36]';
    }
  };

  const getCategoryIcon = (title: string) => {
    if (title.includes('Programming')) return <Code2 className="w-4 h-4 text-teal-400" />;
    if (title.includes('Frontend')) return <Layers className="w-4 h-4 text-teal-400" />;
    if (title.includes('Backend')) return <Terminal className="w-4 h-4 text-teal-400" />;
    if (title.includes('Databases')) return <Database className="w-4 h-4 text-teal-400" />;
    if (title.includes('Cloud')) return <Cloud className="w-4 h-4 text-teal-400" />;
    if (title.includes('Analytics')) return <BarChart3 className="w-4 h-4 text-teal-400" />;
    return <Sparkles className="w-4 h-4 text-teal-400" />;
  };

  return (
    <section id="skills" className="py-20 border-b border-[#2D2F36] bg-[#0F1012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-teal-400"></span>
              <span className="text-[11px] uppercase tracking-[0.35em] text-teal-400 font-mono">
                04 &bull; Technical Competencies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F0F0F0]">
              Skills &amp; <span className="text-teal-400 font-normal">Technologies</span>
            </h2>
            <p className="mt-2 text-sm text-[#80848C] max-w-xl">
              Organized strictly from resume and internship certifications. No fabricated proficiency percentages — categorized by practical application level.
            </p>
          </div>

          {/* Proficiency legend */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded border bg-teal-950/40 text-teal-300 border-teal-800/60">
              Experienced
            </span>
            <span className="px-2 py-0.5 rounded border bg-sky-950/40 text-sky-300 border-sky-800/60">
              Working Knowledge
            </span>
            <span className="px-2 py-0.5 rounded border bg-emerald-950/40 text-emerald-300 border-emerald-800/60">
              Project Experience
            </span>
            <span className="px-2 py-0.5 rounded border bg-slate-800/50 text-slate-300 border-slate-700/60">
              Academic Exposure
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 bg-[#16181D] border border-[#2D2F36] hover:border-teal-500/40 rounded-xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded bg-[#0F1012] border border-[#2D2F36]">
                    {getCategoryIcon(cat.title)}
                  </div>
                  <h3 className="text-sm font-semibold text-[#F0F0F0]">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs text-[#80848C] leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded bg-[#0F1012] border border-[#2D2F36]/80 text-xs"
                    >
                      <span className="text-[#F0F0F0] font-mono text-[11px]">{skill.name}</span>
                      <span className={`px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded border ${getProficiencyBadgeStyle(skill.proficiency)}`}>
                        {skill.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Note */}
        <div className="mt-8 p-4 bg-[#16181D] border border-[#2D2F36] rounded-lg flex items-center gap-3 text-xs text-[#80848C]">
          <Info className="w-4 h-4 text-teal-400 shrink-0" />
          <span>
            Every listed skill directly corresponds to an academic course, personal repository, or industry internship program.
          </span>
        </div>

      </div>
    </section>
  );
};
