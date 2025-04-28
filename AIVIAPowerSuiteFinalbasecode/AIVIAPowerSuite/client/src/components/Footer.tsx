import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
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
    <footer className="bg-dark-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-tech font-bold text-xl">A</span>
              </div>
              <span className="font-tech font-bold text-xl">AIVIA<span className="text-primary-600">365</span></span>
            </a>
            <p className="text-dark-300 mb-6 max-w-sm">
              Empowering organizations with AI-powered knowledge tools to make faster, data-driven decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a onClick={() => scrollToSection("features")} className="text-dark-300 hover:text-white transition-colors duration-200 cursor-pointer">AIKA</a></li>
              <li><a onClick={() => scrollToSection("powersuite")} className="text-dark-300 hover:text-white transition-colors duration-200 cursor-pointer">PowerSuite</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Integrations</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Webinars</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Partners</a></li>
              <li><a onClick={() => scrollToSection("contact")} className="text-dark-300 hover:text-white transition-colors duration-200 cursor-pointer">Contact</a></li>
              <li><a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">Press</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AIVIA 365. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-dark-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-dark-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-dark-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
