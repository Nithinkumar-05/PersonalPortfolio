import { GraduationCap, Target, Trophy, Users, Code } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function AboutSection() {
  const heading = useScrollReveal();
  const left = useScrollReveal();
  const right = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-[hsl(235,32%,14%)]">
      <div className="container mx-auto px-6">
        <div
          ref={heading.ref}
          className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div
            ref={left.ref}
            className={`space-y-6 reveal-left ${left.visible ? "visible" : ""}`}
          >
            <div className="glass-effect glass-hover shimmer-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[hsl(195,100%,50%)] mb-6 flex items-center gap-3">
                <GraduationCap size={28} />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[hsl(195,100%,50%)] pl-6 hover:pl-8 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-white">
                    Bachelor of Technology – Computer Science
                  </h4>
                  <p className="text-gray-300 mt-1">CVR College Of Engineering, Hyderabad</p>
                  <p className="text-gray-400 mt-1 text-sm">2021–2025 • CGPA: 8.93</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6 hover:pl-8 transition-all duration-300">
                  <h4 className="text-xl font-semibold text-white">Class XII</h4>
                  <p className="text-gray-300 mt-1">Candor Shrine I Senior Secondary School</p>
                  <p className="text-gray-400 mt-1 text-sm">2019–2021 • Percentage: 95.6%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            ref={right.ref}
            className={`space-y-6 reveal-right ${right.visible ? "visible" : ""}`}
          >
            <div className="glass-effect glass-hover shimmer-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[hsl(195,100%,50%)] mb-4 flex items-center gap-3">
                <Target size={28} />
                Objective
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Motivated CSE graduate with hands-on experience in full-stack development and
                prompt engineering. Seeking a Software Developer role to contribute robust,
                scalable solutions and grow within a collaborative team.
              </p>
            </div>

            <div className="glass-effect glass-hover shimmer-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[hsl(195,100%,50%)] mb-4 flex items-center gap-3">
                <Users size={28} />
                Leadership
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <Code size={18} />, text: "Technical Lead, CSI (Computer Society of India) Club" },
                  { icon: <SiGoogle size={18} />, text: "Member, CVR Google Developer Student Club" },
                  { icon: <Trophy size={18} />, text: "Participated in Smart India Hackathon 2023" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 group">
                    <span className="text-[hsl(195,100%,50%)] group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {item.text}
                    </span>
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
