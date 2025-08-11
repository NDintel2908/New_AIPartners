import { motion } from "framer-motion";
import { Database, Users, Code, Briefcase, ShoppingCart, Star } from "lucide-react";

const aiTrainersComponents = [
  {
    id: "ai-builders",
    icon: Code,
    title: "AI Builders",
    description: "Các hãng công nghệ và đối ngũ tư vấn giải pháp AI năng lực và kinh nghiệm",
    position: "top",
    color: "bg-blue-500"
  },
  {
    id: "ai-trainers", 
    icon: Users,
    title: "AI Trainers",
    description: "Dịch vụ đào tạo, huấn luyện chuyên đề AI",
    descriptionDetail: "Phát triển lực lượng lao động năng lực mới có tư duy và khả năng sử dụng AI-Tools cộng tác cùng AI-Agents cho 5 năm tới",
    position: "right",
    color: "bg-blue-500",
    isHighlighted: true
  },
  {
    id: "ai-workforce",
    icon: Briefcase, 
    title: "AI Workforce",
    description: "Các hãng tuyển dụng, săn người và mạng lưới doanh nghiệp sẵn sàng tuyển dụng, cộng tác cùng nhân lực từ AI Trainers",
    position: "bottom-right",
    color: "bg-blue-500"
  },
  {
    id: "ai-agent-market",
    icon: ShoppingCart,
    title: "AI Agent Market", 
    description: "Chợ các tác nhân AI Agents sẵn sàng phối hợp và được sử dụng bởi lực lượng lao động mới",
    position: "bottom-left",
    color: "bg-blue-500"
  },
  {
    id: "ai-ready-data",
    icon: Database,
    title: "AI Ready Data",
    description: "Kho dữ liệu sẵn sàng cho các Agents xin khai thác tối đa",
    position: "left",
    color: "bg-blue-500"
  }
];

export default function AITrainersModel() {
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

        {/* Model Diagram */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Central Star */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              className="absolute z-10 flex items-center justify-center cursor-pointer"
            >
              <motion.svg 
                width="140" 
                height="140" 
                viewBox="0 0 140 140" 
                className="drop-shadow-2xl"
                animate={{ 
                  filter: [
                    "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                    "drop-shadow(0 8px 16px rgba(220,38,38,0.4))",
                    "drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              >
                <defs>
                  <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 1 }} />
                    <stop offset="30%" style={{ stopColor: '#dc2626', stopOpacity: 1 }} />
                    <stop offset="70%" style={{ stopColor: '#b91c1c', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#991b1b', stopOpacity: 1 }} />
                  </linearGradient>
                  <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
                  </radialGradient>
                  <filter id="starShadow">
                    <feDropShadow dx="0" dy="6" stdDeviation="12" floodOpacity="0.4"/>
                  </filter>
                </defs>
                
                {/* Main star shape */}
                <motion.path
                  d="M70,8 L87,43 L128,43 L96,68 L108,108 L70,83 L32,108 L44,68 L12,43 L53,43 Z"
                  fill="url(#starGradient)"
                  stroke="#7f1d1d"
                  strokeWidth="2"
                  filter="url(#starShadow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                
                {/* Inner highlight */}
                <path
                  d="M70,22 L82,47 L108,47 L87,64 L94,89 L70,76 L46,89 L53,64 L32,47 L58,47 Z"
                  fill="url(#starGlow)"
                  fillOpacity="0.3"
                />
                
                {/* Center circle for extra shine */}
                <circle
                  cx="70"
                  cy="58"
                  r="15"
                  fill="url(#starGlow)"
                  fillOpacity="0.5"
                />
              </motion.svg>
            </motion.div>

            {/* AI Builders - Top */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-72"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Code className="text-white h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">AI Builders</h3>
                <p className="text-sm text-gray-600">
                  Các hãng công nghệ và đối ngũ tư vấn giải pháp AI năng lực và kinh nghiệm
                </p>
              </div>
            </motion.div>

            {/* AI Trainers - Right (Highlighted) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80"
            >
              <div className="bg-pink-50 rounded-xl p-6 shadow-lg border-2 border-pink-200">
                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">AI Trainers</h3>
                <div className="bg-pink-100 rounded-lg p-4 mb-3">
                  <p className="text-sm font-medium text-pink-800">
                    Dịch vụ đào tạo, huấn luyện chuyên đề AI
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  Phát triển lực lượng lao động năng lực mới có tư duy và khả năng sử dụng AI-Tools cộng tác cùng AI-Agents cho 5 năm tới
                </p>
              </div>
            </motion.div>

            {/* AI Workforce - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute bottom-0 right-1/4 w-72"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="text-white h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">AI Workforce</h3>
                <p className="text-sm text-gray-600">
                  Các hãng tuyển dụng, săn người và mạng lưới doanh nghiệp sẵn sàng tuyển dụng, cộng tác cùng nhân lực từ AI Trainers
                </p>
              </div>
            </motion.div>

            {/* AI Agent Market - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-0 left-1/4 w-72"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="text-white h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">AI Agent Market</h3>
                <p className="text-sm text-gray-600">
                  Chợ các tác nhân AI Agents sẵn sàng phối hợp và được sử dụng bởi lực lượng lao động mới
                </p>
              </div>
            </motion.div>

            {/* AI Ready Data - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-72"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Database className="text-white h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">AI Ready Data</h3>
                <p className="text-sm text-gray-600">
                  Kho dữ liệu sẵn sàng cho các Agents xin khai thác tối đa
                </p>
              </div>
            </motion.div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              {/* Lines from center to each component */}
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
                x1="50%" y1="50%" x2="50%" y2="20%"
                stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5"
              />
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                x1="50%" y1="50%" x2="80%" y2="50%"
                stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5"
              />
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.1 }}
                x1="50%" y1="50%" x2="70%" y2="80%"
                stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5"
              />
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.2 }}
                x1="50%" y1="50%" x2="30%" y2="80%"
                stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5"
              />
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.3 }}
                x1="50%" y1="50%" x2="20%" y2="50%"
                stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}