import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Baby, BookOpen, Palette, Music, Users, Clock } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: "playgroup",
      name: "Playgroup",
      age: "2-3 Years",
      icon: Baby,
      color: "primary",
      description: "A gentle introduction to structured learning through sensory play and social interaction",
      highlights: [
        "Sensory exploration activities",
        "Basic motor skills development",
        "Social interaction & parallel play",
        "Introduction to colors & shapes",
        "Story time & rhymes",
        "Indoor & outdoor play"
      ],
      schedule: [
        { time: "9:00 - 9:30 AM", activity: "Welcome & Free Play" },
        { time: "9:30 - 10:00 AM", activity: "Circle Time & Rhymes" },
        { time: "10:00 - 10:45 AM", activity: "Sensory Activities" },
        { time: "10:45 - 11:15 AM", activity: "Snack Time" },
        { time: "11:15 - 12:00 PM", activity: "Outdoor Play" },
        { time: "12:00 - 12:30 PM", activity: "Story Time & Goodbye" }
      ]
    },
    {
      id: "nursery",
      name: "Nursery",
      age: "3-4 Years",
      icon: BookOpen,
      color: "secondary",
      description: "Building foundational skills in language, numbers, and creative expression",
      highlights: [
        "Pre-literacy & phonics",
        "Number recognition & counting",
        "Art & craft activities",
        "Music & movement",
        "Fine motor skills",
        "Social-emotional learning"
      ],
      schedule: [
        { time: "9:00 - 9:30 AM", activity: "Morning Circle & Calendar" },
        { time: "9:30 - 10:15 AM", activity: "Literacy Activities" },
        { time: "10:15 - 10:45 AM", activity: "Math Concepts" },
        { time: "10:45 - 11:15 AM", activity: "Snack & Hygiene" },
        { time: "11:15 - 12:00 PM", activity: "Creative Arts" },
        { time: "12:00 - 12:45 PM", activity: "Outdoor Play & Music" },
        { time: "12:45 - 1:00 PM", activity: "Review & Dismissal" }
      ]
    },
    {
      id: "prekg",
      name: "Pre-KG",
      age: "4-5 Years",
      icon: Palette,
      color: "purple",
      description: "Comprehensive school readiness with advanced concepts and independent learning skills",
      highlights: [
        "Reading & writing preparation",
        "Advanced math concepts",
        "Science exploration",
        "Critical thinking skills",
        "Group projects & teamwork",
        "School readiness activities"
      ],
      schedule: [
        { time: "9:00 - 9:30 AM", activity: "Assembly & Yoga" },
        { time: "9:30 - 10:15 AM", activity: "Language & Reading" },
        { time: "10:15 - 11:00 AM", activity: "Mathematics" },
        { time: "11:00 - 11:30 AM", activity: "Snack & Discussion" },
        { time: "11:30 - 12:15 PM", activity: "Science/Art/Music (Rotation)" },
        { time: "12:15 - 1:00 PM", activity: "Physical Education" },
        { time: "1:00 - 1:30 PM", activity: "Project Work & Wrap-up" }
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the student-teacher ratio?",
      answer: "We maintain a low ratio of 1:8 for Playgroup and 1:10 for Nursery and Pre-KG to ensure personalized attention for every child."
    },
    {
      question: "Is lunch provided?",
      answer: "We provide healthy mid-morning snacks. Parents can pack lunch, or opt for our nutritious meal service prepared in our hygienic kitchen."
    },
    {
      question: "What curriculum do you follow?",
      answer: "We follow a play-based, child-centered curriculum aligned with NEP 2020 guidelines, incorporating Montessori and Reggio Emilia approaches."
    },
    {
      question: "Are parents allowed to visit?",
      answer: "Yes! We encourage parent involvement. You can schedule visits, attend workshops, and access live CCTV feeds through our parent app."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-purple/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Programs
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Age-appropriate curriculum designed to nurture every stage of your child's development
          </p>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={program.id} className={`${index % 2 === 1 ? "bg-gradient-to-br from-secondary/5 to-purple/5" : ""} -mx-4 lg:-mx-8 px-4 lg:px-8 py-12 rounded-3xl`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Program Info */}
                  <div>
                    <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 ${program.color === "primary" ? "bg-primary/20" : program.color === "secondary" ? "bg-secondary/20" : "bg-purple/20"}`}>
                      <program.icon className={`w-6 h-6 ${program.color === "primary" ? "text-primary" : program.color === "secondary" ? "text-secondary" : "text-purple"}`} />
                      <span className="font-semibold text-foreground">{program.age}</span>
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">{program.name}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{program.description}</p>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4">Program Highlights</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {program.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${program.color === "primary" ? "bg-primary" : program.color === "secondary" ? "bg-secondary" : "bg-purple"}`} />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      size="lg"
                      className={`${program.color === "primary" ? "bg-primary hover:bg-primary/90" : program.color === "secondary" ? "bg-secondary hover:bg-secondary/90" : "bg-purple hover:bg-purple/90"} text-white font-semibold shadow-hover hover:shadow-glow hover:scale-105 transition-all`}
                      onClick={() => window.open("https://wa.me/918860060569?text=I'd like to book a trial day", "_blank")}
                    >
                      Book a Trial Day
                    </Button>
                  </div>

                  {/* Daily Schedule */}
                  <Card className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <Clock className={`w-6 h-6 ${program.color === "primary" ? "text-primary" : program.color === "secondary" ? "text-secondary" : "text-purple"}`} />
                      <h3 className="text-xl font-semibold text-foreground">Daily Schedule</h3>
                    </div>
                    <div className="space-y-4">
                      {program.schedule.map((item, i) => (
                        <div key={i} className="flex gap-4 pb-4 border-b border-border last:border-0">
                          <div className="flex-shrink-0">
                            <span className="text-sm font-semibold text-primary">{item.time}</span>
                          </div>
                          <div className="flex-1">
                            <p className="text-foreground">{item.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Map */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-purple/5">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">Developmental Milestones</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Our curriculum nurtures growth across all domains
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Social-Emotional", desc: "Building relationships & self-regulation", color: "text-accent" },
              { icon: BookOpen, title: "Language & Literacy", desc: "Communication & pre-reading skills", color: "text-primary" },
              { icon: Palette, title: "Creative Arts", desc: "Expression through art, music & drama", color: "text-purple" },
              { icon: Music, title: "Physical Development", desc: "Gross & fine motor skills", color: "text-secondary" },
              { icon: Baby, title: "Cognitive Skills", desc: "Problem-solving & critical thinking", color: "text-gold" },
              { icon: Clock, title: "Life Skills", desc: "Independence & daily routines", color: "text-green" }
            ].map((domain, index) => (
              <Card key={index} className="p-6 hover:shadow-hover hover:-translate-y-2 transition-all group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${domain.color === "text-primary" ? "from-primary/20 to-primary/5" : domain.color === "text-secondary" ? "from-secondary/20 to-secondary/5" : domain.color === "text-accent" ? "from-accent/20 to-accent/5" : domain.color === "text-green" ? "from-green/20 to-green/5" : domain.color === "text-purple" ? "from-purple/20 to-purple/5" : "from-gold/20 to-gold/5"} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <domain.icon className={`w-8 h-8 ${domain.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{domain.title}</h3>
                <p className="text-muted-foreground">{domain.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
