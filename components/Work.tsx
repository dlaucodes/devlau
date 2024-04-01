"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/effect-fade';

import { Pagination, EffectCoverflow } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    defaultimg: "/assets/projects/portlau.png",
    hoverimg: "/assets/projects/devlau.gif",
    category: ["react js", "aws"],
    name: "Dlau.dev",
    description:
      "This very portfolio was built from the ground up with NextJS & Tailwindcss.",
    link: "https://dlau.dev",
    github: "https://github.com/dlaucodes/devlau",
    technologies: ['react', 'redux', 'whatever' ],
  },
  {
    defaultimg: "/assets/projects/yerbnbss.png",
    hoverimg: "/assets/projects/reservation.gif",
    category: ["react js", "aws"],
    name: "Yerbnb",
    description: "A full authentication near pixel-perfect clone of Airbnb.",
    link: "https://yerbnb.herokuapp.com/",
    github: "https://github.com/dlaucodes/YerBnb-FS-Project",
    technologies: ['react', 'redux', 'aws' ],
  },
  {
    defaultimg: "/assets/projects/auroraSS.png",
    hoverimg: "/assets/projects/aurora-demo.gif",
    category: "react js",
    name: "Aurora",
    description:
      "An animated visual representation generated in real time off beats analyzed from music.",
    link: "https://dlaucodes.github.io/JSProject/",
    github: "https://github.com/dlaucodes/JSProject",
    technologies: ['react', 'redux', 'whatever' ],
  },
  {
    defaultimg: "/assets/projects/opus.png",
    hoverimg: "/assets/projects/opus.png",
    category: "react js",
    name: "Opus",
    description:
      "Opus is a user friendly app built with a MERN stack.  Full authentication and Book/Journal creation app.",
    link: "https://opus.onrender.com",
    github: "https://github.com/Onigirisen/Opus",
    technologies: ['react', 'redux', 'whatever' ],
  },
];

const Work = () => {
  return (
    <section
      id="projects-section"
      className="relative mb-12 mt-40 xl:mb-48  xl:top-[-40px]"
    >
      <div className="container mx-auto xl:flex xl:flex-row md:flex md:justify-evenly">
        <div className="flex max-w-[300px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[500px] flex-col justify-center items-center xl:items-start">
          <h2 className="section-title py-4">
            Latest Projects
            <RiArrowRightSLine className="hidden xl:flex text-4xl text-primary font-bold" />
          </h2>
          <p className="subtitle mb-8">Most current projects</p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="max-w-[800px] items-center h-full top-0 right-0">
          <Swiper
            className="h-[500px] max-w-[800px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 3).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="hidden md:flex justify-center left-2/4 bottom-0 xl:bottom-0 mt-4 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
      <div className='flex mt-20 align-center dark:border-secondary border-b w-[90vw] h-[1px] justify-center mx-auto'></div>
    </section>
  );
};

export default Work;
