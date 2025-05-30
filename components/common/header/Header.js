"use client";
import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import Hamburger from './Hamburger';

const Header = () => {
  return (
    <>
        <header className='lg:block hidden'>
        <div className="container px-[160px]">
            <div className="flex justify-between items-center py-4">
            <div className="logo">
                <div className="image-wrap flex gap-3 items-center justify-center">
                <Image src="/logo.png" alt="logo" width={56} height={56} />
                <p className="text-2xl text-white font-bold">Chef Kitchen.</p>
                </div>
            </div>
            <nav>
                <ul className="flex gap-8">
                <li>
                    <Link
                    href="/"
                    className="text-xl  text-white hover:text-orange uppercase"
                    >
                    Home
                    </Link>
                </li>
                <li>
                    <Link
                    href="/about"
                    className="text-xl  text-white hover:text-orange uppercase"
                    >
                    About
                    </Link>
                </li>
                <li>
                    <Link
                    href="/recipe"
                    className="text-xl  text-white hover:text-orange uppercase"
                    >
                    Recipe
                    </Link>
                </li>
                <li>
                    <Link
                    href="/gallery"
                    className="text-xl  text-white hover:text-orange uppercase"
                    >
                    Gallery
                    </Link>
                </li>
                </ul>
            </nav>
            <div className="last-wrap flex gap-8">
                <Link
                href="/sign-in"
                className="border-1 border-white bg-white rounded-full py-[10px] px-[36px] text-xl text-orange hover:text-white hover:bg-orange hover:border-orange"
                >
                Sign In
                </Link>
                
            </div>
            </div>
        </div>
        </header>
        {/* Show Hamburger only on small screens */}
        <div className="lg:hidden">
            <Hamburger />
        </div>
    </>
  );
};

export default Header;
