import React, { useState } from "react";

const AbstractFuturisticButton = ({ children, onClick }: any) => {
  const [isInteracting, setIsInteracting] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <button
        className={`
          relative 
          px-8 py-4 
          overflow-hidden 
          group 
          transition-all 
          duration-300 
          ease-in-out
          rounded-2xl  // Added border radius
        `}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => setIsInteracting(false)}
        onClick={onClick}
      >
        {/* Layered Abstract Shapes */}
        <div className="absolute inset-0 opacity-70">
          <div
            className={`
              absolute 
              -top-1/2 
              -left-1/2 
              w-[200%] 
              h-[200%] 
              bg-gradient-to-r 
              from-white/20 
              via-violet-500/40 
              to-white/20 
              rotate-45 
              transition-all 
              duration-700
              ${isInteracting ? "translate-x-1/4" : "-translate-x-1/4"}
              rounded-3xl  // Matching border radius for background layer
            `}
          />
        </div>

        {/* Geometric Border Effect */}
        <div
          className="
            absolute 
            inset-1 
            border-2 
            border-violet-300/50 
            opacity-50 
            group-hover:opacity-100 
            transition-opacity 
            duration-300 
            rounded-2xl
          "
        />

        {/* Button Content */}
        <span
          className={`
            relative 
            z-10 
            text-white 
            font-bold 
            tracking-wider 
            uppercase 
            text-lg 
            transition-all 
            duration-300
            ${isInteracting ? "text-opacity-100" : "text-opacity-70"}
          `}
        >
          {children}
        </span>

        {/* Abstract Particle Effects */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute 
              bg-white/30 
              rounded-full 
              opacity-0 
              group-hover:opacity-100 
              transition-all 
              duration-500
              ${isInteracting ? "animate-particle" : ""}
            `}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </button>

      {/* Custom Styles for Particle Animation */}
      <style jsx>{`
        @keyframes particleAnimation {
          0% {
            transform: scale(0) translateZ(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: scale(3) translateZ(0);
            opacity: 0;
          }
        }

        .animate-particle {
          animation: particleAnimation 2s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

const ButtonDemo = ({ handleClick, text }: any) => {
  return (
    <AbstractFuturisticButton onClick={handleClick}>
      {text}
    </AbstractFuturisticButton>
  );
};

export default ButtonDemo;
