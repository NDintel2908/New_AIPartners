import { motion } from "framer-motion";
import { Database, Code, Briefcase, ShoppingCart, GraduationCap } from "lucide-react";
import { useState } from "react";

const aiEcosystemComponents = [
  {
    id: "ai-builders",
    icon: Code,
    title: "AI Builders",
    description: "Các hãng công nghệ và đội ngũ tư vấn giải pháp AI",
    detailDescription: "Các hãng công nghệ và đối ngũ tư vấn giải pháp AI năng lực và kinh nghiệm",
    angle: 0, // Top
  },
  {
    id: "ai-workforce",
    icon: Briefcase,
    title: "AI Workforce", 
    description: "Mạng lưới doanh nghiệp tuyển dụng nhân lực AI",
    detailDescription: "Các hãng tuyển dụng, săn người và mạng lưới doanh nghiệp sẵn sàng tuyển dụng, cộng tác cùng nhân lực từ AI Trainers",
    angle: 90, // Right
  },
  {
    id: "ai-agent-market",
    icon: ShoppingCart,
    title: "AI Agent Market",
    description: "Chợ các tác nhân AI Agents sẵn sàng",
    detailDescription: "Chợ các tác nhân AI Agents sẵn sàng phối hợp và được sử dụng bởi lực lượng lao động mới",
    angle: 180, // Bottom
  },
  {
    id: "ai-ready-data",
    icon: Database,
    title: "AI Ready Data",
    description: "Kho dữ liệu sẵn sàng cho các Agents",
    detailDescription: "Kho dữ liệu sẵn sàng cho các Agents xin khai thác tối đa",
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            AI Trainers là mảng huấn luyện AI của hệ sinh thái AIPartners.asia
          </h2>
        </motion.div>

        {/* Radial Model Diagram */}
        <div className="relative flex items-center justify-center" style={{ height: '500px' }}>
          {/* Central Hub - AI Trainers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.05 }}
            className="absolute z-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-2xl cursor-pointer"
            onMouseEnter={() => setHoveredComponent("ai-trainers")}
            onMouseLeave={() => setHoveredComponent(null)}
          >
            <GraduationCap className="text-white h-8 w-8 mb-1" />
            <span className="text-white font-bold text-sm text-center">AI Trainers</span>
          </motion.div>

          {/* Central Description */}
          {hoveredComponent === "ai-trainers" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-30 top-20 bg-white rounded-lg shadow-lg p-4 max-w-sm"
            >
              <p className="text-sm text-gray-700">
                Dịch vụ đào tạo, huấn luyện chuyên đề AI. Phát triển lực lượng lao động năng lực mới có tư duy và khả năng sử dụng AI-Tools cộng tác cùng AI-Agents cho 5 năm tới.
              </p>
            </motion.div>
          )}

          {/* Surrounding Components */}
          {aiEcosystemComponents.map((component, index) => {
            const position = getPosition(component.angle, radius);
            const IconComponent = component.icon;
            
            return (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute z-10 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{
                  left: `calc(50% + ${position.x}px - 120px)`,
                  top: `calc(50% + ${position.y}px - 80px)`,
                  width: '240px',
                  height: '160px'
                }}
                onMouseEnter={() => setHoveredComponent(component.id)}
                onMouseLeave={() => setHoveredComponent(null)}
              >
                <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                    <IconComponent className="text-white h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{component.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {component.description}
                  </p>
                </div>

                {/* Detailed tooltip on hover */}
                {hoveredComponent === component.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-900 text-white text-xs rounded-lg p-3 max-w-xs z-30"
                  >
                    <p>{component.detailDescription}</p>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            <defs>
              <radialGradient id="lineGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.2 }} />
              </radialGradient>
            </defs>
            {aiEcosystemComponents.map((component, index) => {
              const position = getPosition(component.angle, radius);
              return (
                <motion.line
                  key={component.id}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${position.x}px)`}
                  y2={`calc(50% + ${position.y}px)`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  className={hoveredComponent === component.id ? "opacity-80" : "opacity-40"}
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
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <p className="text-gray-600 text-lg leading-relaxed">
            Hệ sinh thái tổng hợp tạo nên một mạng lưới hoàn chỉnh cho việc phát triển, 
            đào tạo và triển khai các giải pháp AI trong doanh nghiệp.
          </p>
        </motion.div>
      </div>
    </section>
  );
}