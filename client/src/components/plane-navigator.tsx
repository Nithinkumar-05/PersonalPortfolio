import { useState, useEffect, useRef } from "react";

const sections = [
  { id: "home",         label: "Home" },
  { id: "about",        label: "About" },
  { id: "skills",       label: "Skills" },
  { id: "experience",   label: "Experience" },
  { id: "projects",     label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact",      label: "Contact" },
];

export default function PlaneNavigator() {
  const [planeY, setPlaneY]             = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [dotPositions, setDotPositions] = useState<number[]>([]);
  const railRef = useRef<HTMLDivElement>(null);

  const calcDotPositions = () => {
    if (!railRef.current) return;
    const h = railRef.current.getBoundingClientRect().height;
    setDotPositions(sections.map((_, i) => (i / (sections.length - 1)) * h));
  };

  useEffect(() => {
    calcDotPositions();
    window.addEventListener("resize", calcDotPositions);
    return () => window.removeEventListener("resize", calcDotPositions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollY / docH, 0), 1);
      if (railRef.current) {
        setPlaneY(progress * railRef.current.getBoundingClientRect().height);
      }
      const offsets = sections.map(s => {
        const el = document.getElementById(s.id);
        return el ? el.getBoundingClientRect().top + scrollY : 0;
      });
      let current = sections[0].id;
      for (let i = 0; i < offsets.length; i++) {
        if (scrollY + window.innerHeight / 3 >= offsets[i]) current = sections[i].id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    /* Hidden on mobile — the main nav handles small screens */
    <nav
      aria-label="Section quick-jump"
      className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center select-none"
    >
      <div ref={railRef} className="relative flex flex-col items-center" style={{ height: "60vh" }}>
        {/* Dashed rail — decorative */}
        <div aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-white/20" />

        {/* Section dots */}
        {sections.map((section, i) => {
          const isActive  = activeSection === section.id;
          const isHovered = hoveredSection === section.id;
          const top = dotPositions[i] ?? (i / (sections.length - 1)) * 100 + "%";
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              aria-label={`Jump to ${section.label} section`}
              aria-current={isActive ? "true" : undefined}
              className="absolute left-1/2 -translate-x-1/2 group"
              style={{ top: typeof top === "number" ? `${top}px` : top }}
            >
              <div
                aria-hidden="true"
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? "bg-[hsl(195,100%,50%)] border-[hsl(195,100%,50%)] scale-125 shadow-[0_0_8px_hsl(195,100%,50%)]"
                    : "bg-transparent border-white/40 hover:border-[hsl(195,100%,50%)] hover:scale-110"
                }`}
              />
              {/* Tooltip */}
              <span
                role="tooltip"
                className={`absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-semibold px-2 py-1 rounded-md transition-all duration-200 pointer-events-none ${
                  isActive || isHovered
                    ? "opacity-100 translate-x-0 bg-[hsl(195,100%,50%)]/20 text-[hsl(195,100%,50%)] border border-[hsl(195,100%,50%)]/30 backdrop-blur-sm"
                    : "opacity-0 translate-x-2"
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}

        {/* Plane indicator — decorative */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out z-10"
          style={{ top: `${planeY}px`, transform: "translate(-50%, -50%)" }}
        >
          <div className="absolute inset-0 rounded-full bg-[hsl(195,100%,50%)] opacity-20 blur-md scale-150 animate-pulse" />
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_6px_hsl(195,100%,50%)] -rotate-90" aria-hidden="true">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="hsl(195,100%,50%)" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
