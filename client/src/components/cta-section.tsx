import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Phone } from "lucide-react";

const ctaFeatures = [
  {
    title: "Free consultation",
    description: "Get expert advice",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    alt: "Professional business consultation meeting with experts discussing AI solutions"
  },
  {
    title: "Live demo",
    description: "See AI in real action",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    alt: "Abstract digital technology patterns representing AI and machine learning concepts"
  },
  {
    title: "Fast deployment",
    description: "Start in days",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=200",
    alt: "Modern workspace with team collaboration and technology implementation"
  }
];

export default function CTASection() {
  return (
    <section className="py-20 bg-google-blue-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <CardContent className="p-0">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to transform your business with AI?
              </h2>
              <p className="text-xl text-google-gray mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that trust Google Cloud and our partners
                to drive innovation through generative AI.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {ctaFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <img
                      src={feature.image}
                      alt={feature.alt}
                      className="rounded-lg mx-auto mb-4 w-full h-40 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-google-gray">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="bg-google-blue hover:bg-google-blue-dark text-white px-8 py-4 text-lg font-semibold"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Start today
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-google-blue text-google-blue hover:bg-google-blue hover:text-white px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact sales
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
