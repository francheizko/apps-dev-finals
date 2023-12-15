"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import FranzScreen from "./FranzScreen";

const LandingPage = () => {
  return (
    <section className="py-16 bg-[#121212]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Freelancer 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 text-center justify-center rounded-lg bg-[#181818] w-[600px] h-[600px] mx-auto relative text-white"
        >
          <div className="rounded-full bg-[#0F0F0F] w-[300px] h-[300px] mx-auto relative overflow-hidden top-10">
            <Image
              src="/images/Author1.png"
              alt="author image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
          <div className="text-white mt-16">
            <div className="text-sm">
              <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to bg-secondary-600 ">
                  Hello,{" "}
                </span>
                <TypeAnimation
                  sequence={["I'm Franz", 1000, "Hire me", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-[#ADB7BE] text-justify px-8 mb-6">
                With a flair for design and a wealth of experience, I specialize
                in creating seamless and intuitive user experiences. Lets
                collaborate and turn your ideas into a stunning online presence!
              </p>
              <div className="flex sm:justify-center">
                <Link
                  href="./HeroSection1"
                  className="mt-4 px-10 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                >
                  Hire Me
                </Link>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-500 via-primary-500 to-secondary-500  hover:bg-slate-800 text-white mt-3">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-1.5">
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 text-center justify-center rounded-lg bg-[#181818] w-[600px] h-[600px] mx-auto relative text-white"
        >
          <div className="rounded-full bg-[#0F0F0F] w-[300px] h-[300px] mx-auto relative overflow-hidden top-10">
            <Image
              src="/images/profile.png"
              alt="author image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
          <div className="text-white mt-16">
            <div className="text-sm">
              <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to bg-secondary-600 ">
                  Hello,{" "}
                </span>
                <TypeAnimation
                  sequence={["I'm Klara", 1000, "Hire me", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-[#ADB7BE] text-justify px-8 mb-6">
                As a current student pursuing Information Technology, I combine
                my academic knowledge with a hands-on approach to deliver
                exceptional results.
              </p>
              <div className="flex sm:justify-center">
                <button className="mt-4 px-10 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                  Hire Me
                </button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-500 via-primary-500 to-secondary-500  hover:bg-slate-800 text-white mt-3">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-1.5">
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 text-center justify-center rounded-lg bg-[#181818] w-[600px] h-[600px] mx-auto relative text-white"
        >
          <div className="rounded-full bg-[#0F0F0F] w-[300px] h-[300px] mx-auto relative overflow-hidden top-10">
            <Image
              src="/images/woffi.png"
              alt="author image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={200}
              height={200}
            />
          </div>
          <div className="text-white mt-16">
            <div className="text-sm">
              <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-5xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to bg-secondary-600 ">
                  Hello,{" "}
                </span>
                <TypeAnimation
                  sequence={["I'm Pearkie", 1000, "Hire me", 1000]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className="text-[#ADB7BE] text-justify px-8 mb-6">
                I thrive on turning innovative ideas into functional and
                user-friendly applications. Whether its enhancing UIs or
                optimizing app performance, Im here to bring your mobile
                projects to the next level.
              </p>
              <div className="flex sm:justify-center">
                <button className="mt-4 px-10 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-secondary-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
                  Hire Me
                </button>
                <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-secondary-500 via-primary-500 to-secondary-500  hover:bg-slate-800 text-white mt-3">
                  <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-1.5">
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;
