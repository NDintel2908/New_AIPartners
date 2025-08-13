import { motion } from "framer-motion";
import { Database, Code, Briefcase, ShoppingCart, GraduationCap } from "lucide-react";
import { useI18n } from "@/contexts/i18n-context";

const getAIEcosystemComponents = (t: (key: string) => string) => [
  {
    id: "ai-builders",
    icon: Code,
    title: t("AITrainersModel.components.aiBuilders.title"),
    description: t("AITrainersModel.components.aiBuilders.description"),
    angle: -90, // Top (starting from -90 to have first element at top)
  },
  {
    id: "ai-ready-data",
    icon: Database,
    title: t("AITrainersModel.components.aiReadyData.title"),
    description: t("AITrainersModel.components.aiReadyData.description"),
    angle: -18, // 72° clockwise from top
  },
  {
    id: "ai-agent-market",
    icon: ShoppingCart,
    title: t("AITrainersModel.components.aiAgentMarket.title"),
    description: t("AITrainersModel.components.aiAgentMarket.description"),
    angle: 54, // 144° clockwise from top
  },
  {
    id: "ai-workforce",
    icon: Briefcase,
    title: t("AITrainersModel.components.aiWorkforce.title"),
    description: t("AITrainersModel.components.aiWorkforce.description"),
    angle: 126, // 216° clockwise from top
  },
  {
    id: "ai-trainers",
    icon: GraduationCap,
    title: t("AITrainersModel.components.aiTrainers.title"),
    description: t("AITrainersModel.components.aiTrainers.description"),
    angle: 198, // 288° clockwise from top
  }
];

export default function AITrainersModel() {
  const { t } = useI18n();
  const aiEcosystemComponents = getAIEcosystemComponents(t);

  // Calculate position for each component in a perfect circle
  const getPosition = (angle: number, radius: number) => {
    const radian = angle * (Math.PI / 180); // Use angle directly, no offset needed
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  const radius = 180; // Increased distance for better spacing

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-black mb-5 font-sans">
            {t("AITrainersModel.title")}
          </h1>
        </motion.div>

        {/* Main Container */}
        <div className="relative flex items-center justify-center min-h-[700px]">
          


          {/* Surrounding Components */}
          {aiEcosystemComponents.map((component, index) => {
            const position = getPosition(component.angle, radius);
            const IconComponent = component.icon;
            
            return (
              <div key={component.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                    stiffness: 100 
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute z-10 flex flex-col items-center"
                  style={{
                    left: `calc(50% + ${position.x}px)`,
                    top: `calc(50% + ${position.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Icon Circle - Even Larger */}
                  <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center mb-4 shadow-xl border-4 border-white">
                    <IconComponent className="text-white h-12 w-12" />
                  </div>
                  
                  {/* Label - Larger and Bolder */}
                  <span className="font-extrabold text-black text-xl text-center max-w-[160px] leading-tight font-sans mb-3">
                    {component.title}
                  </span>
                  
                  {/* Description - Always Visible */}
                  <div className="bg-purple-50 border-2 border-purple-400 rounded-xl p-3 shadow-lg max-w-[200px]">
                    <p className="text-black text-sm leading-relaxed font-sans text-center">
                      {component.description}
                    </p>
                  </div>
                </motion.div>


              </div>
            );
          })}


        </div>

        {/* Bottom description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <p className="text-gray-600 text-lg leading-relaxed font-sans">
            Hệ sinh thái tổng hợp tạo nên một mạng lưới hoàn chỉnh cho việc phát triển, 
            đào tạo và triển khai các giải pháp AI trong doanh nghiệp hiện đại.
          </p>
        </motion.div>
      </div>
    </section>
  );
}