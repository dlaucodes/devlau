import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';

import {Swiper,} from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination'

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
    <section className='relative mb-12 xl:mb-48'>
        <div className='container mx-auto'>
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>
                    Latest Projects
                </h2>
                <p className='subtitle mb-8'>
                    Lorem Ipsum
                </p>
                <Link href='/projects'>
                <Button>
                    All projects
                </Button>
                </Link>
            </div>
            <div>

            </div>
        </div>
    </section>
  )
}

export default Work