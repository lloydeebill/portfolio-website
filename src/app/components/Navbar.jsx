"use client";

import React, { useState } from 'react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";


const navLinks = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About',
        path: '#about',
    },
    {
        title: 'Projects',
        path: '#projects',
    },
    {
        title: 'Contact',
        path: '#contact',
    },
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-slate-950 bg-opacity-90 pt-5 pb-5'>
            <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-0">
                <h1>LLOYD BILL</h1>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)}className="flex items-center px-3 py-2 text-white hover:text-white hover:border-white">
                            <Bars3Icon className="h-7 w-7"/>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-white  text-white hover:text-white hover:border-white">
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> :null}
        </nav>
  );
};

export default Navbar;