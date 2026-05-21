import {
  SiCplusplus, SiPython, SiJavascript, SiHtml5,
  SiBootstrap, SiTailwindcss, SiReact, SiNodedotjs,
  SiExpress, SiSpringboot, SiMysql, SiMongodb, SiGit, SiSelenium
} from "react-icons/si";
import { Code } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;       // bg gradient
  glow: string;        // shadow color
  category: string;
}

const ALL_SKILLS: Skill[] = [
  // Languages
  { name: "C/C++",       icon: <SiCplusplus />,   color: "from-sky-600 to-blue-500",      glow: "rgba(14,165,233,.5)",  category: "Languages" },
  { name: "Python",      icon: <SiPython />,       color: "from-yellow-500 to-amber-400",  glow: "rgba(234,179,8,.5)",   category: "Languages" },
  { name: "Java",        icon: <Code size={20} />, color: "from-red-600 to-rose-500",      glow: "rgba(239,68,68,.5)",   category: "Languages" },
  { name: "JavaScript",  icon: <SiJavascript />,   color: "from-yellow-400 to-yellow-300", glow: "rgba(250,204,21,.5)",  category: "Languages" },
  // Frontend
  { name: "HTML/CSS",    icon: <SiHtml5 />,        color: "from-orange-600 to-orange-400", glow: "rgba(234,88,12,.5)",   category: "Frontend" },
  { name: "Bootstrap",   icon: <SiBootstrap />,    color: "from-purple-600 to-violet-500", glow: "rgba(124,58,237,.5)",  category: "Frontend" },
  { name: "Tailwind",    icon: <SiTailwindcss />,  color: "from-teal-500 to-cyan-400",     glow: "rgba(20,184,166,.5)",  category: "Frontend" },
  { name: "ReactJS",     icon: <SiReact />,        color: "from-blue-500 to-cyan-400",     glow: "rgba(59,130,246,.5)",  category: "Frontend" },
  { name: "React Native",icon: <SiReact />,        color: "from-indigo-600 to-blue-400",   glow: "rgba(99,102,241,.5)",  category: "Frontend" },
  // Backend
  { name: "NodeJS",      icon: <SiNodedotjs />,    color: "from-green-600 to-emerald-500", glow: "rgba(22,163,74,.5)",   category: "Backend" },
  { name: "ExpressJS",   icon: <SiExpress />,      color: "from-gray-600 to-slate-500",    glow: "rgba(100,116,139,.5)", category: "Backend" },
  { name: "Spring Boot", icon: <SiSpringboot />,   color: "from-green-500 to-lime-400",    glow: "rgba(132,204,22,.5)",  category: "Backend" },
  // DB & Tools
  { name: "MySQL",       icon: <SiMysql />,        color: "from-blue-700 to-blue-500",     glow: "rgba(29,78,216,.5)",   category: "Tools & DB" },
  { name: "MongoDB",     icon: <SiMongodb />,      color: "from-green-700 to-green-500",   glow: "rgba(21,128,61,.5)",   category: "Tools & DB" },
  { name: "Git",         icon: <SiGit />,          color: "from-orange-700 to-orange-500", glow: "rgba(194,65,12,.5)",   category: "Tools & DB" },
  { name: "REST APIs",   icon: <Code size={20} />, color: "from-red-700 to-pink-500",      glow: "rgba(185,28,28,.5)",   category: "Tools & DB" },
  { name: "Selenium",    icon: <SiSelenium />,     color: "from-purple-700 to-purple-500", glow: "rgba(109,40,217,.5)",  category: "Tools & DB" },
];

// Build hex rows: 5, 4, 5, 3 …
function toRows(items: Skill[], rowSize: number): Skill[][] {
  const rows: Skill[][] = [];
  let i = 0;
  while (i < items.length) {
    const size = rows.length % 2 === 0 ? rowSize : rowSize - 1;
    rows.push(items.slice(i, i + size));
    i += size;
  }
  return rows;
}

function HexCell({ skill, idx }: { skill: Skill; idx: number }) {
  return (
    <div
      className="group relative flex flex-col items-center"
      style={{ transitionDelay: `${idx * 40}ms` }}
    >
      {/* Glow behind */}
      <div className="absolute inset-0 hex-cell opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-110"
        style={{ background: `radial-gradient(circle, ${skill.glow} 0%, transparent 70%)` }} />

      <div className={`hex-cell w-[90px] h-[104px] sm:w-[100px] sm:h-[115px] bg-gradient-to-br ${skill.color} cursor-pointer relative z-10`}
        style={{ filter: "drop-shadow(0 0 0px transparent)", transition: "filter .25s ease" }}
        onMouseEnter={e => (e.currentTarget.style.filter = `drop-shadow(0 0 12px ${skill.glow})`)}
        onMouseLeave={e => (e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)")}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2 px-2">
          <span className="text-2xl text-white drop-shadow group-hover:scale-125 transition-transform duration-300">
            {skill.icon}
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-white/90 text-center leading-tight">
            {skill.name}
          </span>
        </div>
      </div>
    </div>
  );
}

const CATEGORIES = ["Languages", "Frontend", "Backend", "Tools & DB"];
const CAT_COLORS: Record<string, string> = {
  "Languages":  "text-sky-400 border-sky-400/30",
  "Frontend":   "text-purple-400 border-purple-400/30",
  "Backend":    "text-green-400 border-green-400/30",
  "Tools & DB": "text-pink-400 border-pink-400/30",
};

export default function SkillsSection() {
  const heading = useScrollReveal();
  const grid = useScrollReveal();

  const rows = toRows(ALL_SKILLS, 5);

  return (
    <section id="skills" className="py-24 bg-[hsl(240,64%,9%)] relative overflow-hidden">
      {/* Decorative number */}
      <div className="absolute top-0 right-4 section-num select-none pointer-events-none">02</div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div ref={heading.ref} className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}>
          <p className="text-[hsl(195,100%,50%)] font-mono text-xs tracking-[0.3em] uppercase mb-3">— What I Know —</p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">Technical Skills</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent mx-auto mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Hover each hexagon to light it up
          </p>
        </div>

        {/* Category legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map(cat => (
            <span key={cat} className={`text-xs font-semibold px-3 py-1 rounded-full border ${CAT_COLORS[cat]} bg-white/5`}>
              {cat}
            </span>
          ))}
        </div>

        {/* Hex honeycomb */}
        <div ref={grid.ref} className={`reveal ${grid.visible ? "visible" : ""}`}>
          <div className="flex flex-col items-center gap-2">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="flex gap-3"
                style={{ marginLeft: rowIdx % 2 === 1 ? "56px" : "0" }}
              >
                {row.map((skill, colIdx) => {
                  const globalIdx = rows.slice(0, rowIdx).reduce((a, r) => a + r.length, 0) + colIdx;
                  return <HexCell key={skill.name} skill={skill} idx={globalIdx} />;
                })}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
