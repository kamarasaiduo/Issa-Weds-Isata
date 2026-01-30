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
      <div className="mt-6 text-center text-white">
        <h2 className="text-2xl font-bold">🎉 Today is the Day! 🎉</h2>
        <p className="mt-2">Issa & Isata are getting married 💍</p>
      </div>
    );
  }

  return (
    <div className="mx-auto mb-4 flex gap-2 justify-center mt-4 max-w-md">
      {time &&
        Object.entries(time).map(([k, v]) => (
          <div
            key={k}
            className="bg-green-600 text-white rounded-xl px-4 py-2 shadow text-center w-20 flex flex-col items-center"
          >
            <p className="text-lg font-bold">{v}</p>
            <span className="text-xs uppercase">{k}</span>
          </div>
        ))}
    </div>
  );
}
