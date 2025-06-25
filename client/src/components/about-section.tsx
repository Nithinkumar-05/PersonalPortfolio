import { GraduationCap, Target, Trophy, Users, Code } from "lucide-react";
import { SiGoogle } from "react-icons/si";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[hsl(235,32%,14%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[hsl(195,100%,50%)] mb-4 flex items-center gap-3">
                <GraduationCap size={28} />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[hsl(195,100%,50%)] pl-6">
                  <h4 className="text-xl font-semibold text-white">
                    Bachelor of Technology - Computer Science
                  </h4>
                  <p className="text-gray-300">
                    CVR College Of Engineering, Hyderabad
                  </p>
                  <p className="text-gray-400">2021-2025 • CGPA: 8.93</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">Class XII</h4>
                  <p className="text-gray-300">
                    Candor Shrine I Senior Secondary School
                  </p>
                  <p className="text-gray-400">2019-2021 • Percentage: 95.6%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[hsl(195,100%,50%)] mb-4 flex items-center gap-3">
                <Target size={28} />
                Objective
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Motivated CSE undergraduate with hands-on experience in
                full-stack development and prompt engineering. Seeking a Software
                Developer role to contribute robust, scalable solutions and grow
                within a collaborative team.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[hsl(195,100%,50%)] mb-4 flex items-center gap-3">
                <Users size={28} />
                Leadership
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Code className="text-[hsl(195,100%,50%)]" size={20} />
                  <span className="text-gray-300">
                    Technical Lead, CSI (Computer Society of India) Club
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <SiGoogle className="text-[hsl(195,100%,50%)]" size={20} />
                  <span className="text-gray-300">
                    Member, CVR Google Developer Student Club
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="text-[hsl(195,100%,50%)]" size={20} />
                  <span className="text-gray-300">
                    Participated in Smart India Hackathon 2023
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
