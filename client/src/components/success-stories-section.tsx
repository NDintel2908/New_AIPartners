
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, GitBranch, Users, Zap, Shield, Globe, Target, Lightbulb, Database } from "lucide-react";

const successStories = [
  {
    id: 1,
    title: "AES reduces audit costs 99% and boosts accuracy with Anthropic's Claude on Google Cloud Vertex AI",
    company: "AES",
    icon: TrendingUp,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-100",
    gradient: "from-blue-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    description: "Transforming audit processes with 99% cost reduction through AI automation",
    size: "large"
  },
  {
    id: 2,
    title: "Airwallex uses GitLab on Google Cloud for scalable CI/CD and global fintech expansion",
    company: "Airwallex ♥ GitLab",
    icon: GitBranch,
    iconColor: "text-purple-600",
    bgColor: "bg-purple-100",
    gradient: "from-purple-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    description: "Scaling fintech operations globally with advanced CI/CD solutions",
    size: "medium"
  },
  {
    id: 3,
    title: "Allegro uses GrowthLoop and Google Cloud AI for personalized customer communication at scale",
    company: "Allegro 📹 GrowthLoop",
    icon: Users,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-100",
    gradient: "from-orange-500 to-yellow-600",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    description: "Personalizing customer experiences with AI-driven communication platforms",
    size: "medium"
  },
  {
    id: 4,
    title: "TechCorp accelerates data analytics with real-time AI insights on Google Cloud",
    company: "TechCorp",
    icon: Zap,
    iconColor: "text-yellow-600",
    bgColor: "bg-yellow-100",
    gradient: "from-yellow-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    description: "Real-time analytics driving business intelligence and decision making",
    size: "small"
  },
  {
    id: 5,
    title: "SecureBank implements AI-powered fraud detection reducing false positives by 85%",
    company: "SecureBank",
    icon: Shield,
    iconColor: "text-green-600",
    bgColor: "bg-green-100",
    gradient: "from-green-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    description: "AI-powered security solutions protecting financial transactions",
    size: "large"
  },
  {
    id: 6,
    title: "GlobalRetail optimizes supply chain with predictive AI models",
    company: "GlobalRetail",
    icon: Globe,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-100",
    gradient: "from-indigo-500 to-blue-600",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    description: "Predictive analytics transforming global supply chain operations",
    size: "medium"
  },
  {
    id: 7,
    title: "HealthTech revolutionizes patient care with AI-powered diagnostics",
    company: "HealthTech",
    icon: Target,
    iconColor: "text-red-600",
    bgColor: "bg-red-100",
    gradient: "from-red-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    description: "AI diagnostics improving healthcare outcomes and patient satisfaction",
    size: "small"
  },
  {
    id: 8,
    title: "InnovateLab develops smart city solutions with IoT and AI integration",
    company: "InnovateLab",
    icon: Lightbulb,
    iconColor: "text-cyan-600",
    bgColor: "bg-cyan-100",
    gradient: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    description: "Smart city innovations powered by AI and IoT technologies",
    size: "medium"
  },
  {
    id: 9,
    title: "DataFlow transforms enterprise data management with automated AI pipelines",
    company: "DataFlow",
    icon: Database,
    iconColor: "text-violet-600",
    bgColor: "bg-violet-100",
    gradient: "from-violet-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400",
    description: "Automated data pipelines streamlining enterprise operations",
    size: "small"
  }
];

export default function SuccessStoriesSection() {
  // Create a mosaic layout pattern
  const getMosaicClassName = (size: string, index: number) => {
    const patterns = [
      // Pattern for more diverse layouts
      ["md:col-span-3 lg:col-span-3", "md:col-span-2 lg:col-span-2", "md:col-span-1 lg:col-span-3"],
      ["md:col-span-2 lg:col-span-2", "md:col-span-2 lg:col-span-3", "md:col-span-2 lg:col-span-3"],
      ["md:col-span-2 lg:col-span-4", "md:col-span-2 lg:col-span-2", "md:col-span-2 lg:col-span-2"]
    ];
    
    const rowIndex = Math.floor(index / 3);
    const colIndex = index % 3;
    const pattern = patterns[rowIndex % patterns.length];
    
    return pattern[colIndex] || "md:col-span-2 lg:col-span-2";
  };

  const getMosaicImageHeight = (size: string) => {
    switch (size) {
      case "large":
        return "h-40 md:h-48";
      case "medium":
        return "h-32 md:h-40";
      case "small":
        return "h-28 md:h-32";
      default:
        return "h-32";
    }
  };

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Discover Real-World AI Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-google-gray max-w-3xl mx-auto"
          >
            Explore how businesses across diverse industries are leveraging Google Cloud AI
            and our partner network to achieve remarkable results and transform their operations.
          </motion.p>
        </motion.div>

        {/* Mosaic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-auto">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                type: "spring",
                stiffness: 120 
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`${getMosaicClassName(story.size, index)} transition-all duration-300`}
            >
              <Card className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl border-0 h-full group min-h-[300px]">
                <div className={`${getMosaicImageHeight(story.size)} bg-gradient-to-br ${story.gradient} relative overflow-hidden`}>
                  <motion.img
                    src={story.image}
                    alt={`${story.company} AI implementation showcase`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
                    className={`absolute top-3 right-3 ${story.bgColor} rounded-lg p-2 shadow-md backdrop-blur-sm bg-white/95`}
                  >
                    <story.icon className={`${story.iconColor} h-4 w-4`} />
                  </motion.div>

                  {/* Company Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="absolute bottom-3 left-3"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-gray-900">{story.company.split(' ')[0]}</span>
                    </div>
                  </motion.div>
                </div>
                
                <CardContent className={`${story.size === 'small' ? 'p-4' : 'p-6'}`}>
                  <motion.h4 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    className={`font-bold text-gray-900 mb-2 leading-tight ${
                      story.size === 'large' ? 'text-lg' : 
                      story.size === 'medium' ? 'text-base' : 'text-sm'
                    }`}
                  >
                    {story.size === 'small' && story.title.length > 60 
                      ? `${story.title.substring(0, 60)}...` 
                      : story.size === 'medium' && story.title.length > 90
                      ? `${story.title.substring(0, 90)}...`
                      : story.title}
                  </motion.h4>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className={`text-google-gray leading-relaxed ${
                      story.size === 'small' ? 'text-xs' : 'text-sm'
                    }`}
                  >
                    {story.size === 'small' 
                      ? story.description.substring(0, 80) + "..."
                      : story.description}
                  </motion.p>
                  
                  {/* Progress indicator */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.4 + index * 0.05, duration: 0.6 }}
                    className={`h-0.5 bg-gradient-to-r ${story.gradient} rounded-full mt-3 opacity-30`}
                  ></motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "500+", label: "Success Stories", color: "from-blue-500 to-purple-500" },
            { number: "99%", label: "Cost Reduction", color: "from-green-500 to-teal-500" },
            { number: "24/7", label: "Global Support", color: "from-orange-500 to-red-500" },
            { number: "50+", label: "Industries", color: "from-purple-500 to-pink-500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-google-blue to-google-blue-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <span className="font-semibold mr-2">Explore More Success Stories</span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-lg"
            >
              →
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
