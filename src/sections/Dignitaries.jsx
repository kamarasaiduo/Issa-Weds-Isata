import React from "react";
import { dignitaries } from "../data/dignitaries";
import { FaCrown, FaHeart, FaUserTie } from "react-icons/fa";

export default function Dignitaries() {
  const getIcon = (role) => {
    switch(role.toLowerCase()) {
      case 'best men': return <FaCrown className="text-gold" />;
      case 'bridesmaids': return <FaHeart className="text-pink-500" />;
      case 'groomsmen': return <FaUserTie className="text-blue-500" />;
      default: return null;
    }
  };

  return (
    <section id="dignitaries" className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
            <FaCrown className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Wedding Entourage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the wonderful people who will be standing with us on our special day
          </p>
        </div>

        {/* Dignitaries Grid */}
        <div className="space-y-16 md:space-y-20">
          {dignitaries.map((group, i) => (
            <div key={i} className="relative">
              {/* Group Header */}
              <div className="flex items-center justify-center mb-8 md:mb-12">
                <div className="flex items-center space-x-3">
                  {getIcon(group.role)}
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    {group.role}
                  </h3>
                </div>
              </div>

              {/* People Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {group.people.map((person, j) => (
                  <div
                    key={j}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-2">
                      <h4 className="font-semi-bold text-lg text-gray-800 mb-2 group-hover:text-gold transition-colors">
                        {person.name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                      
                      </p>
                    </div>

                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gold/10 transform rotate-45 translate-x-6 -translate-y-6" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}