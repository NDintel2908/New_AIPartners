import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";

const partnerLogos = [
  { name: "AES", logo: "AES" },
  { name: "Anthropic", logo: "ANTHROPIC" },
  { name: "Airwallex", logo: "Airwallex" },
  { name: "GitLab", logo: "♥ GitLab" },
  { name: "Allegro", logo: "allegro" },
  { name: "GrowthLoop", logo: "GrowthLoop" }
];

export default function HeroSection() {
  return (
    <section className="hero-gradient text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AIPARTNERS
               
              <span className="block">One-Stop Winning AI Transformation Station</span>
            </h1>
            <p className="text-xl text-blue-50 mb-8 leading-relaxed max-w-2xl">
              Từ chiến lược đến triển khai, mọi giải pháp AI đều hội tụ tại đây. Chúng tôi giúp doanh nghiệp tăng tốc chuyển đổi số và bứt phá trong kỷ nguyên AI. Một điểm dừng, trọn hành trình chiến thắng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-google-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Find a partner
              </Button>
              
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600"
              alt="Modern office workspace showcasing AI technology and digital transformation"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Partner Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <p className="text-blue-100 text-lg font-medium">
              Trusted by leading companies worldwide
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-70">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span className={`text-2xl font-bold ${
                  partner.logo.includes('♥') ? 'text-orange-300' : ''
                }`}>
                  {partner.logo}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
