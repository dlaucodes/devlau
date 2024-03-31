import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Button } from "./ui/button";
import Link from "next/link";
import { MailIcon, PhoneCall } from "lucide-react";
import { RiFileTextFill } from "react-icons/ri";
import Social from "./Social";

const infoData = [
  {
    icon: <MailIcon size={30} />,
    text: "lau.chun.dev@gmail.com",
    path: "mailto:dlaucodes@gmail.com",
  },
  {
    icon: <RiFileTextFill size={30} />,
    text: "Resume",
    path: "https://docs.google.com/document/d/1GEqPwXmpgmEqv5r1XLY7aHzzSK13YpJNmWita-3SRqk/view",
  },
  // {
  //   icon: <PhoneCall size={30} />,
  //   text: "+1 917 369 0156",

  // },
];

const Contact = () => {
  return (
    <section
      id="contact-section"
      className="relative mb-12 xl:mb-48 h-full"
    >
        
      <div className="container mx-auto flex flex-col-reverse xl:flex-row xl:justify-evenly items-center ">
        <div className="px-12 py-8 rounded-xl bg-tertiary dark:bg-secondary/40">
          {infoData.map((item, index) => {
            return (
              <Link href={item.path} target="_blank">
                <div
                  className="flex items-center gap-x-4 mx-4 xl:mx-0 my-2 border rounded-xl border-primary p-3 hover:bg-secondary"
                  key={index}
                >
                  <div className="text-primary">{item.icon}</div>
                  <div className="">{item.text}</div>
                </div>
              </Link>
            );
          })}
          <div className="flex items-center gap-x-4 mx-4 xl:mx-0 my-2 border rounded-xl border-primary p-3">
            <div className="text-primary">
              <PhoneCall size={30} />
            </div>
            <div className="">+1 917 369 0156</div>
          </div>
          <div className="flex gap-x-4 mx-4 xl:mx-0 my-2 border rounded-xl border-primary p-3 flex-row">
            <Social containerStyles="flex gap-x-6 mx-auto"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"/>
          </div>
        </div>

        <div className="flex flex-col items-center max-w-[500px]">
          <h2 className="section-title py-2 ">
            <RiArrowLeftSLine className="hidden xl:flex text-4xl text-primary font-bold" />
            Get in touch
          </h2>
          <p className="subtitle mb-8">
            Let's Chat! Whether you have a question or jsut want to chat about
            programming and software development, I'd love to hear from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
