import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface FormData { name: string; email: string; subject: string; message: string; }

const CONTACT_LINKS = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "nithineruventi@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=nithineruventi@gmail.com",
    gradient: "from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)]",
    glow: "rgba(0,212,255,.3)",
    cta: "Send Email →",
    external: true,
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91-9951071689",
    href: "tel:+919951071689",
    gradient: "from-purple-500 to-violet-500",
    glow: "rgba(168,85,247,.3)",
    cta: "Call Me →",
    external: false,
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "Nithinkumar-05",
    href: "https://github.com/Nithinkumar-05",
    gradient: "from-gray-600 to-gray-400",
    glow: "rgba(156,163,175,.3)",
    cta: "View Repos →",
    external: true,
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "nithineruventi",
    href: "https://linkedin.com/in/nithineruventi",
    gradient: "from-blue-600 to-blue-400",
    glow: "rgba(59,130,246,.3)",
    cta: "Connect →",
    external: true,
  },
];

const AVAILABILITY = [
  { dot: "bg-emerald-400", text: "Open to full-time roles" },
  { dot: "bg-blue-400",    text: "Available for freelance" },
  { dot: "bg-purple-400",  text: "Open to collaborations" },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const heading = useScrollReveal();
  const left    = useScrollReveal();
  const right   = useScrollReveal();

  const submit = useMutation({
    mutationFn: (data: FormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: async (res) => {
      const r = await res.json();
      toast({ title: "Message sent! ✈️", description: r.message });
      setForm({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contact-messages"] });
    },
    onError: () => toast({ title: "Error", description: "Failed to send. Try again.", variant: "destructive" }),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-[hsl(240,64%,9%)] relative overflow-hidden">
      <div className="absolute top-0 left-4 section-num select-none pointer-events-none">06</div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[hsl(195,100%,50%)]/5 blur-[80px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div ref={heading.ref} className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}>
          <p className="text-[hsl(195,100%,50%)] font-mono text-xs tracking-[0.3em] uppercase mb-3">— Let's Talk —</p>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent mx-auto mb-6" />
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Open to opportunities, collaborations, or just a great tech conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">

          {/* ── Left Panel ── */}
          <div ref={left.ref} className={`lg:col-span-2 space-y-5 reveal-left ${left.visible ? "visible" : ""}`}>

            {/* Availability */}
            <div className="glass-effect rounded-2xl p-5 border border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Current Status</p>
              <div className="space-y-3">
                {AVAILABILITY.map((a, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${a.dot} opacity-60`} />
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${a.dot}`} />
                    </span>
                    <span className="text-gray-300 text-sm">{a.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact links */}
            {CONTACT_LINKS.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 glass-effect border border-white/10 rounded-2xl p-4 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                style={{ ":hover": { boxShadow: `0 8px 30px ${c.glow}` } } as React.CSSProperties}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 30px ${c.glow}`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "")}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shrink-0 text-white group-hover:scale-110 transition-transform`}>
                  {c.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">{c.label}</p>
                  <p className="text-white text-sm font-semibold truncate">{c.value}</p>
                </div>
                <ExternalLink size={13} className="text-gray-600 group-hover:text-[hsl(195,100%,50%)] transition-colors shrink-0" />
              </a>
            ))}
          </div>

          {/* ── Right — Form ── */}
          <div ref={right.ref} className={`lg:col-span-3 reveal-right ${right.visible ? "visible" : ""}`}>
            <div className="glass-effect border border-white/10 rounded-3xl p-7 sm:p-8">
              <h3 className="text-xl font-black text-white mb-7">Send a Message</h3>

              <form onSubmit={e => { e.preventDefault(); submit.mutate(form); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(["name", "email"] as const).map(field => (
                    <div key={field} className="relative">
                      <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${
                        focused === field || form[field]
                          ? "-top-2.5 text-[10px] text-[hsl(195,100%,50%)] font-bold tracking-widest uppercase bg-[hsl(240,64%,9%)] px-1"
                          : "top-3.5 text-gray-500"
                      }`}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <Input
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        required
                        value={form[field]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        className="bg-white/5 border-white/10 text-white focus:border-[hsl(195,100%,50%)] focus:ring-1 focus:ring-[hsl(195,100%,50%)] transition-all pt-4 pb-3"
                      />
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${
                    focused === "subject" || form.subject
                      ? "-top-2.5 text-[10px] text-[hsl(195,100%,50%)] font-bold tracking-widest uppercase bg-[hsl(240,64%,9%)] px-1"
                      : "top-3.5 text-gray-500"
                  }`}>
                    Subject
                  </label>
                  <Input
                    name="subject" required
                    value={form.subject} onChange={handleChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    className="bg-white/5 border-white/10 text-white focus:border-[hsl(195,100%,50%)] focus:ring-1 focus:ring-[hsl(195,100%,50%)] transition-all pt-4 pb-3"
                  />
                </div>

                <div className="relative">
                  <label className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${
                    focused === "message" || form.message
                      ? "-top-2.5 text-[10px] text-[hsl(195,100%,50%)] font-bold tracking-widest uppercase bg-[hsl(240,64%,9%)] px-1"
                      : "top-3.5 text-gray-500"
                  }`}>
                    Message
                  </label>
                  <Textarea
                    name="message" required rows={5}
                    value={form.message} onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="bg-white/5 border-white/10 text-white focus:border-[hsl(195,100%,50%)] focus:ring-1 focus:ring-[hsl(195,100%,50%)] resize-none transition-all pt-4"
                  />
                </div>

                <Button
                  type="submit" disabled={submit.isPending}
                  className="w-full bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] text-[hsl(240,64%,9%)] font-black py-3 rounded-xl hover:shadow-[0_0_30px_hsl(195,100%,50%)/40] hover:scale-[1.02] transition-all duration-300"
                >
                  {submit.isPending
                    ? <span className="flex items-center justify-center gap-2">✈️ Sending…</span>
                    : <span className="flex items-center justify-center gap-2">Send Message <Send size={16} /></span>
                  }
                </Button>

                <p className="text-center text-[11px] text-gray-600">
                  Or email directly:{" "}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nithineruventi@gmail.com"
                    target="_blank" rel="noopener noreferrer"
                    className="text-[hsl(195,100%,50%)] hover:underline">
                    nithineruventi@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
