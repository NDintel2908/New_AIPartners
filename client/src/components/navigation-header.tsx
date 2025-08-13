import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/i18n-context";
import LanguageSwitcher from "@/components/language-switcher";

export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useI18n();

  const navItems = [
    { href: "#hero", label: t("Header.navigation.home") },
    { href: "#about", label: t("Header.navigation.about") },
    { href: "#services", label: t("Header.navigation.services") },
    { href: "#contact", label: t("Header.navigation.contact") },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="/aipartners-logo.png" 
                alt="AIPartners.asia" 
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-google-gray hover:text-google-blue px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button 
              className="bg-google-blue hover:bg-google-blue-dark text-white px-6 py-2 rounded-md text-sm font-medium"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Join us
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setIsMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-gray-700 hover:text-google-blue transition-colors duration-200 font-medium cursor-pointer"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
        </div>
      )}
    </nav>
  );
}