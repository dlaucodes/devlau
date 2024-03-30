"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";
// import 'swiper/css/effect-fade';

import { Pagination, EffectCoverflow } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";


const projectData = [
  {
    image: "/assets/projects/yerbnbss.png",
    category: ["react js", "aws"],

    name: "Yerbnb",
    description: "A full authentication near pixel-perfect clone of Airbnb.",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/projects/auroraSS.png",
    category: "react js",
    name: "Aurora",
    description:
      "An animated visual representation generated in real time off beats analyzed from music.",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/projects/opus.png",
    category: "react js",
    name: "Opus",
    description: "Opus is a user friendly app built with a MERN stack.  Full authentication and Book/Journal creation app.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
   
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="flex max-w-[300px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8"></p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        <div className="max-w-[1000px] xl:absolute top-0 right-0">
          <Swiper
            className="h-[440px]"
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
            {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="flex w-full"
      > */}
            {projectData.map((project, index) => {
                
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                
               
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
