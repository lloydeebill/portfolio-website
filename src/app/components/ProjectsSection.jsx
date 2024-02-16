'use client';

import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';


const projectsData = [

    {
    id:1,
    title: 'LCR OFFICE WEBSITE',
    description: 'E-LCR Buenavista Website for Customer Service Operations',
    image: '/images/projects/1.png',
    gitUrl: '/',
    previewUrl: '/',
    tag: ['All','Websites']
    },
    {
    id:2,
    title: 'ELCRIS DESKTOP APPLICATION',
    description: 'LCR Buenavista Desktop Application for Storing,Accessing Civil Registry Data',
    image: '/images/projects/2.png',
    gitUrl: '/',
    previewUrl: '/',
    tag: ['All','Desktop']
    },
    
];

const ProjectsSection = () => {
    const [tag, setTag] = useState('All');

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filterProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <section id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
            onClick={handleTagChange} 
            name='All' 
            isSelected={tag === 'All'}
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name='Websites' 
            isSelected={tag === 'Websites'}
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name='Desktop' 
            isSelected={tag === 'Desktop'}
            />
        </div>
        <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filterProjects.map((project) => (
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            tags={project}
            gitURL={project.gitUrl}
            previewUrl={project.previewUrl}
            />
        ))}
        </ul>
    </section>
    )
}



export default ProjectsSection;