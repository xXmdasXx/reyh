import React from "react";

const GlassCard = ({ gradient = "from-purple-500/30 to-pink-500/60", children, className = "" }:any) => {
  return (
    <div
      className={`
        relative p-4 md:p-6 rounded-[1.5rem] shadow-lg
        bg-gradient-to-tl ${gradient} 
        bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20
        w-full max-w-[20rem] min-h-[28rem]
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
