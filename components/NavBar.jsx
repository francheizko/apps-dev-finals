"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'

const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

const NavBar = () => {
  return (
    <nav className='border-b'>
        <div className='flex flex-wrap items-center justify-between mx-auto pl-9 pr-9'>
            <Link href={"/"}>
                <Image
                    src='/images/logo.png'
                    alt='logo'
                    width={130}
                    height={130}
                />
            </Link>
            <div className='menu block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar