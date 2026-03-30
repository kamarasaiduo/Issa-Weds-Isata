import React, { useEffect, useState } from "react";

const targetDate = new Date("2026-05-09T00:00:00");

export default function Countdown() {
  const [time, setTime] = useState(null);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDate - new Date();

      if (diff <= 0) {
        clearInterval(interval);
        setIsOver(true);
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isOver) {
    return (
      <div className="text-center py-12">
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#FFA500] p-1 rounded-2xl inline-block mb-6">
          <div className="bg-white rounded-xl px-8 py-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🎉 Today is the Day! 🎉
            </h2>
            <p className="text-xl text-gray-600">
              Issa & Isata are getting married 💍
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-2">
      <div className="text-center mb-4">
        <p className="text-white/80 text-sm md:text-base">
          We can't wait to celebrate with you!
        </p>
      </div>

      {/* SINGLE LINE COUNTDOWN */}
      <div className="flex flex-nowrap justify-center items-center gap-1 sm:gap-2 md:gap-3">

        {time &&
          Object.entries(time).map(([unit, value]) => (
            <div
              key={unit}
              className="flex-shrink-0 min-w-[50px] sm:min-w-[60px] md:min-w-[70px]"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-[5px] sm:p-[7px] md:p-[10px] border border-white/20 hover:border-[#D4AF37] transition-all duration-300">

                {/* Number */}
                <div className="text-center">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight block">
                    {String(value).padStart(2, "0")}
                  </span>
                </div>

                {/* Unit */}
                <div className="text-center">
                  <span className="text-[9px] sm:text-xs md:text-sm uppercase tracking-wider text-[#D4AF37] font-semibold">
                    {unit}
                  </span>
                </div>

              </div>
            </div>
          ))}

      </div>
    </div>
  );
}