import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Demo() {
  const [showVideo, setShowVideo] = useState(false);
  
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

  const handlePlayDemo = () => {
    setShowVideo(true);
  };
  
  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <section className="py-20 bg-accent-900 text-white" id="demo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm font-medium mb-4">
              See AIKA in Action
            </div>
            <h2 className="text-3xl font-bold font-tech">Experience the Power of AI Knowledge</h2>
            <p className="text-dark-300 text-lg">
              Watch how AIKA transforms how your team accesses and utilizes organizational knowledge in real-time.
            </p>
            <div className="pt-4 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary-400 flex items-center justify-center">
                    <span className="text-accent-900 font-bold">1</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Natural language queries</h3>
                  <p className="text-dark-300 mt-1">Ask questions in everyday language, just like you would to a colleague.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-secondary-300 flex items-center justify-center">
                    <span className="text-accent-900 font-bold">2</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Instant, accurate responses</h3>
                  <p className="text-dark-300 mt-1">Get concise answers with source references and relevant context.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary-400 flex items-center justify-center">
                    <span className="text-accent-900 font-bold">3</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">Interactive visualizations</h3>
                  <p className="text-dark-300 mt-1">See data come to life with dynamic charts and graphs for deeper insights.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <Button 
                className="bg-primary-400 hover:bg-primary-500 text-accent-900 font-medium"
                onClick={() => scrollToSection("contact")}
              >
                Request a Live Demo
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-dark-900 rounded-lg p-2 border border-dark-700 shadow-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-dark-900">
                <div className="flex items-center justify-center h-full relative">
                  <div 
                    className="w-24 h-24 rounded-full bg-primary-400/40 flex items-center justify-center cursor-pointer pulse-animation z-10"
                    onClick={handlePlayDemo}
                  >
                    <Play className="text-primary-400 h-16 w-16 ml-2" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                    alt="AIKA Demo Video" 
                    className="absolute inset-0 w-full h-full object-cover rounded opacity-30"
                  />
                  
                  {/* Video overlay with glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-400/20 via-transparent to-secondary-300/20"></div>
                  
                  {/* Interface elements overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-accent-900/70 backdrop-blur-sm p-4 rounded border border-primary-400/30 z-10 hidden md:block">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary-400 flex-shrink-0 flex items-center justify-center">
                        <span className="text-accent-900 text-xs font-bold">AI</span>
                      </div>
                      <div className="ml-3">
                        <span className="text-white text-sm">AIKA is analyzing the Q3 sales performance against targets...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal for Video Playback */}
            {showVideo && (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
                <div className="relative w-full max-w-4xl mx-auto">
                  <button 
                    onClick={handleCloseVideo} 
                    className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
                  >
                    <X className="h-8 w-8" />
                  </button>
                  <div className="relative pt-16:9 bg-dark-900 rounded-lg overflow-hidden border border-dark-700">
                    <iframe 
                      width="100%" 
                      height="500" 
                      src="https://www.youtube.com/embed/9R2mRyZ0FS4?autoplay=1"
                      title="AIKA Demo Video" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
