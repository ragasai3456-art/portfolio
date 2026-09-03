import React from 'react';
import { 
  ArrowDown, 
  ArrowUpRight, 
  Download, 
  MapPin, 
  Mail, 
  Terminal, 
  Code2, 
  Database, 
  Cloud,
  CheckCircle2
} from 'lucide-react';
import { Profile } from '../types/portfolio';

interface HeroProps {
  profile: Profile;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 border-b border-[#2D2F36]">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2D2F3615_1px,transparent_1px),linear-gradient(to_bottom,#2D2F3615_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Bar: Availability & Location */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#2D2F36]">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#80848C] font-mono">
              Status: Available for Internships & Software Developer Roles
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#80848C]">
            <div className="flex items-center gap-1.5 font-mono">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{profile.location}</span>
            </div>
            <span className="text-[#2D2F36]">|</span>
            <div className="flex items-center gap-1.5 font-mono">
              <Terminal className="w-3.5 h-3.5 text-teal-400" />
              <span>Computer Engineering &apos;27 (GITAM)</span>
            </div>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Core Positioning & Bio */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#16181D] border border-[#2D2F36]">
                  <Terminal className="w-3.5 h-3.5 text-teal-400" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#80848C] font-mono">
                    Software Developer Portfolio &bull; A Raga Sai
                  </span>
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F0F0F0] leading-none">
                    {profile.name}
                  </h1>
                  <div className="mt-3.5 flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-lg sm:text-xl font-normal text-teal-400 font-mono">
                      Software Developer
                    </span>
                    <span className="text-[#2D2F36]">&bull;</span>
                    <span className="text-sm px-2.5 py-0.5 rounded bg-[#16181D] border border-[#2D2F36] text-[#80848C] font-mono">
                      Full-Stack &amp; Cloud Focus
                    </span>
                  </div>
                </div>
              </div>

              {/* Exact Summary from Resume */}
              <p className="text-base sm:text-lg text-[#80848C] leading-relaxed max-w-2xl font-normal">
                {profile.summary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-500 rounded border border-teal-500 transition-all active:scale-95 shadow-sm"
                >
                  <span>View Projects</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F0F0F0] bg-[#16181D] hover:bg-[#1A1C20] rounded border border-[#2D2F36] hover:border-teal-500/50 transition-all active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-teal-400" />
                  <span>Download Resume</span>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#80848C] hover:text-white transition-colors"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Social Link Badges */}
              <div className="flex items-center gap-4 pt-4 text-xs font-mono text-[#80848C]">
                <a 
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>github.com/ragasai3456-art</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
                <span className="text-[#2D2F36]">&bull;</span>
                <a 
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400 flex items-center gap-1.5 transition-colors"
                >
                  <span>linkedin.com/in/adem-raga-sai</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Technical Competencies Bento Box */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="p-5 bg-[#16181D] border border-[#2D2F36] rounded-lg">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#80848C] font-mono mb-3">
                Core Foundation
              </div>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <Code2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-medium text-[#F0F0F0]">Backend &amp; Architecture</div>
                    <div className="text-[11px] text-[#80848C]">Java, Java Servlets, REST APIs, Node.js</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Database className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-medium text-[#F0F0F0]">Databases &amp; Modeling</div>
                    <div className="text-[11px] text-[#80848C]">SQL, MySQL, Schema Normalization (3NF)</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Cloud className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-medium text-[#F0F0F0]">Cloud &amp; Infrastructure</div>
                    <div className="text-[11px] text-[#80848C]">AWS EC2, S3, IAM, Lambda Serverless</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics from Resume */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-[#16181D] border border-[#2D2F36] rounded-lg">
                <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block">
                  Undergrad CGPA
                </span>
                <div className="text-2xl font-light text-[#F0F0F0] mt-1 font-mono">
                  8.78<span className="text-xs text-[#80848C]"> / 10</span>
                </div>
                <div className="text-[10px] text-teal-400 mt-0.5">GITAM B.Tech &apos;27</div>
              </div>

              <div className="p-4 bg-[#16181D] border border-[#2D2F36] rounded-lg">
                <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block">
                  12th Intermediate
                </span>
                <div className="text-2xl font-light text-[#F0F0F0] mt-1 font-mono">
                  927<span className="text-xs text-[#80848C]"> / 1000</span>
                </div>
                <div className="text-[10px] text-teal-400 mt-0.5">Sri Chaitanya MPC</div>
              </div>
            </div>

            {/* Credential Verification Banner */}
            <div className="p-3 bg-[#16181D]/60 border border-[#2D2F36] rounded-lg flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[#80848C] text-[11px]">AWS &amp; Cisco Credentials Verified</span>
              </div>
              <a 
                href="#certifications"
                className="text-[11px] text-teal-400 hover:underline font-mono"
              >
                View Badges &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
