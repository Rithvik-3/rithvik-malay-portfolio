import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Code, Users, Target, Zap, Heart, TrendingUp } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Computer Science at George Mason University",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Briefcase,
      title: "FinTech Focus",
      description: "Building solutions that bridge finance & technology",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "Java, Python, Web Development & Data-Driven Software",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Entrepreneurship",
      description: "Innovation, leadership & creative problem-solving",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const stats = [
    { icon: Target, value: "5+", label: "Work Experiences" },
    { icon: Code, value: "10+", label: "Projects Built" },
    { icon: Heart, value: "100%", label: "Passion Driven" },
    { icon: TrendingUp, value: "∞", label: "Growth Mindset" },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="about">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-secondary/30" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            CS student passionate about FinTech, data-driven software, and entrepreneurship
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <Zap className="w-5 h-5 text-accent" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>
        </div>

        {/* Profile Image - Large and centered */}
        <div className="flex justify-center mb-20 animate-fade-in">
          <div className="relative group">
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-primary blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse" />
            <div className="absolute -inset-4 rounded-full border-2 border-accent/20 group-hover:border-accent/40 transition-all duration-500" />
            <div className="absolute -inset-8 rounded-full border border-accent/10 group-hover:border-accent/20 transition-all duration-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
            
            {/* Image container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent/50 group-hover:border-accent/80 transition-all duration-500 shadow-2xl hover:shadow-accent/50">
              <img
                src={profileImage}
                alt="Rithvik Malay"
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-card border-2 border-accent rounded-full shadow-xl backdrop-blur-sm">
              <p className="text-sm font-bold text-accent">FinTech Innovator</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center group"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-3xl font-bold text-accent mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card/80 backdrop-blur border-border hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Bio Section */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border-2 border-border hover:border-accent/30 transition-all duration-500 shadow-xl">
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-foreground/90 leading-relaxed text-lg md:text-xl">
              I'm a Computer Science student at <span className="text-accent font-bold">George Mason University</span>,
              passionate about <span className="text-accent font-bold">FinTech</span>, data-driven software, and entrepreneurship.
              I love exploring how technology can simplify finance and everyday life.
            </p>
            <p className="text-foreground/90 leading-relaxed text-lg md:text-xl">
              I'm currently building my foundation in <span className="text-accent font-bold">Java</span>,
              <span className="text-accent font-bold"> Python</span>, <span className="text-accent font-bold">C</span>,
              <span className="text-accent font-bold"> C++</span>, <span className="text-accent font-bold">data structures</span>, and web development through hands-on projects
              and coursework. Beyond academics, I contribute to the <span className="text-accent font-bold">GMU Fourth Estate magazine</span> and
              enjoy exploring topics around leadership, innovation, and creative problem-solving.
            </p>
            <p className="text-foreground/90 leading-relaxed text-lg md:text-xl">
              My goal is to grow as a developer and eventually build impactful tech solutions that
              <span className="text-accent font-bold"> bridge finance and technology</span> for people everywhere.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
