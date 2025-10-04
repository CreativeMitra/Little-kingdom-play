import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [selectedBranch, setSelectedBranch] = useState("south-delhi");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const branches = [
    {
      id: "south-delhi",
      name: "South Delhi Campus",
      address: "123 Premium Street, Greater Kailash, New Delhi - 110048",
      phone: "+91 99999 99999",
      email: "southdelhi@littlekingdom.com",
      timings: "Mon-Sat: 8:00 AM - 2:00 PM"
    },
    {
      id: "defence-colony",
      name: "Defence Colony Branch",
      address: "456 Education Lane, Defence Colony, New Delhi - 110024",
      phone: "+91 88888 88888",
      email: "defencecolony@littlekingdom.com",
      timings: "Mon-Sat: 8:30 AM - 2:30 PM"
    },
    {
      id: "vasant-vihar",
      name: "Vasant Vihar Center",
      address: "789 Learning Avenue, Vasant Vihar, New Delhi - 110057",
      phone: "+91 77777 77777",
      email: "vasantvihar@littlekingdom.com",
      timings: "Mon-Sat: 8:00 AM - 2:00 PM"
    }
  ];

  const currentBranch = branches.find(b => b.id === selectedBranch) || branches[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🎉",
      description: "We'll get back to you within 24 hours.",
    });
    
    const whatsappMessage = `New Contact Form:%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Subject: ${formData.subject}%0A
Message: ${formData.message}`;
    
    window.open(`https://wa.me/918860060569?text=${whatsappMessage}`, "_blank");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-purple/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Visit us, call us, or send a message.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-hover hover:scale-105 transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak with our team</p>
              <Button 
                variant="outline"
                className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary"
                onClick={() => window.open("tel:+918860060569")}
              >
                +91 88600 60569
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-hover hover:scale-105 transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-green/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-green" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Instant response</p>
              <Button 
                variant="outline"
                className="w-full hover:bg-green hover:text-green-foreground hover:border-green"
                onClick={() => window.open("https://wa.me/918860060569?text=Hi! I'd like to know more about Little Kingdom", "_blank")}
              >
                Chat Now
              </Button>
            </Card>

            <Card className="p-6 text-center hover:shadow-hover hover:scale-105 transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">Send us a message</p>
              <Button 
                variant="outline"
                className="w-full hover:bg-secondary hover:text-secondary-foreground hover:border-secondary"
                onClick={() => window.open("mailto:info@littlekingdom.com")}
              >
                info@littlekingdom.com
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-purple/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input 
                      id="subject" 
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more..."
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-hero text-foreground font-semibold shadow-hover hover:shadow-glow hover:scale-105 transition-all"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Branch Selector & Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Campus</h2>
              
              {/* Branch Selector */}
              <div className="mb-6">
                <Label htmlFor="branch" className="mb-2 block">Select Branch</Label>
                <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {branches.map((branch) => (
                      <SelectItem key={branch.id} value={branch.id}>
                        {branch.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Map Placeholder */}
              <Card className="mb-6 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-secondary/20 to-purple/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                  </div>
                </div>
              </Card>

              {/* Branch Details */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">{currentBranch.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground">{currentBranch.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                    <a href={`tel:${currentBranch.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {currentBranch.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <a href={`mailto:${currentBranch.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {currentBranch.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple shrink-0" />
                    <p className="text-muted-foreground">{currentBranch.timings}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <Button 
                    className="w-full bg-gradient-playful text-secondary-foreground font-semibold shadow-hover hover:shadow-glow hover:scale-105 transition-all"
                    onClick={() => window.open("https://wa.me/918860060569?text=I'd like to schedule a campus visit", "_blank")}
                  >
                    Book Campus Tour
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out our FAQ section or schedule a call with our admissions team
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="outline"
              className="font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
              onClick={() => window.location.href = "/programs"}
            >
              View FAQs
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-hero text-foreground font-semibold shadow-hover hover:shadow-glow hover:scale-105 transition-all"
              onClick={() => window.open("https://wa.me/918860060569?text=I'd like to schedule a call", "_blank")}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
