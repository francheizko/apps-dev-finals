"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Photography</li>
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Java</li>
        <li>C</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Flutter</li>
        <li>Dart</li>
        <li>Next.js (new)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of San Jose-Recoletos</li>
        <li>Carcar Academy Technical School Inc.</li>
        <li>Holy Trinity College</li>
        <li>Ginatilan Central School</li>
        <li>Youtube</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Digital Visionary Certification</li>
        <li>Code Shaper Pro</li>
        <li>Visual Storytelling Maestro</li>
        <li>Innovative Web Developer</li>
        <li>Photonic Alchemist</li>
      </ul>
    ),
  },
];

const AboutSection1 = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap8 item-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/aboutme.png"
          alt="aboutme-image"
          width={800}
          height={800}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            Welcome to my digital realm! As a versatile freelance photographer
            and a coding enthusiast, I bring a unique blend of creativity and
            technical prowess to my projects. Through the lens, I capture the
            essence of moments, weaving stories that resonate visually. Beyond
            photography, my coding journey encompasses a diverse skill set,
            including proficiency in Java, JavaScript, C, React, TypeScript,
            Next.js, Flutter Dart, MySQL, HTML, CSS, and Git. Navigating
            seamlessly between the realms of art and technology, my portfolio
            showcases a harmonious fusion of captivating visual narratives and
            cutting-edge web development. Explore the synergy of pixels and code
            as I invite you to witness the convergence of two passions, painting
            a canvas that transcends boundaries and captivates the digital
            landscape.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
