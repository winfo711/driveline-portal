
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { useSiteSettings } from "@/hooks/use-site-settings";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const { data: settingsData } = useSiteSettings();
  
  const siteName = settingsData?.data?.settings?.site_name || "AutoElite";
  const logoUrl = "https://admin.bpraceloc.com/storage/logos/logos/logo.png";
  
  // Close menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Véhicules", path: "/vehicles" },
    { name: "Comment ça marche", path: "/how-it-works" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "py-3 glass-morph border-b border-gray-100/10" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo 
          textSize={scrolled ? "sm" : "md"} 
          iconSize={scrolled ? 20 : 24} 
          siteName={siteName}
          logoUrl={logoUrl}
        />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? "text-primary link-hover"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-gray-100/10 shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm transition-colors px-3 py-2.5 rounded-md ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-foreground hover:bg-accent/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
