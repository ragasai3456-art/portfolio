import React, { useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle, 
  Cpu, 
  Layers, 
  AlertCircle, 
  Sparkles,
  Terminal,
  Database,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Interactive mini-playground state for ATM simulation
  const [atmCard, setAtmCard] = useState('123456');
  const [atmPin, setAtmPin] = useState('1234');
  const [atmLoggedIn, setAtmLoggedIn] = useState(false);
  const [atmBalance, setAtmBalance] = useState(15000);
  const [atmAmount, setAtmAmount] = useState('500');
  const [atmMessage, setAtmMessage] = useState('');

  // Interactive mini-playground for Weather
  const [weatherCity, setWeatherCity] = useState('Bengaluru');
  const [activeWeather, setActiveWeather] = useState<{ temp: string; cond: string; hum: string; wind: string }>({
    temp: '26.5 °C',
    cond: 'Scattered clouds',
    hum: '62%',
    wind: '3.8 m/s'
  });

  // Interactive SQL Query runner for Student DB
  const [selectedSqlFilter, setSelectedSqlFilter] = useState<'ALL' | 'CS' | 'HIGH_GPA'>('ALL');

  if (!project) return null;

  const handleAtmAction = (type: 'deposit' | 'withdraw') => {
    const val = Number(atmAmount);
    if (!val || val <= 0) {
      setAtmMessage('Please enter a valid amount.');
      return;
    }
    if (type === 'withdraw') {
      if (val > atmBalance) {
        setAtmMessage('Transaction Failed: Insufficient balance.');
        return;
      }
      setAtmBalance(prev => prev - val);
      setAtmMessage(`Successfully withdrew ₹${val}. New Balance: ₹${atmBalance - val}`);
    } else {
      setAtmBalance(prev => prev + val);
      setAtmMessage(`Successfully deposited ₹${val}. New Balance: ₹${atmBalance + val}`);
    }
  };

  const updateWeatherDemo = (city: string) => {
    setWeatherCity(city);
    if (city.toLowerCase().includes('pune')) {
      setActiveWeather({ temp: '25.08 °C', cond: 'Broken clouds', hum: '59%', wind: '0.45 m/s' });
    } else if (city.toLowerCase().includes('mumbai')) {
      setActiveWeather({ temp: '28.99 °C', cond: 'Light rain', hum: '74%', wind: '4.61 m/s' });
    } else {
      setActiveWeather({ temp: '26.40 °C', cond: 'Partly cloudy', hum: '60%', wind: '3.20 m/s' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0F1012] border border-[#2D2F36] rounded-xl shadow-2xl p-6 sm:p-8 text-[#F0F0F0] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#2D2F36] pb-5">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded bg-[#16181D] border border-[#2D2F36] text-teal-400">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#80848C]">{project.date}</span>
            </div>
            <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-light tracking-tight mt-2 text-white">
              {project.title}
            </h3>
            <p className="text-xs text-teal-400 font-mono mt-1">Role: {project.role}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#80848C] hover:text-white hover:bg-[#1A1C20] rounded border border-[#2D2F36] transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Links Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-[#2D2F36] bg-[#16181D]/60 px-4 rounded-lg mt-4">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-[#16181D] hover:bg-[#1A1C20] border border-[#2D2F36] rounded hover:border-teal-500/50 transition-all"
            >
              <Github className="w-4 h-4 text-teal-400" />
              <span>Inspect Repository</span>
            </a>

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-teal-600 hover:bg-teal-500 rounded border border-teal-500 transition-all shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Deployment</span>
              </a>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-amber-950/30 border border-amber-800/40 text-amber-300 text-xs font-mono">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Local dev build ({project.localDevUrl || 'MySQL database service'}) &bull; No public URL</span>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map(t => (
              <span key={t} className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#1A1C20] border border-[#2D2F36] text-[#80848C]">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content Body: Problem, Solution, Architecture & Interactive Sandbox */}
        <div className="space-y-8 mt-6">
          
          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#16181D] border border-[#2D2F36] rounded-lg">
              <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block mb-1">
                The Problem
              </span>
              <p className="text-sm text-[#80848C] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 bg-[#16181D] border border-[#2D2F36] rounded-lg">
              <span className="text-[10px] uppercase tracking-wider text-teal-400 font-mono block mb-1">
                The Engineering Solution
              </span>
              <p className="text-sm text-[#80848C] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* System Architecture */}
          <div className="p-5 bg-[#16181D] border border-[#2D2F36] rounded-lg">
            <div className="flex items-center gap-2 mb-2 text-sm font-medium text-white">
              <Layers className="w-4 h-4 text-teal-400" />
              <span>System Architecture &amp; Data Flow</span>
            </div>
            <p className="text-xs text-[#80848C] font-mono leading-relaxed bg-[#0F1012] p-3 rounded border border-[#2D2F36]">
              {project.architecture}
            </p>
          </div>

          {/* Interactive UI Simulation Section (Matching Screenshots) */}
          <div className="p-5 bg-[#16181D] border border-[#2D2F36] rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#80848C] font-mono flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                <span>Interactive Demonstration &amp; Interface Preview</span>
              </span>
              <span className="text-[10px] text-teal-400 font-mono">Simulated Sandbox</span>
            </div>

            {/* Weather App Simulation */}
            {project.uiMockupType === 'weather' && (
              <div className="bg-gradient-to-b from-sky-900/30 to-[#0F1012] p-6 rounded-lg border border-sky-800/40 text-center max-w-md mx-auto space-y-4">
                <h4 className="text-sm font-semibold text-sky-200">Know The Weather Around You</h4>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={weatherCity}
                    onChange={(e) => updateWeatherDemo(e.target.value)}
                    placeholder="Enter city (e.g., Pune, Mumbai, Bengaluru)"
                    className="flex-1 px-3 py-1.5 text-xs bg-[#0F1012] border border-[#2D2F36] rounded text-white focus:outline-none focus:border-sky-500"
                  />
                  <button 
                    onClick={() => updateWeatherDemo(weatherCity)}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 rounded"
                  >
                    Get Weather
                  </button>
                </div>

                <div className="p-4 bg-[#0F1012]/80 rounded border border-sky-800/30 text-left text-xs space-y-1.5 font-mono">
                  <div className="text-sky-300 font-semibold text-sm">City: {weatherCity}</div>
                  <div className="text-[#F0F0F0]">&bull; Temperature: <span className="text-teal-400">{activeWeather.temp}</span></div>
                  <div className="text-[#80848C]">&bull; Condition: {activeWeather.cond}</div>
                  <div className="text-[#80848C]">&bull; Humidity: {activeWeather.hum}</div>
                  <div className="text-[#80848C]">&bull; Wind Speed: {activeWeather.wind}</div>
                </div>
                <p className="text-[10px] text-[#80848C]">
                  Matches the live deployment behavior: fetches dynamic JSON from weather APIs and renders reactive metrics.
                </p>
              </div>
            )}

            {/* ATM Banking App Simulation */}
            {project.uiMockupType === 'atm' && (
              <div className="bg-[#0F1012] p-6 rounded-lg border border-[#2D2F36] max-w-md mx-auto space-y-4 font-mono text-xs">
                {!atmLoggedIn ? (
                  <div className="space-y-3">
                    <div className="border-b border-[#2D2F36] pb-2 font-bold text-sm text-[#F0F0F0]">
                      ATM Login (Simulated)
                    </div>
                    <div>
                      <label className="text-[11px] text-[#80848C] block mb-1">Card Number:</label>
                      <input 
                        type="text" 
                        value={atmCard}
                        onChange={(e) => setAtmCard(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-[#16181D] border border-[#2D2F36] rounded text-white" 
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-[#80848C] block mb-1">PIN:</label>
                      <input 
                        type="password" 
                        value={atmPin}
                        onChange={(e) => setAtmPin(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-[#16181D] border border-[#2D2F36] rounded text-white" 
                      />
                    </div>
                    <button 
                      onClick={() => {
                        if (atmCard && atmPin) setAtmLoggedIn(true);
                      }}
                      className="px-4 py-1.5 bg-teal-600 hover:bg-teal-500 text-white rounded font-sans font-medium text-xs"
                    >
                      Login to ATM Menu
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#2D2F36] pb-2">
                      <span className="font-bold text-sm text-[#F0F0F0]">ATM Menu</span>
                      <button 
                        onClick={() => {
                          setAtmLoggedIn(false);
                          setAtmMessage('');
                        }}
                        className="text-xs text-rose-400 hover:underline"
                      >
                        Logout
                      </button>
                    </div>

                    <div className="p-3 bg-[#16181D] border border-[#2D2F36] rounded">
                      <div className="text-[10px] uppercase text-[#80848C]">Current Account Balance</div>
                      <div className="text-xl font-bold text-teal-400 mt-1">₹{atmBalance.toLocaleString()}</div>
                    </div>

                    <div className="flex gap-2 items-center">
                      <input 
                        type="number" 
                        value={atmAmount}
                        onChange={(e) => setAtmAmount(e.target.value)}
                        placeholder="Amount"
                        className="flex-1 px-2.5 py-1.5 bg-[#16181D] border border-[#2D2F36] rounded text-white"
                      />
                      <button 
                        onClick={() => handleAtmAction('withdraw')}
                        className="px-3 py-1.5 bg-amber-700 hover:bg-amber-600 text-white rounded text-xs"
                      >
                        Withdraw
                      </button>
                      <button 
                        onClick={() => handleAtmAction('deposit')}
                        className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded text-xs"
                      >
                        Deposit
                      </button>
                    </div>

                    {atmMessage && (
                      <div className="text-[11px] text-teal-300 bg-teal-950/40 p-2 rounded border border-teal-800/50">
                        {atmMessage}
                      </div>
                    )}
                  </div>
                )}
                <p className="text-[10px] text-[#80848C] pt-2 border-t border-[#2D2F36]">
                  Demonstrates the exact stateful operations implemented with React Hooks and Java Servlet transactional handlers.
                </p>
              </div>
            )}

            {/* Student Database Schema Simulation */}
            {project.uiMockupType === 'database' && (
              <div className="bg-[#0F1012] p-4 rounded-lg border border-[#2D2F36] space-y-4 font-mono text-xs">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2D2F36] pb-2">
                  <span className="text-teal-400 font-semibold">Relational Table: `students` (3NF Normalized)</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setSelectedSqlFilter('ALL')}
                      className={`px-2 py-0.5 rounded text-[11px] ${selectedSqlFilter === 'ALL' ? 'bg-teal-700 text-white' : 'bg-[#16181D] text-[#80848C]'}`}
                    >
                      SELECT *
                    </button>
                    <button 
                      onClick={() => setSelectedSqlFilter('CS')}
                      className={`px-2 py-0.5 rounded text-[11px] ${selectedSqlFilter === 'CS' ? 'bg-teal-700 text-white' : 'bg-[#16181D] text-[#80848C]'}`}
                    >
                      WHERE dept=&apos;CSE&apos;
                    </button>
                    <button 
                      onClick={() => setSelectedSqlFilter('HIGH_GPA')}
                      className={`px-2 py-0.5 rounded text-[11px] ${selectedSqlFilter === 'HIGH_GPA' ? 'bg-teal-700 text-white' : 'bg-[#16181D] text-[#80848C]'}`}
                    >
                      ORDER BY gpa DESC
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-[11px]">
                    <thead>
                      <tr className="border-b border-[#2D2F36] text-[#80848C]">
                        <th className="py-1 px-2">student_id (PK)</th>
                        <th className="py-1 px-2">full_name</th>
                        <th className="py-1 px-2">department</th>
                        <th className="py-1 px-2">gpa</th>
                        <th className="py-1 px-2">status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2D2F36]/50">
                      {(selectedSqlFilter === 'ALL' || selectedSqlFilter === 'CS') && (
                        <tr>
                          <td className="py-1 px-2 text-teal-400">STD_2026_01</td>
                          <td className="py-1 px-2 text-[#F0F0F0]">A Raga Sai</td>
                          <td className="py-1 px-2">Computer Engineering</td>
                          <td className="py-1 px-2 text-emerald-400 font-bold">8.78</td>
                          <td className="py-1 px-2 text-teal-300">Enrolled</td>
                        </tr>
                      )}
                      {(selectedSqlFilter === 'ALL' || selectedSqlFilter === 'HIGH_GPA') && (
                        <tr>
                          <td className="py-1 px-2 text-teal-400">STD_2026_02</td>
                          <td className="py-1 px-2 text-[#F0F0F0]">P. Vamsi</td>
                          <td className="py-1 px-2">Information Tech</td>
                          <td className="py-1 px-2 text-emerald-400">8.65</td>
                          <td className="py-1 px-2 text-teal-300">Enrolled</td>
                        </tr>
                      )}
                      {(selectedSqlFilter === 'ALL' || selectedSqlFilter === 'CS') && (
                        <tr>
                          <td className="py-1 px-2 text-teal-400">STD_2026_03</td>
                          <td className="py-1 px-2 text-[#F0F0F0]">K. Sneha</td>
                          <td className="py-1 px-2">Computer Engineering</td>
                          <td className="py-1 px-2 text-emerald-400">8.50</td>
                          <td className="py-1 px-2 text-teal-300">Enrolled</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="bg-[#16181D] p-2.5 rounded border border-[#2D2F36] text-[11px] text-[#80848C]">
                  <code>
                    SQL Verified: {selectedSqlFilter === 'ALL' ? 'SELECT * FROM students;' : selectedSqlFilter === 'CS' ? "SELECT * FROM students WHERE department = 'Computer Engineering';" : "SELECT * FROM students ORDER BY gpa DESC;"}
                  </code>
                </div>
              </div>
            )}

          </div>

          {/* Key Features & Engineering Decisions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-[#16181D] border border-[#2D2F36] rounded-lg space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-teal-400 font-mono block">
                Key Features
              </span>
              <ul className="space-y-1.5 text-xs text-[#80848C]">
                {project.keyFeatures.map((kf, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                    <span>{kf}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#16181D] border border-[#2D2F36] rounded-lg space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-teal-400 font-mono block">
                Engineering Decisions &amp; Challenges
              </span>
              <ul className="space-y-1.5 text-xs text-[#80848C]">
                {project.engineeringDecisions.map((ed, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Cpu className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                    <span>{ed}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Measurable Outcome */}
          <div className="p-4 bg-teal-950/20 border border-teal-800/40 rounded-lg">
            <span className="text-[10px] uppercase tracking-wider text-teal-300 font-mono block mb-1">
              Project Outcome
            </span>
            <p className="text-xs text-[#80848C]">
              {project.outcome}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-[#2D2F36] flex items-center justify-between">
          <span className="text-[11px] text-[#80848C] font-mono">
            Source: Resume &amp; GitHub Repository
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#F0F0F0] bg-[#16181D] hover:bg-[#1A1C20] border border-[#2D2F36] rounded"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
