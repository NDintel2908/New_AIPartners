
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
  Target
} from "lucide-react";
import { useState } from "react";

const ecosystemServices = [
  {
    id: "ai-builders",
    icon: Code2,
    key: "aiBuilders",
    angle: -90, // Top point of star
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    gradient: "from-blue-500 to-blue-600",
    hoverGradient: "from-blue-600 to-blue-700"
  },
  {
    id: "ai-trainers", 
    icon: GraduationCap,
    key: "aiTrainers",
    angle: 18, // Upper right
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    gradient: "from-indigo-500 to-indigo-600",
    hoverGradient: "from-indigo-600 to-indigo-700"
  },
  {
    id: "ai-ready-data",
    icon: Database,
    key: "aiReadyData",
    angle: 126, // Lower right
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    gradient: "from-emerald-500 to-emerald-600",
    hoverGradient: "from-emerald-600 to-emerald-700"
  },
  {
    id: "ai-workforce",
    icon: Users,
    key: "aiWorkforce", 
    angle: 234, // Lower left
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    gradient: "from-purple-500 to-purple-600",
    hoverGradient: "from-purple-600 to-purple-700"
  },
  {
    id: "ai-agent-market",
    icon: ShoppingCart,
    key: "aiAgentMarket",
    angle: 342, // Upper left
    color: "text-cyan-600",
    bgColor: "bg-cyan-50", 
    borderColor: "border-cyan-200",
    gradient: "from-cyan-500 to-cyan-600",
    hoverGradient: "from-cyan-600 to-cyan-700"
  }
];

export default function OrbitalEcosystemSection() {
  const { t } = useI18n();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const ServiceNode = ({ 
    service, 
    radius 
  }: { 
    service: any; 
    radius: number;
  }) => {
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
          duration: 0.6, 
          delay: 0.2 + (ecosystemServices.findIndex(s => s.id === service.id) * 0.15)
        }}
        onMouseEnter={() => setHoveredService(service.id)}
        onMouseLeave={() => setHoveredService(null)}
      >
        <motion.div
          className={`relative w-20 h-20 ${service.bgColor} ${service.borderColor} border-2 rounded-xl flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-sm`}
          whileHover={{ 
            scale: 1.15,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
          }}
          animate={hoveredService === service.id ? {
            background: `linear-gradient(135deg, ${service.gradient.split(' ')[1]}, ${service.gradient.split(' ')[3]})`
          } : {}}
          transition={{ duration: 0.3 }}
        >
          <Icon 
            className={`w-8 h-8 ${hoveredService === service.id ? 'text-white' : service.color} transition-colors duration-300`} 
            strokeWidth={2} 
          />
          
          {/* Connection line to center */}
          <div 
            className="absolute border-t-2 border-dashed border-gray-300/50"
            style={{
              width: `${radius - 40}px`,
              left: service.angle > 90 && service.angle < 270 ? `-${radius - 80}px` : "80px",
              top: "50%",
              transformOrigin: service.angle > 90 && service.angle < 270 ? "right center" : "left center",
              transform: `rotate(${service.angle > 90 && service.angle < 270 ? service.angle + 180 : service.angle}deg)`
            }}
          />

          {/* Service label */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <span className="text-xs font-medium text-gray-600 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
              {t(`OrbitalEcosystemSection.services.${service.key}.shortTitle`)}
            </span>
          </div>
          
          {/* Hover description panel */}
          {hoveredService === service.id && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className={`absolute ${
                service.angle < 180 ? 'top-24' : 'bottom-24'
              } left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 w-80 z-30`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${service.color}`} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">
                    {t(`OrbitalEcosystemSection.services.${service.key}.title`)}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {t(`OrbitalEcosystemSection.services.${service.key}.description`)}
                  </p>
                  <div className="flex items-center text-xs text-blue-600 font-medium">
                    <Target className="w-3 h-3 mr-1" />
                    {t(`OrbitalEcosystemSection.services.${service.key}.target`)}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">
              AI Ecosystem
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("OrbitalEcosystemSection.title")}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("OrbitalEcosystemSection.subtitle")}
          </p>
        </motion.div>

        {/* Star Ecosystem Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto"
          style={{ height: "600px", maxWidth: "700px" }}
        >
          {/* Background patterns */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Outer circle */}
            <div className="absolute w-96 h-96 border border-dashed border-gray-300/50 rounded-full" />
            {/* Inner circle */}
            <div className="absolute w-64 h-64 border border-dashed border-gray-300/30 rounded-full" />
            
            {/* Star connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              {ecosystemServices.map((service, index) => {
                const nextIndex = (index + 2) % ecosystemServices.length; // Connect every other point for star
                const x1 = 200 + Math.cos((service.angle - 90) * Math.PI / 180) * 150;
                const y1 = 200 + Math.sin((service.angle - 90) * Math.PI / 180) * 150;
                const x2 = 200 + Math.cos((ecosystemServices[nextIndex].angle - 90) * Math.PI / 180) * 150;
                const y2 = 200 + Math.sin((ecosystemServices[nextIndex].angle - 90) * Math.PI / 180) * 150;
                
                return (
                  <motion.line
                    key={`star-${index}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgb(99 102 241)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 + index * 0.2 }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Center Hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="relative w-32 h-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-2xl flex items-center justify-center shadow-2xl"
              animate={{
                rotate: [0, -360]
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl animate-pulse" />
              <div className="relative text-white font-bold text-lg text-center leading-tight">
                AI<br />Partners
              </div>
              
              {/* Pulsing rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-blue-400 rounded-2xl"
                  animate={{
                    scale: [1, 1.5 + i * 0.3, 2 + i * 0.5],
                    opacity: [0.6, 0.3, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: i * 0.5
                  }}
                />
              ))}
            </motion.div>
            
            <div className="text-center mt-4">
              <span className="text-sm font-bold text-blue-700 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                Ecosystem Hub
              </span>
            </div>
          </motion.div>

          {/* Ecosystem Services */}
          {ecosystemServices.map((service) => (
            <ServiceNode
              key={service.id}
              service={service}
              radius={190}
            />
          ))}

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${25 + i * 8}%`
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            {t("OrbitalEcosystemSection.description")}
          </p>
          
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            {t("OrbitalEcosystemSection.cta")}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
