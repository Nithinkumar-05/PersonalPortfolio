import { ExternalLink, Github, Smartphone, Map, Brain } from "lucide-react";
import { SiReact, SiFirebase, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const projects = [
  {
    title: "EdQuiz",
    subtitle: "A Quiz Application",
    description:
      "Created a web application that enables users to create, manage, and participate in quiz contests. Implemented features such as quiz creation and link sharing to simplify participant access. Facilitated real-time score calculation and result storage with detailed analytics for quiz creators.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS"],
    techIcons: [
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
      <SiTailwindcss key="tailwind" />,
    ],
    gradient: "from-emerald-600 to-teal-600",
    glow: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)]",
    features: ["Quiz creation", "Link sharing", "Real-time scoring", "Analytics"],
    link: "https://quized.vercel.app/",
    image: "/attached_assets/Edquiz_1750869014841.png",
    badge: <Brain size={28} className="text-white/80" />,
  },
  {
    title: "LabGear",
    subtitle: "Lab Inventory Management System",
    description:
      "Built a centralized lab inventory system using React Native. Implemented real-time alerts and lab allocation based on requirements with Firebase SDK integration.",
    technologies: ["React Native", "Firebase SDK"],
    techIcons: [<SiReact key="react" />, <SiFirebase key="firebase" />],
    gradient: "from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)]",
    glow: "hover:shadow-[0_20px_60px_rgba(0,212,255,0.2)]",
    features: ["Real-time alerts", "Lab allocation", "Inventory tracking"],
    image: "/attached_assets/LabGear_1750868043502.png",
    repoLink: "https://github.com/Nithinkumar-05/LabGear.git",
    badge: <Smartphone size={28} className="text-white/80" />,
  },
  {
    title: "Ride Share",
    subtitle: "A Carpooling Application",
    description:
      "Developed a full-stack ride-sharing platform integrating Google Maps APIs for real-time routing. Integrated location-based routing with autocomplete and maps functionality.",
    technologies: ["ReactJS", "NodeJS", "MongoDB", "Bootstrap"],
    techIcons: [
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiMongodb key="mongo" />,
    ],
    gradient: "from-purple-600 to-pink-600",
    glow: "hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)]",
    features: ["Google Maps API", "Real-time routing", "Location autocomplete"],
    image: "/attached_assets/RideShare_1750868043505.png",
    link: "https://rideshare-carpooling.vercel.app/",
    badge: <Map size={28} className="text-white/80" />,
  },
];

export default function ProjectsSection() {
  const heading = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-[hsl(240,64%,9%)]">
      <div className="container mx-auto px-6">
        <div
          ref={heading.ref}
          className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcase of my technical skills through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const card = useScrollReveal();
            return (
              <div
                key={index}
                ref={card.ref}
                className={`reveal-scale ${card.visible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`project-card glass-effect rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 ${project.glow}`}
                >
                  {/* Image */}
                  <div className="h-52 relative overflow-hidden bg-gray-900 shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Tech tags */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs font-medium border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs font-medium border border-white/10">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3 right-3">{project.badge}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-[hsl(195,100%,50%)] text-sm mb-3 font-medium">{project.subtitle}</p>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                      <div className="mb-5">
                        <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-widest">
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((f, i) => (
                            <span
                              key={i}
                              className="bg-white/5 border border-white/10 text-gray-300 px-2.5 py-1 rounded-full text-xs"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <div className="flex gap-3 text-xl text-gray-500">
                        {project.techIcons}
                      </div>
                      <div>
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200`}
                          >
                            <ExternalLink size={14} /> View Live
                          </a>
                        ) : project.repoLink ? (
                          <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200`}
                          >
                            <Github size={14} /> View Code
                          </a>
                        ) : null}
                      </div>
                    </div>
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
