import { Search, BarChart2, Lock, Plug, Brain, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <Search className="text-primary-600 text-xl" />,
      title: "Intelligent Data Retrieval",
      description: "Access critical information across your organization's knowledge base with natural language queries.",
      bgColor: "bg-primary-100",
      iconColor: "text-primary-600"
    },
    {
      icon: <BarChart2 className="text-secondary-600 text-xl" />,
      title: "Real-time KPI Monitoring",
      description: "Get instant visualization and insights on key performance indicators across departments.",
      bgColor: "bg-secondary-100",
      iconColor: "text-secondary-600"
    },
    {
      icon: <Lock className="text-accent-600 text-xl" />,
      title: "Role-Based Access Control",
      description: "Secure access management ensures employees only see information relevant to their position.",
      bgColor: "bg-accent-100",
      iconColor: "text-accent-600"
    },
    {
      icon: <Plug className="text-primary-600 text-xl" />,
      title: "Seamless Integrations",
      description: "Connect with your existing tools including Slack, Teams, Salesforce, and more.",
      bgColor: "bg-primary-100",
      iconColor: "text-primary-600"
    },
    {
      icon: <Brain className="text-secondary-600 text-xl" />,
      title: "Continuous Learning",
      description: "AIKA improves over time by learning from interactions and feedback across your organization.",
      bgColor: "bg-secondary-100",
      iconColor: "text-secondary-600"
    },
    {
      icon: <MessageSquare className="text-accent-600 text-xl" />,
      title: "Natural Conversations",
      description: "Interact with data using everyday language, eliminating the need for complex query syntax.",
      bgColor: "bg-accent-100",
      iconColor: "text-accent-600"
    }
  ];

  return (
    <section className="py-20 bg-dark-50" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-tech">AIKA: The AI Knowledge Agent</h2>
          <p className="text-dark-600 text-lg">Instant access to your organization's collective intelligence, with accurate answers and real-time insights.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-dark-100 feature-card transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-dark-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
