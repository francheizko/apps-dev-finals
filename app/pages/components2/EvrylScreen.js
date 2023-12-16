// EvrylScreen.js

import React from "react";
import NavBar from "./NavBar";
import HeroSection1 from "./HeroSection";
import AboutSection1 from "./AboutSection";
import EmailSection from "./EmailSection";
import Footer1 from "./Footer";

const EvrylScreen = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-12 mx-auto px-12 py-4">
        <HeroSection1 />
        <AboutSection1 />
        <EmailSection />
      </div>
      <Footer1 />
    </main>
  );
};

export default EvrylScreen;
