import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface FormData { name: string; email: string; subject: string; message: string; }

const CONTACT_LINKS = [
  { icon: <Mail size={18} aria-hidden="true" />,     label: "Email",    value: "nithineruventi@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=nithineruventi@gmail.com",
    gradient: "from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)]", glow: "rgba(0,212,255,.3)", external: true },
  { icon: <Phone size={18} aria-hidden="true" />,    label: "Phone",    value: "+91-9951071689",
    href: "tel:+919951071689",
    gradient: "from-purple-500 to-violet-500",        glow: "rgba(168,85,247,.3)", external: false },
  { icon: <Github size={18} aria-hidden="true" />,   label: "GitHub",   value: "Nithinkumar-05",
    href: "https://github.com/Nithinkumar-05",
    gradient: "from-gray-600 to-gray-400",            glow: "rgba(156,163,175,.3)", external: true },
  { icon: <Linkedin size={18} aria-hidden="true" />, label: "LinkedIn", value: "nithineruventi",
    href: "https://linkedin.com/in/nithineruventi",
    gradient: "from-blue-600 to-blue-400",            glow: "rgba(59,130,246,.3)", external: true },
];

const AVAILABILITY = [
  { dot: "bg-emerald-400", text: "Open to full-time roles" },
  { dot: "bg-blue-400",    text: "Available for freelance" },
  { dot: "bg-purple-400",  text: "Open to collaborations" },
];

const FIELDS = [
  { name: "name"    as const, label: "Full Name",      type: "text",  autocomplete: "name",    rows: 0 },
  { name: "email"   as const, label: "Email Address",  type: "email", autocomplete: "email",   rows: 0 },
  { name: "subject" as const, label: "Subject",        type: "text",  autocomplete: "off",     rows: 0 },
  { name: "message" as const, label: "Your Message",   type: "text",  autocomplete: "off",     rows: 5 },
];

export default function ContactSection() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
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
    onError: () => toast({ title: "Error", description: "Failed to send. Please try again.", variant: "destructive" }),
  });

  return (
    <section id="contact" aria-label="Contact" className="py-20 sm:py-24 bg-[hsl(240,64%,9%)] relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-4 section-num select-none pointer-events-none">06</div>
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[hsl(195,100%,50%)]/5 blur-[80px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        <div ref={heading.ref} className={`text-center mb-14 reveal ${heading.visible ? "visible" : ""}`}>
          <p aria-hidden="true" className="text-[hsl(195,100%,50%)] font-mono text-xs tracking-[0.3em] uppercase mb-3">— Let's Talk —</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-4">Get In Touch</h2>
          <div aria-hidden="true" className="w-24 h-px bg-gradient-to-r from-transparent via-[hsl(195,100%,50%)] to-transparent mx-auto mb-6" />
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Open to opportunities, collaborations, or just a great tech conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 max-w-5xl mx-auto">

          {/* ── Left ── */}
          <div ref={left.ref} className={`lg:col-span-2 space-y-4 reveal-left ${left.visible ? "visible" : ""}`}>

            {/* Availability */}
            <div className="glass-effect rounded-2xl p-5 border border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4" id="availability-heading">Current Status</p>
              <ul aria-labelledby="availability-heading" className="space-y-3">
                {AVAILABILITY.map((a, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span aria-hidden="true" className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${a.dot} opacity-60`} />
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${a.dot}`} />
                    </span>
                    <span className="text-gray-300 text-sm">{a.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact links */}
            <ul aria-label="Contact methods" className="space-y-3">
              {CONTACT_LINKS.map((c, i) => (
                <li key={i}>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    aria-label={`${c.label}: ${c.value}${c.external ? " (opens in new tab)" : ""}`}
                    className="group flex items-center gap-4 glass-effect border border-white/10 rounded-2xl p-4 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 8px 30px ${c.glow}`)}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = "")}
                  >
                    <div aria-hidden="true" className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.gradient} flex items-center justify-center shrink-0 text-white group-hover:scale-110 transition-transform`}>
                      {c.icon}
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest">{c.label}</p>
                      <p className="text-white text-sm font-semibold truncate">{c.value}</p>
                    </div>
                    <ExternalLink size={13} aria-hidden="true" className="text-gray-600 group-hover:text-[hsl(195,100%,50%)] transition-colors shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right — Form ── */}
          <div ref={right.ref} className={`lg:col-span-3 reveal-right ${right.visible ? "visible" : ""}`}>
            <div className="glass-effect border border-white/10 rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl font-black text-white mb-6">Send a Message</h3>

              <form
                onSubmit={e => { e.preventDefault(); submit.mutate(form); }}
                aria-label="Contact form"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {FIELDS.slice(0, 2).map(f => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label htmlFor={`contact-${f.name}`} className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {f.label} <span aria-hidden="true" className="text-[hsl(195,100%,50%)]">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <Input
                        id={`contact-${f.name}`}
                        name={f.name}
                        type={f.type}
                        autoComplete={f.autocomplete}
                        required
                        aria-required="true"
                        value={form[f.name]}
                        onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                        className="bg-white/5 border-white/10 text-white focus:border-[hsl(195,100%,50%)] focus:ring-1 focus:ring-[hsl(195,100%,50%)] transition-all"
                        placeholder={f.label}
                      />
                    </div>
                  ))}
                </div>

                {FIELDS.slice(2).map(f => (
                  <div key={f.name} className="flex flex-col gap-1.5 mb-4">
                    <label htmlFor={`contact-${f.name}`} className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {f.label} <span aria-hidden="true" className="text-[hsl(195,100%,50%)]">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    {f.rows ? (
                      <Textarea
                        id={`contact-${f.name}`}
                        name={f.name}
                        rows={f.rows}
                        required
                        aria-required="true"
                        value={form[f.name]}
                        onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                        className="bg-white/5 border-white/10 text-white focus:border-[hsl(195,100%,50%)] focus:ring-1 focus:ring-[hsl(195,100%,50%)] resize-none transition-all"
                        placeholder={f.label}
                      />
                    ) : (
                      <Input
                        id={`contact-${f.name}`}
                        name={f.name}
                        type={f.type}
                        autoComplete={f.autocomplete}
                        required
                        aria-required="true"
                        value={form[f.name]}
                        onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                        className="bg-white/5 border-white/10 text-white focus:border-[hsl(195,100%,50%)] focus:ring-1 focus:ring-[hsl(195,100%,50%)] transition-all"
                        placeholder={f.label}
                      />
                    )}
                  </div>
                ))}

                <Button
                  type="submit"
                  disabled={submit.isPending}
                  aria-busy={submit.isPending}
                  className="w-full bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] text-[hsl(240,64%,9%)] font-black py-3 rounded-xl hover:shadow-[0_0_30px_hsl(195,100%,50%)/40] hover:scale-[1.02] transition-all duration-300"
                >
                  {submit.isPending
                    ? <span className="flex items-center justify-center gap-2" role="status"><span className="sr-only">Sending…</span><span aria-hidden="true">✈️ Sending…</span></span>
                    : <span className="flex items-center justify-center gap-2">Send Message <Send size={16} aria-hidden="true" /></span>
                  }
                </Button>

                <p className="text-center text-[11px] text-gray-600 mt-4">
                  Or email directly:{" "}
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nithineruventi@gmail.com"
                    target="_blank" rel="noopener noreferrer"
                    aria-label="Send email to nithineruventi@gmail.com (opens Gmail in new tab)"
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
