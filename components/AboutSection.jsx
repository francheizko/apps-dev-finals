import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-cecnter py-8 xl:gap-16 sm:py-16'>
            <Image src="/images/about.jpg" alt='about' width={500} height={500} />
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>I&apos;m a 21-year-old currently in my third year pursuing a Bachelor of Science in Information Technology at the University of San Jose-Recoletos. Passionate about technology and eager to learn, I&apos;m exploring the dynamic world of IT, embracing every opportunity to expand my knowledge and skills in the field.</p>
            </div>
        </div>
    </section>
  )
}

export default AboutSection