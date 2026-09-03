import React, { useState, useEffect } from 'react';
import { profileData } from './data/profile';
import { projectsData } from './data/projects';
import { experienceData } from './data/experience';
import { educationData } from './data/education';
import { certificationsData } from './data/certifications';
import { skillCategoriesData } from './data/skills';
import { volunteeringData } from './data/volunteering';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { ExperienceSection } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { VolunteeringSection } from './components/Volunteering';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ContentAuditModal } from './components/ContentAuditModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  useEffect(() => {
    // Check initial preference from localStorage or system
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#0F1012] text-[#F0F0F0] flex flex-col selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* Sticky Navigation Bar */}
      <Navbar 
        profile={profileData}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAudit={() => setIsAuditOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          profile={profileData} 
          onOpenResume={() => setIsResumeOpen(true)} 
        />
        
        <About 
          profile={profileData} 
        />
        
        <Projects 
          projects={projectsData} 
        />
        
        <ExperienceSection 
          experiences={experienceData} 
        />
        
        <Skills 
          categories={skillCategoriesData} 
        />
        
        <Education 
          educationList={educationData} 
        />
        
        <Certifications 
          certifications={certificationsData} 
        />
        
        <VolunteeringSection 
          items={volunteeringData} 
        />
        
        <Journey />
        
        <Contact 
          profile={profileData} 
        />
      </main>

      {/* Footer */}
      <Footer 
        profile={profileData}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAudit={() => setIsAuditOpen(true)}
      />

      {/* Modal Dialogs */}
      <ResumeModal 
        profile={profileData}
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ContentAuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />

    </div>
  );
}
