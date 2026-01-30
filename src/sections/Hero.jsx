import React from "react";
import Countdown from "../components/Countdown";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Wedding Ceremony sticky at top until hero scrolls past */}
      <h2
        className="sticky top-0 w-full text-center text-7xl whitespace-nowrap"
        style={{
          fontFamily: "'Great Vibes', cursive",
          color: "#FFD700", // gold
          fontWeight: "400",
          textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
          zIndex: 20,
          background: "rgba(0,0,0,0.4)", // optional: semi-transparent background so text is readable
        }}
      >
        Wedding Ceremony
      </h2>

      {/* Dark overlay box with couple info */}
      <div className="bg-black/60 p-8 rounded-2xl text-center text-blue-500 z-10 mt-32">
        <h1 className="text-4xl font-extrabold mb-2">Issa & Isata</h1>
        <p className="text-lg">We are getting married </p>
        <p className="mt-2">📅 May 09 and 10 2026 • Location:📍 Makeni</p>
          <p className="mt-2 text-yellow-500 text-2xl ">Only</p>
        <Countdown />
          <p className="mt-2 text-yellow-500 text-2xl ">Left </p>
      </div>
    </section>
    
  );
}
