import { Building2, Calendar, CheckCircle, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const POINTS = [
  {
    color: "text-[hsl(195,100%,50%)]",
    bg: "bg-[hsl(195,100%,50%)]",
    title: "LLM Optimization",
    text: "Optimized LLM prompts to improve clarity, context specificity, and reliability in enterprise AI workflows.",
  },
  {
    color: "text-[hsl(180,100%,50%)]",
    bg: "bg-[hsl(180,100%,50%)]",
    title: "Backend Development",
    text: "Contributed to Spring Boot backend with structured searchable logging for efficient failure tracing.",
  },
  {
    color: "text-purple-400",
    bg: "bg-purple-500",
    title: "UI Testing",
    text: "Wrote and executed Selenium UI tests to validate frontend interactions at scale.",
  },
  {
    color: "text-pink-400",
    bg: "bg-pink-500",
    title: "SDLC Exposure",
    text: "Gained hands-on SDLC experience through peer reviews and iterative agile development cycles.",
  },
];

export default function ExperienceSection() {
  const heading = useScrollReveal();
  const card    = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-[hsl(240,64%,9%)] relative overflow-hidden">
      <div className="absolute top-0 right-4 section-num select-none pointer-events-none">03</div>

      {/* Animated vertical beam */}
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={heading.ref} className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}>
          <p className="text-[hsl(195,100%,50%)] font-mono text-xs tracking-[0.3em] uppercase mb-3">— Where I've Worked —</p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">Experience</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={card.ref} className={`reveal ${card.visible ? "visible" : ""}`}>
            <div className="glass-effect rounded-3xl overflow-hidden">

              {/* Header strip */}
              <div className="bg-gradient-to-r from-[hsl(195,100%,50%)]/10 to-purple-600/10 border-b border-white/10 p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  {/* Company logo placeholder */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[hsl(195,100%,50%)] to-purple-500 flex items-center justify-center shrink-0 text-xl font-black text-white shadow-[0_0_20px_hsl(195,100%,50%)/30]">
                    OT
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-black text-white mb-1">
                          Core Intelligence Aviator Project
                        </h3>
                        <div className="flex items-center gap-2">
                          <p className="text-[hsl(195,100%,50%)] font-bold">OpenText</p>
                          <span className="text-gray-600">•</span>
                          <p className="text-gray-400 text-sm flex items-center gap-1">
                            <Calendar size={13} /> March – August 2025
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(195,100%,50%)] border border-[hsl(195,100%,50%)]/40 bg-[hsl(195,100%,50%)]/10 px-3 py-1.5 rounded-full">
                          Intern
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 border border-purple-400/40 bg-purple-400/10 px-3 py-1.5 rounded-full">
                          Hybrid
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">Key Contributions</p>
                <div className="space-y-0">
                  {POINTS.map((pt, i) => (
                    <div
                      key={i}
                      className={`flex gap-4 group hover:bg-white/[.03] rounded-xl p-4 -mx-4 transition-all duration-200 ${card.visible ? "animate-fadeInUp" : "opacity-0"}`}
                      style={{ animationDelay: `${.2 + i * .12}s` }}
                    >
                      {/* Timeline dot + line */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className={`w-2.5 h-2.5 rounded-full ${pt.bg} mt-1.5 shrink-0 group-hover:scale-150 transition-transform duration-200`}
                          style={{ boxShadow: `0 0 8px currentColor` }} />
                        {i < POINTS.length - 1 && (
                          <div className="w-px flex-1 mt-1 bg-white/10" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className={`text-sm font-black mb-1 ${pt.color}`}>{pt.title}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{pt.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4 pt-6 border-t border-white/5">
                  {["Spring Boot", "LLM Prompting", "Selenium", "Agile / SDLC"].map(tag => (
                    <span key={tag} className="text-xs text-gray-400 border border-white/10 bg-white/5 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
