import React from "react";

const program = [
  {
    date: "09-06-2026",
    time: "12:00 PM",
    event: "Wedding Ceremony",
    location: "Kabia Drive by Pain Square Makeni",
    mosque: "Back of Pain Square Mosque",
    imam: "Sheikh Janneh",
  },
  {
    date: "10-06-2026",
    time: "04:00 PM",
    event: "Reception",
    location: "Team Jonas Resort Entertainment Center",
    activities: [
      "Arrival of Wedding Entourage",
      "Opening Prayer - Prophet Alexandra Elijah Kanu",
      "Introduction of Chairman",
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

export default function Program() {
  return (
    <section className="py-12 px-4 bg-gray-50" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-10">
        Wedding Program
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {program.map((item, i) => (
          <div key={i}>
            {/* Main Card */}
            <div className="flex gap-6 bg-white shadow-md rounded-xl p-5">
              
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

                {/* Address */}
                <p className="text-gray-500 text-sm">
                  📍 <span className="font-semibold">Address:</span>{" "}
                  {item.location}
                </p>

                {/* Mosque */}
                {item.mosque && (
                  <p className="text-gray-500 text-sm">
                    🕌 <span className="font-semibold">Mosque:</span>{" "}
                    {item.mosque}
                  </p>
                )}

                {/* Imam */}
                {item.imam && (
                  <p className="text-gray-500 text-sm">
                    👳{" "}
                    <span className="font-semibold">
                      Officiating Imam:
                    </span>{" "}
                    {item.imam}
                  </p>
                )}
              </div>
            </div>

            {/* Activities Card (ONLY for Reception) */}
            {item.activities && (
              <div className="ml-32 bg-gray-100 rounded-xl p-4 mt-3 shadow-sm">
                <p className="font-semibold text-gray-800 mb-2">
                  🎉 Reception Activities
                </p>

                <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1">
                  {item.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}