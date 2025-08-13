
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/i18n-context";
import { Target, Users, Globe, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const getIcons = () => [Target, Users, Globe];

export default function StrategicDirectionSection() {
  const { t } = useI18n();
  const icons = getIcons();
  
  const strategicItems = [
    {
      id: "01",
      title: t("StrategicDirectionSection.items.0.title"),
      description: t("StrategicDirectionSection.items.0.description"),
      icon: icons[0],
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      glowColor: "shadow-blue-500/30",
      bgGradient: "from-blue-50/80 to-cyan-50/80",
      borderGradient: "from-blue-400 to-cyan-400",
      position: "transform rotate-2 translate-y-4",
      delay: 0.1
    },
    {
      id: "02",
      title: t("StrategicDirectionSection.items.1.title"),
      description: t("StrategicDirectionSection.items.1.description"),
      icon: icons[1],
      gradient: "from-green-500 via-emerald-500 to-teal-600",
      glowColor: "shadow-green-500/30",
      bgGradient: "from-green-50/80 to-emerald-50/80",
      borderGradient: "from-green-400 to-emerald-400",
      position: "transform -rotate-1 -translate-y-2",
      delay: 0.3
    },
    {
      id: "03",
      title: t("StrategicDirectionSection.items.2.title"),
      description: t("StrategicDirectionSection.items.2.description"),
      icon: icons[2],
      gradient: "from-purple-500 via-violet-500 to-pink-600",
      glowColor: "shadow-purple-500/30",
      bgGradient: "from-purple-50/80 to-pink-50/80",
      borderGradient: "from-purple-400 to-pink-400",
      position: "transform rotate-1 translate-y-6",
      delay: 0.5
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-200/30 rotate-45 rounded-lg"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-200/30 rotate-12 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/10 to-blue-400/10 rotate-45 rounded-lg"></div>
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
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Strategic Excellence
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            {t("StrategicDirectionSection.title")}
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Strategic Items - Asymmetric Layout */}
        <div className="relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <motion.path
                d="M200,150 Q400,100 600,150 Q800,200 1000,150"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {strategicItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: item.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10, 
                    rotateY: 5,
                    scale: 1.02
                  }}
                  className={`group relative ${item.position}`}
                >
                  {/* Card Container */}
                  <div className={`relative backdrop-blur-lg bg-gradient-to-br ${item.bgGradient} rounded-3xl p-8 shadow-2xl ${item.glowColor} hover:shadow-3xl transition-all duration-500 border border-white/20 overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                    </div>
                    
                    {/* Number Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {item.id}
                    </motion.div>

                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, 0],
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                      transition={{ duration: 0.6 }}
                      className={`relative w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                      
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    </motion.div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-700 leading-relaxed mb-6 text-base">
                        {item.description}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="relative mb-6">
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${70 + index * 10}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: item.delay + 0.5 }}
                            className={`h-full bg-gradient-to-r ${item.gradient} rounded-full`}
                          />
                        </div>
                        <span className="text-sm text-gray-600 mt-2 block">
                          Implementation Progress: {70 + index * 10}%
                        </span>
                      </div>
                      
                      {/* Learn More CTA */}
                      <Button
                        variant="ghost"
                        className="group/btn p-0 h-auto text-gray-600 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text font-semibold"
                      >
                        Learn More
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:text-blue-600" />
                        </motion.div>
                      </Button>
                    </div>
                    
                    {/* Border Gradient */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${item.borderGradient} p-[2px]`}>
                      <div className="w-full h-full rounded-3xl bg-white"></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Sparkles className="mr-2 h-5 w-5" />
            Explore Our Strategic Vision
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
