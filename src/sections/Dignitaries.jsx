import React from "react";

import { dignitaries } from "../data/dignitaries";

export default function Dignitaries() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Wedding Dignitaries
      </h2>

      {dignitaries.map((group, i) => (
        <div key={i} className="mb-10">
          <h3 className="text-xl font-semibold text-center mb-4 text-blue-600">
            {group.role}
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {group.people.map((person, j) => (
              <div key={j} className="bg-white p-4 rounded-xl shadow text-center">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
                />
                <h4 className="font-semibold">{person.name}</h4>
                <p className="text-sm text-gray-600">
                  {person.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
