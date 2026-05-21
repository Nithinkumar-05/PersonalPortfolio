import { useRef, useState } from "react";
import { ExternalLink, Github, Brain, Smartphone, Map } from "lucide-react";
import { SiReact, SiFirebase, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  techIcons: React.ReactNode[];
  gradient: string;
  glow: string;
  features: string[];
  image: string;
  link?: string;
  repoLink?: string;
  badge: React.ReactNode;
  accent: string;
}

const PROJECTS: Project[] = [
  {
    title: "EdQuiz",
    subtitle: "Interactive Quiz Platform",
    description: "A web application enabling users to create, manage, and participate in quiz contests with real-time score calculation, link sharing, and detailed analytics for quiz creators.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TailwindCSS"],
    techIcons: [<SiReact key="r"/>, <SiNodedotjs key="n"/>, <SiExpress key="e"/>, <SiMongodb key="m"/>, <SiTailwindcss key="t"/>],
    gradient: "from-emerald-600 to-teal-500",
    glow: "rgba(16,185,129,.3)",
    features: ["Quiz creation", "Link sharing", "Real-time scoring", "Analytics"],
    image: "/attached_assets/Edquiz_1750869014841.png",
    link: "https://quized.vercel.app/",
    badge: <Brain size={22} className="text-white/80" />,
    accent: "#10b981",
  },
  {
    title: "LabGear",
    subtitle: "Lab Inventory Management",
    description: "A centralized lab inventory system built with React Native featuring real-time alerts, lab allocation, and Firebase SDK integration for seamless data management.",
    technologies: ["React Native", "Firebase SDK"],
    techIcons: [<SiReact key="r"/>, <SiFirebase key="f"/>],
    gradient: "from-cyan-600 to-sky-500",
    glow: "rgba(6,182,212,.3)",
    features: ["Real-time alerts", "Lab allocation", "Inventory tracking"],
    image: "/attached_assets/LabGear_1750868043502.png",
    repoLink: "https://github.com/Nithinkumar-05/LabGear.git",
    badge: <Smartphone size={22} className="text-white/80" />,
    accent: "#06b6d4",
  },
  {
    title: "Ride Share",
    subtitle: "Carpooling Application",
    description: "A full-stack ride-sharing platform with Google Maps API integration for real-time routing, location-based autocomplete, and seamless carpooling coordination.",
    technologies: ["ReactJS", "NodeJS", "MongoDB", "Bootstrap"],
    techIcons: [<SiReact key="r"/>, <SiNodedotjs key="n"/>, <SiMongodb key="m"/>],
    gradient: "from-violet-600 to-purple-500",
    glow: "rgba(139,92,246,.3)",
    features: ["Google Maps API", "Real-time routing", "Location autocomplete"],
    image: "/attached_assets/RideShare_1750868043505.png",
    link: "https://rideshare-carpooling.vercel.app/",
    badge: <Map size={22} className="text-white/80" />,
    accent: "#8b5cf6",
  },
];

function TiltCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ rotX: 0, rotY: 0, shineX: 50, shineY: 50 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top)  / rect.height;
    setStyle({ rotX: (y - .5) * 14, rotY: (x - .5) * -14, shineX: x * 100, shineY: y * 100 });
  };
  const onLeave = () => { setStyle({ rotX: 0, rotY: 0, shineX: 50, shineY: 50 }); setHovered(false); };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      className="relative h-full"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="glass-effect rounded-2xl overflow-hidden flex flex-col h-full relative transition-shadow duration-300"
        style={{
          transform: `perspective(1000px) rotateX(${style.rotX}deg) rotateY(${style.rotY}deg)`,
          transition: hovered ? "transform .1s ease" : "transform .6s cubic-bezier(.22,1,.36,1)",
          boxShadow: hovered ? `0 20px 60px ${project.glow}` : "none",
        }}
      >
        {/* Shine overlay */}
        <div className="absolute inset-0 pointer-events-none z-20 rounded-2xl transition-opacity duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(circle at ${style.shineX}% ${style.shineY}%, rgba(255,255,255,.08), transparent 60%)`,
          }} />

        {/* Image */}
        <div className="relative h-52 overflow-hidden shrink-0 bg-gray-900">
          <img src={project.image} alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Accent line at top */}
          <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient}`}
            style={{ boxShadow: `0 0 8px ${project.accent}` }} />

          {/* Tech badges */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((t, i) => (
              <span key={i} className="text-[10px] font-bold text-white/90 bg-black/40 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded-full">
                {t}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] font-bold text-white/70 bg-black/40 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Badge icon */}
          <div className={`absolute top-3 right-3 w-9 h-9 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center`}>
            {project.badge}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-black text-white">{project.title}</h3>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: project.accent }}>
              {project.subtitle}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.features.map((f, i) => (
                <span key={i} className="text-xs text-gray-400 border border-white/10 bg-white/5 px-2.5 py-1 rounded-full">
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
            <div className="flex gap-2.5 text-lg text-gray-600">
              {project.techIcons}
            </div>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r ${project.gradient} px-4 py-2 rounded-lg hover:scale-105 transition-transform`}>
                <ExternalLink size={13} /> Live Demo
              </a>
            ) : project.repoLink ? (
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r ${project.gradient} px-4 py-2 rounded-lg hover:scale-105 transition-transform`}>
                <Github size={13} /> Source Code
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const heading = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-[hsl(235,32%,14%)] relative overflow-hidden">
      <div className="absolute top-0 right-4 section-num select-none pointer-events-none">04</div>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(0,212,255,.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={heading.ref} className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}>
          <p className="text-[hsl(195,100%,50%)] font-mono text-xs tracking-[0.3em] uppercase mb-3">— What I've Built —</p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">Featured Projects</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent mx-auto mb-6" />
          <p className="text-gray-500 text-sm">Hover the cards — they tilt in 3D</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => {
            const rev = useScrollReveal();
            return (
              <div key={i} ref={rev.ref}
                className={`reveal-scale h-full ${rev.visible ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 100}ms` }}>
                <TiltCard project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
