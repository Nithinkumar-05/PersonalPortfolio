import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const links = [
  { icon: <Github size={18} aria-hidden="true" />,   href: "https://github.com/Nithinkumar-05",     label: "GitHub profile" },
  { icon: <Linkedin size={18} aria-hidden="true" />, href: "https://linkedin.com/in/nithineruventi", label: "LinkedIn profile" },
  { icon: <Mail size={18} aria-hidden="true" />,     href: "mailto:nithineruventi@gmail.com",        label: "Send email" },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="relative bg-[hsl(235,32%,10%)] border-t border-white/5 py-14 overflow-hidden">
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[hsl(195,100%,50%)]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div aria-hidden="true" className="text-4xl font-black gradient-text mb-2">NK</div>
        <p className="text-gray-500 text-sm mb-8">Full Stack Developer &amp; Software Engineer</p>

        <nav aria-label="Social links">
          <ul className="flex justify-center gap-4 mb-10">
            {links.map(l => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={`${l.label}${l.href.startsWith("http") ? " (opens in new tab)" : ""}`}
                  className="w-11 h-11 rounded-full glass-effect border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[hsl(195,100%,50%)]/50 hover:bg-[hsl(195,100%,50%)]/10 hover:shadow-[0_0_15px_hsl(195,100%,50%)/20] transition-all duration-300"
                >
                  {l.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="inline-flex items-center gap-2 text-xs text-gray-600 hover:text-[hsl(195,100%,50%)] transition-colors mb-8 group"
        >
          <ArrowUp size={14} aria-hidden="true" className="group-hover:-translate-y-1 transition-transform" />
          Back to top
        </button>

        <div className="border-t border-white/5 pt-6">
          <p className="text-gray-600 text-xs">© 2025 Nithin Kumar Eruventi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
