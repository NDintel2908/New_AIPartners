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
      
      {/* Announcement Banner */}
      <div className="bg-yellow-100 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-3 text-center">
            <span className="text-sm text-yellow-800">
              Looking for Google Agentspace for your organization?{" "}
              <a href="#" className="font-medium underline hover:no-underline">
                Read more.
              </a>
            </span>
            <button className="ml-4 text-yellow-800 hover:text-yellow-900">
              ×
            </button>
          </div>
        </div>
      </div>

      <HeroSection />
      <SuccessStoriesSection />
      <PartnersSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
