import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home",         id: "home" },
  { label: "About",        id: "about" },
  { label: "Skills",       id: "skills" },
  { label: "Experience",   id: "experience" },
  { label: "Projects",     id: "projects" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact",      id: "contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      const offsets = navItems.map((item) => {
        const el = document.getElementById(item.id);
        return el ? el.getBoundingClientRect().top + window.scrollY : 0;
      });
      let current = navItems[0].id;
      for (let i = 0; i < offsets.length; i++) {
        if (window.scrollY + window.innerHeight / 4 >= offsets[i]) {
          current = navItems[i].id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-black gradient-text tracking-tight hover:opacity-80 transition-opacity"
          >
            NK
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === item.id
                    ? "text-[hsl(195,100%,50%)]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {active === item.id && (
                  <span className="absolute inset-0 bg-[hsl(195,100%,50%)]/10 border border-[hsl(195,100%,50%)]/30 rounded-full" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white focus:outline-none p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 glass-effect rounded-2xl p-4 animate-fadeInUp">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === item.id
                      ? "bg-[hsl(195,100%,50%)]/10 text-[hsl(195,100%,50%)] border border-[hsl(195,100%,50%)]/20"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
