import { Cloud } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useI18n } from "@/contexts/i18n-context";

const getFooterSections = (t: (key: string) => string) => [
  {
    title: t("Footer.sections.solutions.title"),
    links: [
      { label: t("Footer.sections.solutions.links.generativeAI"), href: "/services" },
      { label: t("Footer.sections.solutions.links.machineLearning"), href: "/services" },
      { label: t("Footer.sections.solutions.links.cloudMigration"), href: "/services" },
      { label: t("Footer.sections.solutions.links.dataAnalytics"), href: "/services" }
    ]
  },
  {
    title: t("Footer.sections.company.title"),
    links: [
      { label: t("Footer.sections.company.links.aboutUs"), href: "/about" },
      { label: t("Footer.sections.company.links.news"), href: "/about" },
      { label: t("Footer.sections.company.links.careers"), href: "/contact" },
      { label: t("Footer.sections.company.links.contact"), href: "/contact" }
    ]
  },
  {
    title: t("Footer.sections.support.title"), 
    links: [
      { label: t("Footer.sections.support.links.documentation"), href: "/services" },
      { label: t("Footer.sections.support.links.apiReference"), href: "/services" },
      { label: t("Footer.sections.support.links.community"), href: "/about" },
      { label: t("Footer.sections.support.links.support"), href: "/contact" }
    ]
  }
];

export default function Footer() {
  const { t } = useI18n();
  const footerSections = getFooterSections(t);
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/aipartners-logo.png" 
                alt="AIPartners.asia" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              {t("Footer.description")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/aipartners.asia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-google-blue transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/ai-partners-asia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-google-blue transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t("Footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
