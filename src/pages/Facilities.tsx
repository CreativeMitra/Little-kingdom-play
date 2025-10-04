import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Camera, Wind, Utensils, Lock, Heart, Palette, Music, BookOpen } from "lucide-react";
import classroomImage from "@/assets/classroom-facilities.jpg";

const Facilities = () => {
  const safetyFeatures = [
    {
      icon: Camera,
      title: "24/7 CCTV Surveillance",
      description: "Complete monitoring with parent app access",
      color: "text-secondary"
    },
    {
      icon: Wind,
      title: "Air Purification",
      description: "HEPA filters ensuring clean, healthy air",
      color: "text-green"
    },
    {
      icon: Utensils,
      title: "Hygienic Kitchen",
      description: "ISO-certified kitchen with fresh meal preparation",
      color: "text-accent"
    },
    {
      icon: Lock,
      title: "Secure Entry",
      description: "Biometric access with trained security staff",
      color: "text-purple"
    },
    {
      icon: Heart,
      title: "First Aid Ready",
      description: "Trained staff & 24/7 doctor on call",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Child-Safe Design",
      description: "Rounded edges, soft surfaces, safety gates",
      color: "text-gold"
    }
  ];

  const spaces = [
    {
      icon: Palette,
      title: "Art Studio",
      description: "Dedicated space for painting, crafts, and creative exploration with washable supplies",
      image: "🎨"
    },
    {
      icon: Music,
      title: "Music Room",
      description: "Percussion instruments, singing, and movement activities for rhythm development",
      image: "🎵"
    },
    {
      icon: BookOpen,
      title: "Library Corner",
      description: "Cozy reading nook with age-appropriate books in English and Hindi",
      image: "📚"
    },
    {
      icon: Shield,
      title: "Indoor Play Area",
      description: "Climate-controlled space with soft play equipment and learning stations",
      image: "🏰"
    },
    {
      icon: Camera,
      title: "Outdoor Playground",
      description: "Shaded play zones with slides, swings, sandpit, and climbing frames",
      image: "🌳"
    },
    {
      icon: Utensils,
      title: "Dining Area",
      description: "Clean, spacious cafeteria with child-sized furniture and hygiene protocols",
      image: "🍽️"
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-purple/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            World-Class Facilities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Safe, stimulating, and beautifully designed spaces where children thrive
          </p>
        </div>
      </section>

      {/* Virtual Tour Banner */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img src={classroomImage} alt="Classroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden" />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Take a Virtual Tour
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Explore our campus from the comfort of your home. See our classrooms, play areas, and facilities in stunning 360° detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-playful text-secondary-foreground font-semibold shadow-hover hover:shadow-glow hover:scale-105 transition-all"
                    onClick={() => alert("360° tour would open here (requires VR integration)")}
                  >
                    Start 360° Tour
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    onClick={() => window.open("https://wa.me/918860060569?text=I'd like to schedule an in-person tour", "_blank")}
                  >
                    Book In-Person Visit
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Safety & Hygiene */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-purple/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Safety & Hygiene First</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your child's safety is our top priority. Every detail is designed with care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-hover hover:-translate-y-2 transition-all group bg-background">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color === "text-primary" ? "from-primary/20 to-primary/5" : feature.color === "text-secondary" ? "from-secondary/20 to-secondary/5" : feature.color === "text-accent" ? "from-accent/20 to-accent/5" : feature.color === "text-green" ? "from-green/20 to-green/5" : feature.color === "text-purple" ? "from-purple/20 to-purple/5" : "from-gold/20 to-gold/5"} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Spaces */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Specialized Learning Spaces</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Purpose-built areas designed to inspire creativity, curiosity, and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spaces.map((space, index) => (
              <Card key={index} className="p-6 hover:shadow-hover hover:scale-105 transition-all group">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{space.image}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{space.title}</h3>
                <p className="text-muted-foreground">{space.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Interactive Classroom Tour */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-purple/10 border-border">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Interactive Classroom Explorer
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Drag and explore our classroom in 3D. See how we've designed every corner for learning and fun!
              </p>
              <div className="aspect-video bg-background rounded-2xl shadow-hover flex items-center justify-center mb-8">
                <p className="text-muted-foreground">3D Classroom View (Interactive demo would load here)</p>
              </div>
              <Button 
                size="lg"
                className="bg-gradient-hero text-foreground font-semibold shadow-hover hover:shadow-glow hover:scale-105 transition-all"
                onClick={() => window.open("https://wa.me/918860060569?text=I'd like to book a tour", "_blank")}
              >
                Experience It In Person
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
