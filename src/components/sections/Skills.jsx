import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Terminal, Code2, Sparkles, Layers, Cpu, Globe } from "lucide-react";

const skills = [
  { name: "React JS", category: "Frontend", icon: Code2, color: "text-sky-400 bg-sky-400/5 border-sky-400/20" },
  { name: "Tailwind CSS", category: "Design System", icon: Sparkles, color: "text-teal-400 bg-teal-400/5 border-teal-400/20" },
  { name: "Java", category: "Core Language", icon: Terminal, color: "text-yellow-400 bg-yellow-400/5 border-yellow-400/20" },
  { name: "Framer Motion", category: "Animation", icon: Layers, color: "text-purple-400 bg-purple-400/5 border-purple-400/20" },
  { name: "DSA", category: "Problem Solving", icon: Cpu, color: "text-emerald-400 bg-emerald-400/5 border-emerald-400/20" },
  { name: "Python", category: "Numpy,Matplotlib", icon: Globe, color: "text-indigo-400 bg-indigo-400/5 border-indigo-400/20" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: false, amount: 0.3 });
  const skillsControls = useAnimation();

  useEffect(() => {
    if (skillsInView) skillsControls.start("visible");
    else skillsControls.start("hidden");
  }, [skillsInView, skillsControls]);

  return (
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
  );
}
