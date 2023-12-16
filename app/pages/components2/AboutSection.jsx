"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabBtn from "./TabBtn";

const dataForTab = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>C++</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>University of Cebu</li>
        <li>University of San Jose-Recoletos</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-cecnter py-8 xl:gap-16 sm:py-16">
        <Image src="/images/about.jpg" alt="about" width={500} height={500} />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-[#ADB7BE] text-base lg:text-lg">
            I&apos;m a 21-year-old currently in my third year pursuing a
            Bachelor of Science in Information Technology at the University of
            San Jose-Recoletos. Passionate about technology and eager to learn,
            I&apos;m exploring the dynamic world of IT, embracing every
            opportunity to expand my knowledge and skills in the field.
          </p>
          <div className="flex flex-row mt-8">
            <TabBtn
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabBtn>
            <TabBtn
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabBtn>
          </div>
          <div className="mt-8">
            {dataForTab.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
