
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
import { useState } from "react";

const ecosystemServices = [
  {
    id: "ai-builders",
    icon: Code2,
    key: "aiBuilders",
    angle: -90,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    accent: "border-blue-200"
  },
  {
    id: "ai-trainers", 
    icon: GraduationCap,
    key: "aiTrainers",
    angle: 18,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    accent: "border-indigo-200"
  },
  {
    id: "ai-ready-data",
    icon: Database,
    key: "aiReadyData",
    angle: 126,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    accent: "border-emerald-200"
  },
  {
    id: "ai-workforce",
    icon: Users,
    key: "aiWorkforce", 
    angle: 234,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    accent: "border-purple-200"
  },
  {
    id: "ai-agent-market",
    icon: ShoppingCart,
    key: "aiAgentMarket",
    angle: 342,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    accent: "border-cyan-200"
  }
];

export default function OrbitalEcosystemSection() {
  const { t } = useI18n();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const ServiceNode = ({ service, radius }: { service: any; radius: number }) => {
    const Icon = service.icon;
    const x = Math.cos((service.angle - 90) * Math.PI / 180) * radius;
    const y = Math.sin((service.angle - 90) * Math.PI / 180) * radius;
    
    return (
      <motion.div
        className="absolute z-10"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: "translate(-50%, -50%)"
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.1 + (ecosystemServices.findIndex(s => s.id === service.id) * 0.1)
        }}
        onMouseEnter={() => setHoveredService(service.id)}
        onMouseLeave={() => setHoveredService(null)}
      >
        <motion.div
          className={`relative w-16 h-16 ${service.bgColor} ${service.accent} border rounded-xl flex items-center justify-center cursor-pointer shadow-sm`}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
          }}
          transition={{ duration: 0.2 }}
        >
          <Icon 
            className={`w-6 h-6 ${service.color}`} 
            strokeWidth={2} 
          />
          
          {/* Simple connection line */}
          <div 
            className="absolute border-t border-dashed border-gray-300/60"
            style={{
              width: `${radius - 32}px`,
              left: service.angle > 90 && service.angle < 270 ? `-${radius - 64}px` : "64px",
              top: "50%",
              transformOrigin: service.angle > 90 && service.angle < 270 ? "right center" : "left center",
              transform: `rotate(${service.angle > 90 && service.angle < 270 ? service.angle + 180 : service.angle}deg)`
            }}
          />

          {/* Compact label */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <span className="text-xs font-medium text-gray-700">
              {t(`OrbitalEcosystemSection.services.${service.key}.shortTitle`)}
            </span>
          </div>
          
          {/* Simplified hover tooltip */}
          {hoveredService === service.id && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`absolute ${
                service.angle < 180 ? 'top-20' : 'bottom-20'
              } left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border p-4 w-64 z-30`}
            >
              <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                {t(`OrbitalEcosystemSection.services.${service.key}.title`)}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {t(`OrbitalEcosystemSection.services.${service.key}.description`)}
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simplified header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">AI Ecosystem</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("OrbitalEcosystemSection.title")}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("OrbitalEcosystemSection.subtitle")}
          </p>
        </motion.div>

        {/* Simplified ecosystem visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-16"
          style={{ height: "400px", maxWidth: "500px" }}
        >
          {/* Clean background circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-72 h-72 border border-dashed border-gray-200 rounded-full" />
          </div>

          {/* Central hub - simplified */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="relative w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              <div className="text-white font-bold text-sm text-center leading-tight">
                AI<br />Partners
              </div>
            </motion.div>
          </motion.div>

          {/* Service nodes */}
          {ecosystemServices.map((service) => (
            <ServiceNode
              key={service.id}
              service={service}
              radius={140}
            />
          ))}
        </motion.div>

        {/* Clean CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            {t("OrbitalEcosystemSection.description")}
          </p>
          
          <motion.button
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
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
