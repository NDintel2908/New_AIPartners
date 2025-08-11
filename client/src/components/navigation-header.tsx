import { useState } from "react";
import { Search, Menu, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#overview", label: "Overview" },
    { href: "#solutions", label: "Solutions" },
    { href: "#success-stories", label: "Success Stories" },
    { href: "#partners", label: "Partners" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Cloud className="text-google-blue text-2xl mr-3" />
              <span className="text-xl font-bold text-gray-900">AI Solutions</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-google-gray hover:text-google-blue px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-google-gray-light rounded-full px-4 py-2">
              <Search className="text-google-gray mr-2 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-sm w-32 p-0 focus-visible:ring-0"
              />
            </div>
            <Button className="bg-google-blue hover:bg-google-blue-dark text-white px-6 py-2 rounded-md text-sm font-medium">
              Start free
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
    </nav>
  );
}
