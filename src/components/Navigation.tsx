import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-kingdom.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Facilities", path: "/facilities" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md shadow-soft border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logoImage} alt="Little Kingdom" className="h-12 w-12 object-contain animate-bounce-gentle" />
            <div>
              <h1 className="text-xl font-bold text-primary">Little Kingdom</h1>
              <p className="text-xs text-muted-foreground">Playhouse</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-hero text-foreground font-semibold shadow-hover hover:shadow-glow hover:scale-105 transition-all"
              onClick={() => window.open("https://wa.me/918860060569?text=I'd like to book a school tour", "_blank")}
            >
              Book Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                variant="default"
                size="lg"
                className="mt-2 bg-gradient-hero text-foreground font-semibold"
                onClick={() => {
                  window.open("https://wa.me/918860060569?text=I'd like to book a school tour", "_blank");
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Tour
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
