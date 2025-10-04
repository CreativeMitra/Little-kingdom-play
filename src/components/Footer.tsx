import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logoImage from "@/assets/logo-kingdom.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-secondary/10 to-purple/10 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Little Kingdom" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-xl font-bold text-primary">Little Kingdom</h3>
                <p className="text-sm text-muted-foreground">Playhouse</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Nurturing young minds with love, creativity, and personalized care since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Programs", "Facilities"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Admissions</h4>
            <ul className="space-y-2">
              {["Admissions Process", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Premium Street, South Delhi, Delhi - 110001</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={18} className="text-secondary shrink-0" />
                <a href="tel:+918860060569" className="hover:text-primary transition-colors">
                  +91 88600 60569
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:info@littlekingdom.com" className="hover:text-primary transition-colors">
                  info@littlekingdom.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Little Kingdom Playhouse. All rights reserved. | Crafted with ❤️ for little learners
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
