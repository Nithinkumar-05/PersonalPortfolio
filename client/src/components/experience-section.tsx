import { Building2, Calendar, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[hsl(235,32%,14%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <Building2 className="text-[hsl(195,100%,50%)]" size={28} />
                  Intern - Core Intelligence Aviator Project
                </h3>
                <p className="text-[hsl(195,100%,50%)] text-lg font-semibold mb-2">
                  OpenText
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <Calendar size={16} />
                  Hybrid/India • March 2025 – August 2025
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Current Role
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[hsl(195,100%,50%)] flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    LLM Optimization:
                  </span>{" "}
                  Optimized LLM prompts to improve clarity, context specificity,
                  and reliability in enterprise workflows.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-[hsl(180,100%,50%)] flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    Backend Development:
                  </span>{" "}
                  Contributed to backend enhancements using Spring Boot by
                  implementing structured and searchable logging for efficient
                  failure tracing.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  <span className="font-semibold text-white">UI Testing:</span>{" "}
                  Wrote and executed basic UI tests using Selenium to validate
                  frontend interactions.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  <span className="font-semibold text-white">SDLC Exposure:</span>{" "}
                  Gained hands-on exposure to the Software Development Life Cycle
                  (SDLC) and participated in peer reviews and iterative
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
