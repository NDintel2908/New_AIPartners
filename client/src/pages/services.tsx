
import NavigationHeader from "../components/navigation-header";
import Footer from "../components/footer";
import OrbitalEcosystemSection from "../components/orbital-ecosystem-section";
import FeaturesSection from "../components/features-section";
import { motion } from "framer-motion";
import { useI18n } from "../contexts/i18n-context";

export default function Services() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our AI Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services designed to transform your business operations and drive innovation.
            </p>
          </motion.div>
        </div>
      </section>

      <OrbitalEcosystemSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
