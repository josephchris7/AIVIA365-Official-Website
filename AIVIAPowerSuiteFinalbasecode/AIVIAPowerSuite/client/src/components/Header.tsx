import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "../assets/final-logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, navigate] = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 blur-overlay border-b border-primary-400/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-2">
          <a onClick={() => navigate("/")} className="flex items-center cursor-pointer">
            <img src={logoImage} alt="AIVIA Logo" className="h-8 md:h-16" />
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <a onClick={() => scrollToSection("features")} className="text-accent-900 hover:text-primary-400 transition-colors duration-200 cursor-pointer">Features</a>
              <a onClick={() => scrollToSection("powersuite")} className="text-accent-900 hover:text-primary-400 transition-colors duration-200 cursor-pointer">PowerSuite</a>
              <a onClick={() => scrollToSection("use-cases")} className="text-accent-900 hover:text-primary-400 transition-colors duration-200 cursor-pointer">Use Cases</a>
              <a onClick={() => scrollToSection("demo")} className="text-accent-900 hover:text-primary-400 transition-colors duration-200 cursor-pointer">Demo</a>
              <a onClick={() => scrollToSection("testimonials")} className="text-accent-900 hover:text-primary-400 transition-colors duration-200 cursor-pointer">Testimonials</a>
            </nav>
            <Button 
              variant="default" 
              size="sm" 
              className="bg-primary-400 hover:bg-primary-500 text-accent-900 font-medium border border-primary-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg absolute left-4 right-4 top-16 z-50 p-4 border border-primary-400/20">
            <nav className="flex flex-col space-y-3">
              <a onClick={() => scrollToSection("features")} className="text-accent-900 hover:text-primary-400 transition-colors duration-200 py-2 cursor-pointer">Features</a>
              <a onClick={() => scrollToSection("powersuite")} className="text-accent-900 hover:text-primary-400 transition-colors duration-200 py-2 cursor-pointer">PowerSuite</a>
              <a onClick={() => scrollToSection("use-cases")} className="text-accent-900 hover:text-primary-400 transition-colors duration-200 py-2 cursor-pointer">Use Cases</a>
              <a onClick={() => scrollToSection("demo")} className="text-accent-900 hover:text-primary-400 transition-colors duration-200 py-2 cursor-pointer">Demo</a>
              <a onClick={() => scrollToSection("testimonials")} className="text-accent-900 hover:text-primary-400 transition-colors duration-200 py-2 cursor-pointer">Testimonials</a>
              <Button 
                variant="default" 
                size="sm" 
                className="bg-primary-400 hover:bg-primary-500 text-accent-900 font-medium w-full justify-center border border-primary-300"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
