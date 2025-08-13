import { motion } from "framer-motion";
import { useI18n } from "@/contexts/i18n-context";
import { 
  Code2, 
  GraduationCap, 
  Users, 
  ShoppingCart, 
  Database,
  Sparkles,
  ArrowRight
} from "lucide-react";

const ecosystemServices = [
  {
    id: "ai-builders",
    icon: Code2,
    key: "aiBuilders",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-600"
  },
  {
    id: "ai-trainers", 
    icon: GraduationCap,
    key: "aiTrainers",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-indigo-600"
  },
  {
    id: "ai-ready-data",
    icon: Database,
    key: "aiReadyData",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-emerald-600"
  },
  {
    id: "ai-workforce",
    icon: Users,
    key: "aiWorkforce",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    gradientFrom: "from-purple-500",
    gradientTo: "to-purple-600"
  },
  {
    id: "ai-agent-market",
    icon: ShoppingCart,
    key: "aiAgentMarket",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-cyan-600"
  }
];

export default function OrbitalEcosystemSection() {
  const { t } = useI18n();

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">AI Ecosystem</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("OrbitalEcosystemSection.title")}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("OrbitalEcosystemSection.subtitle")}
          </p>
        </motion.div>

        {/* Central Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-xl mb-6">
            <div className="text-white font-bold text-xl text-center leading-tight">
              AI<br />Partners
            </div>
          </div>
          <p className="text-sm text-gray-500 font-medium">Ecosystem Hub</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {ecosystemServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className={`relative p-6 ${service.bgColor} ${service.borderColor} border rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full`}>
                  {/* Icon */}
                  <div className={`w-12 h-12 ${service.bgColor} ${service.borderColor} border rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-6 h-6 ${service.color}`} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                    {t(`OrbitalEcosystemSection.services.${service.key}.title`)}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    {t(`OrbitalEcosystemSection.services.${service.key}.description`)}
                  </p>

                  <div className="text-xs text-gray-500 font-medium">
                    {t(`OrbitalEcosystemSection.services.${service.key}.target`)}
                  </div>

                  {/* Hover effect gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Description & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            {t("OrbitalEcosystemSection.description")}
          </p>

          <motion.button
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("OrbitalEcosystemSection.cta")}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}