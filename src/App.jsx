import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { 
  Terminal, 
  Code2, 
  Sparkles, 
  Layers, 
  Mail, 
  ArrowUpRight, 
  FolderGit2,
  Cpu, 
  Globe, 
  Heart,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { BackgroundBoxesDemo } from "@/components/ui/demo";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const skills = [
    { name: "React JS", category: "Frontend", icon: Code2, color: "text-sky-400 bg-sky-400/5 border-sky-400/20" },
    { name: "Tailwind CSS", category: "Design System", icon: Sparkles, color: "text-teal-400 bg-teal-400/5 border-teal-400/20" },
    { name: "Java", category: "Core Language", icon: Terminal, color: "text-yellow-400 bg-yellow-400/5 border-yellow-400/20" },
    { name: "Framer Motion", category: "Animation", icon: Layers, color: "text-purple-400 bg-purple-400/5 border-purple-400/20" },
    { name: "DSA", category: "Problem Solving", icon: Cpu, color: "text-emerald-400 bg-emerald-400/5 border-emerald-400/20" },
    { name: "Python", category: "Numpy,Matplotlib", icon: Globe, color: "text-indigo-400 bg-indigo-400/5 border-indigo-400/20" },
  ];

  const projects = [
    {
      title: "Student Task Manager",
      description: "A react based to-do-list in which u can add or delete tasks",
      tags: ["React JS"],
      link: "https://github.com/tavleen2008/react-student-manager",
      featured: false
    },
    
    {
      title: "DSA Codebook",
      description: "A real-time data structure visualizer inspired by a kitchen simulation game.",
      tags: ["React JS", "Vite", "Tailwind CSS"],
      link: "https://github.com/tavleen2008/dsa-codebook",
      featured: true
    }
  ];

  // Scroll animation refs
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll animation controls
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.3 });
  const projectsInView = useInView(projectsRef, { once: false, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: false, amount: 0.3 });

  const aboutControls = useAnimation();
  const skillsControls = useAnimation();
  const projectsControls = useAnimation();
  const contactControls = useAnimation();

  useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    } else {
      aboutControls.start("hidden");
    }
  }, [aboutInView, aboutControls]);

  useEffect(() => {
    if (skillsInView) {
      skillsControls.start("visible");
    } else {
      skillsControls.start("hidden");
    }
  }, [skillsInView, skillsControls]);

  useEffect(() => {
    if (projectsInView) {
      projectsControls.start("visible");
    } else {
      projectsControls.start("hidden");
    }
  }, [projectsInView, projectsControls]);

  useEffect(() => {
    if (contactInView) {
      contactControls.start("visible");
    } else {
      contactControls.start("hidden");
    }
  }, [contactInView, contactControls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Dynamic Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none z-0" />

      {/* Sticky Header with Glassmorphism */}
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
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-white py-2 border-b border-slate-900"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-white py-2 border-b border-slate-900"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-white py-2 border-b border-slate-900"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-300 hover:text-white py-2"
            >
              Contact
            </a>
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

      {/* Hero Section - Full Bleed Background */}
      <section id="hero" className="w-screen -mx-6">
        <BackgroundBoxesDemo />
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-6 w-full relative z-10 py-12 md:py-20 flex flex-col gap-24 md:gap-36">

        {/* About Section */}
        <motion.section 
          ref={aboutRef}
          id="about" 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          initial="hidden"
          animate={aboutControls}
          variants={containerVariants}
        >
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs font-semibold tracking-wider uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              Creative Engineer
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Crafting premium digital interfaces with clean, standard code.
            </h2>
            
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Hello! I am <span className="text-white font-semibold">Tavleen Kaur</span>, a B.Tech CSE student at<span className="text-white font-semibold"> Thapar University, Patiala' 2029</span> decoding the chaos of code.
Balancing DSA , college academics and building stuff that actually works.

            </p>

            <p className="text-slate-400 text-base leading-relaxed">
              With an SGPA of 9.73 in my first semester, I’ve built a strong academic base while actively exploring beyond the syllabus—experimenting with new technologies and turning ideas into projects.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <a 
                href="#projects" 
                className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-purple-600/20 flex items-center gap-2 group"
              >
                View Works
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300 text-sm"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* High Tech Code Sandbox Mockup */}
          <div className="lg:col-span-5 relative group">
            {/* Glow backing */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 opacity-20 blur-xl group-hover:opacity-30 transition duration-1000" />
            
            <div className="relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl overflow-hidden shadow-2xl">
              
              {/* Window controls */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-4">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/85" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/85" />
                  <span className="w-3 h-3 rounded-full bg-green-500/85" />
                </div>
                <span className="text-[11px] font-mono text-slate-500">tavleen-profile.js</span>
                <Terminal className="w-3.5 h-3.5 text-slate-600" />
              </div>

              {/* Mock code block */}
              <div className="font-mono text-xs md:text-sm leading-relaxed text-slate-400 select-none">
                <p><span className="text-pink-500">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="text-slate-200">name</span>: <span className="text-emerald-400">"Tavleen Kaur"</span>,</p>
                <p className="pl-4"><span className="text-slate-200">role</span>: <span className="text-emerald-400">"AI Frontend Engineer"</span>,</p>
                <p className="pl-4"><span className="text-slate-200">passion</span>: <span className="text-emerald-400">"Interactive Design"</span>,</p>
                <p className="pl-4"><span className="text-slate-200">skills</span>: [</p>
                <p className="pl-8 text-purple-400">"React JS", "Tailwind CSS",</p>
                <p className="pl-8 text-purple-400">"Framer Motion", "JavaScript"</p>
                <p className="pl-4">],</p>
                <p className="pl-4"><span className="text-slate-200">ActivelyCodes</span>: <span className="text-amber-400">true</span>,</p>
                <p className="pl-4"><span className="text-slate-200">motto</span>: <span className="text-sky-400">() =&gt;</span> <span className="text-emerald-400">"Coding is my favorite game "</span></p>
                <p>&#125;;</p>
              </div>

              {/* Subtle ambient light */}
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl" />
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          ref={skillsRef}
          id="skills" 
          className="flex flex-col gap-12"
          initial="hidden"
          animate={skillsControls}
          variants={containerVariants}
        >
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              My Engineering Toolkit
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Curated stack that ensures absolute rendering performance, dynamic transitions, and modern responsiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/70 transition-all duration-300 group flex items-start gap-4 shadow-lg"
                >
                  <div className={`p-3 rounded-xl border ${skill.color} transition-all duration-300 group-hover:scale-105`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-base group-hover:text-purple-300 transition-colors duration-200 mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {skill.category}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          ref={projectsRef}
          id="projects" 
          className="flex flex-col gap-12"
          initial="hidden"
          animate={projectsControls}
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Featured Explorations
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                A selection of modern applications focused on design alignment and rich transitions.
              </p>
            </div>
            
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 tracking-wider uppercase py-2 transition-colors w-fit border-b border-purple-500/0 hover:border-purple-400/50"
            >
              See All Repositories
              <FolderGit2 className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`flex flex-col justify-between p-7 rounded-2xl bg-slate-900/30 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/50 transition-all duration-300 group shadow-xl relative overflow-hidden ${project.featured ? 'md:col-span-2 lg:col-span-1 border-purple-500/20 bg-gradient-to-b from-slate-900/40 to-slate-950' : ''}`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="p-2 bg-slate-950/80 border border-slate-800 rounded-xl text-purple-400 group-hover:scale-105 transition-transform duration-300">
                      <Terminal className="w-5 h-5" />
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] font-semibold uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/40 text-[10px] font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    className="flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-white transition-colors py-2.5 px-4 rounded-xl border border-slate-800/80 bg-slate-950 hover:bg-slate-900 hover:border-slate-700"
                  >
                    Examine Project
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Ambient glow decoration inside featured card */}
                {project.featured && (
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          ref={contactRef}
          id="contact" 
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-950 border border-slate-900 overflow-hidden shadow-2xl flex flex-col items-center text-center gap-6 max-w-4xl mx-auto"
          initial="hidden"
          animate={contactControls}
          variants={containerVariants}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <a 
            href="mailto:tavleenk4280@gmail.com"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-2 shadow-lg hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer relative z-10"
          >
            <Mail className="w-5 h-5 animate-pulse" />
          </a>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Collaborate On Something Great
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            I am always interested in discussing modern web engineering, elegant user designs, and high-fidelity integrations. Reach out, and let's craft something outstanding!
          </p>

          <a 
            href="mailto:tavleenk4280@gmail.com"
            rel="noopener noreferrer"
            className="mt-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-semibold uppercase tracking-wider hover:opacity-95 hover:shadow-lg hover:shadow-purple-500/15 transition-all duration-300 flex items-center gap-2"
          >
            Send An Email
            <Mail className="w-4 h-4" />
          </a>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 mt-6">
            <a 
              href="https://github.com/tavleen2008" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-300 shadow-md"
              title="GitHub"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/tavleen-kaur-9296b7313/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-300 shadow-md"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a 
              href="mailto:tavleenk4280@gmail.com" 
              className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-300 shadow-md"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.section>

      </main>

      {/* Footer */}
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
    </div>
  );
}
