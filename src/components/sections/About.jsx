import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Sparkles, Terminal, ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function About() {
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });
  const aboutControls = useAnimation();

  useEffect(() => {
    if (aboutInView) aboutControls.start("visible");
    else aboutControls.start("hidden");
  }, [aboutInView, aboutControls]);

  return (
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
          <a href="#projects" className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm transition-all duration-300 shadow-lg shadow-purple-600/20 flex items-center gap-2 group">
            View Works
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-all duration-300 text-sm">
            Let's Talk
          </a>
        </div>
      </div>

      {/* High Tech Code Sandbox Mockup */}
      <div className="lg:col-span-5 relative group">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 opacity-20 blur-xl group-hover:opacity-30 transition duration-1000" />

        <div className="relative bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/60 mb-4">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/85" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/85" />
              <span className="w-3 h-3 rounded-full bg-green-500/85" />
            </div>
            <span className="text-[11px] font-mono text-slate-500">tavleen-profile.js</span>
            <Terminal className="w-3.5 h-3.5 text-slate-600" />
          </div>

          <div className="font-mono text-xs md:text-sm leading-relaxed text-slate-400 select-none">
            <p><span className="text-pink-500">const</span> developer = &#123;</p>
            <p className="pl-4"><span className="text-slate-200">name</span>: <span className="text-emerald-400">"Tavleen Kaur"</span>,</p>
            <p className="pl-4"><span className="text-slate-200">role</span>: <span className="text-emerald-400">"Frontend Developer"</span>,</p>
            <p className="pl-4"><span className="text-slate-200">passion</span>: <span className="text-emerald-400">"Interactive Design"</span>,</p>
            <p className="pl-4"><span className="text-slate-200">skills</span>: [</p>
            <p className="pl-8 text-purple-400">"React JS", "Tailwind CSS",</p>
            <p className="pl-8 text-purple-400">"Framer Motion", "JavaScript"</p>
            <p className="pl-4">],</p>
            <p className="pl-4"><span className="text-slate-200">ActivelyCodes</span>: <span className="text-amber-400">true</span>,</p>
            <p className="pl-4"><span className="text-slate-200">motto</span>: <span className="text-sky-400">() =&gt;</span> <span className="text-emerald-400">"Coding is my favorite game "</span></p>
            <p>&#125;;</p>
          </div>

          <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl" />
        </div>
      </div>
    </motion.section>
  );
}
