import Image from "next/image";
import HeroSection1 from "./components/HeroSection1";
import NavBar1 from "./components/NavBar1";
import AboutSection1 from "./components/AboutSection1";
import ProjectSection1 from "./components/ProjectSection1";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar1 />
      <div class="container mx-auto px-12 py-12">
        <HeroSection1 />
        <AboutSection1 />
        <ProjectSection1 />
      </div>
    </main>
  );
}
