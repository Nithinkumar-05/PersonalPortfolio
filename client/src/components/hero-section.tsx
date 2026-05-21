import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import ParticleCanvas from "./particle-canvas";

const profileImage = "/attached_assets/_2_1750867289099.JPG";

const ROLES = [
  "Full Stack Developer",
  "Competitive Programmer",
  "Problem Solver",
  "UI/UX Enthusiast",
];

const STARS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  top: Math.random() * 100,
  left: Math.random() * 100,
  size: Math.random() * 2 + 0.5,
  dur: (Math.random() * 3 + 2).toFixed(1),
  delay: (Math.random() * 5).toFixed(1),
}));

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => { setTimeout(() => setVisible(true), 80); }, []);

  useEffect(() => {
    const cur = ROLES[roleIndex];
    if (!deleting) {
      if (displayed.length < cur.length) {
        timerRef.current = setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), 75);
      } else {
        timerRef.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timerRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex(i => (i + 1) % ROLES.length);
      }
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen animated-bg flex items-center justify-center relative overflow-hidden">

      {/* Particle field */}
      <ParticleCanvas />

      {/* Stars */}
      {STARS.map(s => (
        <span key={s.id} className="star pointer-events-none"
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size,
            "--dur": `${s.dur}s`, "--delay": `${s.delay}s` } as React.CSSProperties} />
      ))}

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute w-full h-8 bg-gradient-to-b from-[hsl(195,100%,50%)] to-transparent"
          style={{ animation: "scanline 8s linear infinite" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(0,212,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">

          {/* ── Text ── */}
          <div className={`order-2 lg:order-1 max-w-2xl text-center lg:text-left transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

            <p className="text-[hsl(195,100%,50%)] font-mono text-sm tracking-[0.3em] uppercase mb-4 animate-fadeInLeft" style={{ animationDelay: ".1s" }}>
              👋 &nbsp;Hello, World
            </p>

            {/* Glitch name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-2 leading-none animate-fadeInUp" style={{ animationDelay: ".2s" }}>
              I'm
            </h1>
            <div className="relative mb-6 animate-fadeInUp" style={{ animationDelay: ".3s" }}>
              <span
                className="glitch text-5xl sm:text-6xl lg:text-7xl font-black gradient-text block"
                data-text="Nithin Kumar"
              >
                Nithin Kumar
              </span>
            </div>

            {/* Typewriter */}
            <div className="font-mono text-base sm:text-lg lg:text-xl mb-8 animate-fadeInUp h-8" style={{ animationDelay: ".4s" }}>
              <span className="text-gray-500">&gt; &nbsp;</span>
              <span className="text-[hsl(180,100%,50%)]">{displayed}</span>
              <span className="typewriter-cursor" />
            </div>

            <p className="text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fadeInUp" style={{ animationDelay: ".55s" }}>
              Motivated CSE graduate with hands-on experience in full‑stack development and
              prompt engineering. Passionate about building robust, scalable solutions and
              innovative products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: ".7s" }}>
              <button onClick={() => scrollTo("contact")}
                className="group relative overflow-hidden px-8 py-3 rounded-full font-bold text-[hsl(240,64%,9%)] bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] hover:shadow-[0_0_40px_hsl(195,100%,50%)] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Get In Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo("projects")}
                className="px-8 py-3 rounded-full font-bold border-2 border-[hsl(195,100%,50%)]/50 text-[hsl(195,100%,50%)] hover:border-[hsl(195,100%,50%)] hover:bg-[hsl(195,100%,50%)]/10 hover:shadow-[0_0_20px_hsl(195,100%,50%)/30] transition-all duration-300">
                View Work
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 justify-center lg:justify-start animate-fadeInUp" style={{ animationDelay: ".85s" }}>
              {[
                { v: "3+",    l: "Projects Built" },
                { v: "1657",  l: "CodeChef Rating" },
                { v: "8.93",  l: "CGPA" },
              ].map(s => (
                <div key={s.l}>
                  <div className="text-2xl font-black gradient-text">{s.v}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Photo ── */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">

              {/* Orbit rings */}
              {[260, 310, 360].map((sz, i) => (
                <div key={sz} className="orbit-ring absolute"
                  style={{ width: sz, height: sz, top: "50%", left: "50%",
                    "--speed": `${16 + i * 8}s`, animationDirection: i % 2 === 1 ? "reverse" : "normal"
                  } as React.CSSProperties} />
              ))}

              {/* Pulse rings */}
              {[1, 2].map(i => (
                <div key={i} className="absolute inset-0 rounded-full border border-[hsl(195,100%,50%)]/30"
                  style={{ animation: `pulse-ring ${1.5 + i * .7}s ease-out infinite`, animationDelay: `${i * .6}s` }} />
              ))}

              {/* Photo */}
              <div className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden glow-animation border-2 border-[hsl(195,100%,50%)]/60">
                <img src={profileImage} alt="Nithin Kumar" className="w-full h-full object-cover" />
                {/* Hologram overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(195,100%,50%)]/10 via-transparent to-purple-500/10" />
              </div>

              {/* Floating chips */}
              <div className="absolute -top-2 -left-8 z-20 glass-effect rounded-xl px-3 py-2 text-xs font-bold text-[hsl(195,100%,50%)] border border-[hsl(195,100%,50%)]/30 float-animation shadow-[0_0_15px_hsl(195,100%,50%)/20]">
                💻 Full Stack
              </div>
              <div className="absolute -bottom-2 -right-8 z-20 glass-effect rounded-xl px-3 py-2 text-xs font-bold text-purple-400 border border-purple-400/30 float-animation shadow-[0_0_15px_purple/20]"
                style={{ animationDelay: "2s" }}>
                🏆 Competitive Coder
              </div>
              <div className="absolute top-1/2 -right-10 z-20 glass-effect rounded-xl px-3 py-2 text-xs font-bold text-pink-400 border border-pink-400/30 float-animation"
                style={{ animationDelay: "3.5s" }}>
                ⚡ OpenText Intern
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <button onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-[hsl(195,100%,50%)] transition-colors animate-bounce z-10">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
