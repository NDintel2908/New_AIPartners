
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
import { useI18n } from "@/contexts/i18n-context";

const features = [
  {
    icon: Shield,
    key: "infrastructure",
    gradient: "from-blue-500 to-cyan-500",
    bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50"
  },
  {
    icon: Users,
    key: "expertise",
    gradient: "from-indigo-500 to-purple-500",
    bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50"
  },
  {
    icon: Target,
    key: "partnership",
    gradient: "from-emerald-500 to-teal-500",
    bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50"
  }
];

export default function FeaturesSection() {
  const { t } = useI18n();
  
  return (
    <section id="features" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6">
            <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-800 uppercase tracking-wider">
              Why Choose AIPartners
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {t("FeaturesSection.title")}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the three pillars that make us your ideal AI transformation partner
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:border-gray-200 h-full ${feature.bgPattern} bg-opacity-30`}>
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                    <div className={`w-full h-full rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-20`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-8">
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 group-hover:scale-110 transition-transform duration-500`}>
                        <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                          <Icon className="w-10 h-10 text-gray-700 group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                        </div>
                        {/* Icon background gradient on hover */}
                        <div className={`absolute inset-0.5 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}>
                          <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center group-hover:text-gray-800 transition-colors duration-300">
                      {t(`FeaturesSection.${feature.key}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-center leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                      {t(`FeaturesSection.${feature.key}.description`)}
                    </p>

                    {/* Progress Indicator */}
                    <div className="flex justify-center">
                      <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full`}
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.8 + index * 0.3 }}
                        />
                      </div>
                    </div>

                    {/* Hover Effect Arrow */}
                    <div className="flex justify-center mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${feature.gradient} text-white text-sm font-medium rounded-full`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-8">
              Join leading companies who trust AIPartners for their AI transformation journey
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {t("FeaturesSection.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
