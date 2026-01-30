import React from "react";
const program = [
  { time: "09:00 AM", activity: "Church Ceremony" },
  { time: "12:30 PM", activity: "Photo Session" },
  { time: "02:00 PM", activity: "Reception" },
];

export default function Program() {
  return (
    <section className="py-12 px-4 bg-gray-50" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8">Wedding Program</h2>
      <div className="max-w-md mx-auto space-y-4">
        {program.map((item, i) => (
          <div key={i} className="flex justify-between bg-white shadow rounded-lg p-4">
            <span className="font-semibold text-gray-800">{item.time}</span>
            <span className="text-gray-600">{item.activity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
