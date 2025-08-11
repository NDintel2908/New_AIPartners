import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, GitBranch, Users } from "lucide-react";

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
    description: "AES reduces audit costs 99% and boosts accuracy with Anthropic's Claude on Google Cloud Vertex AI"
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
    description: "Airwallex uses GitLab on Google Cloud for scalable CI/CD and global fintech expansion"
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
    description: "Allegro uses GrowthLoop and Google Cloud AI for personalized customer communication at scale"
  }
];

export default function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover real-world AI success stories
          </h2>
          <p className="text-xl text-google-gray max-w-4xl mx-auto">
            Explore how businesses across diverse industries are leveraging Google Cloud AI
            and our partner network to achieve remarkable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="transition-all duration-300"
            >
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl">
                <div className={`h-48 bg-gradient-to-br ${story.gradient} flex items-center justify-center`}>
                  <img
                    src={story.image}
                    alt={`Professional business technology environment representing ${story.company}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${story.bgColor} rounded-lg p-3 mr-4`}>
                      <story.icon className={`${story.iconColor} text-xl`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{story.company}</h3>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {story.title}
                  </h4>
                  <p className="text-google-gray mb-4">
                    {story.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
