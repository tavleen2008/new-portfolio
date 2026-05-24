import React, { useState } from "react";
import { Code2, ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-900 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/10 group-hover:scale-105 transition-all duration-300">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-100 dark:to-slate-300 group-hover:opacity-90 transition-all duration-300">
            MyCodeJournal
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200">About</a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200">Skills</a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-200">Contact</a>
        </nav>

        {/* Call To Action & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 cursor-pointer"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="w-4 h-4 animate-in fade-in zoom-in duration-300" /> : <Moon className="w-4 h-4 animate-in fade-in zoom-in duration-300" />}
          </button>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex items-center gap-2"
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2.5 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun className="w-4.5 h-4.5 animate-in fade-in zoom-in duration-300" /> : <Moon className="w-4.5 h-4.5 animate-in fade-in zoom-in duration-300" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-900 p-6 flex flex-col gap-4 animate-fade-in backdrop-blur-xl">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white py-2 border-b border-slate-100 dark:border-slate-900">About</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white py-2 border-b border-slate-100 dark:border-slate-900">Skills</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white py-2 border-b border-slate-100 dark:border-slate-900">Projects</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white py-2">Contact</a>
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
