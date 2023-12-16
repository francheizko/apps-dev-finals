//PearkieScreen.js

import Image from "next/image";
import HeroSection from "./HeroSection3";
import Navbar from "./Navbar3";
import AboutSection from "./AboutSection3";
import ProjectSection from "./ProjectSection3";
import EmailSection from "./EmailSection3";
import Footer from "./Footer3";
import Link from "next/link"; // Import Link from next

const PearkieScreen = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-12 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
};

export default PearkieScreen;
