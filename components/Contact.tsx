import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id='contact-section' className="relative mb-12 mt-40 xl:mb-48 xl:top-[40px]">
      <div className="container mx-auto flex flex-col-reverse xl:flex-row xl:justify-evenly items-center">
        <div>
          <textarea className="text-primary min-w-[350px]">text here</textarea>
        </div>
        <div className="flex flex-col items-center max-w-[500px]">
          <h2 className="section-title py-2 ">
            <RiArrowLeftSLine className="hidden xl:flex text-4xl text-primary font-bold" />
            Get in touch
          </h2>
          <p className="subtitle mb-8">
            Let's Chat! Whether you have a question or jsut want to chat
            about programming and software development, I'd love to hear from
            you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
