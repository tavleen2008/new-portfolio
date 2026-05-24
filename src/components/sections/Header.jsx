import React, { useState } from "react";
import { Code2, ArrowUpRight, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-900 bg-slate-950/70 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/10 group-hover:scale-105 transition-all duration-300">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300 group-hover:opacity-90">
            MyCodeJournal
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </nav>

        {/* Call To Action */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-300 flex items-center gap-2"
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-300 hover:text-white"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-950/95 border-b border-slate-900 p-6 flex flex-col gap-4 animate-fade-in backdrop-blur-xl">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white py-2 border-b border-slate-900">About</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white py-2 border-b border-slate-900">Skills</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white py-2 border-b border-slate-900">Projects</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white py-2">Contact</a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold uppercase tracking-wider shadow-lg shadow-purple-500/20"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
