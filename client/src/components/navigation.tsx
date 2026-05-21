import { useState, useEffect, useRef } from "react";
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
  const [active, setActive]         = useState("home");
  const menuRef   = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const offsets = navItems.map(item => {
        const el = document.getElementById(item.id);
        return el ? el.getBoundingClientRect().top + window.scrollY : 0;
      });
      let current = navItems[0].id;
      for (let i = 0; i < offsets.length; i++) {
        if (window.scrollY + window.innerHeight / 4 >= offsets[i]) current = navItems[i].id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close on Escape, restore focus to toggle */
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  /* Close when clicking outside */
  useEffect(() => {
    if (!isMenuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setIsMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4" ref={menuRef}>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            aria-label="Nithin Kumar — back to top"
            className="text-2xl font-black gradient-text tracking-tight hover:opacity-80 transition-opacity"
          >
            NK
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-1" role="list">
            {navItems.map(item => (
              <button
                key={item.id}
                role="listitem"
                onClick={() => scrollToSection(item.id)}
                aria-current={active === item.id ? "true" : undefined}
                aria-label={`Go to ${item.label} section`}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === item.id ? "text-[hsl(195,100%,50%)]" : "text-gray-400 hover:text-white"
                }`}
              >
                {active === item.id && (
                  <span aria-hidden="true" className="absolute inset-0 bg-[hsl(195,100%,50%)]/10 border border-[hsl(195,100%,50%)]/30 rounded-full" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            className="md:hidden text-white p-2 rounded-lg"
            onClick={() => setIsMenuOpen(o => !o)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          role="menu"
          aria-label="Mobile navigation"
          className={`md:hidden mt-3 glass-effect rounded-2xl p-4 animate-fadeInUp transition-all duration-200 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                role="menuitem"
                onClick={() => scrollToSection(item.id)}
                aria-current={active === item.id ? "true" : undefined}
                className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
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
      </div>
    </nav>
  );
}
