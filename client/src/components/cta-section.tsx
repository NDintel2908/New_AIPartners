import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb } from "lucide-react";

const whyChooseUs = [
  {
    icon: Target,
    title: "Comprehensive AI Infrastructure",
    description: "Enterprise-grade AI solutions spanning strategic consulting, technology implementation, and resource deployment for measurable business outcomes.",
    accent: "slate-600"
  },
  {
    icon: Users,
    title: "Cross-Functional Expertise",
    description: "Multi-disciplinary team of certified AI specialists delivering rapid prototyping, advanced analytics, and scalable enterprise solutions.",
    accent: "slate-600"
  },
  {
    icon: Lightbulb,
    title: "Strategic Partnership Commitment",
    description: "End-to-end transformation partnership with guaranteed ROI delivery and continuous optimization for sustained competitive advantage.",
    accent: "slate-600"
  }
];

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Why Choose AIPartners?
          </h2>
          <div className="w-24 h-1 bg-slate-600 mx-auto rounded-sm"></div>
        </motion.div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {whyChooseUs.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg p-10 shadow-sm hover:shadow-md border border-gray-200 transition-all duration-300 h-full">
                {/* Professional Icon */}
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-8 group-hover:bg-slate-200 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-slate-600" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-base text-center" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
                  {feature.description}
                </p>
                
                {/* Subtle accent line */}
                <div className="w-12 h-0.5 bg-slate-300 mx-auto mt-6"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-slate-700 hover:bg-slate-800 text-white px-10 py-4 text-lg font-semibold rounded-md shadow-sm hover:shadow-md transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Partner with Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
}