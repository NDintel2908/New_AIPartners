
import NavigationHeader from "../components/navigation-header";
import Footer from "../components/footer";
import ContactSection from "../components/contact-section";
import { motion } from "framer-motion";
import { useI18n } from "../contexts/i18n-context";

export default function Contact() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's start the conversation.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
