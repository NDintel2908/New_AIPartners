
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";

const whyChooseUs = [
  {
    icon: Target,
    title: "Comprehensive AI Infrastructure",
    description: "Enterprise-grade AI solutions spanning strategic consulting, technology implementation, and resource deployment for measurable business outcomes.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Cross-Functional Expertise",
    description: "Multi-disciplinary team of certified AI specialists delivering rapid prototyping, advanced analytics, and scalable enterprise solutions.",
    gradient: "from-green-500 to-teal-600"
  },
  {
    icon: Lightbulb,
    title: "Strategic Partnership Commitment",
    description: "End-to-end transformation partnership with guaranteed ROI delivery and continuous optimization for sustained competitive advantage.",
    gradient: "from-orange-500 to-red-600"
  }
];

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
            <CardContent className="p-12 text-center">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Choose AIPartners?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-google-blue to-google-blue-dark mx-auto rounded-full"></div>
              </motion.div>
              
              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {whyChooseUs.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    className="group"
                  >
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 h-full">
                      {/* Icon with gradient background */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {feature.description}
                      </p>
                      
                      {/* Animated underline */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                        className={`h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full mt-4 mx-auto opacity-40`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-google-blue to-google-blue-dark hover:from-google-blue-dark hover:to-google-blue text-white px-12 py-6 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <span className="mr-3">Partner with Us</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block group-hover:translate-x-1 transition-transform duration-300"
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
