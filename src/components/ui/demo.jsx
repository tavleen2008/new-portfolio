import React from "react";
import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils"

export function BackgroundBoxesDemo() {
  return (
    <div className="h-[calc(100vh-64px)] w-full relative overflow-hidden bg-slate-950 flex flex-col items-center justify-center">
      {/* Animated background boxes */}
      <Boxes />
      
      {/* Radial gradient mask overlay */}
      <div className="absolute inset-0 w-full h-full bg-slate-950 z-10 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_0%,black_100%)] pointer-events-none" />

      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
        <h1 className={cn("text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight select-none")}>
          Tavleen kaur
        </h1>
        
        <p className="mt-6 text-base md:text-xl text-purple-400/90 font-mono tracking-widest uppercase select-none">
          Meet a girl who codes!
        </p>

        {/* Status badge */}
        <div className="mt-10 px-4 py-2 rounded-full border border-slate-700/60 bg-slate-900/40 backdrop-blur-md text-xs text-slate-300 flex items-center gap-2 transition-all duration-300 cursor-default select-none hover:border-slate-600/80 hover:bg-slate-900/60">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for innovative opportunities
        </div>
      </div>
    </div>
  );
}
