import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function UseCases() {
  const [activeTab, setActiveTab] = useState("hr");
  
  const departmentContent = {
    hr: {
      title: "Streamline Employee Experience",
      subtitle: "HR & People Operations",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        {
          title: "Instant policy access",
          description: "Employees get immediate answers to questions about benefits, PTO policies, and company procedures."
        },
        {
          title: "Talent analytics",
          description: "HR teams can quickly analyze hiring trends, employee satisfaction, and turnover metrics."
        },
        {
          title: "Onboarding assistance",
          description: "Accelerate new hire integration with personalized onboarding resources and guidance."
        }
      ],
      color: "primary"
    },
    marketing: {
      title: "Data-Driven Marketing Decisions",
      subtitle: "Marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        {
          title: "Campaign performance insights",
          description: "Instantly access and analyze key metrics from all marketing campaigns."
        },
        {
          title: "Audience analytics",
          description: "Quick access to customer segmentation data and behavior patterns."
        },
        {
          title: "Content strategy optimization",
          description: "Recommendations based on historical performance and market trends."
        }
      ],
      color: "secondary"
    },
    finance: {
      title: "Financial Intelligence at Your Fingertips",
      subtitle: "Finance",
      image: "https://images.unsplash.com/photo-1452830978618-d6feae7d0ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        {
          title: "Real-time financial reporting",
          description: "Access up-to-date financial statements and KPIs through simple questions."
        },
        {
          title: "Budget variance analysis",
          description: "Quickly identify and understand deviations from financial plans."
        },
        {
          title: "Spend optimization",
          description: "AI-powered recommendations for cost reduction and financial efficiency."
        }
      ],
      color: "accent"
    },
    sales: {
      title: "Supercharge Your Sales Performance",
      subtitle: "Sales",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        {
          title: "Pipeline intelligence",
          description: "Real-time insights into deals, forecasts, and conversion rates."
        },
        {
          title: "Customer insights",
          description: "Access detailed customer history and engagement data during calls."
        },
        {
          title: "Competitive intelligence",
          description: "Quick access to competitive positioning and win/loss analysis."
        }
      ],
      color: "primary"
    },
    product: {
      title: "Accelerate Product Development",
      subtitle: "Product Teams",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      features: [
        {
          title: "User feedback analysis",
          description: "Synthesized insights from customer feedback and usage patterns."
        },
        {
          title: "Development metrics",
          description: "Real-time tracking of sprint progress, bug resolution, and feature releases."
        },
        {
          title: "Market intelligence",
          description: "Insights on competitive products, industry trends, and innovation opportunities."
        }
      ],
      color: "secondary"
    }
  };
  
  const currentDept = departmentContent[activeTab as keyof typeof departmentContent];
  const tabColor = `${currentDept.color}-600`;
  const bgColor = `bg-${currentDept.color}-100`;
  const textColor = `text-${currentDept.color}-700`;

  return (
    <section className="py-20 bg-white" id="use-cases">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-tech">AIKA for Every Department</h2>
          <p className="text-dark-600 text-lg">See how our AI Knowledge Agent transforms operations across your organization.</p>
        </motion.div>
        
        <div className="mb-8 border-b border-dark-200">
          <div className="flex overflow-x-auto pb-2 sm:justify-center" id="department-tabs">
            {Object.keys(departmentContent).map((tabId) => (
              <button 
                key={tabId}
                className={`whitespace-nowrap px-6 py-3 font-medium text-dark-700 ${
                  activeTab === tabId ? `border-b-3 border-${departmentContent[tabId as keyof typeof departmentContent].color}-600 text-${departmentContent[tabId as keyof typeof departmentContent].color}-600` : ""
                }`}
                onClick={() => setActiveTab(tabId)}
              >
                {departmentContent[tabId as keyof typeof departmentContent].subtitle}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src={currentDept.image} 
                alt={`${currentDept.subtitle} team using AIKA`} 
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className={`inline-block px-3 py-1 rounded-full ${activeTab === 'hr' ? 'bg-primary-100 text-primary-700' : activeTab === 'marketing' || activeTab === 'product' ? 'bg-secondary-100 text-secondary-700' : 'bg-accent-100 text-accent-700'} text-sm font-medium`}>
                {currentDept.subtitle}
              </div>
              <h3 className="text-2xl font-bold">{currentDept.title}</h3>
              <ul className="space-y-4">
                {currentDept.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`w-5 h-5 rounded-full ${activeTab === 'hr' || activeTab === 'sales' ? 'bg-primary-600' : activeTab === 'marketing' || activeTab === 'product' ? 'bg-secondary-600' : 'bg-accent-600'} flex items-center justify-center`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-dark-600 mt-1">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
