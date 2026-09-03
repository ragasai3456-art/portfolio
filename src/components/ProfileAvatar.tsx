import React, { useState, useEffect, useRef } from 'react';
import { Camera, Check, Upload, User } from 'lucide-react';

interface ProfileAvatarProps {
  name: string;
  defaultSrc?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  name, 
  defaultSrc = '/assets/photo.jpeg', 
  className = '',
  size = 'md'
}) => {
  const [imgSrc, setImgSrc] = useState<string>(defaultSrc);
  const [hasError, setHasError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user previously saved a local photo
    const saved = localStorage.getItem('raga_sai_avatar');
    if (saved) {
      setImgSrc(saved);
      setHasError(false);
    } else if (defaultSrc) {
      setImgSrc(defaultSrc);
      setHasError(false);
    }
  }, [defaultSrc]);

  const handleImgError = () => {
    if (imgSrc === '/assets/photo.jpeg') {
      setImgSrc('/assets/photo.svg');
    } else {
      setHasError(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setImgSrc(base64);
        setHasError(false);
        localStorage.setItem('raga_sai_avatar', base64);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const dimensions = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-48 h-48',
    hero: 'w-44 h-44 sm:w-56 sm:h-56'
  }[size];

  return (
    <div className={`relative group/avatar inline-block ${className}`}>
      {/* Glow highlight */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-teal-500/20 via-transparent to-teal-500/5 blur-sm opacity-60 group-hover/avatar:opacity-100 transition-opacity" />

      {/* Main Avatar Container */}
      <div className={`relative ${dimensions} rounded-2xl overflow-hidden bg-[#16181D] border-2 border-[#2D2F36] group-hover/avatar:border-teal-500/60 transition-all duration-300 shadow-xl flex items-center justify-center`}>
        {!hasError && imgSrc ? (
          <img
            src={imgSrc}
            alt={name}
            onError={handleImgError}
            className="w-full h-full object-cover object-center transform group-hover/avatar:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          /* Stylized Portrait Vector Fallback matching the uploaded photo */
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#1E2922] via-[#16181D] to-[#121316] text-center select-none relative">
            {/* Ambient leaves accent */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-emerald-500/10 blur-xl" />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-pink-900/40 via-[#2A2328] to-emerald-950/40 border border-teal-500/30 flex items-center justify-center mb-2 shadow-inner">
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-teal-300" />
            </div>
            <span className="text-[11px] font-mono text-teal-300 font-medium tracking-tight">
              A Raga Sai
            </span>
            <span className="text-[9px] font-mono text-[#80848C] mt-0.5">
              Click camera to upload
            </span>
          </div>
        )}

        {/* Floating Upload / Change Photo Overlay */}
        <div 
          onClick={() => fileInputRef.current?.click()}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover/avatar:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer p-2 text-center"
          title="Click to select or replace photo"
        >
          <Camera className="w-6 h-6 text-teal-300 mb-1 animate-pulse" />
          <span className="text-[10px] font-mono text-white tracking-wider uppercase font-semibold">
            Change Photo
          </span>
          <span className="text-[8px] text-[#80848C] font-mono mt-0.5">
            JPG, PNG or WEBP
          </span>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          aria-label="Upload profile photo"
        />
      </div>

      {/* Online Status Pill */}
      <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-[#0F1012] border border-emerald-800/80 shadow-md flex items-center gap-1.5 z-10">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[9px] font-mono text-emerald-300 uppercase tracking-widest font-semibold">
          Active
        </span>
      </div>
    </div>
  );
};
