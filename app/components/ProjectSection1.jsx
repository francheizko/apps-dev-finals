"use client";

import React, { useState } from "react";
import ProjectCard1 from "./ProjectCard1";

const projectsData = [
  {
    id: 1,
    title: "Freelancer Mobile App",
    description:
      "Revolutionizing freelancing on the go, this mobile application seamlessly connects clients and freelancers, bringing flexibility to the fingertips of digital professionals.",
    image: "/images/Project-1.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "The Wedding of Jaylie & Dods",
    description:
      " Capturing the timeless romance and enchanting moments of Jaylie and Dods' wedding through a lens that turns memories into visual poetry.",
    image: "/images/Project-2.png",
    tag: ["All", "Photography"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Coffee Shop Mobile App",
    description:
      "Immerse yourself in the rich aroma and cozy ambiance of coffee culture with this mobile app, designed to elevate the cafe experience to new heights.",
    image: "/images/Project-3.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "The Wedding of Hannah & Jessie",
    description:
      "A photographic journey celebrating the love story of Hannah and Jessie, blending artistic flair with heartfelt moments in a visual symphony.",
    image: "/images/Project-4.png",
    tag: ["All", "Photography"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Travel News Mobile App",
    description:
      "Embark on a virtual journey around the globe with this mobile app, delivering the latest travel news and inspiring wanderlust with captivating visuals.",
    image: "/images/Project-5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Find your Doctor Mobile App",
    description:
      "Navigating healthcare becomes effortless with this mobile app, connecting users to medical professionals and ensuring access to quality healthcare anytime, anywhere.",
    image: "/images/Project-6.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectTag = ({ filterProjects }) => {
  const [selectedTag, setSelectedTag] = useState("All");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    filterProjects(tag);
  };

  return (
    <div
      className="text-white flex flex-row justify-center items-center gap-2 py-6"
      id="projects"
    >
      <button
        className={`rounded-full border-2 ${
          selectedTag === "All" ? "border-primary-500" : "border-slate-600"
        } hover:border-white px-6 py-3 text-xl cursor-pointer`}
        onClick={() => handleTagClick("All")}
      >
        All
      </button>
      <button
        className={`rounded-full border-2 ${
          selectedTag === "Mobile App"
            ? "border-primary-500"
            : "border-slate-600"
        } hover:border-white px-6 py-3 text-xl cursor-pointer`}
        onClick={() => handleTagClick("Mobile App")}
      >
        Mobile App
      </button>
      <button
        className={`rounded-full border-2 ${
          selectedTag === "Photography"
            ? "border-primary-500"
            : "border-slate-600"
        } hover:border-white px-6 py-3 text-xl cursor-pointer`}
        onClick={() => handleTagClick("Photography")}
      >
        Photography
      </button>
    </div>
  );
};

const ProjectSection1 = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const filterProjects = (tag) => {
    if (tag === "All") {
      setFilteredProjects(projectsData);
    } else if (tag === "Mobile App") {
      const mobileAppProjects = projectsData.filter((project) =>
        project.tag.includes("Mobile")
      );
      setFilteredProjects(mobileAppProjects);
    } else if (tag === "Photography") {
      const photographyProjects = projectsData.filter((project) =>
        project.tag.includes("Photography")
      );
      setFilteredProjects(photographyProjects);
    }
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 py-8">
        My Projects
      </h2>
      <ProjectTag filterProjects={filterProjects} />
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard1
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection1;
