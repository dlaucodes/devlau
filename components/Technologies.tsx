import React from "react";
import Image from "next/image";

const Technologies = () => {
    const icons = [
      "/assets/icons/nextjs-icon.png",
      "/assets/icons/javascript.png",
      "/assets/icons/python.png",
      "/assets/icons/fastapi1.png",
      "/assets/icons/react.png",
      "/assets/icons/redux.png",
      "/assets/icons/html5.png",
      "/assets/icons/css.png",
      "/assets/icons/tailwindcss-mark.svg",
      "/assets/icons/nodejs.png",
      "/assets/icons/ruby.png",
      "/assets/icons/rails.png",
      "/assets/icons/heroku.png",
      "/assets/icons/git.png",
      "/assets/icons/mongodb.png",
      "/assets/icons/postgres.png",
      "/assets/icons/sass.png",
      "/assets/icons/bootstrap.png",
      "/assets/icons/aws.png",
      "/assets/icons/figma1.png",
    ];
  
    return (
      <div className="grid grid-cols-4 w-full justify-items-center gap-8 mt-10">
        {icons.map((icon, index) => (
          <div key={index}>
            <Image src={icon} width={65} height={65} priority alt="icons" />
          </div>
        ))}
      </div>
    );
  };
  
  export default Technologies;
