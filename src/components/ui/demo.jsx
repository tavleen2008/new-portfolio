import React from "react"
import { Boxes } from "@/components/ui/background-boxes"
import { cn } from "@/lib/utils"
import {
  IconBrandApple,
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandGoogleDrive,
  IconBrandMessenger,
  IconBrandNotion,
  IconBrandOpenai,
  IconBrandPaypal,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react"
import { LogoTimeline } from "@/components/ui/logo-timeline"

// ----------------------------------------------------
// Background Boxes Demo (Used in Hero section)
// ----------------------------------------------------
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
  )
}

// ----------------------------------------------------
// Logo Timeline Demo (Used in Skills section / standalone)
// ----------------------------------------------------
const logos = [
  // Row 1 - Communication & Social (2 logos, 50s duration, spaced 25s apart)
  {
    label: "Discord",
    icon: <IconBrandDiscord />,
    animationDelay: -50,
    animationDuration: 50,
    row: 1,
  },
  {
    label: "X (Twitter)",
    icon: <IconBrandX />,
    animationDelay: -25,
    animationDuration: 50,
    row: 1,
  },
  // Row 2 - Development Tools (2 logos, 45s duration, spaced 22.5s apart)
  {
    label: "GitHub",
    icon: <IconBrandGithub />,
    animationDelay: -45,
    animationDuration: 45,
    row: 2,
  },
  {
    label: "React",
    icon: <IconBrandReact />,
    animationDelay: -22.5,
    animationDuration: 45,
    row: 2,
  },
  // Row 3 - Development Tools Continued (3 logos, 60s duration, spaced 20s apart)
  {
    label: "TypeScript",
    icon: <IconBrandTypescript />,
    animationDelay: -60,
    animationDuration: 60,
    row: 3,
  },
  {
    label: "Tailwind",
    icon: <IconBrandTailwind />,
    animationDelay: -40,
    animationDuration: 60,
    row: 3,
  },

  // Row 4 - Productivity & Cloud (2 logos, 55s duration, spaced 27.5s apart)
  {
    label: "Google Drive",
    icon: <IconBrandGoogleDrive />,
    animationDelay: -55,
    animationDuration: 55,
    row: 4,
  },
  {
    label: "Notion",
    icon: <IconBrandNotion />,
    animationDelay: -27.5,
    animationDuration: 55,
    row: 4,
  },
  // Row 5 - Messaging (2 logos, 50s duration, spaced 25s apart)
  {
    label: "WhatsApp",
    icon: <IconBrandWhatsapp />,
    animationDelay: -50,
    animationDuration: 50,
    row: 5,
  },
  {
    label: "Messenger",
    icon: <IconBrandMessenger />, // Placeholder icon
    animationDelay: -25,
    animationDuration: 50,
    row: 5,
  },
  // Row 6 - AI & Automation (3 logos, 65s duration, spaced ~21.5s apart)
  {
    label: "OpenAI",
    icon: <IconBrandOpenai />, // Placeholder icon
    animationDelay: -65,
    animationDuration: 65,
    row: 6,
  },

  // Row 7 - Payment & Services (2 logos, 50s duration, spaced 25s apart)
  {
    label: "PayPal",
    icon: <IconBrandPaypal />, // Placeholder icon
    animationDelay: -50,
    animationDuration: 50,
    row: 7,
  },
  {
    label: "Apple",
    icon: <IconBrandApple />, // Placeholder icon
    animationDelay: -25,
    animationDuration: 50,
    row: 7,
  },
]

export function LogoTimelineDemo() {
  return (
    <div className="w-full overflow-hidden">
      <LogoTimeline
        items={logos}
        title="Built with the best tools"
        height="h-[400px] sm:h-[400px]"
        iconSize={18}
        showRowSeparator={true}
      />
    </div>
  )
}

export default LogoTimelineDemo
