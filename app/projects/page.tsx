"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projectData = [
  {
    defaultimg: "/assets/projects/weatherss.png",
    hoverimg: "/assets/projects/temptoggle.gif",
    category: "react js",
    name: "Next Weather",
    description:
      "Next Weather App is a User-friendly weather app. User's are able to view weather conditions based on city input, toggle between Fahrenheit and Celsius Measurements, and view 5 day upcoming forecast. Application is built with NextJS and Express backend, API endpoints for weather data from Open Weather Map API. Mobile responsive.",
    link: "https://nextweather-mu.vercel.app/",
    github: "https://github.com/dlaucodes/nextweather",
    technologies: ['nextjs', 'javascript', 'tailwindcss', 'shadcn/ui' ],
  },
  {
    defaultimg: "/assets/projects/portlau.png",
    hoverimg: "/assets/projects/devlau.gif",
    category: ["react js", "aws"],
    name: "Dlau.dev",
    description:
      "This very portfolio was built from the ground up with NextJS & Tailwindcss.",
    link: "/",
    github: "https://github.com/dlaucodes/devlau",
    technologies: ['nextjs', 'tailwindcss', 'javascript', 'html5', 'shadcn/ui', ],
  },
  {
    defaultimg: "/assets/projects/yerbnbss.png",
    hoverimg: "/assets/projects/reservation.gif",
    category: ["react js", "aws"],
    name: "Yerbnb",
    description: "A full authentication near pixel-perfect clone of Airbnb.",
    link: "https://yerbnb.herokuapp.com/",
    github: "https://github.com/dlaucodes/YerBnb-FS-Project",
    technologies: ['react', 'redux', 'javascript', 'html5', 'google maps', 'ruby on rails', 'aws', 'postgresql' ],
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
    technologies: ['javascript', 'html5', 'css', 'web audio api' ],
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
    technologies: ['react', 'redux', 'javascript', 'mangodb', 'express', 'nodejs'],
  },
];



const Projects = () => {
  return (
    <section className="min-h-screen w-full pt-12 flex flex-col relative">
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 flex items-center gap-8 mb-12">
          {projectData.map((project, index) => {
              return (
         
                  <div key={index}>

                    <ProjectCard project={project} />
                  </div>

       
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
