
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/i18n-context";
import { Building2, Handshake, Globe, ArrowRight } from "lucide-react";

const getIcons = () => [Building2, Handshake, Globe];

export default function StrategicDirectionSection() {
  const { t } = useI18n();
  const icons = getIcons();
  
  const strategicItems = [
    {
      id: "01",
      title: t("StrategicDirectionSection.items.0.title"),
      description: t("StrategicDirectionSection.items.0.description"),
      icon: icons[0],
      progress: 85,
      delay: 0.1
    },
    {
      id: "02",
      title: t("StrategicDirectionSection.items.1.title"),
      description: t("StrategicDirectionSection.items.1.description"),
      icon: icons[1],
      progress: 78,
      delay: 0.2
    },
    {
      id: "03",
      title: t("StrategicDirectionSection.items.2.title"),
      description: t("StrategicDirectionSection.items.2.description"),
      icon: icons[2],
      progress: 92,
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 bg-slate-100 border border-slate-200 rounded-full mb-4">
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wider">
              Strategic Excellence
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            {t("StrategicDirectionSection.title")}
          </h2>
          
          <div className="w-16 h-0.5 bg-slate-300 mx-auto"></div>
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
                transition={{ duration: 0.6, delay: item.delay }}
                className="group"
              >
                {/* Card Container */}
                <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:border-slate-300 relative overflow-hidden">
                  
                  {/* Subtle Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full transform translate-x-12 -translate-y-12 opacity-30"></div>
                  
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-slate-600">{item.id}</span>
                  </div>

                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-200 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-slate-600" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 leading-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {item.description}
                    </p>
                    
                    {/* Progress Indicator */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Implementation</span>
                        <span className="text-xs font-semibold text-slate-700">{item.progress}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: item.delay + 0.3, ease: "easeOut" }}
                          className="h-full bg-slate-500 rounded-full"
                        />
                      </div>
                    </div>
                    
                    {/* Learn More Link */}
                    <motion.div
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                      className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
                    >
                      <span className="text-sm font-medium mr-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Connecting Line */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-0 left-0 w-full h-px bg-slate-200"></div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-0 left-0 h-px bg-slate-400"
          />
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button 
            className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-md shadow-sm hover:shadow-md transition-all duration-300" 
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="mr-2">Explore Strategic Vision</span>
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
