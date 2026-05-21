import { Code, Palette, Server, Database } from "lucide-react";
import {
  SiCplusplus, SiPython, SiJavascript, SiHtml5,
  SiBootstrap, SiTailwindcss, SiReact, SiNodedotjs,
  SiExpress, SiSpringboot, SiMysql, SiMongodb, SiGit, SiSelenium
} from "react-icons/si";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function SkillsSection() {
  const heading = useScrollReveal();

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-[hsl(195,100%,50%)]" size={28} />,
      borderColor: "border-[hsl(195,100%,50%)]",
      skills: [
        { name: "C/C++",       color: "from-blue-600 to-blue-400",     icon: <SiCplusplus /> },
        { name: "Python",      color: "from-yellow-600 to-yellow-400", icon: <SiPython /> },
        { name: "Java",        color: "from-red-600 to-red-400",       icon: <Code size={16} /> },
        { name: "JavaScript",  color: "from-yellow-500 to-yellow-300", icon: <SiJavascript /> },
      ],
    },
    {
      title: "Frontend",
      icon: <Palette className="text-[hsl(180,100%,50%)]" size={28} />,
      borderColor: "border-[hsl(180,100%,50%)]",
      skills: [
        { name: "HTML/CSS",     color: "from-orange-600 to-orange-400", icon: <SiHtml5 /> },
        { name: "Bootstrap",    color: "from-purple-600 to-purple-400", icon: <SiBootstrap /> },
        { name: "TailwindCSS",  color: "from-teal-600 to-teal-400",     icon: <SiTailwindcss /> },
        { name: "ReactJS",      color: "from-blue-500 to-blue-300",     icon: <SiReact /> },
        { name: "React Native", color: "from-indigo-600 to-indigo-400", icon: <SiReact /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="text-purple-400" size={28} />,
      borderColor: "border-purple-400",
      skills: [
        { name: "NodeJS",      color: "from-green-600 to-green-400", icon: <SiNodedotjs /> },
        { name: "ExpressJS",   color: "from-gray-700 to-gray-500",   icon: <SiExpress /> },
        { name: "Spring Boot", color: "from-green-500 to-green-300", icon: <SiSpringboot /> },
      ],
    },
    {
      title: "Tools & DB",
      icon: <Database className="text-pink-400" size={28} />,
      borderColor: "border-pink-400",
      skills: [
        { name: "MySQL",     color: "from-blue-700 to-blue-500",   icon: <SiMysql /> },
        { name: "MongoDB",   color: "from-green-700 to-green-500", icon: <SiMongodb /> },
        { name: "Git",       color: "from-orange-700 to-orange-500", icon: <SiGit /> },
        { name: "REST APIs", color: "from-red-700 to-red-500",     icon: <Code size={16} /> },
        { name: "Selenium",  color: "from-purple-700 to-purple-500", icon: <SiSelenium /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[hsl(240,64%,9%)]">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable applications
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => {
            const reveal = useScrollReveal();
            return (
              <div
                key={categoryIndex}
                ref={reveal.ref}
                className={`reveal ${reveal.visible ? "visible" : ""}`}
                style={{ transitionDelay: `${categoryIndex * 80}ms` }}
              >
                <div className={`glass-effect glass-hover rounded-2xl p-8 border-t-2 ${category.borderColor}`}>
                  <div className="flex items-center gap-3 mb-8">
                    {category.icon}
                    <h3 className="text-2xl font-bold gradient-text">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group skill-badge shimmer-border rounded-xl overflow-hidden"
                        style={{ transitionDelay: `${skillIndex * 50}ms` }}
                      >
                        <div
                          className={`bg-gradient-to-r ${skill.color} text-white p-4 rounded-xl text-center font-medium h-full border border-white/10`}
                        >
                          <div className="flex flex-col items-center gap-3">
                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300 drop-shadow">
                              {skill.icon}
                            </span>
                            <span className="text-sm font-semibold leading-tight">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
