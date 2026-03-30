import React from "react";
import { FaHeart, FaRing, FaCalendarAlt } from "react-icons/fa";

export default function LoveStory() {
  const milestones = [
    {
      year: "2020",
      title: "First Meeting",
      description: "We met at a mutual friend's visit in Makeni",
      icon: <FaHeart className="text-rose-500" />
    },
    {
      year: "2023",
      title: "Dating",
      description: "Started dating and building our relationship",
      icon: <FaHeart className="text-pink-500" />
    },
    {
      year: "2025",
      title: "Engagement",
      description: "Issa proposed on a beautiful beach sunset",
      icon: <FaRing className="text-gold" />
    },
    {
      year: "2026",
      title: "Wedding",
      description: "Our special day is finally here!",
      icon: <FaCalendarAlt className="text-green-500" />
    }
  ];

  return (
    <section id="story" className="py-16 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Our Love Story
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From the first hello to forever together
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-rose-200 via-gold to-green-200 hidden md:block" />
          
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                        {milestone.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {milestone.title}
                      </h3>
                    </div>
                    <span className="inline-block px-3 py-1 bg-gold/10 text-gold rounded-full text-sm font-medium mb-3">
                      {milestone.year}
                    </span>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="w-8 h-8 rounded-full bg-white border-4 border-gold z-10 my-6 md:my-0 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                </div>

                {/* Empty space for alignment */}
                <div className="md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}