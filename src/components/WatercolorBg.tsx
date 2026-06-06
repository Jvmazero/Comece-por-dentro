import React from 'react';
/**
 * Section-level watercolor decoration — soft blobs in brand colors.
 */
export function WatercolorBg({ className = '' }: {className?: string;}) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 ${className}`}
      aria-hidden="true">
      
      <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-lilac-200 blur-3xl opacity-60" />
      <div className="absolute top-[40%] right-[8%] w-96 h-96 rounded-full bg-mint-200 blur-3xl opacity-50" />
      <div className="absolute bottom-[10%] left-[30%] w-80 h-80 rounded-full bg-skyblue-300 blur-3xl opacity-35" />
    </div>);

}