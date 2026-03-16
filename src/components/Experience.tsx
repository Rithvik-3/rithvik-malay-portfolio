import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, Sparkles, Star } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Student Strengths Coach",
      company: "George Mason University - Center for the Advancement of Well-Being",
      location: "Fairfax, USA",
      period: "August 2025 – Present",
      current: true,
      gradient: "from-orange-500 to-yellow-500",
      highlights: [
        "Facilitate one-on-one strengths coaching sessions helping students identify and develop their CliftonStrengths.",
        "Guide students in applying their strengths toward academic success, leadership development, and career growth.",
        "Use Gallup strengths-based coaching frameworks to foster self-awareness and personal development.",
        "Support student well-being and engagement through structured coaching conversations and reflective exercises."
      ],
    },
    {
      role: "Alumni Data & Engagement Analyst",
      company: "George Mason University - Office of Advancement",
      location: "Fairfax, USA",
      period: "May 2025 – Present",
      current: true,
      gradient: "from-emerald-500 to-teal-500",
      highlights: [
        "Maintained and optimized alumni data workflows across Salesforce CRM and internal pledge-tracking systems.",
        "Performed data cleansing, entity-resolution, and segmentation processes to enhance fundraising datasets.",
        "Developed automated contact lists and dashboards supporting donor outreach and engagement campaigns.",
        "Analyzed alumni engagement patterns to support data-driven advancement strategies."
      ],
    },
    {
      role: "Outdoor Supervisor",
      company: "George Mason Recreation",
      location: "Fairfax, USA",
      period: "January 2025 – August 2025",
      current: false,
      gradient: "from-blue-500 to-cyan-500",
      highlights: [
        "Managed daily operations and safety oversight for outdoor recreational facilities.",
        "Coordinated club sports and intramural activities in high-traffic campus spaces.",
        "Conducted safety inspections and ensured compliance with recreation department protocols.",
        "Tracked facility usage and participation metrics to support staffing and scheduling decisions."
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Rise Consultancy",
      location: "Ashburn, USA",
      period: "June 2025 – July 2025",
      current: false,
      gradient: "from-purple-500 to-pink-500",
      highlights: [
        "Designed and maintained internal web pages for international students",
        "Applied responsive web design principles across devices",
        "Utilized HTML, CSS, and JavaScript for site optimization",
        "Collaborated with cross-cultural team in multiple time zones",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-secondary/30 relative overflow-hidden" id="experience">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-6 h-6 text-accent fill-accent animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <Star className="w-6 h-6 text-accent fill-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Building expertise through diverse roles and real-world challenges
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            <Briefcase className="w-5 h-5 text-accent" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>
        </div>

        <div className="relative">
          {/* Enhanced timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent/20 hidden md:block rounded-full" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced timeline dot */}
                <div className="absolute left-6 top-10 w-6 h-6 rounded-full border-4 border-background hidden md:flex items-center justify-center group z-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${exp.gradient} animate-pulse`} />
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradient} blur-lg opacity-50`} />
                </div>

                <Card className="md:ml-20 p-8 md:p-10 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border-2 border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0`}>
                          <Briefcase className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">
                              {exp.role}
                            </h3>
                            {exp.current && (
                              <Badge className="gradient-accent text-foreground font-bold px-3 py-1">
                                <span className="relative flex items-center gap-2">
                                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                  Current
                                </span>
                              </Badge>
                            )}
                          </div>
                          <p className="text-lg md:text-xl text-accent font-bold mb-2">{exp.company}</p>
                          <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4 text-accent" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 text-accent" />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 pl-0 md:pl-16">
                    {exp.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className="flex items-start gap-3 group/item"
                      >
                        <Sparkles className="w-4 h-4 text-accent mt-1 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                        <span className="text-foreground/90 leading-relaxed group-hover/item:text-accent transition-colors">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Footer decoration */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/30 backdrop-blur border border-accent/20">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-accent"></div>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Growing through every experience</span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
