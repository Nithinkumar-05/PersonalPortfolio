import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitMessage = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "Message Sent!",
        description: result.message,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contact-messages"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Error sending message:", error);
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMessage.mutate(formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-white" />,
      label: "Email",
      value: "nithineruventi@gmail.com",
      href: "mailto:nithineruventi@gmail.com",
      gradient: "from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)]",
    },
    {
      icon: <Phone className="text-white" />,
      label: "Phone",
      value: "+91-9951071689",
      href: "tel:+919951071689",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Github className="text-white" />,
      label: "GitHub",
      value: "Nithinkumar-05",
      href: "https://github.com/Nithinkumar-05",
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: <Linkedin className="text-white" />,
      label: "LinkedIn",
      value: "nithineruventi",
      href: "https://linkedin.com/in/nithineruventi",
      gradient: "from-blue-600 to-blue-400",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[hsl(240,64%,9%)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss opportunities, collaborations, or just have a tech chat!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-full flex items-center justify-center`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400">{info.label}</p>
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-[hsl(195,100%,50%)] transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-300">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-2 bg-gray-800 border-gray-600 text-white focus:border-[hsl(195,100%,50%)]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 bg-gray-800 border-gray-600 text-white focus:border-[hsl(195,100%,50%)]"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-gray-300">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="mt-2 bg-gray-800 border-gray-600 text-white focus:border-[hsl(195,100%,50%)]"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 bg-gray-800 border-gray-600 text-white focus:border-[hsl(195,100%,50%)] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitMessage.isPending}
                className="w-full bg-gradient-to-r from-[hsl(195,100%,50%)] to-[hsl(180,100%,50%)] text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {submitMessage.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2" size={16} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
