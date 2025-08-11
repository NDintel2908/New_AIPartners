import { motion } from "framer-motion";
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
    angle: 90, // Right
  },
  {
    id: "ai-agent-market",
    icon: ShoppingCart,
    title: "AI Agent Market",
    description: "Chợ các tác nhân AI Agents sẵn sàng phối hợp và được sử dụng bởi lực lượng lao động mới",
    angle: 180, // Bottom
  },
  {
    id: "ai-workforce",
    icon: Briefcase,
    title: "AI Workforce",
    description: "Các hãng tuyển dụng, săn người và mạng lưới doanh nghiệp sẵn sàng tuyển dụng, cộng tác cùng nhân lực từ AI Trainers",
    angle: 270, // Left
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

  const radius = 200; // Distance from center

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold text-black mb-5 font-sans">
            AI Trainers là mảng huấn luyện AI của hệ sinh thái AIPartners.asia
          </h1>
        </motion.div>

        {/* Main Container */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          
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
            <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-lg">
              <defs>
                <filter id="starShadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(0,0,0,0.2)" floodOpacity="1"/>
                </filter>
              </defs>
              <path
                d="M60,5 L75,40 L115,40 L85,65 L95,100 L60,80 L25,100 L35,65 L5,40 L45,40 Z"
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
              <motion.div
                key={component.id}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5 + index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ scale: 1.05 }}
                className="absolute z-10 flex flex-col items-center cursor-pointer"
                style={{
                  left: `calc(50% + ${position.x}px)`,
                  top: `calc(50% + ${position.y}px)`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setHoveredComponent(component.id)}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-3 shadow-lg">
                  <IconComponent className="text-white h-8 w-8" />
                </div>
                
                {/* Label */}
                <span className="font-bold text-black text-lg text-center max-w-[120px] leading-tight">
                  {component.title}
                </span>
              </motion.div>
            );
          })}

          {/* AI Trainers Description Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            className="absolute z-15 right-0 top-1/2 transform -translate-y-1/2 translate-x-64"
            style={{ width: '320px' }}
          >
            <div 
              className="bg-white border-2 border-purple-400 rounded-[40px] p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mr-3">
                  <GraduationCap className="text-white h-6 w-6" />
                </div>
                <h3 className="font-bold text-purple-800 text-lg">AI Trainers</h3>
              </div>
              
              <div className="space-y-3">
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-purple-800 font-medium text-sm">
                    Dịch vụ đào tạo, huấn luyện chuyên đề AI
                  </p>
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  Phát triển lực lượng lao động năng lực mới có tư duy và khả năng sử dụng AI-Tools, 
                  cộng tác cùng AI-Agents cho 5 năm tới
                </p>
              </div>
            </div>
          </motion.div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#94a3b8', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#64748b', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            {aiEcosystemComponents.map((component, index) => {
              const position = getPosition(component.angle, radius);
              return (
                <motion.line
                  key={component.id}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1.2 + index * 0.1 }}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${position.x}px)`}
                  y2={`calc(50% + ${position.y}px)`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="8,4"
                />
              );
            })}
          </svg>
        </div>

        {/* Bottom description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            Hệ sinh thái tổng hợp tạo nên một mạng lưới hoàn chỉnh cho việc phát triển, 
            đào tạo và triển khai các giải pháp AI trong doanh nghiệp hiện đại.
          </p>
        </motion.div>
      </div>
    </section>
  );
}