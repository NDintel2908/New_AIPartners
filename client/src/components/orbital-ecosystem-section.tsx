
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/i18n-context";
import { 
  Code2, 
  GraduationCap, 
  Users, 
  ShoppingCart, 
  Database,
  Sparkles,
  ArrowRight,
  Zap
} from "lucide-react";

const ecosystemServices = [
  {
    id: "ai-builders",
    icon: Code2,
    key: "aiBuilders",
    color: "text-blue-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    hoverColor: "hover:border-blue-400",
    shadowColor: "shadow-blue-100",
    accentColor: "bg-blue-600",
    position: "col-span-1 md:col-span-2"
  },
  {
    id: "ai-trainers", 
    icon: GraduationCap,
    key: "aiTrainers",
    color: "text-indigo-600",
    bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
    borderColor: "border-indigo-200",
    hoverColor: "hover:border-indigo-400",
    shadowColor: "shadow-indigo-100",
    accentColor: "bg-indigo-600",
    position: "col-span-1 md:col-span-2"
  },
  {
    id: "ai-ready-data",
    icon: Database,
    key: "aiReadyData",
    color: "text-emerald-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    borderColor: "border-emerald-200",
    hoverColor: "hover:border-emerald-400",
    shadowColor: "shadow-emerald-100",
    accentColor: "bg-emerald-600",
    position: "col-span-1"
  },
  {
    id: "ai-workforce",
    icon: Users,
    key: "aiWorkforce",
    color: "text-purple-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    hoverColor: "hover:border-purple-400",
    shadowColor: "shadow-purple-100",
    accentColor: "bg-purple-600",
    position: "col-span-1"
  },
  {
    id: "ai-agent-market",
    icon: ShoppingCart,
    key: "aiAgentMarket",
    color: "text-cyan-600",
    bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    borderColor: "border-cyan-200",
    hoverColor: "hover:border-cyan-400",
    shadowColor: "shadow-cyan-100",
    accentColor: "bg-cyan-600",
    position: "col-span-1"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
};

export default function OrbitalEcosystemSection() {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-blue-200 rounded-full mb-8 shadow-sm">
            <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-700 tracking-wide uppercase">
              AI Ecosystem
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t("OrbitalEcosystemSection.title")}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            {t("OrbitalEcosystemSection.subtitle")}
          </p>
        </motion.div>

        {/* Central Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="flex items-center justify-center w-40 h-40 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl shadow-2xl shadow-blue-500/30">
              <div className="text-white font-bold text-2xl text-center leading-tight">
                AI<br />Partners
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 animate-pulse" />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
                <p className="text-sm text-gray-600 font-semibold">Ecosystem Hub</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {ecosystemServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`group cursor-pointer ${service.position}`}
              >
                <div className={`
                  relative h-full p-8 ${service.bgColor} ${service.borderColor} ${service.hoverColor}
                  border-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500
                  backdrop-blur-sm overflow-hidden
                `}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  
                  {/* Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${service.accentColor} rounded-t-2xl`} />

                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`
                      inline-flex items-center justify-center w-16 h-16 
                      bg-white ${service.borderColor} border-2 rounded-2xl 
                      shadow-lg group-hover:shadow-xl group-hover:scale-110 
                      transition-all duration-300
                    `}>
                      <Icon className={`w-8 h-8 ${service.color}`} strokeWidth={2} />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg leading-tight">
                      {t(`OrbitalEcosystemSection.services.${service.key}.title`)}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                      {t(`OrbitalEcosystemSection.services.${service.key}.description`)}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className={`
                        inline-flex items-center px-3 py-1 
                        ${service.borderColor} border rounded-full 
                        text-xs font-medium ${service.color} bg-white/80
                      `}>
                        <Zap className="w-3 h-3 mr-1" />
                        {t(`OrbitalEcosystemSection.services.${service.key}.target`)}
                      </span>
                      
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className={`w-5 h-5 ${service.color}`} />
                      </div>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Connection Lines */}
        <div className="hidden lg:block relative mb-16">
          <svg className="absolute inset-0 w-full h-32" viewBox="0 0 800 120">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#6366F1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <motion.path
              d="M50,60 Q200,20 400,60 T750,60"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>
        </div>

        {/* Description & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              {t("OrbitalEcosystemSection.description")}
            </p>
          </div>

          <motion.button
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{t("OrbitalEcosystemSection.cta")}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
