import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";
import { useI18n } from "@/contexts/i18n-context";

const partners = [
  "AES",
  "ANTHROPIC", 
  "Airwallex",
  "♥ GitLab",
  "allegro",
  "GrowthLoop"
];

export default function PartnersSection() {
  const { t } = useI18n();
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("PartnersSection.title")}
          </h2>
          <p className="text-xl text-google-gray max-w-3xl mx-auto">
            {t("PartnersSection.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span className={`text-2xl font-bold ${
                partner.includes('♥') ? 'text-orange-500' : 'text-google-gray'
              }`}>
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button 
            className="bg-google-blue hover:bg-google-blue-dark text-white px-8 py-3 text-lg font-semibold"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Handshake className="mr-2 h-5 w-5" />
            {t("PartnersSection.exploreButton")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
