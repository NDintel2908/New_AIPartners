
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Building2, Brain, Handshake, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { useI18n } from "../contexts/i18n-context";

const features = [
  {
    icon: Building2,
    key: "infrastructure",
    color: "text-google-blue",
    bgColor: "bg-google-blue/10",
    borderColor: "border-google-blue/20",
    accentColor: "bg-google-blue",
    number: "01"
  },
  {
    icon: Brain,
    key: "expertise", 
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    accentColor: "bg-emerald-500",
    number: "02"
  },
  {
    icon: Handshake,
    key: "partnership",
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    accentColor: "bg-violet-500",
    number: "03"
  }
];

export default function FeaturesSection() {
  const { t } = useI18n();
  
  return (
    <section id="features" className="relative py-20 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="subtle-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#1a73e8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#subtle-dots)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-google-blue/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-google-blue" />
            <span className="text-sm font-medium text-google-blue">
              Competitive Advantages
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("FeaturesSection.title")}
          </h2>
          
          <p className="text-lg text-google-gray max-w-2xl mx-auto">
            Three key factors that set us apart in the AI solutions landscape
          </p>
        </motion.div>

        {/* Main Content - New Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <div className={`relative p-6 rounded-xl border-2 ${feature.borderColor} ${feature.bgColor} hover:shadow-lg transition-all duration-300 cursor-pointer`}>
                    {/* Number Badge */}
                    <div className="absolute -top-3 -left-3">
                      <div className={`w-8 h-8 ${feature.accentColor} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                        {feature.number}
                      </div>
                    </div>
                    
                    {/* Active Indicator */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${feature.accentColor} rounded-r-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300`}></div>
                    
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 ${feature.bgColor} border ${feature.borderColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} strokeWidth={2} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-google-blue transition-colors duration-300">
                          {t(`FeaturesSection.${feature.key}.title`)}
                        </h3>
                        <p className="text-google-gray text-sm leading-relaxed">
                          {t(`FeaturesSection.${feature.key}.description`)}
                        </p>
                      </div>
                      
                      {/* Arrow Indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className={`w-4 h-4 ${feature.color}`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:pl-8"
          >
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-google-blue/5 to-emerald-500/5 rounded-3xl"></div>
              
              {/* Content Card */}
              <div className="relative bg-white rounded-2xl border border-gray-100 p-8 shadow-lg">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-google-blue/10 rounded-full mb-6">
                    <TrendingUp className="w-8 h-8 text-google-blue" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Proven Results
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-google-gray">Enterprise Success Rate</span>
                      <span className="font-semibold text-google-blue">95%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <motion.div 
                        className="bg-google-blue h-2 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-google-gray">Average ROI Increase</span>
                      <span className="font-semibold text-emerald-600">300%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <motion.div 
                        className="bg-emerald-500 h-2 rounded-full"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-google-blue rounded-full opacity-30"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button className="bg-google-blue hover:bg-google-blue/90 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
            {t("FeaturesSection.cta")}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
