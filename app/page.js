import Image from 'next/image'
import HeroSection from '@/app/components/HeroSection'
import NavBar from '@/app/components/NavBar'
import AboutSection from '@/app/components/AboutSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className='container mt-12 mx-auto px-12 py-4'>
        <HeroSection/>
        <AboutSection/>
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  )
}
