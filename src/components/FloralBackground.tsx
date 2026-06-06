import React from 'react';
/**
 * Soft, decorative flower illustrations used as ambient page decoration.
 * Drawn with simple paths so they feel hand-made and gentle.
 */
function Tulip({
  className = '',
  color = '#c0b3ef'



}: {className?: string;color?: string;}) {
  return (
    <svg
      viewBox="0 0 80 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      
      {/* Stem */}
      <path
        d="M40 50 Q 40 75, 40 95"
        stroke="#b8d39e"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round" />
      
      {/* Leaf */}
      <path
        d="M40 75 Q 28 70, 22 80 Q 32 82, 40 78 Z"
        fill="#d4e6c3"
        opacity="0.85" />
      
      {/* Tulip petals */}
      <path
        d="M40 50 Q 28 38, 26 22 Q 36 30, 40 42 Q 44 30, 54 22 Q 52 38, 40 50 Z"
        fill={color}
        opacity="0.55" />
      
      <path
        d="M40 50 Q 33 40, 32 26 Q 40 32, 40 45 Q 40 32, 48 26 Q 47 40, 40 50 Z"
        fill={color}
        opacity="0.75" />
      
    </svg>);

}
function Bloom({
  className = '',
  color = '#c0b3ef'



}: {className?: string;color?: string;}) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      
      {/* 5 petals */}
      {[0, 72, 144, 216, 288].map((angle) =>
      <ellipse
        key={angle}
        cx="30"
        cy="14"
        rx="7"
        ry="11"
        fill={color}
        opacity="0.5"
        transform={`rotate(${angle} 30 30)`} />

      )}
      <circle cx="30" cy="30" r="4" fill="#fffaed" />
    </svg>);

}
function LeafSprig({
  className = '',
  color = '#b8d39e'



}: {className?: string;color?: string;}) {
  return (
    <svg
      viewBox="0 0 60 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true">
      
      <path
        d="M30 5 Q 30 50, 30 95"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round" />
      
      <ellipse
        cx="22"
        cy="25"
        rx="7"
        ry="3.5"
        fill={color}
        opacity="0.6"
        transform="rotate(-35 22 25)" />
      
      <ellipse
        cx="38"
        cy="40"
        rx="7"
        ry="3.5"
        fill={color}
        opacity="0.6"
        transform="rotate(35 38 40)" />
      
      <ellipse
        cx="22"
        cy="55"
        rx="7"
        ry="3.5"
        fill={color}
        opacity="0.6"
        transform="rotate(-35 22 55)" />
      
      <ellipse
        cx="38"
        cy="70"
        rx="7"
        ry="3.5"
        fill={color}
        opacity="0.6"
        transform="rotate(35 38 70)" />
      
    </svg>);

}
export function FloralBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      
      {/* Cream wash */}
      <div className="absolute inset-0 bg-[#fbf8f1]" />

      {/* Very soft lilac glow */}
      <div className="absolute top-[-15%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-lilac-200 blur-[140px] opacity-40" />
      <div className="absolute bottom-[10%] right-[-8%] w-[34rem] h-[34rem] rounded-full bg-lilac-100 blur-[140px] opacity-70" />

      {/* Flowers — scattered, very subtle */}
      <Tulip
        className="absolute top-[8%] left-[3%] w-20 md:w-28 opacity-50 rotate-[-10deg]"
        color="#c0b3ef" />
      
      <LeafSprig
        className="absolute top-[5%] right-[5%] w-16 md:w-24 opacity-50 rotate-[20deg]"
        color="#b8d39e" />
      
      <Bloom
        className="absolute top-[18%] right-[14%] w-12 md:w-16 opacity-55"
        color="#c0b3ef" />
      

      <Tulip
        className="absolute top-[40%] left-[2%] w-16 md:w-24 opacity-45 rotate-[15deg]"
        color="#a796e6" />
      
      <Bloom
        className="absolute top-[45%] right-[3%] w-14 md:w-20 opacity-50"
        color="#b8d39e" />
      
      <LeafSprig
        className="absolute top-[55%] left-[20%] w-12 md:w-16 opacity-40 rotate-[-15deg]"
        color="#c0b3ef" />
      

      <Bloom
        className="absolute bottom-[20%] left-[8%] w-16 md:w-24 opacity-55"
        color="#c0b3ef" />
      
      <Tulip
        className="absolute bottom-[8%] right-[12%] w-20 md:w-28 opacity-50 rotate-[12deg]"
        color="#a796e6" />
      
      <LeafSprig
        className="absolute bottom-[15%] right-[40%] w-14 md:w-20 opacity-45 rotate-[10deg]"
        color="#b8d39e" />
      
      <Bloom
        className="absolute bottom-[35%] left-[45%] w-10 md:w-14 opacity-45"
        color="#c0b3ef" />
      

      {/* Tiny accent dots */}
      <div className="absolute top-[30%] left-[40%] w-1.5 h-1.5 rounded-full bg-lilac-400 opacity-50" />
      <div className="absolute top-[70%] right-[25%] w-1.5 h-1.5 rounded-full bg-mint-400 opacity-50" />
      <div className="absolute top-[50%] left-[60%] w-2 h-2 rounded-full bg-lilac-300 opacity-50" />
    </div>);

}