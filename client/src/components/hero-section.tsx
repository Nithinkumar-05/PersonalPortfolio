import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const profileImage = "/attached_assets/_2_1750867289099.JPG";

const ROLES = [
  "Full Stack Developer",
  "Problem Solver",
  "Competitive Programmer",
  "UI/UX Enthusiast",
];

const STARS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2.5 + 0.5,
  dur: (Math.random() * 3 + 2).toFixed(1),
  delay: (Math.random() * 4).toFixed(1),
}));

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    if (!deleting) {
      if (displayed.length < current.length) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          80
        );
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(
          () => setDisplayed(displayed.slice(0, -1)),
          45
        );
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, roleIndex]);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen animated-bg flex items-center justify-center relative overflow-hidden"
    >
      {/* Star field */}
      {STARS.map((s) => (
        <span
          key={s.id}
          className="star pointer-events-none"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            "--dur": `${s.dur}s`,
            "--delay": `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-16 w-80 h-80 bg-[hsl(195,100%,50%)] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 float-animation" />
        <div className="absolute top-1/3 right-12 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 float-animation" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-16 left-1/3 w-72 h-72 bg-[hsl(180,100%,50%)] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 float-animation" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">

          {/* Text side */}
          <div
            className={`order-2 lg:order-1 max-w-2xl text-center lg:text-left transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p
              className="text-[hsl(195,100%,50%)] font-mono text-sm md:text-base mb-3 tracking-widest uppercase animate-fadeInLeft"
              style={{ animationDelay: "0.1s" }}
            >
              👋 Hello, World!
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 animate-fadeInUp leading-tight"
              style={{ animationDelay: "0.2s" }}
            >
              I'm{" "}
              <span className="gradient-text">Nithin Kumar</span>
            </h1>

            {/* Typewriter role */}
            <div
              className="text-lg sm:text-xl lg:text-2xl mb-6 font-mono animate-fadeInUp"
              style={{ animationDelay: "0.35s" }}
            >
              <span className="text-gray-300">&gt; </span>
              <span className="text-[hsl(180,100%,50%)]">{displayed}</span>
              <span className="typewriter-cursor" />
            </div>

            <p
              className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              Motivated CSE graduate with hands-on experience in full-stack
              development and prompt engineering. Passionate about building
              robust, scalable solutions and innovative projects.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp"
              style={{ animationDelay: "0.65s" }}
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative overflow-hidden bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] text-[hsl(240,64%,9%)] px-8 py-3 rounded-full font-bold hover:shadow-[0_0_30px_hsl(195,100%,50%)] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="border-2 border-[hsl(195,100%,50%)] text-[hsl(195,100%,50%)] px-8 py-3 rounded-full font-bold hover:bg-[hsl(195,100%,50%)]/10 hover:shadow-[0_0_20px_hsl(195,100%,50%)/30] transition-all duration-300"
              >
                View My Work
              </button>
            </div>

            {/* Stats row */}
            <div
              className="flex gap-8 mt-10 justify-center lg:justify-start animate-fadeInUp"
              style={{ animationDelay: "0.8s" }}
            >
              {[
                { value: "3+", label: "Projects" },
                { value: "1657", label: "CodeChef Rating" },
                { value: "8.4%", label: "LeetCode Top" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <div className="relative">
              {/* Orbit rings */}
              <div
                className="orbit-ring absolute"
                style={{
                  width: "320px", height: "320px",
                  top: "50%", left: "50%",
                  "--speed": "18s",
                } as React.CSSProperties}
              />
              <div
                className="orbit-ring absolute"
                style={{
                  width: "380px", height: "380px",
                  top: "50%", left: "50%",
                  "--speed": "28s",
                  animationDirection: "reverse",
                } as React.CSSProperties}
              />

              {/* Profile photo */}
              <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden glow-animation relative z-10 border-2 border-[hsl(195,100%,50%)]/50">
                <img
                  src={profileImage}
                  alt="Nithin Kumar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-6 bg-[hsl(240,64%,9%)] border border-[hsl(195,100%,50%)]/40 rounded-xl px-3 py-2 text-xs font-semibold text-[hsl(195,100%,50%)] float-animation shadow-lg backdrop-blur-sm z-20">
                💻 Full Stack Dev
              </div>
              <div
                className="absolute -bottom-4 -right-6 bg-[hsl(240,64%,9%)] border border-purple-400/40 rounded-xl px-3 py-2 text-xs font-semibold text-purple-400 float-animation shadow-lg backdrop-blur-sm z-20"
                style={{ animationDelay: "1.5s" }}
              >
                🏆 Competitive Coder
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[hsl(195,100%,50%)] to-transparent" />
      </div>
    </section>
  );
}
