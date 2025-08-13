
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/i18n-context";
import { 
  Code2, 
  GraduationCap, 
  Users, 
  ShoppingCart, 
  Database,
  Building2,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target,
  Zap
} from "lucide-react";

const ecosystemServices = [
  {
    id: "ai-builders",
    key: "aiBuilders",
    gradient: "from-slate-700 to-slate-800",
    bgGradient: "from-slate-50/90 to-white/95",
    borderColor: "border-slate-200/70",
    hoverBorder: "hover:border-slate-400/80",
    accentColor: "text-slate-700",
    category: "Development"
  },
  {
    id: "ai-trainers", 
    key: "aiTrainers",
    gradient: "from-slate-600 to-slate-700",
    bgGradient: "from-slate-50/90 to-gray-50/95",
    borderColor: "border-slate-200/70",
    hoverBorder: "hover:border-slate-400/80",
    accentColor: "text-slate-600",
    category: "Training"
  },
  {
    id: "ai-ready-data",
    key: "aiReadyData",
    gradient: "from-gray-700 to-slate-800",
    bgGradient: "from-gray-50/90 to-slate-50/95",
    borderColor: "border-gray-200/70",
    hoverBorder: "hover:border-gray-400/80",
    accentColor: "text-gray-700",
    category: "Data Solutions"
  },
  {
    id: "ai-workforce",
    key: "aiWorkforce",
    gradient: "from-slate-600 to-gray-700",
    bgGradient: "from-slate-50/90 to-white/95",
    borderColor: "border-slate-200/70",
    hoverBorder: "hover:border-slate-400/80",
    accentColor: "text-slate-600",
    category: "Workforce"
  },
  {
    id: "ai-agent-market",
    key: "aiAgentMarket",
    gradient: "from-gray-600 to-slate-700",
    bgGradient: "from-gray-50/90 to-slate-50/95",
    borderColor: "border-gray-200/70",
    hoverBorder: "hover:border-gray-400/80",
    accentColor: "text-gray-600",
    category: "Marketplace"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

export default function OrbitalEcosystemSection() {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-gray-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gray-100/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-slate-100/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-full mb-8 shadow-sm">
            <Building2 className="w-5 h-5 text-slate-600" />
            <span className="text-sm font-semibold text-slate-700 tracking-wide">
              ENTERPRISE AI ECOSYSTEM
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 bg-clip-text text-transparent">
              {t("OrbitalEcosystemSection.title")}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            {t("OrbitalEcosystemSection.subtitle")}
          </p>

          {/* Key Statistics */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700">5</div>
              <div className="text-sm text-gray-600 font-medium">Core Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700">360°</div>
              <div className="text-sm text-gray-600 font-medium">Comprehensive Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-700">∞</div>
              <div className="text-sm text-gray-600 font-medium">Scalable Solutions</div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {ecosystemServices.map((service, index) => {
            const isLarge = index < 2; // First two cards are larger

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`group cursor-pointer ${isLarge ? 'lg:col-span-1' : ''} ${index === 0 ? 'md:col-span-1' : ''}`}
              >
                <div className={`
                  relative h-full p-8 bg-gradient-to-br ${service.bgGradient} 
                  ${service.borderColor} ${service.hoverBorder}
                  border rounded-2xl shadow-sm hover:shadow-lg 
                  transition-all duration-500 backdrop-blur-sm
                  min-h-[280px] flex flex-col
                `}>
                  {/* Category Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center px-3 py-1 bg-white/95 text-xs font-medium text-slate-600 rounded-full border border-slate-200/50">
                      {service.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col pt-4">
                    <h3 className={`text-2xl font-bold ${service.accentColor} mb-4 leading-tight`}>
                      {t(`OrbitalEcosystemSection.services.${service.key}.title`)}
                    </h3>

                    <p className="text-slate-700 leading-relaxed mb-6 flex-1 text-sm">
                      {t(`OrbitalEcosystemSection.services.${service.key}.description`)}
                    </p>

                    {/* Target Audience */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <Target className="w-4 h-4" />
                        {t(`OrbitalEcosystemSection.services.${service.key}.target`)}
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200/40">
                        <span className="text-sm font-medium text-slate-500">
                          Learn More
                        </span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-sm`}>
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${service.gradient} 
                    opacity-0 group-hover:opacity-[0.02] rounded-2xl
                    transition-opacity duration-500
                  `} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Integration Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-lg mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrated Ecosystem Benefits
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("OrbitalEcosystemSection.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Seamless Integration</h4>
              <p className="text-gray-600 text-sm">All components work together harmoniously</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Scalable Growth</h4>
              <p className="text-gray-600 text-sm">Expand capabilities as your business grows</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rapid Deployment</h4>
              <p className="text-gray-600 text-sm">Fast implementation with proven methodologies</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            className="group inline-flex items-center gap-4 bg-gradient-to-r from-slate-700 via-slate-800 to-gray-800 hover:from-slate-800 hover:via-gray-800 hover:to-slate-900 text-white px-12 py-5 rounded-xl font-semibold text-lg shadow-sm hover:shadow-md transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Building2 className="w-6 h-6" />
            <span>{t("OrbitalEcosystemSection.cta")}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <p className="text-sm text-gray-500 mt-6 max-w-md mx-auto">
            Ready to transform your business with our comprehensive AI ecosystem? 
            Let's discuss your specific requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
