import { Code, Palette, Server, Database } from "lucide-react";
import { 
  SiCplusplus, 
  SiPython, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiTailwindcss, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiSpringboot, 
  SiMysql, 
  SiMongodb, 
  SiGit, 
  SiSelenium 
} from "react-icons/si";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="text-4xl text-[hsl(195,100%,50%)] mb-4" />,
      skills: [
        { name: "C/C++", color: "from-blue-600 to-blue-400", icon: <SiCplusplus /> },
        { name: "Python", color: "from-yellow-600 to-yellow-400", icon: <SiPython /> },
        { name: "Java", color: "from-red-600 to-red-400", icon: <Code size={16} /> },
        { name: "JavaScript", color: "from-yellow-500 to-yellow-300", icon: <SiJavascript /> },
      ],
    },
    {
      title: "Frontend",
      icon: <Palette className="text-4xl text-[hsl(180,100%,50%)] mb-4" />,
      skills: [
        { name: "HTML/CSS", color: "from-orange-600 to-orange-400", icon: <SiHtml5 /> },
        { name: "Bootstrap", color: "from-purple-600 to-purple-400", icon: <SiBootstrap /> },
        { name: "TailwindCSS", color: "from-teal-600 to-teal-400", icon: <SiTailwindcss /> },
        { name: "ReactJS", color: "from-blue-500 to-blue-300", icon: <SiReact /> },
        { name: "React Native", color: "from-indigo-600 to-indigo-400", icon: <SiReact /> },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="text-4xl text-purple-400 mb-4" />,
      skills: [
        { name: "NodeJS", color: "from-green-600 to-green-400", icon: <SiNodedotjs /> },
        { name: "ExpressJS", color: "from-gray-700 to-gray-500", icon: <SiExpress /> },
        { name: "Spring Boot", color: "from-green-500 to-green-300", icon: <SiSpringboot /> },
      ],
    },
    {
      title: "Tools & DB",
      icon: <Database className="text-4xl text-pink-400 mb-4" />,
      skills: [
        { name: "MySQL", color: "from-blue-700 to-blue-500", icon: <SiMysql /> },
        { name: "MongoDB", color: "from-green-700 to-green-500", icon: <SiMongodb /> },
        { name: "Git", color: "from-orange-700 to-orange-500", icon: <SiGit /> },
        { name: "REST APIs", color: "from-red-700 to-red-500", icon: <Code size={16} /> },
        { name: "Selenium", color: "from-purple-700 to-purple-500", icon: <SiSelenium /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[hsl(240,64%,9%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for building
            scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`skill-badge bg-gradient-to-r ${skill.color} text-white px-4 py-2 rounded-full text-center text-sm font-medium flex items-center justify-center gap-2`}
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
