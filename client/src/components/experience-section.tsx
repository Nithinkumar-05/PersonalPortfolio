import { Building2, Calendar, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const responsibilities = [
  {
    color: "text-[hsl(195,100%,50%)]",
    title: "LLM Optimization",
    text: "Optimized LLM prompts to improve clarity, context specificity, and reliability in enterprise workflows.",
  },
  {
    color: "text-[hsl(180,100%,50%)]",
    title: "Backend Development",
    text: "Contributed to backend enhancements using Spring Boot by implementing structured and searchable logging for efficient failure tracing.",
  },
  {
    color: "text-purple-400",
    title: "UI Testing",
    text: "Wrote and executed basic UI tests using Selenium to validate frontend interactions.",
  },
  {
    color: "text-pink-400",
    title: "SDLC Exposure",
    text: "Gained hands-on exposure to the Software Development Life Cycle (SDLC) and participated in peer reviews and iterative development.",
  },
];

export default function ExperienceSection() {
  const heading = useScrollReveal();
  const card = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-[hsl(235,32%,14%)]">
      <div className="container mx-auto px-6">
        <div
          ref={heading.ref}
          className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={card.ref}
            className={`reveal ${card.visible ? "visible" : ""}`}
          >
            <div className="glass-effect glass-hover shimmer-border rounded-2xl p-8 border-l-4 border-[hsl(195,100%,50%)]">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <Building2 className="text-[hsl(195,100%,50%)] flex-shrink-0" size={28} />
                    Intern – Core Intelligence Aviator Project
                  </h3>
                  <p className="text-[hsl(195,100%,50%)] text-lg font-semibold mb-2">OpenText</p>
                  <p className="text-gray-400 flex items-center gap-2 text-sm">
                    <Calendar size={15} />
                    Hybrid / India &nbsp;•&nbsp; March 2025 – August 2025
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-block bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] text-[hsl(240,64%,9%)] px-4 py-2 rounded-full text-sm font-bold">
                    Current Role
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-5">
                {responsibilities.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 group hover:bg-white/5 rounded-xl p-3 -mx-3 transition-colors duration-200"
                  >
                    <CheckCircle className={`w-5 h-5 ${r.color} flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-white">{r.title}: </span>
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
