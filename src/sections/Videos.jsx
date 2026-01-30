import React from "react";

export default function Videos() {
  return (
    <section className="py-12 px-4 bg-gray-100" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8">Wedding Video</h2>
      <div className="max-w-3xl mx-auto">
        <video
          src="/videos/intro.mp4"  // <-- leading slash is important
          controls
          className="w-full rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}
