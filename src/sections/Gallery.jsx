import React from "react";
import { gallery } from "../data/gallery";

export default function Gallery() {
  return (
    <section className="py-12 px-4" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-center mb-6">
        Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Wedding"
            className="rounded-xl object-cover h-48 w-full"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
