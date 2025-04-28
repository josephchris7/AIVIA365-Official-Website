import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
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
    <section className="pt-32 pb-20 hero-gradient text-white" id="hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur text-sm font-medium text-white mb-4">
              Introducing AIKA - AI Knowledge Agent
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-tech leading-tight">
              Your Organization's <span className="gradient-text">Intelligent Knowledge Hub</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-300 max-w-xl">
              AIKA delivers instant answers to employee questions about company insights, KPIs, and critical business data, empowering teams with the knowledge they need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="text-white bg-primary-600 hover:bg-primary-700 px-6 py-6 h-auto"
                onClick={() => scrollToSection("contact")}
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                className="text-white border-dark-700 hover:bg-white/10 px-6 py-6 h-auto"
                onClick={() => scrollToSection("demo")}
              >
                <PlayCircle className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
            <div className="pt-6 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-dark-800 w-8 h-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-dark-800 w-8 h-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-dark-800 w-8 h-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-sm text-dark-300">
                <span className="font-medium text-white">500+</span> companies already using AIVIA 365
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-dark-800/50 rounded-xl p-4 border border-dark-700 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 blur-3xl w-48 h-48 bg-primary-600/20 rounded-full -translate-y-1/2 translate-x-1/4"></div>
              <div className="absolute bottom-0 left-0 blur-3xl w-48 h-48 bg-secondary-600/20 rounded-full translate-y-1/2 -translate-x-1/4"></div>
              <img 
                src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="AI Knowledge Agent Interface" 
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-dark-900/80 backdrop-blur-sm rounded-lg p-4 border border-dark-700">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shrink-0 pulse-animation">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <p className="text-white font-medium">AIKA Knowledge Assistant</p>
                    <p className="text-dark-300 text-sm mt-1">The Q3 sales report shows a 27% increase over the same period last year, with the highest growth in the enterprise segment.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
