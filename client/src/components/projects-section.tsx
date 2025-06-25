import { ExternalLink, Github, Smartphone, Globe, Database, Map, Brain } from "lucide-react";
import { SiReact, SiFirebase, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function ProjectsSection() {
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
      features: ["Quiz creation", "Link sharing", "Real-time scoring", "Analytics"],
      link: "https://quized.vercel.app/",
      image: "/attached_assets/Edquiz_1750869014841.png",
    },
    {
      title: "LabGear",
      subtitle: "Lab Inventory Management System",
      description:
        "Built a centralized lab inventory system using React Native. Implemented real-time alerts and lab allocation based on requirements with Firebase SDK integration.",
      technologies: ["React Native", "Firebase SDK"],
      techIcons: [<SiReact key="react" />, <SiFirebase key="firebase" />],
      gradient: "from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)]",
      features: ["Real-time alerts", "Lab allocation", "Inventory tracking"],
      image: "/attached_assets/LabGear_1750868043502.png",
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
      features: ["Google Maps API", "Real-time routing", "Location autocomplete"],
      image: "/attached_assets/RideShare_1750868043505.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[hsl(240,64%,9%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcase of my technical skills through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-64 relative overflow-hidden bg-gray-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`h-full bg-gradient-to-br ${project.gradient}`}
                  ></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex space-x-2 flex-wrap">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  {index === 0 ? (
                    <Brain size={32} className="text-white/80" />
                  ) : index === 1 ? (
                    <Smartphone size={32} className="text-white/80" />
                  ) : (
                    <Map size={32} className="text-white/80" />
                  )}
                </div>
              </div>

              <div className="p-6 lg:p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm lg:text-base">{project.subtitle}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs lg:text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-gray-800 text-gray-300 px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs lg:text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
                  <div className="flex space-x-3 lg:space-x-4">
                    {project.techIcons.map((icon, iconIndex) => (
                      <div key={iconIndex} className="text-xl lg:text-2xl text-gray-400">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-3 w-full sm:w-auto">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm lg:text-base flex-1 sm:flex-none`}
                      >
                        <ExternalLink size={16} />
                        View Live
                      </a>
                    ) : (
                      <button
                        className={`bg-gradient-to-r ${project.gradient} text-white px-3 py-2 lg:px-4 lg:py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm lg:text-base flex-1 sm:flex-none`}
                      >
                        <ExternalLink size={16} />
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
