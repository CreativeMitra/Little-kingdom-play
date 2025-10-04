import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Download, FileCheck, MessageSquare, UserCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    program: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted! 🎉",
      description: "We'll contact you within 24 hours. Check your email for next steps.",
    });
    
    // Send WhatsApp message
    const whatsappMessage = `New Admission Inquiry:%0A
Parent: ${formData.parentName}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Child: ${formData.childName} (${formData.childAge} years)%0A
Program: ${formData.program}%0A
Message: ${formData.message}`;
    
    window.open(`https://wa.me/918860060569?text=${whatsappMessage}`, "_blank");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const admissionSteps = [
    {
      icon: Calendar,
      step: "1",
      title: "Book a Tour",
      description: "Schedule a visit to explore our campus and meet our team",
      color: "text-primary"
    },
    {
      icon: FileCheck,
      step: "2",
      title: "Fill Application",
      description: "Complete the online form or download our prospectus",
      color: "text-secondary"
    },
    {
      icon: MessageSquare,
      step: "3",
      title: "Meet & Interact",
      description: "Personal interaction with our educators and child assessment",
      color: "text-purple"
    },
    {
      icon: UserCheck,
      step: "4",
      title: "Confirm Enrollment",
      description: "Submit documents and secure your child's seat",
      color: "text-accent"
    }
  ];

  const documents = [
    "Child's birth certificate",
    "Parent's ID proof (Aadhar/Passport)",
    "Address proof",
    "2 passport-size photos of child",
    "Immunization records",
    "Previous school records (if applicable)"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-purple/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Join Our Family
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Start your child's learning journey with us. Limited seats available for 2025 admission!
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 rounded-full">
            <span className="text-sm font-semibold text-accent">🎉 Early Bird Offer: 15% off on Annual Fees</span>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Admission Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and parent-friendly enrollment steps
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" style={{ width: "75%", margin: "0 auto" }} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {admissionSteps.map((step, index) => (
                <Card key={index} className="p-6 hover:shadow-hover hover:-translate-y-2 transition-all relative bg-background">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color === "text-primary" ? "from-primary/20 to-primary/5" : step.color === "text-secondary" ? "from-secondary/20 to-secondary/5" : step.color === "text-purple" ? "from-purple/20 to-purple/5" : "from-accent/20 to-accent/5"} flex items-center justify-center mb-4 mx-auto relative z-10`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-purple/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Online Admission Form</h2>
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input 
                      id="parentName" 
                      required
                      value={formData.parentName}
                      onChange={(e) => handleInputChange("parentName", e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
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
                      <Label htmlFor="phone">Phone Number *</Label>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="childName">Child's Name *</Label>
                      <Input 
                        id="childName" 
                        required
                        value={formData.childName}
                        onChange={(e) => handleInputChange("childName", e.target.value)}
                        placeholder="Enter child's name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="childAge">Child's Age *</Label>
                      <Input 
                        id="childAge" 
                        type="number" 
                        required
                        value={formData.childAge}
                        onChange={(e) => handleInputChange("childAge", e.target.value)}
                        placeholder="Age in years"
                        min="1"
                        max="6"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Program of Interest *</Label>
                    <Select onValueChange={(value) => handleInputChange("program", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="playgroup">Playgroup (2-3 Years)</SelectItem>
                        <SelectItem value="nursery">Nursery (3-4 Years)</SelectItem>
                        <SelectItem value="prekg">Pre-KG (4-5 Years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message (Optional)</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Any special requirements or questions?"
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-hero text-foreground font-semibold shadow-hover hover:shadow-glow hover:scale-105 transition-all"
                  >
                    Submit Application
                  </Button>
                </form>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Download Prospectus */}
              <Card className="p-8 bg-gradient-premium text-center">
                <Download className="w-12 h-12 mx-auto mb-4 text-foreground" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Download Prospectus</h3>
                <p className="text-foreground/80 mb-6">
                  Get detailed information about our programs, fees, and facilities
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold"
                  onClick={() => toast({ title: "Prospectus Downloaded!", description: "Check your downloads folder" })}
                >
                  Download PDF
                </Button>
              </Card>

              {/* Documents Required */}
              <Card className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Documents Required</h3>
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{doc}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Contact Info */}
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
                <h3 className="text-xl font-semibold text-foreground mb-4">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Our admissions team is here to assist you
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    onClick={() => window.open("tel:+918860060569")}
                  >
                    📞 Call Us: +91 88600 60569
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-green hover:text-green-foreground hover:border-green"
                    onClick={() => window.open("https://wa.me/918860060569?text=I need help with admissions", "_blank")}
                  >
                    💬 WhatsApp Chat
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-accent/20 to-purple/20 border-accent">
            <div className="text-6xl mb-6">🎁</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Special Offers & Scholarships</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-accent mb-2">Early Bird Discount</h4>
                <p className="text-sm text-muted-foreground">15% off on annual fees for enrollments before March 31st</p>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Sibling Benefit</h4>
                <p className="text-sm text-muted-foreground">20% discount on 2nd child's admission fees</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple mb-2">Referral Reward</h4>
                <p className="text-sm text-muted-foreground">₹5,000 credit for every successful referral</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
