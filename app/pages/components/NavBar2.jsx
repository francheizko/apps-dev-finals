"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink1 from "./Navlink1";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay1";
import Image from "next/image";
const navLinks = [
  {
    title: "Login",
    path: "#about",
  },
  {
    title: "Sign-Up",
    path: "#projects",
  },
];
const NavBar2 = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-24 right-24 z-10 bg-[#121212] bg-opacity-90 mt-2">
      <div className="flex flex-wrap items-center justify-between mx-auto px-6 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
          legacyBehavior
        >
          <Image
            src="/images/localancer-logo 1.png"
            alt="author image"
            className="flex flex-wrap items-center justify-between px-2 py-2"
            width={250}
            height={250}
          />
        </Link>

        <div className="menue hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink1 href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar2;
