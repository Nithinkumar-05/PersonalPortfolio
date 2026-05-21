import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: <Mail className="text-white" size={18} />,
    label: "Email",
    value: "nithineruventi@gmail.com",
    href: "mailto:nithineruventi@gmail.com",
    gradient: "from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)]",
  },
  {
    icon: <Phone className="text-white" size={18} />,
    label: "Phone",
    value: "+91-9951071689",
    href: "tel:+919951071689",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Github className="text-white" size={18} />,
    label: "GitHub",
    value: "Nithinkumar-05",
    href: "https://github.com/Nithinkumar-05",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: <Linkedin className="text-white" size={18} />,
    label: "LinkedIn",
    value: "nithineruventi",
    href: "https://linkedin.com/in/nithineruventi",
    gradient: "from-blue-600 to-blue-400",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "", email: "", subject: "", message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();
  const heading = useScrollReveal();
  const infoPanel = useScrollReveal();
  const formPanel = useScrollReveal();

  const submitMessage = useMutation({
    mutationFn: async (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: async (response) => {
      const result = await response.json();
      toast({ title: "Message Sent! ✈️", description: result.message });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contact-messages"] });
    },
    onError: () => {
      toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMessage.mutate(formData);
  };

  return (
    <section id="contact" className="py-24 bg-[hsl(240,64%,9%)]">
      <div className="container mx-auto px-6">
        <div
          ref={heading.ref}
          className={`text-center mb-16 reveal ${heading.visible ? "visible" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a tech chat!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Info panel */}
          <div
            ref={infoPanel.ref}
            className={`reveal-left ${infoPanel.visible ? "visible" : ""}`}
          >
            <div className="glass-effect glass-hover shimmer-border rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div
                      className={`w-11 h-11 bg-gradient-to-r ${info.gradient} rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">{info.label}</p>
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-[hsl(195,100%,50%)] transition-colors font-medium neon-link"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm">
                  ✈️ Click email above to open Gmail compose and send me a direct message.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            ref={formPanel.ref}
            className={`reveal-right ${formPanel.visible ? "visible" : ""}`}
          >
            <div className="glass-effect glass-hover shimmer-border rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-8">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleInputChange}
                    placeholder="Your name"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[hsl(195,100%,50%)] focus:ring-1 focus:ring-[hsl(195,100%,50%)] transition-all"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[hsl(195,100%,50%)] focus:ring-1 focus:ring-[hsl(195,100%,50%)] transition-all"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject" name="subject" type="text" required
                    value={formData.subject} onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[hsl(195,100%,50%)] focus:ring-1 focus:ring-[hsl(195,100%,50%)] transition-all"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-400 text-xs uppercase tracking-widest mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message" name="message" rows={4} required
                    value={formData.message} onChange={handleInputChange}
                    placeholder="Your message here..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[hsl(195,100%,50%)] focus:ring-1 focus:ring-[hsl(195,100%,50%)] resize-none transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitMessage.isPending}
                  className="w-full bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] text-[hsl(240,64%,9%)] font-bold hover:shadow-[0_0_20px_hsl(195,100%,50%)/40] hover:scale-[1.02] transition-all duration-300"
                >
                  {submitMessage.isPending ? (
                    <span className="flex items-center gap-2">✈️ Sending…</span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send size={16} />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
