import { Card } from "@/components/ui/card";
import { GraduationCap, Award, TrendingUp, Users, BookOpen, Lightbulb } from "lucide-react";

const Education = () => {
  const achievements = [
    {
      icon: BookOpen,
      title: "Fourth Estate Contributor",
      description: "Writing on technology and campus culture for GMU's student magazine",
    },
    {
      icon: Users,
      title: "Leadership Development",
      description: "Lift XT (UNIV 367) and COMM 101 - enhancing teamwork and public speaking",
    },
    {
      icon: Award,
      title: "Dean's List",
      description: "Maintaining a GPA above 3.5 (2024 – Present)",
    },
  ];

  const strengths = [
    { name: "Developer", color: "from-blue-500 to-blue-600", colorClass: "bg-blue-500" },
    { name: "Includer", color: "from-blue-500 to-blue-600", colorClass: "bg-blue-500" },
    { name: "Communication", color: "from-orange-500 to-orange-600", colorClass: "bg-orange-500" },
    { name: "Arranger", color: "from-purple-500 to-purple-600", colorClass: "bg-purple-500" },
    { name: "Strategic", color: "from-green-500 to-green-600", colorClass: "bg-green-500" },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="education">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Building a strong foundation in computer science and leadership
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            <GraduationCap className="w-5 h-5 text-primary" />
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          </div>
        </div>

        {/* Main Education Card */}
        <Card className="p-8 md:p-12 mb-16 bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border-2 border-border hover:border-primary/30 transition-all duration-500 shadow-xl group animate-fade-in">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-xl text-accent font-semibold mb-1">
                  George Mason University, Fairfax, Virginia
                </p>
                <p className="text-muted-foreground mb-2">2024 – Expected May 2028</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-primary font-bold">Current GPA: 3.76 / 4.00</span>
                </div>
              </div>

              <p className="text-foreground/90 leading-relaxed text-lg">
                Pursuing a Bachelor's degree in Computer Science with a focus on{" "}
                <span className="text-primary font-semibold">software development</span>,{" "}
                <span className="text-primary font-semibold">communication</span>, and{" "}
                <span className="text-primary font-semibold">leadership</span>. Developing a strong foundation in programming,
                problem-solving, and analytical thinking through coursework and campus engagement.
              </p>
            </div>
          </div>
        </Card>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Activities & Achievements */}
          <Card className="p-8 bg-card/80 backdrop-blur border-border hover:border-accent/50 transition-all duration-500 shadow-xl animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Activities & Achievements</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 bg-secondary/50 rounded-lg border border-border hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <achievement.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* CliftonStrengths */}
          <Card className="p-8 bg-card/80 backdrop-blur border-border hover:border-accent/50 transition-all duration-500 shadow-xl animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Top 5 CliftonStrengths</h3>
            </div>

            <div className="space-y-3">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border hover:border-accent/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`w-1 h-12 rounded-full ${strength.colorClass}`} />
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-muted-foreground/40 group-hover:text-accent transition-colors">
                        {index + 1}.
                      </span>
                      <span className="text-xl font-bold group-hover:text-accent transition-colors">
                        {strength.name}
                      </span>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${strength.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                These strengths drive my approach to{" "}
                <span className="text-primary font-semibold">problem-solving</span>,{" "}
                <span className="text-primary font-semibold">collaboration</span>, and{" "}
                <span className="text-primary font-semibold">innovation</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;