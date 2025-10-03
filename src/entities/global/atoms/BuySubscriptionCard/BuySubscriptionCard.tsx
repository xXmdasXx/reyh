import React from "react";

const GlassCard = ({ gradient = "from-purple-500/30 to-pink-500/60", children }:any) => {
  return (
    <div
      className={`
        relative p-10 rounded-[2rem] shadow-lg
        bg-gradient-to-tl ${gradient} 
        bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20
        w-[28rem] h-[38rem]
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
