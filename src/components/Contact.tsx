import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send, Sparkles, Star } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rithvik0909@gmail.com",
      link: "mailto:rithvik0909@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 571 587 6624",
      link: "tel:+15715876624",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/rithvik-malay-13a027196/",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Fairfax, Virginia",
      link: null,
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-6 h-6 text-accent fill-accent animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <Star className="w-6 h-6 text-accent fill-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Let's connect! Whether it's about a project, opportunity, or just to say hi
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <Send className="w-5 h-5 text-accent" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border-2 border-border hover:border-accent/30 transition-all duration-500 shadow-xl">
            {/* Contact cards grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-xl bg-muted/30 hover:bg-muted/50 border-2 border-transparent hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
                >
                  {/* Gradient background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-accent transition-colors font-medium break-words text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-8 pt-8 border-t border-border/50">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <p className="text-xl text-foreground/90 font-semibold">
                    Ready to collaborate or discuss opportunities?
                  </p>
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <p className="text-muted-foreground">
                  I'm always open to new projects, collaborations, and opportunities in FinTech
                </p>
              </div>

              <Button
                size="lg"
                className="group relative overflow-hidden gradient-accent text-foreground hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl px-10 py-7 text-lg font-bold"
                onClick={() => (window.location.href = "mailto:rithvik0909@gmail.com")}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Me an Email
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </Card>

          {/* Footer info */}
          <div className="mt-12 text-center space-y-4 animate-fade-in">
            <div className="inline-block px-6 py-3 rounded-full bg-muted/30 backdrop-blur border border-accent/20">
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent" />
                Currently pursuing Computer Science at George Mason University
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Expected Graduation: <span className="text-accent font-semibold">May 2028</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Missing import
import { GraduationCap } from "lucide-react";

export default Contact;
