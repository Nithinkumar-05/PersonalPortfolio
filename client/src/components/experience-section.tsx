import { Building2, Calendar, CheckCircle, Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ROLES = [
  {
    title: "Associate Engineer — Content Management",
    company: "OpenText",
    period: "August 2025 – Present",
    badge: "Full-Time",
    badgeColor: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    accentColor: "hsl(195,100%,50%)",
    borderColor: "border-l-[hsl(195,100%,50%)]",
    logo: "OT",
    logoGrad: "from-[hsl(195,100%,50%)] to-emerald-400",
    points: [
      { color: "bg-[hsl(195,100%,50%)]",  text: "Developed and maintained scalable Retrieval-Augmented Generation (RAG) applications for enterprise search solutions handling large-scale data." },
      { color: "bg-emerald-400",           text: "Improved retrieval accuracy by 30% by optimizing embeddings, context filtering, and query performance." },
      { color: "bg-teal-400",              text: "Built a high-performance prompt execution ecosystem enabling dynamic querying over vector databases." },
      { color: "bg-cyan-400",              text: "Optimized system performance and reduced response latency through efficient backend and UI enhancements." },
    ],
    tags: ["RAG", "Vector Databases", "LangChain", "LLMs", "Spring Boot", "Performance"],
  },
  {
    title: "Intern — Core Intelligence Aviator",
    company: "OpenText",
    period: "March 2025 – August 2025",
    badge: "Internship",
    badgeColor: "text-purple-400 border-purple-400/40 bg-purple-400/10",
    accentColor: "#a855f7",
    borderColor: "border-l-purple-500",
    logo: "OT",
    logoGrad: "from-purple-600 to-violet-500",
    points: [
      { color: "bg-purple-400",  text: "Optimized LLM prompts to improve response clarity, context relevance, and reliability in large-scale enterprise workflows." },
      { color: "bg-violet-400",  text: "Enforced structured and searchable logging in Spring Boot, improving observability and debugging efficiency." },
      { color: "bg-pink-400",    text: "Collaborated in Agile teams, contributing to scalable feature development, peer reviews, and SDLC processes." },
    ],
    tags: ["LLM Prompting", "Spring Boot", "Selenium", "Agile", "SDLC"],
  },
];

function RoleCard({ role, index }: { role: typeof ROLES[0]; index: number }) {
  const card = useScrollReveal();
  return (
    <div
      ref={card.ref}
      className={`reveal ${card.visible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`glass-effect rounded-3xl overflow-hidden border-l-4 ${role.borderColor}`}>
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.logoGrad} flex items-center justify-center shrink-0 text-sm font-black text-white shadow-lg`}>
            {role.logo}
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-lg font-black text-white leading-snug">{role.title}</h3>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="font-bold" style={{ color: role.accentColor }}>{role.company}</span>
              <span className="text-gray-600 text-xs">•</span>
              <span className="text-gray-400 text-sm flex items-center gap-1">
                <Calendar size={12} /> {role.period}
              </span>
            </div>
          </div>
          <span className={`text-[10px] font-black uppercase tracking-widest border px-3 py-1.5 rounded-full shrink-0 ${role.badgeColor}`}>
            {role.badge}
          </span>
        </div>

        {/* Points */}
        <div className="p-6 sm:p-8">
          <div className="space-y-0">
            {role.points.map((pt, i) => (
              <div
                key={i}
                className={`flex gap-4 group hover:bg-white/[.03] rounded-xl p-3 -mx-3 transition-all duration-200 ${card.visible ? "animate-fadeInUp" : "opacity-0"}`}
                style={{ animationDelay: `${0.3 + index * 0.15 + i * 0.1}s` }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-2 h-2 rounded-full ${pt.color} mt-1.5 group-hover:scale-150 transition-transform`} />
                  {i < role.points.length - 1 && <div className="w-px flex-1 mt-1 bg-white/10" />}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed pb-3">{pt.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-5 border-t border-white/5">
            {role.tags.map(tag => (
              <span key={tag} className="text-xs text-gray-400 border border-white/10 bg-white/5 px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const heading = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-[hsl(240,64%,9%)] relative overflow-hidden">
      <div className="absolute top-0 right-4 section-num select-none pointer-events-none">03</div>
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/15 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={heading.ref} className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}>
          <p className="text-[hsl(195,100%,50%)] font-mono text-xs tracking-[0.3em] uppercase mb-3">— Where I've Worked —</p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">Experience</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {ROLES.map((role, i) => <RoleCard key={i} role={role} index={i} />)}
        </div>
      </div>
    </section>
  );
}
