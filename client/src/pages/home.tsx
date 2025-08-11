import NavigationHeader from "@/components/navigation-header";
import HeroSection from "@/components/hero-section";
import SuccessStoriesSection from "@/components/success-stories-section";
import PartnersSection from "@/components/partners-section";
import CTASection from "@/components/cta-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      <HeroSection />
      <SuccessStoriesSection />
      <PartnersSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
