import React from 'react'

const Footer = () => {
  return (
    <footer className="footer border-t text-white py-5">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
        <span className="text-xl font-bold">klara&apos;s</span>
        <p className="text-gray-600 text-sm md:text-base mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} | All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
