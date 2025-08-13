import { motion } from "framer-motion";
import { useI18n } from "@/contexts/i18n-context";
import { 
  Building, 
  GraduationCap, 
  Users, 
  ShoppingCart, 
  Database,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const coreServices = [
  {
    id: "ai-builders",
    icon: Building,
    key: "aiBuilders",
    angle: 0,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: "ai-trainers", 
    icon: GraduationCap,
    key: "aiTrainers",
    angle: 180,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

const extendedServices = [
  {
    id: "ai-workforce",
    icon: Users,
    key: "aiWorkforce", 
    angle: 60,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    id: "ai-agent-market",
    icon: ShoppingCart,
    key: "aiAgentMarket",
    angle: 120,
    color: "text-purple-600",
    bgColor: "bg-purple-50", 
    borderColor: "border-purple-200",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    id: "ai-ready-data",
    icon: Database,
    key: "aiReadyData",
    angle: 240,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    gradient: "from-cyan-500 to-cyan-600"
  }
];

export default function OrbitalEcosystemSection() {
  const { t } = useI18n();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const ServiceOrb = ({ 
    service, 
    radius, 
    isCore = false 
  }: { 
    service: any; 
    radius: number; 
    isCore?: boolean;
  }) => {
    const Icon = service.icon;
    const x = Math.cos((service.angle - 90) * Math.PI / 180) * radius;
    const y = Math.sin((service.angle - 90) * Math.PI / 180) * radius;
    
    return (
      <motion.div
        className="absolute"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: "translate(-50%, -50%)"
        }}
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: isCore ? 40 : 60,
          repeat: Infinity,
          ease: "linear"
        }}
        onMouseEnter={() => setHoveredService(service.id)}
        onMouseLeave={() => setHoveredService(null)}
      >
        <motion.div
          className={`relative w-16 h-16 ${service.bgColor} ${service.borderColor} border-2 rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
          whileHover={{ scale: 1.2 }}
          animate={{
            rotate: isCore ? [0, -360] : [0, -360]
          }}
          transition={{
            duration: isCore ? 40 : 60,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Icon className={`w-7 h-7 ${service.color}`} strokeWidth={2} />
          
          {/* Connecting line to center */}
          <div 
            className="absolute border-t border-dashed border-gray-300 opacity-30"
            style={{
              width: `${radius}px`,
              left: `-${radius - 32}px`,
              top: "50%",
              transformOrigin: "right center",
              transform: `rotate(${service.angle + 90}deg)`
            }}
          />
          
          {/* Hover description panel */}
          {hoveredService === service.id && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64 z-20"
            >
              <h4 className="font-semibold text-gray-900 mb-2">
                {t(`OrbitalEcosystemSection.services.${service.key}.title`)}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t(`OrbitalEcosystemSection.services.${service.key}.description`)}
              </p>
              <div className="flex items-center mt-3 text-xs text-gray-500">
                <ArrowRight className="w-3 h-3 mr-1" />
                Click to learn more
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              AI Ecosystem
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {t("OrbitalEcosystemSection.title")}
          </h2>
          
          <p className="text-lg text-google-gray max-w-2xl mx-auto">
            {t("OrbitalEcosystemSection.subtitle")}
          </p>
        </motion.div>

        {/* Orbital Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto"
          style={{ height: "500px", maxWidth: "600px" }}
        >
          {/* Background orbital paths */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Inner orbit path */}
            <div className="absolute w-64 h-64 border border-dashed border-gray-300 rounded-full opacity-40" />
            {/* Outer orbit path */}
            <div className="absolute w-96 h-96 border border-dashed border-gray-300 rounded-full opacity-30" />
          </div>

          {/* Center Hub */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="relative w-24 h-24 bg-gradient-to-br from-google-blue to-blue-700 rounded-full flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-google-blue/20 to-transparent rounded-full animate-pulse" />
              <div className="relative text-white font-bold text-sm text-center">
                AI<br />Partners
              </div>
              
              {/* Pulsing rings */}
              <motion.div
                className="absolute inset-0 border-2 border-google-blue rounded-full"
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.8, 0.4, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </div>
            
            <div className="text-center mt-3">
              <span className="text-xs font-medium text-google-blue">
                Ecosystem Hub
              </span>
            </div>
          </motion.div>

          {/* Core Services (Inner Orbit) */}
          {coreServices.map((service) => (
            <ServiceOrb
              key={service.id}
              service={service}
              radius={130}
              isCore={true}
            />
          ))}

          {/* Extended Services (Outer Orbit) */}
          {extendedServices.map((service) => (
            <ServiceOrb
              key={service.id}
              service={service}
              radius={190}
              isCore={false}
            />
          ))}

          {/* Particle effects */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-google-blue rounded-full opacity-40"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 8}%`
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Bottom description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-google-gray max-w-3xl mx-auto">
            {t("OrbitalEcosystemSection.description")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}