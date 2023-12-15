// FranzScreen.js

import React from "react";
import NavBar1 from "./NavBar1";
import HeroSection1 from "./HeroSection1";
import AchievementsSection1 from "./AchievementsSection1";
import AboutSection1 from "./AboutSection1";
import ProjectSection1 from "./ProjectSection1";
import EmailSection from "./EmailSection1";
import Footer1 from "./Footer1";

const FranzScreen = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar1 />
      <div class="container mx-auto px-12 py-12">
        <HeroSection1 />
        <AchievementsSection1 />
        <AboutSection1 />
        <ProjectSection1 />
        <EmailSection />
      </div>
      <Footer1 />
    </main>
  );
};

export default FranzScreen;
