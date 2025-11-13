import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Users, Award, Sparkles, Star, TrendingUp } from "lucide-react";

const SkillsSimple = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Technical Skills",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "HTML/CSS",
        "VS Code",
        "Git/GitHub",
        "IntelliJ IDEA",
        "Eclipse",
        "SQL",
        "Adobe Photoshop",
        "Figma",
        "MS Office",
      ],
    },
    {
      icon: Wrench,
      title: "Technologies",
      gradient: "from-emerald-500 to-teal-500",
      skills: [
        "Web Development",
        "Responsive Design",
        "OOP",
        "Testing & Debugging",
        "Git Version Control",
        "Linux/Zeus Server",
        "Command Line",
        "SSH",
      ],
    },
    {
      icon: Users,
      title: "Soft Skills",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        "Communication",
        "Problem-solving",
        "Time Management",
        "Leadership",
        "Adaptability",
        "Creativity",
        "Teamwork",
        "Critical Thinking",
      ],
    },
  ];

  const achievements = [
    {
      title: "Model United Nations",
      description: "Public speaking & negotiation",
      icon: "🏆",
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Game Developer Certified",
      description: "White Hat Junior",
      icon: "🎮",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Financial Literacy",
      description: "Metamorphosis Course",
      icon: "💰",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Leader in Me",
      description: "Glendale Academy",
      icon: "🌟",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden" id="skills">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6 animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <h2 className="text-5xl md:text-6xl font-bold">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent animate-pulse" style={{ animationDelay: `${i * 0.2 + 0.6}s` }} />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit developed through continuous learning and real-world application
          </p>
          <div className="flex items-center justify-center gap-3 text-accent">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-semibold">Always evolving, always improving</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border-2 border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-0.5 bg-accent rounded-full" />
                    <Sparkles className="w-3 h-3 text-accent" />
                  </div>
                </div>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <Badge
                    key={sIndex}
                    className="bg-muted/50 hover:bg-accent hover:text-foreground transition-all duration-300 cursor-default border border-border/50 hover:border-accent hover:scale-105 px-3 py-1.5 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <Card className="p-8 lg:p-10 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border-2 hover:border-accent/50 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 flex items-center justify-center shadow-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">Certifications & Achievements</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-12 h-1 bg-gradient-to-r from-accent to-transparent rounded-full" />
                <Sparkles className="w-3 h-3 text-accent" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="relative group/achievement p-6 rounded-xl bg-muted/30 hover:bg-muted/50 border-2 border-transparent hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover/achievement:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-2xl mb-4 group-hover/achievement:scale-110 group-hover/achievement:rotate-12 transition-all duration-300 shadow-lg`}>
                    {achievement.icon}
                  </div>
                  <h4 className="font-bold text-foreground mb-1 group-hover/achievement:text-accent transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Footer decoration */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-4 text-muted-foreground text-sm px-6 py-3 rounded-full bg-muted/30 backdrop-blur">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent"></div>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="font-medium">Continuously expanding my skillset</span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSimple;
