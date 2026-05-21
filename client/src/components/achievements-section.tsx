import { useEffect, useState } from "react";
import { ExternalLink, Code2, Trophy, TrendingUp, Award, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

function useCounter(target: number, duration = 1500, started = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!started) return;
    /* Respect prefers-reduced-motion — show final value immediately */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setV(target); return; }
    setV(0);
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setV(Math.floor(e * target));
      if (p < 1) requestAnimationFrame(tick); else setV(target);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);
  return v;
}

const PLATFORMS = [
  {
    name: "CodeForces",
    handle: "nithineruventi",
    icon: <Code2 size={26} aria-hidden="true" />,
    rank: "Pupil",
    ratingNum: 1312, pctOf: 2000,
    ratingLabel: "Max Rating",
    gradient: "from-blue-600 via-sky-500 to-cyan-400",
    ringColor: "#38bdf8", textColor: "text-sky-400",
    borderColor: "border-sky-500/30", bgColor: "bg-sky-500/5",
    glowColor: "rgba(56,189,248,.35)",
    url: "https://codeforces.com/profile/nithineruventi",
    display: (n: number) => n.toString(),
  },
  {
    name: "CodeChef",
    handle: "nithineruventi",
    icon: <Trophy size={26} aria-hidden="true" />,
    rank: "3★ Rated",
    ratingNum: 1657, pctOf: 2000,
    ratingLabel: "Max Rating",
    gradient: "from-orange-600 via-amber-500 to-yellow-400",
    ringColor: "#f97316", textColor: "text-orange-400",
    borderColor: "border-orange-500/30", bgColor: "bg-orange-500/5",
    glowColor: "rgba(249,115,22,.35)",
    url: "https://www.codechef.com/users/nithineruventi",
    display: (n: number) => n.toString(),
  },
  {
    name: "LeetCode",
    handle: "Nithinkumar_1",
    icon: <TrendingUp size={26} aria-hidden="true" />,
    rank: "Top 8.4%",
    ratingNum: 84, pctOf: 100,
    ratingLabel: "Percentile",
    gradient: "from-yellow-600 via-amber-500 to-orange-400",
    ringColor: "#eab308", textColor: "text-yellow-400",
    borderColor: "border-yellow-500/30", bgColor: "bg-yellow-500/5",
    glowColor: "rgba(234,179,8,.35)",
    url: "https://leetcode.com/u/Nithinkumar_1/",
    display: (n: number) => `${n}%`,
  },
];

const EXTRAS = [
  { icon: <Award size={18} aria-hidden="true" />,  title: "Smart India Hackathon 2023", sub: "National-level participation", color: "text-emerald-400" },
  { icon: <Star size={18} aria-hidden="true" />,   title: "CSI Technical Lead",         sub: "Computer Society of India", color: "text-purple-400" },
  { icon: <Code2 size={18} aria-hidden="true" />,  title: "Google DSC Member",          sub: "CVR Google Developer Student Club", color: "text-blue-400" },
];

function PlatformCard({ p, started }: { p: typeof PLATFORMS[0]; started: boolean }) {
  const count = useCounter(p.ratingNum, 1600, started);
  const [hovered, setHovered] = useState(false);
  const radius = 48, circ = 2 * Math.PI * radius;
  const pct = p.ratingNum / p.pctOf;

  return (
    <a
      href={p.url} target="_blank" rel="noopener noreferrer"
      aria-label={`${p.name} — ${p.rank}, ${p.ratingLabel}: ${p.ratingNum}. Visit profile (opens in new tab)`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group block glass-effect border ${p.borderColor} ${p.bgColor} rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${hovered ? "-translate-y-2" : ""}`}
      style={{ boxShadow: hovered ? `0 20px 50px ${p.glowColor}` : "none" }}
    >
      <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-[.06] transition-opacity duration-500 rounded-2xl`} />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Ring */}
        <div aria-hidden="true" className="relative w-28 h-28 flex items-center justify-center mb-4">
          <svg width="112" height="112" className="absolute inset-0 -rotate-90">
            <circle cx="56" cy="56" r={radius} stroke="rgba(255,255,255,.05)" strokeWidth="6" fill="none" />
            <circle cx="56" cy="56" r={radius} stroke={p.ringColor} strokeWidth="6" fill="none"
              strokeLinecap="round" strokeDasharray={circ}
              strokeDashoffset={started ? circ * (1 - pct) : circ}
              className="ring-progress"
              style={{ filter: `drop-shadow(0 0 5px ${p.ringColor})` }} />
          </svg>
          <div className="flex flex-col items-center">
            <span className={p.textColor}>{p.icon}</span>
            <span className="text-xl font-black text-white leading-none">{p.display(count)}</span>
          </div>
        </div>

        <h3 className="text-base font-black text-white mb-1">{p.name}</h3>
        <p className={`text-sm font-bold mb-1 ${p.textColor}`}>{p.rank}</p>
        <p className="text-[11px] text-gray-500 mb-3">@{p.handle}</p>

        <span className={`inline-flex items-center gap-1 text-xs font-bold ${p.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
          View Profile <ExternalLink size={11} aria-hidden="true" />
        </span>
      </div>
    </a>
  );
}

export default function AchievementsSection() {
  const heading = useScrollReveal();
  const cards   = useScrollReveal(0.2);
  const extra   = useScrollReveal();

  return (
    <section id="achievements" aria-label="Achievements and rankings" className="py-20 sm:py-24 bg-[hsl(235,32%,14%)] relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-4 section-num select-none pointer-events-none">05</div>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(0,212,255,.015) 61px)" }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div ref={heading.ref} className={`text-center mb-14 reveal ${heading.visible ? "visible" : ""}`}>
          <p aria-hidden="true" className="text-[hsl(195,100%,50%)] font-mono text-xs tracking-[0.3em] uppercase mb-3">— My Rankings —</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-4">Achievements</h2>
          <div aria-hidden="true" className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent mx-auto mb-6" />
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Competitive programming rankings — counters animate on scroll
          </p>
        </div>

        <div ref={cards.ref} className={`reveal ${cards.visible ? "visible" : ""}`}>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 max-w-3xl mx-auto mb-12" aria-label="Coding platform ratings">
            {PLATFORMS.map(p => (
              <li key={p.name}>
                <PlatformCard p={p} started={cards.visible} />
              </li>
            ))}
          </ul>
        </div>

        <div ref={extra.ref} className={`reveal delay-200 ${extra.visible ? "visible" : ""}`}>
          <p className="text-center text-gray-600 text-xs uppercase tracking-widest mb-5">Other Highlights</p>
          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4" aria-label="Other achievements">
            {EXTRAS.map((a, i) => (
              <li key={i} className="glass-effect border border-white/10 rounded-2xl px-4 sm:px-6 py-4 flex items-center gap-3 hover:bg-white/[.06] hover:border-white/20 transition-all duration-200 group">
                <span className={`${a.color} group-hover:scale-110 transition-transform shrink-0`}>{a.icon}</span>
                <div>
                  <div className="text-white text-sm font-bold">{a.title}</div>
                  <div className="text-gray-500 text-xs">{a.sub}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
