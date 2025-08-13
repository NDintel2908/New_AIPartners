import { motion } from "framer-motion";
import { useI18n } from "@/contexts/i18n-context";
import { Target, Users, Globe } from "lucide-react";

const getIcons = () => [Target, Users, Globe];

export default function StrategicDirectionSection() {
  const { t } = useI18n();
  const icons = getIcons();
  
  const strategicItems = [
    {
      title: t("StrategicDirectionSection.items.0.title"),
      description: t("StrategicDirectionSection.items.0.description"),
      icon: icons[0],
      gradient: "from-blue-500 to-cyan-600",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: t("StrategicDirectionSection.items.1.title"),
      description: t("StrategicDirectionSection.items.1.description"),
      icon: icons[1],
      gradient: "from-green-500 to-emerald-600",
      iconColor: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: t("StrategicDirectionSection.items.2.title"),
      description: t("StrategicDirectionSection.items.2.description"),
      icon: icons[2],
      gradient: "from-purple-500 to-indigo-600",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

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
            {t("StrategicDirectionSection.title")}
          </h2>
        </motion.div>

        {/* Strategic Items Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {strategicItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-gray-200">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${item.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-google-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-google-gray leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Gradient Line */}
                  <div className={`w-12 h-1 bg-gradient-to-r ${item.gradient} rounded-full mt-6 group-hover:w-16 transition-all duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}