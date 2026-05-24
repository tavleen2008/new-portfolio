import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Terminal, FolderGit2, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Student Task Manager",
    description: "A react based to-do-list in which u can add or delete tasks",
    tags: ["React JS"],
    link: "https://github.com/tavleen2008/react-student-manager",
    featured: false,
  },
  {
    title: "DSA Codebook",
    description: "A real-time data structure visualizer inspired by a kitchen simulation game.",
    tags: ["React JS", "Vite", "Tailwind CSS"],
    link: "https://github.com/tavleen2008/dsa-codebook",
    featured: true,
  },
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

export default function Projects() {
  const projectsRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: false, amount: 0.3 });
  const projectsControls = useAnimation();

  useEffect(() => {
    if (projectsInView) projectsControls.start("visible");
    else projectsControls.start("hidden");
  }, [projectsInView, projectsControls]);

  return (
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            My Engineering playground.
          </p>
        </div>

        <a
          href="https://github.com/tavleen2008"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 tracking-wider uppercase py-2 transition-colors w-fit border-b border-purple-500/0 hover:border-purple-400/50"
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
            className={`flex flex-col justify-between p-7 rounded-2xl bg-purple-50/60 dark:bg-slate-900/30 border border-purple-200 dark:border-slate-900 hover:border-purple-300 dark:hover:border-slate-800/80 hover:bg-purple-100/70 dark:hover:bg-slate-900/50 transition-all duration-300 group shadow-xl relative overflow-hidden ${project.featured ? 'md:col-span-2 lg:col-span-1 border-purple-500/30 dark:border-purple-500/20 bg-gradient-to-b from-purple-50/80 to-purple-100/40 dark:from-slate-900/40 dark:to-slate-950' : ''}`}
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="p-2 bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl text-purple-600 dark:text-purple-400 group-hover:scale-105 transition-transform duration-300">
                  <Terminal className="w-5 h-5" />
                </span>
                {project.featured && (
                  <span className="px-2.5 py-0.5 rounded-full border border-purple-50/30 bg-purple-500/10 text-purple-600 dark:text-purple-300 text-[10px] font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/40 text-[10px] font-mono text-slate-600 dark:text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700"
              >
                Examine Project
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {project.featured && (
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none" />
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
