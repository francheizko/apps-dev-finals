"use client";
import React, { useState} from 'react'
import Image from 'next/image'
import GithubIcon from "../public/images/github-icon.svg"
import FacebookIcon from "../public/images/fb-icon.svg"
import InstagramIcon from "../public/images/ig-icon.svg"
import Link from 'next/link'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id='contact'>
        
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Let&apos;s connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                    <Link href="https://github.com/evrylsem">
                        <Image src={GithubIcon} alt='github' width={60}/>
                    </Link>
                    <Link href="https://facebook.com/evrylclaire">
                        <Image src={FacebookIcon} alt='facebook' width={60}/>
                    </Link>
                    <Link href="https://www.instagram.com/evrylclaire/">
                        <Image src={InstagramIcon} alt='instagram' width={60}/>
                    </Link>
            </div>
        </div>
        <div>
            <h2 className='text-xl font-bold'>Contact Me</h2>
            <div className='flex items-center space-x-2'>
                <Image
                    src="/images/email.png"
                    alt='email'
                    width={50}
                    height={50}
                    className='object-contain'
                />
                <p className='text-[#ADB7BE] max-w-md'>
                    evrylclaire.sembrino.21@usjr.edu.ph
                </p>
            </div>
            <div className='flex items-center space-x-2'>
                <Image
                    src="/images/call.png"
                    alt='call'
                    width={50}
                    height={50}
                    className='object-contain'
                />
                <p className='text-[#ADB7BE] max-w-md'>
                    +639-99924-1439
                </p>
            </div>
            <div className='flex items-center space-x-2'>
                <Image
                    src="/images/home.png"
                    alt='address'
                    width={50}
                    height={50}
                    className='object-contain'
                />
                <p className='text-[#ADB7BE] max-w-md'>
                    Bulacao, Talisay City, Cebu, Philippines
                </p>
            </div>
        </div>
    </section>
  )
}

export default EmailSection