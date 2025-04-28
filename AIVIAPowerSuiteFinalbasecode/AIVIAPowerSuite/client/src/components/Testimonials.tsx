import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      text: "AIKA has transformed how our team accesses critical information. What used to take hours now takes seconds, and the answers are consistently reliable and actionable.",
      author: "Michael Rodriguez",
      position: "CTO, Innovate Inc.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      stars: 5
    },
    {
      text: "The ROI on AIKA was almost immediate. Our sales team now has instant access to product information, pricing, and competitive data during client calls, significantly increasing our close rate.",
      author: "Sarah Johnson",
      position: "VP Sales, TechForward",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      stars: 5
    },
    {
      text: "As a fast-growing company, sharing institutional knowledge was becoming a bottleneck. AIKA solved this challenge elegantly, making onboarding faster and helping our teams collaborate more effectively.",
      author: "David Chen",
      position: "COO, GrowthPath",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      stars: 4.5
    }
  ];

  return (
    <section className="py-20 bg-dark-50" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 font-tech">What Our Customers Say</h2>
          <p className="text-dark-600 text-lg">Join hundreds of forward-thinking companies already transforming their business with AIVIA 365.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-dark-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="text-primary-600 flex">
                  {[...Array(Math.floor(testimonial.stars))].map((_, i) => (
                    <Star key={i} className="fill-current h-4 w-4" />
                  ))}
                  {testimonial.stars % 1 === 0.5 && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" strokeWidth="0" />
                      <path d="M12 2v15.77" fill="none" />
                      <path d="M12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2" strokeWidth="2" />
                    </svg>
                  )}
                </div>
              </div>
              <blockquote className="text-dark-700 mb-6">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonial.author}</h4>
                  <p className="text-dark-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
