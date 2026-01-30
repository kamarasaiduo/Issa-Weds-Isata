import React from "react";
import Countdown from "../components/Countdown";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/Issa-Weds-Isata/images/hero.jpg')" }}

    >
      {/* Wedding Ceremony sticky at top until hero scrolls past */}
      <h2
        className="sticky top-0 w-full text-center text-5xl md:text-7xl whitespace-nowrap"
        style={{
          fontFamily: "'Great Vibes', cursive",
          color: "#FFD700", // gold
          fontWeight: 400,
          textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
          zIndex: 20,
          background: "rgba(0,0,0,0.4)",
        }}
      >
        Wedding Ceremony
      </h2>

      {/* Dark overlay box with couple info */}
      <div className="bg-black/60 p-8 rounded-2xl text-center text-blue-500 z-10 mt-32 max-w-md md:max-w-lg">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">Issa & Isata</h1>
        <p className="text-lg text-white">We are getting married</p>
        <p className="mt-2 text-white">📅 May 09 and 10, 2026 • 📍 Makeni</p>
        <p className="mt-4 text-yellow-500 text-2xl font-semibold">Only</p>
        <Countdown />
        <p className="mt-2 text-yellow-500 text-2xl font-semibold">Left</p>
      </div>
    </section>
  );
}
