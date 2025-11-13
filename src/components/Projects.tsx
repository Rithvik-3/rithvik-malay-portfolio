import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Lightbulb, Sparkles, Star, Rocket } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "School Event Management System",
      description: "A comprehensive web-based application designed to streamline the organization and management of school events. Features include intuitive student registration, event detail viewing, and a robust update system for organizers to keep participants informed.",
      technologies: ["Python", "SQL", "JavaScript", "UI/UX Design"],
      date: "March 2024",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      highlights: [
        "Streamlined event organization workflow",
        "Intuitive interface for students and staff",
        "Real-time updates and announcements",
        "Reduced manual work and improved communication",
      ],
      icon: "🎓",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="projects">
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <Star className="w-6 h-6 text-accent fill-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Building solutions that make a difference
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <Rocket className="w-5 h-5 text-accent" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="relative p-10 md:p-14 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border-2 border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Project header */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  {/* Icon side */}
                  <div className="flex justify-center lg:justify-start">
                    <div className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                      {project.icon}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex-1 space-y-6">
                    {/* Title and date */}
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-3xl md:text-4xl font-bold group-hover:text-accent transition-colors leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Code className="w-4 h-4 text-accent" />
                        <span className="font-medium">{project.date}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/90 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-4 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Key Features
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, hIndex) => (
                          <div
                            key={hIndex}
                            className="flex items-start gap-2 group/item"
                          >
                            <Sparkles className="w-4 h-4 text-accent mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                            <span className="text-sm text-foreground/80 group-hover/item:text-accent transition-colors">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIndex) => (
                          <Badge
                            key={tIndex}
                            className="bg-muted/50 hover:bg-accent hover:text-foreground transition-all duration-300 cursor-default border border-border/50 hover:border-accent hover:scale-105 px-4 py-1.5 text-sm font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coming soon section */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="inline-block p-8 bg-muted/30 backdrop-blur border-2 border-dashed border-accent/30 hover:border-accent/50 transition-all duration-300">
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              More exciting projects coming soon! 🚀
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Currently working on innovative FinTech solutions
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
