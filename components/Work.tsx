import React from 'react'

import {Pagination}  from 'swiper/modules';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum',
        link: '/',
        github: '/',
    },
];

const Work = () => {
  return (
    <section>
        <div className='container mx-auto'>
            <div>
                <h2>
                    Latest Projects
                </h2>
                <p>
                    Lorem Ipsum
                </p>
            </div>

        </div>
    </section>
  )
}

export default Work