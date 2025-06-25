import { Code, Trophy, TrendingUp } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      platform: "CodeForces",
      rating: "1312",
      rank: "Pupil Rank",
      description: "Maximum Rating Achieved",
      icon: <Code className="text-3xl text-white" />,
      gradient: "from-blue-500 to-blue-300",
      url: "#",
    },
    {
      platform: "CodeChef",
      rating: "1657",
      rank: "3 Star Rating",
      description: "Maximum Rating Achieved",
      icon: <Trophy className="text-3xl text-white" />,
      gradient: "from-orange-500 to-yellow-400",
      url: "#",
    },
    {
      platform: "LeetCode",
      rating: "Top 8.4%",
      rank: "Global Ranking",
      description: "Problem Solving Excellence",
      icon: <TrendingUp className="text-3xl text-white" />,
      gradient: "from-green-500 to-emerald-400",
      url: "#",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-[hsl(235,32%,14%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Competitive programming accomplishments and recognition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse`}
                >
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {achievement.platform}
                </h3>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {achievement.rating}
                </div>
                <p className="text-gray-400">{achievement.rank}</p>
              </div>
              <div className="text-gray-300">
                <p className="mb-2">{achievement.description}</p>
                <a
                  href={achievement.url}
                  className="text-[hsl(195,100%,50%)] hover:underline inline-block font-medium"
                >
                  View Profile →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
