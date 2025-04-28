import { motion } from "framer-motion";

export default function Brands() {
  const brands = [
    { id: 1, alt: "Company Logo 1" },
    { id: 2, alt: "Company Logo 2" },
    { id: 3, alt: "Company Logo 3" },
    { id: 4, alt: "Company Logo 4" },
    { id: 5, alt: "Company Logo 5" },
    { id: 6, alt: "Company Logo 6" }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-dark-400 text-sm font-medium uppercase tracking-wider mb-8">
          Trusted by industry leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div 
              key={brand.id} 
              className="flex justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                <svg 
                  viewBox="0 0 120 40" 
                  className="h-8 w-auto"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="10" y="10" width="100" height="20" rx="4" fill="currentColor" fillOpacity="0.2" />
                  <text x="60" y="25" textAnchor="middle" fontSize="12" fontWeight="bold">BRAND</text>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
