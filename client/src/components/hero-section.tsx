import { ArrowRight, Download } from "lucide-react";
// Using direct path to image asset
const profileImage = "/attached_assets/_2_1750867289099.JPG";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen animated-bg flex items-center justify-center relative overflow-hidden"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[hsl(195,100%,50%)] rounded-full mix-blend-multiply filter blur-xl float-animation"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl float-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-40 w-72 h-72 bg-[hsl(180,100%,50%)] rounded-full mix-blend-multiply filter blur-xl float-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="order-2 md:order-1 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Nithin Kumar</span>
            </h1>
            <div className="text-xl md:text-2xl mb-8 text-gray-300">
              Full Stack Developer & Problem Solver
            </div>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Motivated CSE graduate with hands-on experience in full-stack
              development and prompt engineering. Passionate about creating
              robust, scalable solutions and contributing to innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="border-2 border-[hsl(195,100%,50%)] text-[hsl(195,100%,50%)] px-8 py-4 rounded-full font-semibold hover:bg-[hsl(195,100%,50%)] hover:text-white transition-all duration-300"
              >
                View My Work
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] p-1 glow-animation">
                <img
                  src={profileImage}
                  alt="Nithin Kumar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
