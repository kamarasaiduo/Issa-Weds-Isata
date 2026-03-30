import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Details", href: "#info" },
    { label: "Program", href: "#program" },
    { label: "Wedding Party", href: "#dignitaries" },
    { label: "Gallery", href: "#gallery" },
    { label: "RSVP", href: "#rsvp" },
  ];

  // Fixed smooth scroll function
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
    
    // Add a small delay for mobile to ensure menu closes
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Height of your navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center space-x-2"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFA500] flex items-center justify-center">
              <span className="text-white font-bold text-xl md:text-2xl font-serif">I&I</span>
            </div>
            <span className="text-lg md:text-xl font-serif font-semibold text-[#D4AF37]">
              Issa & Isata
            </span>
          </a>
          
          {/* Desktop Navigation - ALWAYS GOLD */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[#D4AF37] hover:text-[#FFA500] transition-colors duration-300 font-medium hover:scale-105 transform"
                style={{
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - ALWAYS GOLD */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#D4AF37] hover:text-[#FFA500] transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - GOLD BACKGROUND */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#D4AF37] to-[#FFA500] rounded-b-2xl shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block px-3 py-3 text-white hover:text-gray-800 hover:bg-orange-100 rounded-lg transition-colors duration-300 font-medium text-center"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}