"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const cvFile = '/klara-cv.pdf';

const HeroSection = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvFile;
        link.download = 'klara-cv.pdf';
        document.body.appendChild(link);
    
        link.click();
    
        document.body.removeChild(link);
      };
  return (
    <section id='home'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left lg:mr-6'>
                <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                        Hello, I&apos;m{" "}
                    </span>
                    <br />
                    <TypeAnimation
                    sequence={[
                        'Klara',
                        1000,
                        'IT Student',
                        1000,
                        'Web Developer',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Enthusiastic and eager, I&apos;m navigating the industry with fresh perspectives and a hunger to learn. Every day is an opportunity to absorb new insights, sharpen skills, and expand my knowledge base. I&apos;m dedicated to continual growth, eagerly embracing the challenges that come my way as stepping stones toward becoming an accomplished professional in this dynamic field.
                </p>
                <div>
                    <button className='px-1 py-1 rounded-full mr-4 bg-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white'>
                        <span className='block bg-transparent  hover:bg-slate-800 text-white rounded-full px-5 py-2 font-bold'>Hire Me</span>
                    </button>
                    <button className='px-1 py-1 rounded-full bg-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white' onClick={handleDownload}>
                        <span className='block bg-transparent  hover:bg-slate-800 text-white rounded-full px-5 py-2 font-bold'>Download CV</span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[240px] h-[240px] lg:w-[370px] lg:h-[370px] relative'>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/images/profile.png"
                            alt="profile"
                            width={370}
                            height={370}
                            className='rounded-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
