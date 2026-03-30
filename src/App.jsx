import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Info from "./sections/Info";
import Program from "./sections/Program";
import LoveStory from "./sections/LoveStory";
import Dignitaries from "./sections/Dignitaries";
import Gallery from "./sections/Gallery";
import Videos from "./sections/Videos";
import RSVP from "./sections/RSVP";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="font-sans scroll-smooth overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <LoveStory />
      <Info />
      <Program />
      <Dignitaries />
      <Gallery />
      <Videos />
      <RSVP />
      <Footer />
    </div>
  );
}