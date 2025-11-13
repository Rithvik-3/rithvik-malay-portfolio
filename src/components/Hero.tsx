import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          setMousePosition({ x: lastX, y: lastY });
          animationFrameId = 0;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Smooth Lovable-style spotlight background */}
      <div className="absolute inset-0 overflow-hidden bg-[#020617]">
        {/* Central spotlight */}
        <div className="pointer-events-none absolute -inset-40 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.22),transparent_65%)]" />

        {/* Secondary teal glow */}
        <div className="pointer-events-none absolute -inset-40 bg-[radial-gradient(circle_at_80%_25%,rgba(45,212,191,0.18),transparent_60%)]" />

        {/* Cursor-follow glow */}
        <div
          className="pointer-events-none absolute w-96 h-96 rounded-full will-change-transform"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
            transition: "transform 0.1s ease-out",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-16 left-10 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-16 right-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-56 h-56 bg-sky-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 -translate-y-4 md:-translate-y-6 lg:-translate-y-8">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-medium text-accent">Available for opportunities</span>
              <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
          </div>

          {/* Text + Title */}
          <div className="text-center space-y-6 animate-fade-in-up">
            <div className="space-y-6">
              <p className="text-accent text-lg font-semibold tracking-wide flex items-center justify-center gap-2">
                <Code2 className="w-5 h-5" />
                Hi, I'm
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  Rithvik
                </span>{" "}
                <span className="text-gradient inline-block hover:scale-105 transition-transform duration-300">
                  Malay
                </span>
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-3 text-2xl md:text-4xl font-light text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  CS Student
                </span>
                <span className="text-accent">|</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                  FinTech Enthusiast
                </span>
                <span className="text-accent">|</span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
                  Future Entrepreneur
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto space-y-3">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-light">
                Passionate about{" "}
                <span className="text-accent font-semibold">bridging finance and technology</span>{" "}
                to create impactful solutions.
              </p>

              <p className="text-lg text-muted-foreground">
                Building my foundation through hands-on projects while exploring innovation and entrepreneurship at{" "}
                <span className="text-accent font-semibold">George Mason University</span>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="group relative overflow-hidden gradient-accent text-foreground hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl px-8 py-6 text-lg font-semibold"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent/50 hover:border-accent hover:bg-accent/10 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 justify-center pt-6">
              {[
                { href: "https://www.linkedin.com/in/rithvik-malay-13a027196/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/Rithvik-3 ", icon: Github, label: "GitHub" },
                { href: "mailto:rithvik0909@gmail.com", icon: Mail, label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative w-12 h-12 flex items-center justify-center rounded-full bg-muted/30 backdrop-blur-sm border border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="pointer-events-auto absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 animate-bounce hover:scale-110 transition-transform cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
            Scroll to explore
          </span>
          <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-all">
            <ArrowDown className="w-5 h-5 text-accent" />
          </div>
        </button>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;