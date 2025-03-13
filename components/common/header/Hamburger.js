"use client";
import React from 'react';
import Image from "next/image";

function HamburgerMenu({ children, bgColor, textColor }) {
    return (
        <nav className={`${bgColor} ${textColor} flex justify-between p-[16px]`}>{children}</nav>
    );
}

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
function HamburgerMenuBrand({ children, href }) {
    return (
        <a href={href} className="">
            <strong>{children}</strong>
        </a>
    );
}

function HamburgerMenuToggler({ toggle }) {
    return (
        <button
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className={` text-5xl  focus:outline-none focus:shadow`}
            onClick={toggle}
        >
            &#8801;
        </button>
    );
}

function HamburgerMenuCollapse({ children, open }) {
    const ref = React.useRef(null);

    const inlineStyle = open
        ? { height: ref.current?.scrollHeight }
        : { height: 0, visibility: 'hidden', opacity: 0 };

    return (
        <div className=" absolute w-full h-[210px] l-0 top-[20%] bg-black text-white pl-[12px] overflow-auto" style={inlineStyle} ref={ref}>
            {children}
        </div>
    );
}

function HamburgerMenuNav({ children }) {
    return <ul className="">{children}</ul>;
}

function HamburgerMenuItem({ children }) {
    return <li className="mb-[15px]">{children}</li>;
}

function HamburgerMenuLink({ children, href }) {
    return (
        <a href={href} className="text-xl mt-[20px]">
            {children}
        </a>
    );
}

const Hamburger = () => {
    const [open, setOpen] = React.useState(false);

    const toggle = () => {
        setOpen((prevState) => !prevState);
    };
    const buttonSizeClass = open ? 'text-5xl' : 'text-2xl';
    // const style = {
    //     nav: `block pl-0 mb-0`,
    //     navbar: `font-light shadow py-2 px-4`,
    //     collapse: `transition-height ease duration-300`,
    //     toggler: `float-right pt-1.5 text-3xl focus:outline-none focus:shadow`,
    //     link: `block cursor-pointer py-1.5 px-4  hover:text-gray-400 font-medium`,
    //     brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-2xl font-bold whitespace-nowrap hover:text-gray-400`,
    // };

    return (
        <HamburgerMenu bgColor="bg-black" textColor="text-white">
            <HamburgerMenuBrand href="#">
                <div className="image-wrap flex gap-3 items-center">
                    <Image src="/logo.png" alt="logo" width={56} height={56} />
                    <p className="text-2xl text-white font-bold">Chef Kitchen.</p>
                </div>
            </HamburgerMenuBrand>
            <HamburgerMenuToggler toggle={toggle} buttonSize={buttonSizeClass} /> 
            <HamburgerMenuCollapse open={open}>
                <HamburgerMenuNav>
                    <HamburgerMenuItem>
                        <HamburgerMenuLink href="#">Home</HamburgerMenuLink>
                    </HamburgerMenuItem>
                    <HamburgerMenuItem>
                        <HamburgerMenuLink href="#">About</HamburgerMenuLink>
                    </HamburgerMenuItem>
                    <HamburgerMenuItem>
                        <HamburgerMenuLink href="#">Recipe</HamburgerMenuLink>
                    </HamburgerMenuItem>
                    <HamburgerMenuItem>
                        <HamburgerMenuLink href="#">Gallery</HamburgerMenuLink>
                    </HamburgerMenuItem>
                </HamburgerMenuNav>
            </HamburgerMenuCollapse>
        </HamburgerMenu>
    );
}

export default Hamburger;