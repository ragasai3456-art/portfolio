import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { Profile } from '../types/portfolio';

interface ContactProps {
  profile: Profile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'demo-success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT;

  const copyToClipboard = (text: string, field: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
    } catch {
      // Ignore clipboard failure in restricted browsers
    }
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setErrorMessage('Please enter a message of at least 10 characters.');
      return;
    }

    setStatus('submitting');

    if (contactEndpoint) {
      try {
        const res = await fetch(contactEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message })
        });
        if (res.ok) {
          setStatus('success');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        } else {
          throw new Error('Endpoint responded with an error status');
        }
      } catch (err) {
        setStatus('error');
        setErrorMessage('Failed to send via endpoint. Please use the direct email link.');
      }
    } else {
      // Per instructions: transparent simulation note + direct mailto preparation
      setTimeout(() => {
        setStatus('demo-success');
      }, 500);
    }
  };

  const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry: Opportunities for A Raga Sai')}&body=${encodeURIComponent(`Hi Raga Sai,\n\n${message}\n\nFrom: ${name} (${email})`)}`;

  return (
    <section id="contact" className="py-20 border-b border-[#2D2F36] bg-[#0F1012]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-px w-8 bg-teal-400"></span>
            <span className="text-[11px] uppercase tracking-[0.35em] text-teal-400 font-mono">
              09 &bull; Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F0F0F0]">
            Let&apos;s <span className="text-teal-400 font-normal">Connect</span>
          </h2>
          <p className="mt-2 text-sm text-[#80848C] max-w-xl">
            Open to software engineering internships, entry-level developer opportunities, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#16181D] border border-[#2D2F36] rounded-xl space-y-5">
              <h3 className="text-xs uppercase tracking-[0.3em] text-[#80848C] font-mono border-b border-[#2D2F36] pb-3">
                Direct Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-[#0F1012] border border-[#2D2F36] text-teal-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block">Email</span>
                    <a 
                      href={`mailto:${profile.email}`}
                      className="text-xs font-mono text-[#F0F0F0] hover:text-teal-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profile.email, 'email')}
                  className="p-1.5 text-[#80848C] hover:text-white bg-[#0F1012] border border-[#2D2F36] rounded text-xs"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone */}
              {profile.phone && (
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-[#0F1012] border border-[#2D2F36] text-teal-400 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block">Phone</span>
                      <a 
                        href={`tel:${profile.phone}`}
                        className="text-xs font-mono text-[#F0F0F0] hover:text-teal-400 transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profile.phone!, 'phone')}
                    className="p-1.5 text-[#80848C] hover:text-white bg-[#0F1012] border border-[#2D2F36] rounded text-xs"
                    title="Copy phone number"
                    aria-label="Copy phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#0F1012] border border-[#2D2F36] text-teal-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#80848C] font-mono block">Location</span>
                  <span className="text-xs font-mono text-[#F0F0F0]">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Social profiles card */}
            <div className="p-6 bg-[#16181D] border border-[#2D2F36] rounded-xl space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#80848C] font-mono block">
                Verified Social Profiles
              </span>
              <div className="space-y-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded bg-[#0F1012] border border-[#2D2F36] hover:border-teal-500/40 text-xs font-mono text-[#F0F0F0] group transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-teal-400" />
                    <span>GitHub / ragasai3456-art</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#80848C] group-hover:text-teal-400" />
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded bg-[#0F1012] border border-[#2D2F36] hover:border-teal-500/40 text-xs font-mono text-[#F0F0F0] group transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-teal-400" />
                    <span>LinkedIn / adem-raga-sai</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#80848C] group-hover:text-teal-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#16181D] border border-[#2D2F36] rounded-xl">
              <div className="border-b border-[#2D2F36] pb-4 mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-medium text-[#F0F0F0]">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-[#80848C] mt-0.5">
                    Recruiter inquiries, interview schedules, or project collaborations.
                  </p>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 bg-[#0F1012] px-2 py-0.5 rounded border border-[#2D2F36]">
                  Validated
                </span>
              </div>

              {errorMessage && (
                <div className="mb-4 p-3 bg-rose-950/40 border border-rose-800/60 rounded text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="mb-4 p-4 bg-emerald-950/40 border border-emerald-800/60 rounded text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Message delivered successfully! Raga Sai will get back to you promptly.</span>
                </div>
              )}

              {status === 'demo-success' && (
                <div className="mb-4 p-4 bg-teal-950/40 border border-teal-800/60 rounded text-teal-300 text-xs space-y-2">
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 shrink-0 text-teal-400" />
                    <span>Form validated! Click below to send directly via your mail client:</span>
                  </div>
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-600 hover:bg-teal-500 text-white rounded text-xs font-mono font-medium"
                  >
                    <span>Open Email Client with Pre-filled Message</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="text-[11px] uppercase tracking-wider text-[#80848C] font-mono block mb-1">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Alex Johnson"
                      className="w-full px-3 py-2 text-xs bg-[#0F1012] border border-[#2D2F36] rounded text-[#F0F0F0] placeholder-[#60646C] focus:outline-none focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-[11px] uppercase tracking-wider text-[#80848C] font-mono block mb-1">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g., recruiter@company.com"
                      className="w-full px-3 py-2 text-xs bg-[#0F1012] border border-[#2D2F36] rounded text-[#F0F0F0] placeholder-[#60646C] focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="text-[11px] uppercase tracking-wider text-[#80848C] font-mono block mb-1">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g., Software Engineering Internship Opportunity"
                    className="w-full px-3 py-2 text-xs bg-[#0F1012] border border-[#2D2F36] rounded text-[#F0F0F0] placeholder-[#60646C] focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-[11px] uppercase tracking-wider text-[#80848C] font-mono block mb-1">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please outline role details, team scope, or inquiry..."
                    className="w-full px-3 py-2 text-xs bg-[#0F1012] border border-[#2D2F36] rounded text-[#F0F0F0] placeholder-[#60646C] focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[10px] text-[#80848C] font-mono">
                    Endpoint: {contactEndpoint ? 'Live API Configured' : 'Client Mailto Gateway'}
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-500 disabled:opacity-50 rounded border border-teal-500 transition-all shadow-sm active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
