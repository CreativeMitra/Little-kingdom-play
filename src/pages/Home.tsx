import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Camera, Heart, Shield, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-kids-playing.jpg";
import activitiesImage from "@/assets/kids-activities.jpg";

const Home = () => {
  const whyChooseUs = [
    {
      icon: BookOpen,
      title: "Creative Curriculum",
      description: "Play-based learning that nurtures curiosity and imagination",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "CCTV Security",
      description: "24/7 monitored safe environment with parent access",
      color: "text-secondary"
    },
    {
      icon: Heart,
      title: "Hygienic Meals",
      description: "Nutritious, fresh meals prepared in our sanitized kitchen",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Personal Attention",
      description: "Low student-teacher ratio for individualized care",
      color: "text-purple"
    }
  ];

  const programs = [
    {
      name: "Playgroup",
      age: "2-3 Years",
      description: "Sensory exploration and social skills development",
      color: "from-primary/20 to-primary/5"
    },
    {
      name: "Nursery",
      age: "3-4 Years",
      description: "Language, numbers, and creative expression",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      name: "Pre-KG",
      age: "4-5 Years",
      description: "School readiness and advanced learning concepts",
      color: "from-purple/20 to-purple/5"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The best decision we made! Our daughter loves going to school every day. The teachers are so caring and professional.",
      location: "Greater Kailash"
    },
    {
      name: "Rahul Verma",
      rating: 5,
      text: "Excellent facilities and safety standards. We can monitor our son on the app. The curriculum is outstanding!",
      location: "Defence Colony"
    },
    {
      name: "Anjali Kapoor",
      rating: 5,
      text: "My twins have flourished here! The personalized attention and fun activities make learning joyful. Highly recommend!",
      location: "Vasant Vihar"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-purple/20" />
        <img 
          src={heroImage} 
          alt="Happy children playing" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
        />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
            <span className="block opacity-0 animate-slide-in-left">
              Where Little Dreams
            </span>
            <span className="block bg-gradient-hero bg-clip-text text-transparent mt-2 opacity-0 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              Take Flight
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto opacity-0 animate-slide-in-down" style={{ animationDelay: "0.8s" }}>
            South Delhi's premier preschool nurturing young minds with love, creativity, and personalized care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-hero text-foreground font-semibold text-lg px-8 py-6 shadow-hover hover:shadow-glow hover:scale-105 transition-all"
              onClick={() => window.open("https://wa.me/918860060569?text=I'd like to book a school tour", "_blank")}
            >
              Book a School Tour
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="font-semibold text-lg px-8 py-6 bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Programs
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: "0s" }}>
          <Star className="w-12 h-12 text-primary opacity-60" fill="currentColor" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Heart className="w-16 h-16 text-accent opacity-60" fill="currentColor" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <Star className="w-10 h-10 text-secondary opacity-60" fill="currentColor" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Parents Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Excellence in early childhood education with world-class facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-hover hover:-translate-y-2 transition-all duration-300 cursor-pointer bg-card border-border group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color === "text-primary" ? "from-primary/20 to-primary/5" : item.color === "text-secondary" ? "from-secondary/20 to-secondary/5" : item.color === "text-accent" ? "from-accent/20 to-accent/5" : "from-purple/20 to-purple/5"} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section id="programs" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-purple/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Age-appropriate curriculum designed for every stage of early development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className={`p-8 bg-gradient-to-br ${program.color} border-border hover:shadow-hover hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-foreground mb-2">{program.name}</h3>
                  <p className="text-lg font-semibold text-primary mb-4">{program.age}</p>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    onClick={() => window.location.href = "/programs"}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Experience Our
                <span className="block bg-gradient-playful bg-clip-text text-transparent mt-2">
                  World-Class Facilities
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Take a virtual tour of our vibrant classrooms, safe play areas, and state-of-the-art learning zones. See where your child will grow, learn, and create beautiful memories.
              </p>
              <ul className="space-y-3 mb-8">
                {["Spacious, colorful classrooms", "Indoor & outdoor play areas", "Art & craft studios", "Music & movement rooms"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Camera className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                size="lg"
                className="bg-gradient-playful text-secondary-foreground font-semibold shadow-hover hover:shadow-glow hover:scale-105 transition-all"
                onClick={() => window.location.href = "/facilities"}
              >
                Take the 360° Tour
              </Button>
            </div>
            <div className="relative">
              <img 
                src={activitiesImage} 
                alt="Children activities" 
                className="rounded-3xl shadow-hover w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-purple/5 to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Parents Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real stories from our Little Kingdom family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-hover transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary-glow/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Limited seats available for 2025 admission. Book your school tour today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-foreground text-background font-semibold text-lg px-8 py-6 shadow-hover hover:scale-105 transition-all"
              onClick={() => window.location.href = "/admissions"}
            >
              Enroll Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="font-semibold text-lg px-8 py-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all"
              onClick={() => window.open("https://wa.me/918860060569?text=I'd like to download the prospectus", "_blank")}
            >
              Download Prospectus
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
