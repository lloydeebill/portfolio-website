"use client"

import React,{useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';


const about_data = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2 lg:text-xl'>
        <li>Javascript</li>
        <li>NodeJS</li>
        <li>React</li>
        <li>MongoDB</li>
        <li>Electron</li>
        <li>Network Configuration</li>
      </ul>
    )
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2 lg:text-xl'>
        <li>University of Southeastern Philippines</li>
        <li>Caraga State University</li>
      </ul>
    )
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2 lg:text-xl'>
        <li>Coursera Python Certificate</li>
      </ul>
    )
  },
]


const AboutSection = () => {
  const [tab,setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src='/about1.svg' alt='about-img' className='lg:ml-16' width={450} height={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'> 
        <h2 className='text-4xl font-bold text-white mb-4 text-center md:text-left'>About Me</h2>
          <p className='text-base lg:text-2xl'>
          I am passionate IT student with expertise in JavaScript, Node.js, HTML, CSS, Next.js, React, MongoDB, and Electron. I craft innovative solutions for technical challenges and am deeply involved in IT consulting.
          </p>
          <div className='flex flex-row justify-center md:justify-start mt-8 lg:text-2xl'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className='mt-8'>
            {about_data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection