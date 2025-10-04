import { Card } from "@/components/ui/card";
import { Heart, Lightbulb, Shield, Sparkles, TrendingUp, Smile } from "lucide-react";

const About = () => {
  const timeline = [
    { year: "2015", event: "Founded with a vision", description: "Started with 15 students and a dream" },
    { year: "2017", event: "Expanded facilities", description: "Added modern classrooms and play areas" },
    { year: "2019", event: "Award recognition", description: "Best Preschool in South Delhi award" },
    { year: "2021", event: "Digital innovation", description: "Launched parent app and virtual tours" },
    { year: "2023", event: "Curriculum excellence", description: "Introduced advanced STEAM program" },
    { year: "2025", event: "Growing strong", description: "Serving 200+ happy families" }
  ];

  const values = [
    { icon: Heart, title: "Love", description: "Every child is nurtured with care and compassion", color: "text-accent" },
    { icon: Lightbulb, title: "Curiosity", description: "We inspire wonder and love for learning", color: "text-primary" },
    { icon: Shield, title: "Safety", description: "Protected environment for exploration", color: "text-secondary" },
    { icon: TrendingUp, title: "Growth", description: "Supporting holistic development", color: "text-green" },
    { icon: Sparkles, title: "Creativity", description: "Encouraging imagination and expression", color: "text-purple" },
    { icon: Smile, title: "Joy", description: "Making learning fun and memorable", color: "text-gold" }
  ];

  const team = [
    { name: "Dr. Meera Kapoor", role: "Founder & Principal", bio: "20+ years in early childhood education" },
    { name: "Anjali Sharma", role: "Academic Head", bio: "Montessori certified educator" },
    { name: "Rahul Verma", role: "Operations Manager", bio: "Child safety & facilities expert" },
    { name: "Priya Singh", role: "Lead Teacher", bio: "Creative curriculum specialist" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-purple/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A decade of nurturing young minds, building confidence, and creating joyful learning experiences
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-purple" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <Card className="p-6 inline-block hover:shadow-hover transition-all">
                      <h3 className="text-2xl font-bold text-primary mb-2">{item.year}</h3>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{item.event}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-purple/5">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center text-6xl">
                👩‍🏫
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">A Message from Our Founder</h3>
              <p className="text-muted-foreground">Dr. Meera Kapoor</p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              "When I started Little Kingdom Playhouse in 2015, I had a simple vision: create a place where every child feels loved, valued, and excited to learn. Today, seeing our children's bright smiles and hearing their curious questions reminds me why this work matters so much.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that early childhood is not just about preparing for school—it's about discovering the joy of learning, building confidence, and nurturing the unique spark in every child. Thank you for trusting us with your most precious treasure."
            </p>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-hover hover:-translate-y-2 transition-all group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color === "text-primary" ? "from-primary/20 to-primary/5" : value.color === "text-secondary" ? "from-secondary/20 to-secondary/5" : value.color === "text-accent" ? "from-accent/20 to-accent/5" : value.color === "text-green" ? "from-green/20 to-green/5" : value.color === "text-purple" ? "from-purple/20 to-purple/5" : "from-gold/20 to-gold/5"} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-purple/5">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Passionate educators dedicated to your child's growth
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-hover hover:scale-105 transition-all">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center text-4xl">
                  {index === 0 ? "👩‍🏫" : index === 1 ? "👩‍🎓" : index === 2 ? "👨‍💼" : "👩‍🏫"}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
