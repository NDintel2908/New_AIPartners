import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Shield, Globe, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "AI Transformation – Growth & Optimization",
    description: "Tập trung vào giải pháp chuyển đổi AI mang tính thực tiễn, tối ưu vận hành và thúc đẩy tăng trưởng bền vững cho doanh nghiệp.",
  },
  {
    icon: Globe,
    title: "One-stop AI enablement network",
    description: "Cung cấp đầy đủ dịch vụ – từ tư vấn chiến lược, đào tạo, phát triển ứng dụng AI đến triển khai nguồn lực nhân sự – dưới một hệ sinh thái duy nhất.",
  }
];

const stats = [
  {
    number: "500+",
    label: "AI Projects Delivered",
    icon: Zap
  },
  {
    number: "50+",
    label: "Enterprise Clients",
    icon: Users
  },
  {
    number: "99.9%",
    label: "Uptime Reliability",
    icon: Shield
  },
  {
    number: "24/7",
    label: "Expert Support",
    icon: Globe
  }
];

export default function AboutSection() {
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
            About us
          </h2>
          <p className="text-xl text-google-gray max-w-4xl mx-auto leading-relaxed">
            AIPartners.asia (AIP) là hệ sinh thái công nghệ chuyên cung cấp giải pháp chuyển đổi AI trọn gói (One-stop AI Transformation) dành riêng cho các doanh nghiệp tại Việt Nam và khu vực Châu Á – Thái Bình Dương (APAC).
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
              Our Story
            </h3>
            <div className="space-y-4 text-google-gray">
              <p className="text-lg leading-relaxed">
                
              </p>
              <p className="text-lg leading-relaxed">
                 AIP được thành lập từ tháng 6 năm 2024 với mô hình hoạt động gồm AI Builders – AI Trainers – AI Workforce – AI Agent Market, giúp doanh nghiệp tiếp cận AI dễ dàng, và tiết kiệm.
              </p>
              <p className="text-lg leading-relaxed">
                Chúng tôi không chỉ tư vấn – mà còn trực tiếp xây dựng, triển khai và đào tạo để đưa AI vào vận hành thực tế, kết nối nguồn lực từ Việt Nam, Nhật Bản và Thái Lan nhằm thúc đẩy tiến trình chuyển đổi số thông minh và bền vững.
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

        {/* Vision and Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-slate-700 rounded-lg p-3 mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Tầm Nhìn</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trở thành đối tác AI hàng đầu tại Việt Nam và Đông Nam Á, 
                giúp các doanh nghiệp khai thác toàn bộ tiềm năng của trí tuệ nhân tạo 
                để tạo ra giá trị bền vững và thúc đẩy sự phát triển kinh tế số.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="bg-google-blue rounded-lg p-3 mr-4">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Sứ Mệnh</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cung cấp các giải pháp AI tiên tiến và dễ tiếp cận, 
                đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số, 
                nâng cao năng suất và tạo ra những trải nghiệm khách hàng xuất sắc 
                thông qua công nghệ Google Cloud.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="transition-all duration-300"
              >
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gray-100 rounded-lg p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="text-slate-700 h-8 w-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-google-gray">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics Section - Removed as per user request */}
      </div>
    </section>
  );
}