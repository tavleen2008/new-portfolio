import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-900 bg-slate-950/80 backdrop-blur-sm relative z-10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium select-none">
        <p>&copy; {new Date().getFullYear()} Tavleen Kaur. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Designed and engineered with
          <Heart className="w-3 h-3 text-purple-500 fill-purple-500/80" />
          using React &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}
