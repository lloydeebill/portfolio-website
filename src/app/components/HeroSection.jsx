"use client";


import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = '/LARIOSA_RESUME.pdf';
        link.download = 'Lloyd_Bill_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (

    <section className='grid grid-cols-1 lg:grid-cols-12 my-4 lg:gap-16'>
        <div className='col-span-7 place-self-center place-items-center grid lg:place-items-start'>
            <h1 className='text-white max-w-2xl mb-2 lg:text-8xl text-3xl font-extrabold leading'>Hi, I&apos;m</h1>
            <h1 className='text-white marker:max-w-2xl mb-2 lg:text-9xl text-3xl font-extrabold leading'>Lloyd Bill</h1>
            <span className='text-base sm:text-lg lg:text-4xl mt-2 text-center'>Your go to guy for {''}
            </span>
            <TypeAnimation className='text-2xl lg:text-6xl text-center lg:mt-6 sm:mt-5 font-semibold text-orange-600' sequence={[
                'Web Development',
                1000,
                'App Development',
                1000,
                'IT Consulting',
                1000,
            ]}
            wrapper='span'
            speed={50}
            repeat = {Infinity} />
        <div className='mt-5'>
            <button onClick = {scrollToContact} className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black text-lg'>Get in Touch</button>
            <button onClick = {handleResumeDownload} className='px-6 py-3 w-full sm:w-fit rounded-full border border-gray-300 bg-transparent hover:bg-slate-800 text-white  mt-3 text-lg'>Check Resume</button>
        </div>             
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-white w-[250px] h-[250px] lg:w-[450px] lg:h-[450px] relative'>
              <Image
                src="/hero.svg"
                alt="hero image"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={500}
                height={500}
              />
            </div>
        </div>
    </section>
    );
};

export default HeroSection;










