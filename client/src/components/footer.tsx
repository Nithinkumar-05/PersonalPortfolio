import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="text-xl" />,
      href: "https://github.com/Nithinkumar-05",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="text-xl" />,
      href: "https://linkedin.com/in/nithineruventi",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="text-xl" />,
      href: "mailto:nithineruventi@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-[hsl(235,32%,14%)] border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold gradient-text mb-4">
            Nithin Kumar
          </div>
          <p className="text-gray-400 mb-6">
            Full Stack Developer & Problem Solver
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[hsl(195,100%,50%)] transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              &copy; 2024 Nithin Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
