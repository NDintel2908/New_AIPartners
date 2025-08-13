import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";
import { useI18n } from "@/contexts/i18n-context";

const partnerLogos = [
  { name: "AES", logo: "AES" },
  { name: "Anthropic", logo: "ANTHROPIC" },
  { name: "Airwallex", logo: "Airwallex" },
  { name: "GitLab", logo: "♥ GitLab" },
  { name: "Allegro", logo: "allegro" },
  { name: "GrowthLoop", logo: "GrowthLoop" }
];

export default function HeroSection() {
  const { t } = useI18n();
  
  return (
    <section className="hero-gradient text-white min-h-screen flex flex-col justify-center py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              AIPARTNERS
               
              <span className="block">{t("HeroSection.title")}</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50 leading-relaxed max-w-2xl">
              {t("HeroSection.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="bg-white text-google-blue hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              >
                <Rocket className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {t("HeroSection.startFree")}
              </Button>
              
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-first lg:order-last"
          >
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&h=600"
              alt="Modern office workspace showcasing AI technology and digital transformation"
              className="rounded-xl md:rounded-2xl shadow-2xl w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-cover"
            />
          </motion.div>
        </div>

        {/* Partner Logos Section - Optimized for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-auto"
        >
          <div className="text-center mb-4 md:mb-6">
            <p className="text-blue-100 text-sm md:text-base lg:text-lg font-medium">
              {t("HeroSection.trustedBy")}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 opacity-70">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="text-white/80 hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span className={`text-lg sm:text-xl md:text-2xl font-bold ${
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
