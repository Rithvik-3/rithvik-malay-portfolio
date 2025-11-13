import { Github, Linkedin, Mail, Heart, Sparkles, Cpu } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/rithvik-malay-13a027196/",
      icon: Linkedin,
      label: "LinkedIn",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      href: "https://github.com/Rithvik-3",
      icon: Github,
      label: "GitHub",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      href: "mailto:rithvik0909@gmail.com",
      icon: Mail,
      label: "Email",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-border/50 bg-secondary/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main content */}
        <div className="flex flex-col items-center gap-8 mb-12">
          {/* Brand */}
          <div className="text-center space-y-3">
            <h3 className="text-3xl font-bold">
              Rithvik <span className="text-gradient">Malay</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              CS Student | FinTech Enthusiast | Future Entrepreneur
            </p>
            <div className="flex items-center justify-center gap-2 text-accent">
              <Sparkles className="w-4 h-4" />
              <p className="text-sm font-medium">Building the future of finance & technology</p>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative w-14 h-14 flex items-center justify-center rounded-xl bg-muted/30 backdrop-blur-sm border-2 border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-lg overflow-hidden"
                aria-label={social.label}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <social.icon className="relative z-10 w-6 h-6 text-muted-foreground group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} Rithvik Malay. Crafted with code, curiosity, and caffeine.
              <Cpu className="w-4 h-4 text-accent" />
            </p>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
