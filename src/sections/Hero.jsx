import React, { useState, useEffect } from "react";
import Countdown from "../components/Countdown";

export default function Hero() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Check if hero section is still in view
        // It's "in view" if its bottom is above the viewport top (completely scrolled past)
        const isVisible = heroRect.bottom > 0;
        setIsHeroVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/Issa-Weds-Isata/images/hero.jpg')" }}
    >
      {/* Fixed header inside hero - disappears when hero is scrolled past */}
      <div 
        className={`fixed top-0 left-0 right-0 z-20 transition-opacity duration-300 ${
          isHeroVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2
          className="w-full text-center text-5xl md:text-7xl whitespace-nowrap"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: "#FFD700",
            fontWeight: 400,
            textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
            background: "rgba(0,0,0,0.4)",
            padding: "1rem 0",
          }}
        >
          Wedding Ceremony
        </h2>
      </div>

      {/* Hero content container */}
      <div className="flex flex-col items-center justify-center min-h-screen pt-40">
        <div className="bg-black/60 p-8 rounded-2xl text-center text-blue-500 max-w-md md:max-w-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">Issa & Isata</h1>
          <p className="text-lg text-white">We are getting married</p>
          <p className="mt-2 text-white">📅 May 09 and 10, 2026 • 📍 Makeni</p>

          <p className="mt-4 text-yellow-500 text-2xl font-semibold">Only</p>
          <Countdown />
          <p className="mt-2 text-yellow-500 text-2xl font-semibold">Left</p>
        </div>
      </div>
    </section>
  );
}