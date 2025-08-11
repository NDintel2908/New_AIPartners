import { motion, AnimatePresence } from "framer-motion";
import { Database, Code, Briefcase, ShoppingCart, GraduationCap } from "lucide-react";
import { useState } from "react";

const aiEcosystemComponents = [
  {
    id: "ai-builders",
    icon: Code,
    title: "AI Builders",
    description: "Các hãng công nghệ và đội ngũ tư vấn giải pháp AI năng lực và kinh nghiệm",
    angle: 0, // Top
  },
  {
    id: "ai-ready-data",
    icon: Database,
    title: "AI Ready Data",
    description: "Kho dữ liệu sẵn sàng cho các Agents xin khai thác tối đa",
    angle: 72, // Top Right
  },
  {
    id: "ai-agent-market",
    icon: ShoppingCart,
    title: "AI Agent Market",
    description: "Chợ các tác nhân AI Agents sẵn sàng phối hợp và được sử dụng bởi lực lượng lao động mới",
    angle: 144, // Bottom Right
  },
  {
    id: "ai-workforce",
    icon: Briefcase,
    title: "AI Workforce",
    description: "Các hãng tuyển dụng, săn người và mạng lưới doanh nghiệp sẵn sàng tuyển dụng, cộng tác cùng nhân lực từ AI Trainers",
    angle: 216, // Bottom Left
  },
  {
    id: "ai-trainers",
    icon: GraduationCap,
    title: "AI Trainers",
    description: "Dịch vụ đào tạo, huấn luyện chuyên đề AI. Phát triển lực lượng lao động năng lực mới có tư duy và khả năng sử dụng AI-Tools, cộng tác cùng AI-Agents cho 5 năm tới",
    angle: 288, // Top Left
  }
];

export default function AITrainersModel() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  // Calculate position for each component in a circle
  const getPosition = (angle: number, radius: number) => {
    const radian = (angle - 90) * (Math.PI / 180); // -90 to start from top
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  const radius = 140; // Reduced distance from center

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-black mb-5 font-sans">
            AI Trainers là mảng huấn luyện AI của hệ sinh thái AIPartners.asia
          </h1>
        </motion.div>

        {/* Main Container with Background Circle */}
        <div className="relative flex items-center justify-center min-h-[500px]">
          {/* Background Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-inner opacity-60"></div>
          </div>
          
          {/* Central Star */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 120 }}
            className="absolute z-20 flex items-center justify-center"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" className="drop-shadow-xl">
              <defs>
                <filter id="starShadow">
                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="rgba(0,0,0,0.25)" floodOpacity="1"/>
                </filter>
              </defs>
              <path
                d="M40,3 L50,27 L77,27 L57,43 L63,67 L40,53 L17,67 L23,43 L3,27 L30,27 Z"
                fill="#D32F2F"
                filter="url(#starShadow)"
              />
            </svg>
          </motion.div>

          {/* Surrounding Components */}
          {aiEcosystemComponents.map((component, index) => {
            const position = getPosition(component.angle, radius);
            const IconComponent = component.icon;
            
            return (
              <div key={component.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ scale: 1.08 }}
                  className="absolute z-10 flex flex-col items-center cursor-pointer"
                  style={{
                    left: `calc(50% + ${position.x}px)`,
                    top: `calc(50% + ${position.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredComponent(component.id)}
                  onMouseLeave={() => setHoveredComponent(null)}
                >
                  {/* Icon Circle - Larger */}
                  <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mb-4 shadow-xl border-4 border-white">
                    <IconComponent className="text-white h-10 w-10" />
                  </div>
                  
                  {/* Label - Larger and Bolder */}
                  <span className="font-extrabold text-black text-lg text-center max-w-[140px] leading-tight font-sans">
                    {component.title}
                  </span>
                </motion.div>

                {/* Description Box on Hover */}
                <AnimatePresence>
                  {hoveredComponent === component.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-30"
                      style={{
                        left: `calc(50% + ${position.x}px)`,
                        top: `calc(50% + ${position.y}px + 70px)`,
                        transform: 'translate(-50%, 0)',
                        width: '300px'
                      }}
                    >
                      <div className="bg-purple-50 border-2 border-purple-400 rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                            <IconComponent className="text-white h-5 w-5" />
                          </div>
                          <h3 className="font-bold text-black text-base font-sans">{component.title}</h3>
                        </div>
                        
                        <p className="text-black text-sm leading-relaxed font-sans">
                          {component.description}
                        </p>
                        
                        {/* Arrow pointing up */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-purple-400"></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}


        </div>

        {/* Bottom description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <p className="text-gray-600 text-lg leading-relaxed font-sans">
            Hệ sinh thái tổng hợp tạo nên một mạng lưới hoàn chỉnh cho việc phát triển, 
            đào tạo và triển khai các giải pháp AI trong doanh nghiệp hiện đại.
          </p>
        </motion.div>
      </div>
    </section>
  );
}