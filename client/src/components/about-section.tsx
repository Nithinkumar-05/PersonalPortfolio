import { GraduationCap, Target, Users, Code, Trophy, Briefcase } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const EXPERIENCE = [
  {
    role: "Associate Engineer",
    company: "OpenText",
    period: "Aug 2025 – Present",
    color: "hsl(195,100%,50%)",
    dot: "bg-[hsl(195,100%,50%)]",
    badge: "Full-Time",
    badgeClass: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  },
  {
    role: "Intern — Core Intelligence",
    company: "OpenText",
    period: "Mar 2025 – Aug 2025",
    color: "#a855f7",
    dot: "bg-purple-500",
    badge: "Internship",
    badgeClass: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  },
];

const EDU = [
  {
    degree: "B.Tech – Computer Science",
    institution: "CVR College Of Engineering, Hyderabad",
    period: "2021 – 2025",
    score: "CGPA: 8.93",
    color: "hsl(195,100%,50%)",
    dot: "bg-[hsl(195,100%,50%)]",
  },
  {
    degree: "Class XII",
    institution: "Candor Shrine I Senior Secondary School",
    period: "2019 – 2021",
    score: "95.6%",
    color: "#a855f7",
    dot: "bg-purple-500",
  },
];

const LEADERSHIP = [
  { icon: <Code size={16} />,    text: "Technical Lead — CSI (Computer Society of India) Club" },
  { icon: <SiGoogle size={16} />,text: "Member — CVR Google Developer Student Club" },
  { icon: <Trophy size={16} />,  text: "Participant — Smart India Hackathon 2023" },
];

export default function AboutSection() {
  const heading = useScrollReveal();
  const left    = useScrollReveal();
  const right   = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-[hsl(235,32%,14%)] relative overflow-hidden">
      <div className="absolute top-0 left-4 section-num select-none pointer-events-none">01</div>
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[hsl(195,100%,50%)]/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div ref={heading.ref} className={`text-center mb-20 reveal ${heading.visible ? "visible" : ""}`}>
          <p className="text-[hsl(195,100%,50%)] font-mono text-xs tracking-[0.3em] uppercase mb-3">— Who I Am —</p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">About Me</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left — Experience + Education timeline ── */}
          <div ref={left.ref} className={`reveal-left ${left.visible ? "visible" : ""}`}>

            {/* ── Experience ── */}
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={22} className="text-[hsl(195,100%,50%)]" />
              <h3 className="text-lg font-black text-white uppercase tracking-wider">Experience</h3>
            </div>

            <div className="relative pl-8 mb-10">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(195,100%,50%)] to-purple-500 timeline-line" />

              {EXPERIENCE.map((e, i) => (
                <div
                  key={i}
                  className={`relative mb-6 last:mb-0 ${left.visible ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: `${0.2 + i * 0.12}s` }}
                >
                  <div
                    className={`absolute -left-8 top-2 w-3 h-3 rounded-full ${e.dot} ring-4 ring-[hsl(235,32%,14%)]`}
                    style={{ boxShadow: `0 0 10px ${e.color}` }}
                  />
                  <div
                    className="glass-effect rounded-xl p-4 border-l-2 hover:bg-white/[.06] transition-colors duration-200 group"
                    style={{ borderColor: e.color }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-black text-white leading-snug">{e.role}</h4>
                      <span className={`text-[9px] font-black uppercase tracking-widest border px-2 py-0.5 rounded-full shrink-0 ${e.badgeClass}`}>
                        {e.badge}
                      </span>
                    </div>
                    <p className="font-bold text-xs mb-1" style={{ color: e.color }}>{e.company}</p>
                    <p className="text-gray-600 text-xs">{e.period}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── Education ── */}
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={22} className="text-[hsl(195,100%,50%)]" />
              <h3 className="text-lg font-black text-white uppercase tracking-wider">Education</h3>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(195,100%,50%)] to-purple-500 timeline-line" />

              {EDU.map((e, i) => (
                <div
                  key={i}
                  className={`relative mb-8 last:mb-0 ${left.visible ? "animate-fadeInUp" : "opacity-0"}`}
                  style={{ animationDelay: `${0.45 + i * 0.15}s` }}
                >
                  <div
                    className={`absolute -left-8 top-1.5 w-3 h-3 rounded-full ${e.dot} ring-4 ring-[hsl(235,32%,14%)]`}
                    style={{ boxShadow: `0 0 10px ${e.color}` }}
                  />
                  <div
                    className="glass-effect rounded-xl p-5 border-l-2 hover:bg-white/[.06] transition-colors duration-200 group"
                    style={{ borderColor: e.color }}
                  >
                    <h4 className="text-sm font-black text-white mb-1">{e.degree}</h4>
                    <p className="text-gray-400 text-xs mb-2">{e.institution}</p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="text-gray-600">{e.period}</span>
                      <span className="font-bold" style={{ color: e.color }}>{e.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — Objective + Leadership + Stats ── */}
          <div ref={right.ref} className={`space-y-6 reveal-right ${right.visible ? "visible" : ""}`}>

            {/* Objective */}
            <div className="glass-effect rounded-2xl p-7 border-t-2 border-[hsl(180,100%,50%)] hover:bg-white/[.06] transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <Target size={22} className="text-[hsl(180,100%,50%)]" />
                <h3 className="text-base font-black text-white uppercase tracking-wider">Objective</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Software Engineer with experience in building scalable backend systems and
                high-performance applications using modern full-stack technologies and AI frameworks
                such as LLMs, RAG, and vector databases. Focused on delivering efficient and reliable solutions.
              </p>
            </div>

            {/* Leadership */}
            <div className="glass-effect rounded-2xl p-7 border-t-2 border-purple-500 hover:bg-white/[.06] transition-colors group">
              <div className="flex items-center gap-3 mb-5">
                <Users size={22} className="text-purple-400" />
                <h3 className="text-base font-black text-white uppercase tracking-wider">Leadership</h3>
              </div>
              <div className="space-y-4">
                {LEADERSHIP.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200 group/item">
                    <span className="text-[hsl(195,100%,50%)] shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <p className="text-gray-400 text-sm leading-snug group-hover/item:text-white transition-colors">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { n: "8.93",  l: "CGPA" },
                { n: "95.6%", l: "Class XII" },
                { n: "2025",  l: "Graduated" },
              ].map(s => (
                <div key={s.l} className="glass-effect rounded-xl p-4 text-center hover:bg-[hsl(195,100%,50%)]/10 border hover:border-[hsl(195,100%,50%)]/30 transition-all duration-200">
                  <div className="text-xl font-black gradient-text">{s.n}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
