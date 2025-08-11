import NavigationHeader from "@/components/navigation-header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import AITrainersModel from "@/components/ai-trainers-model";
import SuccessStoriesSection from "@/components/success-stories-section";
import CTASection from "@/components/cta-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      <HeroSection />
      <AboutSection />
      <AITrainersModel />
      <SuccessStoriesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
