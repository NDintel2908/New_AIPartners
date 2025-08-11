import { Cloud } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerSections = [
  {
    title: "Solutions",
    links: [
      { label: "Generative AI", href: "#" },
      { label: "Machine Learning", href: "#" },
      { label: "Cloud Migration", href: "#" },
      { label: "Data Analytics", href: "#" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#" },
      { label: "News", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" }
    ]
  },
  {
    title: "Support", 
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Community", href: "#" },
      { label: "Support", href: "#" }
    ]
  }
];

export default function Footer() {
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
              Trusted partner for digital transformation and AI of Vietnamese businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-google-blue transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-google-blue transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-google-blue transition-colors"
              >
                <FaTwitter className="text-xl" />
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
          <p>&copy; 2025 AIPartners.asia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
