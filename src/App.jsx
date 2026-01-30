import React from "react";
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import Program from "./sections/Program";
import Dignitaries from "./sections/Dignitaries";
import Gallery from "./sections/Gallery";
import Videos from "./sections/Videos";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Hero />
      <Info />
      <Program />
      <Dignitaries />
      <Gallery />
      <Videos />
      <Footer />
    </div>
  );
}
