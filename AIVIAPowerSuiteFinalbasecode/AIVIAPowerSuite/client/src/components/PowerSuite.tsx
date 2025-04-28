import { Brain, MessageSquare, BarChart2, FileText, ListTodo, UserRound, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PowerSuite() {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  
  const handlePlayDemo = (productName: string) => {
    // In a real implementation, you would have different videos for each product
    // For now, we'll use the same demo video for all products
    setCurrentVideo("9R2mRyZ0FS4"); // YouTube video ID
    setShowVideo(true);
  };
  
  const handleCloseVideo = () => {
    setShowVideo(false);
  };
  
  const powerSuiteApps = [
    {
      icon: <Brain className="text-white text-2xl" />,
      title: "AIKA",
      description: "AI Knowledge Agent - Access your organization's collective intelligence instantly.",
      isCurrent: true
    },
    {
      icon: <MessageSquare className="text-white text-2xl" />,
      title: "Conversational Agent",
      description: "AI-powered assistant for customer support, employee onboarding, and more.",
      isCurrent: false
    },
    {
      icon: <BarChart2 className="text-white text-2xl" />,
      title: "Analytics Agent",
      description: "Advanced data analysis with predictive insights and automated reporting.",
      isCurrent: false
    },
    {
      icon: <FileText className="text-white text-2xl" />,
      title: "Document Agent",
      description: "Intelligent document processing, summarization, and content generation.",
      isCurrent: false
    },
    {
      icon: <ListTodo className="text-white text-2xl" />,
      title: "Process Agent",
      description: "Workflow automation and process optimization across departments.",
      isCurrent: false
    },
    {
      icon: <UserRound className="text-white text-2xl" />,
      title: "HR Agent",
      description: "Streamline HR operations from recruitment to employee development.",
      isCurrent: false
    }
  ];

  return (
    <section className="py-20 bg-primary-600 text-white" id="powersuite">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-tech">The AIVIA 365 PowerSuite</h2>
          <p className="text-primary-100 text-lg">A comprehensive collection of AI tools to transform how your organization works.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {powerSuiteApps.map((app, index) => (
            <motion.div 
              key={index}
              className={`${app.isCurrent ? 'bg-white/10' : 'bg-white/5'} backdrop-blur-sm p-6 rounded-xl border ${app.isCurrent ? 'border-primary-500' : 'border-primary-500/40'} shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`${app.isCurrent ? 'bg-white/20' : 'bg-white/10'} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                {app.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{app.title}</h3>
              <p className="text-primary-100 mb-4">{app.description}</p>
              <div className="border-t border-primary-500/30 pt-4 mt-4 flex items-center justify-between">
                <span className="text-primary-200 text-sm">{app.isCurrent ? 'Current Release' : 'Coming Soon'}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="bg-primary-400 hover:bg-primary-500 text-white border-primary-300 hover:border-primary-200 flex items-center gap-1 text-sm"
                  onClick={() => handlePlayDemo(app.title)}
                >
                  <Play className="h-3.5 w-3.5" /> Watch Demo
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative bg-accent-900 rounded-lg overflow-hidden w-full max-w-3xl">
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full"
                onClick={handleCloseVideo}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Button>
            </div>
            <div className="relative pt-[56.25%]">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                title="Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
