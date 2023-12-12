"use client";
import React, { useState} from 'react'
import Image from 'next/image'
import GithubIcon from "../../public/images/github-icon.svg"
import FacebookIcon from "../../public/images/fb-icon.svg"
import InstagramIcon from "../../public/images/ig-icon.svg"
import Link from 'next/link'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);
        try {
            const resData = await response.json();
        } catch (error) {
            console.error("Error parsing JSON:", error);
        }
        

        if (response.status === 200) {
            console.log("Message sent.");
            setEmailSubmitted(true);
        }
    };

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        
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
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                <label htmlFor="email" type="email" className='text-white block text-sm font-medium'>Your email</label>
                <input name='email' type="email" id='email' required placeholder='example@gmail.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>

                <label htmlFor="subject" className='text-white block text-sm font-medium'>Subject</label>
                <input name="subject"type="text" id='subject' required placeholder='Add Subject' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>

                <label htmlFor="message" className='text-white block text-sm font-medium'>Message</label>
                <textarea name="message" id="message" placeholder='Send me a message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'></textarea>

                <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2.5 rounded-lg w-full'>Send Message</button>

                {
                    emailSubmitted && (
                        <p className='text-green-500 text-sm mt-2'>
                            Email sent successfully!
                        </p>
                    )
                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection