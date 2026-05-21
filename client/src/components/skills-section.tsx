import {
  SiCplusplus, SiPython, SiJavascript, SiHtml5,
  SiBootstrap, SiTailwindcss, SiReact, SiNodedotjs,
  SiExpress, SiSpringboot, SiMysql, SiMongodb, SiGit,
  SiLangchain, SiN8N, SiGithub
} from "react-icons/si";
import { Code, Database, Brain, Cpu, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  glow: string;
  category: string;
}

const ALL_SKILLS: Skill[] = [
  // Languages
  { name: "C/C++",        icon: <SiCplusplus />,    color: "from-sky-600 to-blue-500",      glow: "rgba(14,165,233,.5)",  category: "Languages" },
  { name: "Python",       icon: <SiPython />,        color: "from-yellow-500 to-amber-400",  glow: "rgba(234,179,8,.5)",   category: "Languages" },
  { name: "Java",         icon: <Code size={18} />,  color: "from-red-600 to-rose-500",      glow: "rgba(239,68,68,.5)",   category: "Languages" },
  { name: "JavaScript",   icon: <SiJavascript />,    color: "from-yellow-400 to-yellow-300", glow: "rgba(250,204,21,.5)",  category: "Languages" },
  // Frontend
  { name: "HTML/CSS",     icon: <SiHtml5 />,         color: "from-orange-600 to-orange-400", glow: "rgba(234,88,12,.5)",   category: "Frontend" },
  { name: "Bootstrap",    icon: <SiBootstrap />,     color: "from-purple-600 to-violet-500", glow: "rgba(124,58,237,.5)",  category: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />,   color: "from-teal-500 to-cyan-400",     glow: "rgba(20,184,166,.5)",  category: "Frontend" },
  { name: "ReactJS",      icon: <SiReact />,         color: "from-blue-500 to-cyan-400",     glow: "rgba(59,130,246,.5)",  category: "Frontend" },
  { name: "React Native", icon: <SiReact />,         color: "from-indigo-600 to-blue-400",   glow: "rgba(99,102,241,.5)",  category: "Frontend" },
  // Backend
  { name: "NodeJS",       icon: <SiNodedotjs />,     color: "from-green-600 to-emerald-500", glow: "rgba(22,163,74,.5)",   category: "Backend" },
  { name: "ExpressJS",    icon: <SiExpress />,       color: "from-gray-600 to-slate-500",    glow: "rgba(100,116,139,.5)", category: "Backend" },
  { name: "Spring Boot",  icon: <SiSpringboot />,    color: "from-green-500 to-lime-400",    glow: "rgba(132,204,22,.5)",  category: "Backend" },
  // Databases
  { name: "MySQL",        icon: <SiMysql />,         color: "from-blue-700 to-blue-500",     glow: "rgba(29,78,216,.5)",   category: "Databases" },
  { name: "MongoDB",      icon: <SiMongodb />,       color: "from-green-700 to-green-500",   glow: "rgba(21,128,61,.5)",   category: "Databases" },
  { name: "Vector DB",    icon: <Database size={18}/>, color: "from-fuchsia-600 to-pink-500", glow: "rgba(192,38,211,.5)", category: "Databases" },
  // AI & Tools
  { name: "LangChain",    icon: <SiLangchain />,     color: "from-emerald-600 to-teal-500",  glow: "rgba(5,150,105,.5)",   category: "AI & Tools" },
  { name: "n8n",          icon: <SiN8N />,           color: "from-rose-600 to-pink-500",     glow: "rgba(225,29,72,.5)",   category: "AI & Tools" },
  { name: "REST APIs",    icon: <Layers size={18} />,color: "from-violet-600 to-purple-500", glow: "rgba(124,58,237,.5)",  category: "AI & Tools" },
  { name: "Git",          icon: <SiGit />,           color: "from-orange-700 to-orange-500", glow: "rgba(194,65,12,.5)",   category: "AI & Tools" },
  { name: "GitHub",       icon: <SiGithub />,        color: "from-gray-700 to-gray-500",     glow: "rgba(107,114,128,.5)", category: "AI & Tools" },
  { name: "CI/CD",        icon: <Cpu size={18} />,   color: "from-blue-600 to-indigo-500",   glow: "rgba(37,99,235,.5)",   category: "AI & Tools" },
  // Concepts
  { name: "DSA",          icon: <Brain size={18} />, color: "from-cyan-600 to-sky-500",      glow: "rgba(8,145,178,.5)",   category: "Concepts" },
  { name: "System Design",icon: <Cpu size={18} />,   color: "from-teal-600 to-cyan-500",     glow: "rgba(13,148,136,.5)",  category: "Concepts" },
  { name: "Distributed",  icon: <Layers size={18}/>, color: "from-indigo-600 to-blue-500",   glow: "rgba(79,70,229,.5)",   category: "Concepts" },
  { name: "Agile / SDLC", icon: <Code size={18} />,  color: "from-slate-600 to-gray-500",    glow: "rgba(71,85,105,.5)",   category: "Concepts" },
];

function toRows(items: Skill[], rowSize = 5): Skill[][] {
  const rows: Skill[][] = [];
  let i = 0;
  while (i < items.length) {
    const size = rows.length % 2 === 0 ? rowSize : rowSize - 1;
    rows.push(items.slice(i, i + size));
    i += size;
  }
  return rows;
}

const CATEGORIES = ["Languages", "Frontend", "Backend", "Databases", "AI & Tools", "Concepts"];
const CAT_STYLES: Record<string, string> = {
  "Languages":  "text-sky-400   border-sky-400/30   bg-sky-400/5",
  "Frontend":   "text-purple-400 border-purple-400/30 bg-purple-400/5",
  "Backend":    "text-green-400  border-green-400/30  bg-green-400/5",
  "Databases":  "text-fuchsia-400 border-fuchsia-400/30 bg-fuchsia-400/5",
  "AI & Tools": "text-rose-400   border-rose-400/30   bg-rose-400/5",
  "Concepts":   "text-cyan-400   border-cyan-400/30   bg-cyan-400/5",
};

function HexCell({ skill, idx }: { skill: Skill; idx: number }) {
  return (
    <div className="group relative flex flex-col items-center" style={{ transitionDelay: `${idx * 35}ms` }}>
      <div
        className={`hex-cell w-[82px] h-[94px] sm:w-[95px] sm:h-[109px] bg-gradient-to-br ${skill.color} cursor-pointer relative z-10`}
        style={{ filter: "drop-shadow(0 0 0px transparent)", transition: "filter .25s ease, transform .25s ease" }}
        onMouseEnter={e => {
          e.currentTarget.style.filter = `drop-shadow(0 0 10px ${skill.glow})`;
          e.currentTarget.style.transform = "scale(1.14)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-1.5 px-1">
          <span className="text-xl sm:text-2xl text-white drop-shadow">{skill.icon}</span>
          <span className="text-[9px] sm:text-[10px] font-bold text-white/90 text-center leading-tight">{skill.name}</span>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const heading = useScrollReveal();
  const grid    = useScrollReveal();

  const rows = toRows(ALL_SKILLS, 5);

  return (
    <section id="skills" className="py-24 bg-[hsl(240,64%,9%)] relative overflow-hidden">
      <div className="absolute top-0 right-4 section-num select-none pointer-events-none">02</div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={heading.ref} className={`text-center mb-14 reveal ${heading.visible ? "visible" : ""}`}>
          <p className="text-[hsl(195,100%,50%)] font-mono text-xs tracking-[0.3em] uppercase mb-3">— What I Know —</p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">Technical Skills</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent mx-auto mb-6" />
          <p className="text-gray-500 text-sm">Hover each hexagon to light it up</p>
        </div>

        {/* Category legend */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map(cat => (
            <span key={cat} className={`text-[11px] font-bold px-3 py-1 rounded-full border ${CAT_STYLES[cat]}`}>
              {cat}
            </span>
          ))}
        </div>

        {/* Hex honeycomb */}
        <div ref={grid.ref} className={`reveal ${grid.visible ? "visible" : ""}`}>
          <div className="flex flex-col items-center gap-1.5">
            {rows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex gap-2" style={{ marginLeft: rowIdx % 2 === 1 ? "50px" : "0" }}>
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
