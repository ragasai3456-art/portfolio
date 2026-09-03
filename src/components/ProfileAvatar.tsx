import React, { useState, useEffect, useRef } from 'react';
import { Camera, Check, Upload, User, Image as ImageIcon } from 'lucide-react';

interface ProfileAvatarProps {
  name: string;
  defaultSrc?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

const PHOTO_PATHS = [
  `${import.meta.env.BASE_URL}assets/photo.jpeg`,
  `${import.meta.env.BASE_URL}profile.jpg`,
  `${import.meta.env.BASE_URL}assets/photo.jpg`,
  `${import.meta.env.BASE_URL}photo.jpeg`
];

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ 
  name, 
  defaultSrc, 
  className = '',
  size = 'md'
}) => {
  const [pathIndex, setPathIndex] = useState(0);
  const [imgSrc, setImgSrc] = useState<string>(defaultSrc || PHOTO_PATHS[0]);
  const [hasError, setHasError] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user previously uploaded a local photo
    const saved = localStorage.getItem('raga_sai_avatar');
    if (saved) {
      setImgSrc(saved);
      setHasError(false);
    } else if (defaultSrc) {
      setImgSrc(defaultSrc);
      setHasError(false);
    } else {
      setPathIndex(0);
      setImgSrc(PHOTO_PATHS[0]);
      setHasError(false);
    }
  }, [defaultSrc]);

  const handleImgError = () => {
    if (pathIndex + 1 < PHOTO_PATHS.length) {
      const nextIndex = pathIndex + 1;
      setPathIndex(nextIndex);
      setImgSrc(PHOTO_PATHS[nextIndex]);
    } else {
      setHasError(true);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
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
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const dimensions = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-48 h-48',
    hero: 'w-48 h-56 sm:w-60 sm:h-72'
  }[size];

  return (
    <div className={`relative group/avatar inline-block ${className}`}>
      {/* Ambient glow highlight */}
      <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-teal-500/25 via-emerald-500/10 to-teal-500/5 blur-md opacity-60 group-hover/avatar:opacity-100 transition-opacity" />

      {/* Main Avatar Container */}
      <div 
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative ${dimensions} rounded-2xl overflow-hidden bg-[#16181D] border-2 ${
          isDragging ? 'border-teal-400 scale-102 ring-4 ring-teal-500/30' : 'border-[#2D2F36] group-hover/avatar:border-teal-500/80'
        } transition-all duration-300 shadow-2xl flex items-center justify-center cursor-pointer`}
      >
        {!hasError && imgSrc ? (
          <img
            src={imgSrc}
            alt={name}
            onError={handleImgError}
            className="w-full h-full object-cover object-[center_15%] transform group-hover/avatar:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          /* Neutral Portrait Frame Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#16181D] text-center select-none relative">
            <div className="w-12 h-12 rounded-full bg-teal-950/40 border border-teal-500/40 flex items-center justify-center mb-2 shadow-inner">
              <Camera className="w-6 h-6 text-teal-300" />
            </div>
            <span className="text-xs font-mono text-[#F0F0F0] font-medium tracking-tight">
              {name}
            </span>
            <span className="text-[10px] font-mono text-teal-400 mt-1 flex items-center gap-1">
              Professional Photo
            </span>
          </div>
        )}

        {/* Floating Upload / Change Photo Overlay on hover */}
        <div 
          className={`absolute inset-0 bg-black/65 backdrop-blur-[2px] transition-opacity flex flex-col items-center justify-center p-3 text-center ${
            isDragging ? 'opacity-100 bg-black/80' : 'opacity-0 group-hover/avatar:opacity-100'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-400 flex items-center justify-center mb-2 shadow-lg">
            <Camera className="w-5 h-5 text-teal-300 animate-pulse" />
          </div>
          <span className="text-[11px] font-mono text-white tracking-wider uppercase font-semibold">
            {isDragging ? 'Drop photo here' : 'Select Photo'}
          </span>
          <span className="text-[9px] text-[#A0A4AC] font-mono mt-1">
            Click or drag &amp; drop photo.jpeg
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
      <div className="absolute -bottom-2.5 -right-2 px-2.5 py-0.5 rounded-full bg-[#0F1012] border border-emerald-800/80 shadow-md flex items-center gap-1.5 z-10 select-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[9px] font-mono text-emerald-300 uppercase tracking-widest font-semibold">
          Active
        </span>
      </div>
    </div>
  );
};
