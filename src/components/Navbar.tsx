import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Specialties", href: "#specialties" },
    { name: "Awards", href: "#awards" },
    { name: "Treatments", href: "#treatments" },
    { name: "Gallery", href: "#gallery" },
    { name: "Consultation", href: "#locations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={` z-50 transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md py-3"
          : " fixed top-15 left-0 right-0 bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="text-xl md:text-2xl font-bold text-medical-800">
          Dr. <span className="text-medical-600">Miller</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <div className="hoverable-div">
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-medical-600 transition-colors"
              >
                {link.name}
              </a>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-600"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div className="hoverable-div">
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-gray-700 hover:text-medical-600 rounded-md"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
