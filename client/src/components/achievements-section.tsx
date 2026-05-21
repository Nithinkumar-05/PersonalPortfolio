import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function useAnimatedCounter(target: number, duration = 1600, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    setValue(0);
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.floor(eased * target));
      if (t < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);
  return value;
}

interface Achievement {
  platform: string;
  rawValue: number;
  displaySuffix: string;
  label: string;
  sub: string;
  gradient: string;
  ring: string;
  glow: string;
  url: string;
  emoji: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    platform: "CodeForces",
    rawValue: 1312,
    displaySuffix: "",
    label: "Rating",
    sub: "Pupil Rank",
    gradient: "from-sky-600 to-blue-400",
    ring: "#38bdf8",
    glow: "0 0 60px rgba(56,189,248,.4)",
    url: "https://codeforces.com/profile/nithineruventi",
    emoji: "🔵",
  },
  {
    platform: "CodeChef",
    rawValue: 1657,
    displaySuffix: "",
    label: "Rating",
    sub: "3★ Rated",
    gradient: "from-orange-500 to-amber-400",
    ring: "#f97316",
    glow: "0 0 60px rgba(249,115,22,.4)",
    url: "https://www.codechef.com/users/nithineruventi",
    emoji: "⭐",
  },
  {
    platform: "LeetCode",
    rawValue: 84,
    displaySuffix: "%",
    label: "Top",
    sub: "Global Ranking",
    gradient: "from-amber-500 to-yellow-400",
    ring: "#f59e0b",
    glow: "0 0 60px rgba(245,158,11,.4)",
    url: "https://leetcode.com/u/Nithinkumar_1/",
    emoji: "🟡",
  },
];

function RingCard({ a, started }: { a: Achievement; started: boolean }) {
  const count = useAnimatedCounter(a.rawValue, 1600, started);
  const radius = 54;
  const circ = 2 * Math.PI * radius;
  const pct = started ? a.rawValue / (a.rawValue > 100 ? a.rawValue : 100) : 0;

  return (
    <a
      href={a.url} target="_blank" rel="noopener noreferrer"
      className="group block glass-effect rounded-3xl p-8 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-3"
      style={{ boxShadow: "none", transition: "transform .3s, box-shadow .3s" }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = a.glow)}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
    >
      {/* Background gradient blob */}
      <div className={`absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-0 group-hover:opacity-[.06] transition-opacity duration-500 rounded-3xl`} />

      {/* SVG ring */}
      <div className="relative mx-auto mb-6 w-32 h-32 flex items-center justify-center">
        <svg width="128" height="128" className="absolute inset-0 -rotate-90">
          <circle cx="64" cy="64" r={radius} stroke="rgba(255,255,255,.05)" strokeWidth="8" fill="none" />
          <circle
            cx="64" cy="64" r={radius}
            stroke={a.ring} strokeWidth="8" fill="none"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - pct)}
            className="ring-progress"
            style={{ filter: `drop-shadow(0 0 6px ${a.ring})` }}
          />
        </svg>

        {/* Center number */}
        <div className="relative z-10 text-center">
          <div className="text-3xl font-black text-white leading-none">
            {a.label === "Top" && <span className="text-xl text-gray-400">Top </span>}
            {count}{a.displaySuffix}
          </div>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{a.label}</div>
        </div>
      </div>

      <div className="text-xl font-black text-white mb-1">{a.emoji} {a.platform}</div>
      <div className="text-sm text-gray-400 mb-4">{a.sub}</div>

      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[hsl(195,100%,50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        View Profile <ExternalLink size={12} />
      </div>
    </a>
  );
}

export default function AchievementsSection() {
  const heading = useScrollReveal();
  const cards = useScrollReveal(0.2);

  return (
    <section id="achievements" className="py-24 bg-[hsl(240,64%,9%)] relative overflow-hidden">
      <div className="absolute top-0 left-4 section-num select-none pointer-events-none">05</div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(0,212,255,.02) 61px)" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={heading.ref} className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}>
          <p className="text-[hsl(195,100%,50%)] font-mono text-xs tracking-[0.3em] uppercase mb-3">— My Rankings —</p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">Achievements</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent mx-auto mb-6" />
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Competitive programming accomplishments across platforms
          </p>
        </div>

        <div ref={cards.ref} className={`reveal ${cards.visible ? "visible" : ""}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ACHIEVEMENTS.map(a => (
              <RingCard key={a.platform} a={a} started={cards.visible} />
            ))}
          </div>
        </div>

        {/* Bottom highlight */}
        <div className={`mt-16 text-center reveal ${cards.visible ? "visible delay-300" : ""}`}>
          <div className="inline-flex items-center gap-3 glass-effect rounded-2xl px-8 py-4 border border-[hsl(195,100%,50%)]/20">
            <span className="text-2xl">🏆</span>
            <div className="text-left">
              <div className="text-white font-bold text-sm">Smart India Hackathon 2023</div>
              <div className="text-gray-500 text-xs">National‑level participation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
