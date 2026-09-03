import React, { useState, useMemo } from 'react';
import { 
  Github, 
  ExternalLink, 
  Search, 
  Layers, 
  Code, 
  ArrowUpRight, 
  Sparkles,
  ShieldAlert,
  SlidersHorizontal
} from 'lucide-react';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Full Stack', 'Web Development', 'Databases & APIs'];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 border-b border-[#2D2F36] bg-[#0F1012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-teal-400"></span>
              <span className="text-[11px] uppercase tracking-[0.35em] text-teal-400 font-mono">
                02 &bull; Engineering Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F0F0F0]">
              Featured <span className="text-teal-400 font-normal">Projects</span>
            </h2>
            <p className="mt-2 text-sm text-[#80848C] max-w-xl">
              Real-world systems, APIs, and applications engineered with Java, React, Node.js, and MySQL. Verified against GitHub repositories and resume specifications.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#80848C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#16181D] border border-[#2D2F36] rounded-lg text-[#F0F0F0] placeholder-[#80848C] focus:outline-none focus:border-teal-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[#2D2F36] pb-4">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#80848C] mr-2 hidden sm:block" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded text-xs font-mono tracking-wide transition-all ${
                selectedCategory === category
                  ? 'bg-teal-500/10 border border-teal-500 text-teal-300'
                  : 'bg-[#16181D] border border-[#2D2F36] text-[#80848C] hover:text-[#F0F0F0] hover:border-[#3E424D]'
              }`}
            >
              {category}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-[#80848C] hidden sm:block">
            Showing {filteredProjects.length} of {projects.length}
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 bg-[#16181D] border border-[#2D2F36] hover:border-teal-500/50 rounded-xl transition-all duration-200 group relative"
            >
              <div>
                {/* Top Meta */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded bg-[#1A1C20] border border-[#2D2F36] text-teal-400">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#80848C]">{project.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#F0F0F0] group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2 text-xs text-[#80848C] leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Quick Highlights */}
                <div className="mt-4 space-y-1.5 pt-3 border-t border-[#2D2F36]/60">
                  <div className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono">
                    Key Highlight:
                  </div>
                  <div className="text-xs text-[#80848C] line-clamp-2">
                    &bull; {project.keyFeatures[0]}
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#1A1C20] border border-[#2D2F36] text-[#80848C]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#80848C]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#2D2F36] flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-medium text-teal-400 hover:text-teal-300 flex items-center gap-1 group/btn"
                >
                  <span>Inspect Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#80848C] hover:text-white bg-[#1A1C20] border border-[#2D2F36] rounded hover:border-teal-500/40 transition-colors"
                    title="View GitHub Repository"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-teal-300 bg-teal-950/40 border border-teal-800 rounded hover:bg-teal-900/60 transition-colors"
                      title="Open Live Deployment"
                      aria-label={`Open live deployment for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 text-[11px] font-mono text-[#80848C] hover:text-teal-300 bg-[#1A1C20] border border-[#2D2F36] rounded hover:border-teal-500/40 transition-colors"
                      title="GitHub Repository"
                    >
                      Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#16181D] border border-[#2D2F36] rounded-xl p-8">
            <p className="text-sm text-[#80848C]">No projects found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 px-4 py-1.5 text-xs text-teal-400 bg-teal-950/30 border border-teal-800 rounded"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      <ProjectModal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />
    </section>
  );
};
