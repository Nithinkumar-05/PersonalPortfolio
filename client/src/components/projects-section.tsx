import { ExternalLink, Github, Smartphone, Globe, Database, Map } from "lucide-react";
import { SiReact, SiFirebase, SiNodedotjs } from "react-icons/si";

export default function ProjectsSection() {
  const projects = [
    {
      title: "LabGear",
      subtitle: "Lab Inventory Management System",
      description:
        "Built a centralized lab inventory system using React Native. Implemented real-time alerts and lab allocation based on requirements with Firebase SDK integration.",
      technologies: ["React Native", "Firebase SDK"],
      techIcons: [<SiReact key="react" />, <SiFirebase key="firebase" />],
      gradient: "from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)]",
      features: ["Real-time alerts", "Lab allocation", "Inventory tracking"],
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
        <Database key="mongo" />,
      ],
      gradient: "from-purple-600 to-pink-600",
      features: ["Google Maps API", "Real-time routing", "Location autocomplete"],
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex space-x-2 flex-wrap">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  {index === 0 ? (
                    <Smartphone size={32} className="text-white/80" />
                  ) : (
                    <Map size={32} className="text-white/80" />
                  )}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.subtitle}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {project.techIcons.map((icon, iconIndex) => (
                      <div key={iconIndex} className="text-2xl text-gray-400">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2`}
                    >
                      <ExternalLink size={16} />
                      View Details
                    </button>
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
