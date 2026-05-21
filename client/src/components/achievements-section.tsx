import { Code, Trophy, TrendingUp, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const achievements = [
  {
    platform: "CodeForces",
    rating: "1312",
    rank: "Pupil Rank",
    description: "Maximum Rating Achieved",
    icon: <Code className="text-3xl text-white" />,
    gradient: "from-blue-600 to-blue-400",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
    url: "https://codeforces.com/profile/nithineruventi",
  },
  {
    platform: "CodeChef",
    rating: "1657",
    rank: "3★ Rating",
    description: "Maximum Rating Achieved",
    icon: <Trophy className="text-3xl text-white" />,
    gradient: "from-orange-500 to-yellow-400",
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]",
    url: "https://www.codechef.com/users/nithineruventi",
  },
  {
    platform: "LeetCode",
    rating: "Top 8.4%",
    rank: "Global Ranking",
    description: "Problem Solving Excellence",
    icon: <TrendingUp className="text-3xl text-white" />,
    gradient: "from-green-500 to-emerald-400",
    glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]",
    url: "https://leetcode.com/u/Nithinkumar_1/",
  },
];

export default function AchievementsSection() {
  const heading = useScrollReveal();

  return (
    <section id="achievements" className="py-24 bg-[hsl(235,32%,14%)]">
      <div className="container mx-auto px-6">
        <div
          ref={heading.ref}
          className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Competitive programming accomplishments and recognition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const card = useScrollReveal();
            return (
              <div
                key={index}
                ref={card.ref}
                className={`reveal-scale ${card.visible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className={`glass-effect rounded-2xl p-8 text-center transition-all duration-300 group cursor-pointer ${achievement.glow} hover:-translate-y-2 relative overflow-hidden`}
                >
                  {/* Background gradient glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                  <div className="relative z-10">
                    {/* Icon circle */}
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {achievement.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{achievement.platform}</h3>

                    <div className="text-4xl font-bold gradient-text mb-2">{achievement.rating}</div>
                    <p className="text-gray-400 mb-1">{achievement.rank}</p>
                    <p className="text-gray-500 text-sm mb-5">{achievement.description}</p>

                    <a
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[hsl(195,100%,50%)] font-semibold neon-link hover:opacity-80 transition-opacity"
                    >
                      View Profile <ExternalLink size={14} />
                    </a>
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
