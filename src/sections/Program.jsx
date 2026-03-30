import React from "react";

const program = [
  {
    date: "09-06-2026",
    time: "12:00 PM",
    event: "Wedding Ceremony",
    location: "Kabia Drive by Pain Square Makeni",
    mosque: "Back of Pain Square Mosque",
    imam: "Sheikh Janneh (Chief Imam)",
  },
  {
    date: "10-06-2026",
    time: "04:00 PM",
    event: "Reception",
    location: "Team Jonas Resort Entertainment Center",
    activities: [
      "Arrival of Wedding Entourage",
      "Opening Prayer - Sheik Ibtahim Sorie Kargbo",
      "Introduction of Chairman ",
      "Chairman Opening Remarks",
      "Blessing of the Cake - Pst. Amos Sesay",
      "Cutting of the Cake - Bride and Groom",
      "Bridesmaid and Groomsman",
      "Toast to the health of the Bride and Groom",
      "Toast to the Bride’s Family",
      "Toast to the Groom’s Family",
      "Toast to the Guests",
      "Vote of Thanks - Bride",
      "Presentation of Gifts",
      "Closing Prayer - Pastor",
    ],
  },
];

// Sparkle animation keyframes
const sparkleStyle = `
@keyframes sparkle {
  0% { opacity: 0; transform: scale(0) rotate(0deg);}
  50% { opacity: 1; transform: scale(1) rotate(180deg);}
  100% { opacity: 0; transform: scale(0) rotate(360deg);}
}
`;

export default function Program() {
  return (
    <section className="py-12 px-4 bg-pink-50 relative" data-aos="fade-up">
      <style>{sparkleStyle}</style>

      <h2 className="text-3xl font-bold text-center mb-10">
        Wedding Program
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {program.map((item, i) => (
          <div key={i} className="relative">
            {/* Main Card */}
            <div className="flex gap-6 bg-white shadow-md rounded-xl p-5 relative z-10">
              {/* Left: Date & Time */}
              <div className="w-32 border-r pr-4 text-gray-700">
                <p className="font-semibold">{item.date}</p>
                <p className="text-sm">{item.time}</p>
              </div>

              {/* Right: Details */}
              <div className="flex-1 space-y-1">
                <p className="font-semibold text-lg text-gray-800">
                  {item.event}
                </p>

                <p className="text-gray-500 text-sm">
                  📍 <span className="font-semibold">Address:</span>{" "}
                  {item.location}
                </p>

                {item.mosque && (
                  <p className="text-gray-500 text-sm">
                    🕌 <span className="font-semibold">Mosque:</span>{" "}
                    {item.mosque}
                  </p>
                )}

                {item.imam && (
                  <p className="text-gray-500 text-sm">
                    👳 <span className="font-semibold">Officiating Imam:</span>{" "}
                    {item.imam}
                  </p>
                )}
              </div>
            </div>

          {/* Activities Card (Reception) */}
          {item.activities && (
            <div className="relative bg-white rounded-2xl p-6 mt-4 shadow-xl overflow-hidden border-4 border-pink-300">
              {/* Love flowers border (corners) */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-[url('/images/flower1.png')] bg-contain bg-no-repeat pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-[url('/images/flower2.png')] bg-contain bg-no-repeat pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-[url('/images/flower1.png')] bg-contain bg-no-repeat pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-[url('/images/flower2.png')] bg-contain bg-no-repeat pointer-events-none"></div>

            

              {/* Cake in the center */}
              <div className="flex justify-center mb-6 relative">
                <div className="text-5xl">🎂</div>
              </div>

                {/* Marriage rings closer to the cake */}
              <div className="absolute top-1/3 right-1/3 text-3xl animate-bounce">
                💍
              </div>

              {/* Sparkles across entire card */}
              {Array.from({ length: 25 }).map((_, idx) => (
                <div
                  key={idx}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `sparkle ${1 + Math.random()}s infinite`,
                    animationDelay: `${Math.random()}s`,
                  }}
                ></div>
              ))}

              {/* Centered text content */}
              <div className="flex flex-col items-center text-left">
                <p className="font-semibold text-pink-600 mb-4 text-xl">
                  🎉 Reception Activities
                </p>

                <ol className="list-decimal list-inside text-gray-700 space-y-1 max-w-md">
                  {item.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ol>
              </div>
            </div>
          )}
          </div>
        ))}
      </div>
    </section>
  );
}