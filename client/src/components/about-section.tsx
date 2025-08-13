import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useI18n } from "@/contexts/i18n-context";

const values = [
  {
    title: "AI Transformation – Growth & Optimization",
    description: "Tập trung vào giải pháp chuyển đổi AI mang tính thực tiễn, tối ưu vận hành và thúc đẩy tăng trưởng bền vững cho doanh nghiệp.",
  },
  {
    title: "One-stop AI enablement network",
    description: "Cung cấp đầy đủ dịch vụ – từ tư vấn chiến lược, đào tạo, phát triển ứng dụng AI đến triển khai nguồn lực nhân sự – dưới một hệ sinh thái duy nhất.",
  }
];

export default function AboutSection() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-20 bg-white">
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
            {t("aboutUs.title")}
          </h2>
          <p className="text-xl text-google-gray max-w-4xl mx-auto leading-relaxed">
            {t("aboutUs.description")}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t("aboutUs.storyTitle")}
            </h3>
            <div className="space-y-4 text-google-gray">
              <p className="text-lg leading-relaxed">
                {t("aboutUs.storyContent")}
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600"
                alt="AI Solutions team collaborating in modern office environment with advanced technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-google-blue/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-google-blue text-white rounded-full p-3">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-google-gray">Expert Team Members</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Vision and Mission Section - Full Width Storytelling Design */}
        <div className="mb-24 relative overflow-hidden">
          {/* Parallax Background Layers */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-slate-50 to-gray-100"
            style={{ y: "-50px" }}
            whileInView={{ y: "0px" }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          ></motion.div>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-slate-900/8 to-blue-900/8"
            style={{ y: "-30px" }}
            whileInView={{ y: "0px" }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          ></motion.div>
          
          {/* AI Technology Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="none"/>
                  <circle cx="10" cy="10" r="1" fill="currentColor"/>
                  <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5"/>
                  <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>
          
          <div className="relative z-10 py-16">
            {/* Vision Section - Full Width */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-16"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-10 lg:p-16 border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-8">
                    <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                      "One-Stop Winning AI Transformation Station"
                    </span>
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 uppercase tracking-wide mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <span className="border-b-4 border-slate-700 pb-2">TẦM NHÌN</span>
                    </h3>
                  </div>
                  
                  <div className="text-center mb-8">
                    <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium italic mb-6" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                      "Trở thành trạm dừng lý tưởng cho mọi nhu cầu chuyển đổi AI – nơi hội tụ đầy đủ nguồn lực, giải pháp và chuyên gia, đồng hành cùng doanh nghiệp trên hành trình chuyển đổi AI Transformation một cách hiệu quả, thực tế và thành công."
                    </blockquote>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-slate-600 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <span className="bg-slate-100 px-4 py-2 rounded-full">Mục tiêu: Top 3 APAC 2027</span>
                    <span className="bg-slate-100 px-4 py-2 rounded-full">10,000+ doanh nghiệp chuyển đổi</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mission Section - Full Width */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-slate-900/95 backdrop-blur-sm rounded-xl p-10 lg:p-16 border border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="mb-8">
                    <span className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                      "Synergy & Leveraging Members' Capabilities"
                    </span>
                    <h3 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <span className="border-b-4 border-blue-400 pb-2">SỨ MỆNH</span>
                    </h3>
                  </div>
                  
                  <div className="text-center">
                    <blockquote className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-medium italic" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
                      "Khai thác sức mạnh cộng hưởng trong hệ sinh thái – kết nối, bổ trợ và nâng tầm năng lực giữa các đối tác trong hệ sinh thái, cùng kiến tạo những giải pháp AI phù hợp và đột phá cho doanh nghiệp."
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values Section - Clean Professional Design */}
        <div className="bg-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16 leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span className="border-b-2 border-slate-300 pb-2">OUR CORE VALUES</span>
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.15 }}
                  className="group"
                >
                  <div className={`rounded-lg p-8 lg:p-10 border border-gray-200 shadow-md hover:shadow-lg hover:border-slate-700 transition-all duration-300 ease-out h-full ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}>
                    <div className="border-l-4 border-slate-700 pl-6 mb-6">
                      <h4 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {value.title}
                      </h4>
                    </div>
                    
                    <p className="text-gray-600 text-base lg:text-lg leading-relaxed font-normal" style={{ fontFamily: 'Inter, sans-serif', lineHeight: '1.7' }}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics Section - Removed as per user request */}
      </div>
    </section>
  );
}