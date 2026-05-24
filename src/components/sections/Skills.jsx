import React from "react";
import {
  IconBrandGithub,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandPython,
  IconCode,
  IconBrandJavascript,
  IconBrandFramerMotion,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandVscode,
  IconBrandGit,
  IconCoffee,
  IconBrain,
  IconDatabase,
} from "@tabler/icons-react";
import { LogoTimeline } from "@/components/ui/logo-timeline";

const logos = [
  { label: "React JS", icon: <IconBrandReact size={16} className="text-sky-400" />, animationDelay: -50, animationDuration: 50, row: 1 },
  { label: "Tailwind CSS", icon: <IconBrandTailwind size={16} className="text-teal-400" />, animationDelay: -45, animationDuration: 45, row: 2 },
  { label: "Framer Motion", icon: <IconBrandFramerMotion size={16} className="text-purple-400" />, animationDelay: -22.5, animationDuration: 45, row: 2 },
  { label: "Java", icon: <IconCoffee size={16} className="text-yellow-400" />, animationDelay: -60, animationDuration: 60, row: 3 },
  { label: "Python", icon: <IconBrandPython size={16} className="text-indigo-400" />, animationDelay: -40, animationDuration: 60, row: 3 },
  { label: "DSA", icon: <IconBrain size={16} className="text-emerald-400" />, animationDelay: -20, animationDuration: 60, row: 3 },
  { label: "JavaScript", icon: <IconBrandJavascript size={16} className="text-yellow-300" />, animationDelay: -55, animationDuration: 55, row: 4 },
  { label: "HTML5", icon: <IconBrandHtml5 size={16} className="text-orange-400" />, animationDelay: -27.5, animationDuration: 55, row: 4 },
  { label: "CSS3", icon: <IconBrandCss3 size={16} className="text-sky-500" />, animationDelay: -50, animationDuration: 50, row: 5 },
  { label: "Git", icon: <IconBrandGit size={16} className="text-orange-500" />, animationDelay: -25, animationDuration: 50, row: 5 },
  { label: "GitHub", icon: <IconBrandGithub size={16} className="text-slate-200" />, animationDelay: -65, animationDuration: 65, row: 6 },
  { label: "VS Code", icon: <IconBrandVscode size={16} className="text-blue-500" />, animationDelay: -32.5, animationDuration: 65, row: 6 },
  { label: "Numpy", icon: <IconDatabase size={16} className="text-cyan-400" />, animationDelay: -50, animationDuration: 50, row: 7 },
  { label: "Matplotlib", icon: <IconCode size={16} className="text-pink-400" />, animationDelay: -25, animationDuration: 50, row: 7 },
];

export default function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-12">
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          My Engineering Toolkit
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
          Curated stack that ensures absolute rendering performance, dynamic transitions, and modern responsiveness.
        </p>
      </div>
      <LogoTimeline items={logos} title="Tech Stack" height="h-[400px] sm:h-[600px]" />
    </section>
  );
}
