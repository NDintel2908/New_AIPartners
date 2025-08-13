
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Users, Handshake, ArrowRight } from "lucide-react";
import { useI18n } from "@/contexts/i18n-context";

const features = [
  {
    step: "01",
    icon: Building2,
    key: "infrastructure",
    progress: 33
  },
  {
    step: "02", 
    icon: Users,
    key: "expertise",
    progress: 66
  },
  {
    step: "03",
    icon: Handshake,
    key: "partnership", 
    progress: 100
  }
];

export default function FeaturesSection() {
  const { t } = useI18n();
  
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("FeaturesSection.title")}
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-16 left-0 right-0 h-px bg-gray-300 hidden lg:block">
            <motion.div 
              className="h-full bg-blue-600"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>

          {/* Features Timeline */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-blue-600 font-bold text-sm">{feature.step}</span>
                      </div>
                      {/* Connection Line for Mobile */}
                      {index < features.length - 1 && (
                        <div className="lg:hidden absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray-300" />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {t(`FeaturesSection.${feature.key}.title`)}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {t(`FeaturesSection.${feature.key}.description`)}
                      </p>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
                        <motion.div 
                          className="bg-blue-600 h-1 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${feature.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.8 + index * 0.2 }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 font-medium">
                        {feature.progress}% Implementation Ready
                      </div>
                    </div>
                  </div>

                  {/* Arrow Connector */}
                  {index < features.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-6 transform -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-lg transition-colors">
            {t("FeaturesSection.cta")}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
