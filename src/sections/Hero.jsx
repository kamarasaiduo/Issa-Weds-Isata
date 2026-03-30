import React, { useState, useEffect } from "react";
import Countdown from "../components/Countdown";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Issa-Weds-Isata/images/hero.jpg')",
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 w-full max-w-6xl px-4 md:px-8 transition-all duration-1000 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center">

          {/* Wedding Date Badge */}
          <div className="inline-block mb-6 md:mb-12 animate-pulse">
            <div className="bg-gradient-to-r from-gold to-amber-500/20 backdrop-blur-lg rounded-full px-6 py-2 md:px-8 md:py-3 border border-yellow/80 shadow-lg">
              <p className="text-white font-semibold tracking-widest text-sm md:text-lg lg:text-xl">
                MAY 09 - 10, 2026
              </p>
            </div>
          </div>

          {/* Couple Names */}
          <div className="mb-4 md:mb-8 text-center">
            <h1
              className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold mb-4"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              <span className="bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent">
                Issa
              </span>
              <span className="text-white mx-2 sm:mx-4 md:mx-8 text-3xl sm:text-4xl md:text-7xl">&</span>
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Isata
              </span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-white/95 mb-8 md:mb-12 font-light tracking-wider">
            💖 We're Getting Married! 💖
          </p>

          {/* Countdown */}
          <div className="mb-8 md:mb-16">
            <div className="mb-4">
              <p className="text-white font-medium text-base sm:text-sm md:text-xl lg:text-2xl">
                Counting Down To Our Special Day
              </p>
            </div>

            {/* Wrap Countdown and reduce padding inside */}
            <div className="flex justify-center gap-3">
              <Countdown boxPadding="px-4 py-2 md:px-5 md:py-3" />
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-10 max-w-lg mx-auto border border-white/20 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-gold to-amber-500 flex items-center justify-center mr-3 md:mr-4">
                <span className="text-lg md:text-xl lg:text-2xl">📍</span>
              </div>
              <h3 className="text-lg md:text-2xl lg:text-3xl font-bold text-white">
                Kabia Drive Makeni
              </h3>
            </div>
            <p className="text-white/90 text-sm md:text-lg lg:text-xl font-medium">
              Join us for the celebration of our eternal love and union
            </p>
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/20">
              <p className="text-amber-200/80 font-semibold text-sm md:text-base">
                🎉 Two Days of Celebration 🎉
              </p>
              <p className="text-white/70 text-xs md:text-sm mt-1 md:mt-2">
                Wedding & Reception
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <a 
          href="#story" 
          className="flex flex-col items-center group"
          aria-label="Scroll to next section"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-gold/10 to-amber-500/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:from-gold/30 group-hover:to-amber-500/20 transition-all duration-300">
            <FiChevronDown 
              size={24} 
              className="text-white group-hover:text-gold transition-colors duration-300" 
            />
          </div>
          <span className="text-gold/70 text-xs md:text-sm mt-2 font-medium tracking-wider 
                group-hover:text-white transition-colors duration-300">
              Our Story
          </span>
        </a>
      </div>
    </section>
  );
}