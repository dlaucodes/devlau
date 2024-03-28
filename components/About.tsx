import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Technologies from "./Technologies";

import {
  User2,
  HomeIcon,
  MailIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { RiDivideLine } from "react-icons/ri";

const infoData = [
  {
    icon: <User2 size={30} />,
    text: "David Lau",
  },
  {
    icon: <PhoneCall size={30} />,
    text: "+1 917 369 0156",
  },
  {
    icon: <MailIcon size={30} />,
    text: "lau.chun.dev@gmail.com",
  },
  {
    icon: <HomeIcon size={30} />,
    text: "New York City",
  },
];

const experienceData = [
  {
    title: "experience",
    data1: {
      company: "CityMove",
      role: "Software Engineer Intern",
      desc1: "Led the comprehensive revamp of the front end, introducing modern technologies like Next.js and Tailwind CSS, and successfully integrated it with the Rails back end, which supports a database of over 30,000 users.",
      desc2: "Orchestrated a strategic restructuring of file systems within the front-end team, improving code efficiency and readability to promote a more streamlined development workflow.",
      desc3: "Implemented and fine-tuned a search engine optimization strategy tailored for mobile devices, aiming to boost online visibility, increase organic traffic, and deliver a seamless user experience across all platforms.",
      years: "October 2023 - Current",
    },
    data2: {
      company: "American East Pharmacy Inc",
      role: "Co-Founder / Operations Manager",
      desc1: "Researched and customized implementation of remote employee timecard system access with TCP/IP protocols.",
      desc2: "Managed a staff of more than 20 employees.",
      desc3: "Maintained 100% compliance with regulations and audit requirements.",
      years: "October 2015 - July 2022",
    },
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] xl:py-24">
      <div className="container mx-auto">
        <div className="text-xl mb-4 xl:mb-16 text-center mx-auto xl:text-4xl xl:font-bold">
          About me
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-center">
        
        <div className="hidden xl:flex">
          <Tabs defaultValue="personal">
            <TabsList className="flex flex-col xl:grid xl:grid-cols-3 xl:w-[960px] justify-center">
              <TabsTrigger className="w-[220px] xl:w-auto" value="personal">
                Personal
              </TabsTrigger>
              <TabsTrigger className="w-[220px] xl:w-auto" value="skills">
                Technologies & Frameworks
              </TabsTrigger>
              <TabsTrigger className="w-[220px] xl:w-auto" value="experience">
                Experience
              </TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 xl:mt-8 xl:max-w-[960px] px-4">
              <TabsContent value="personal">
                <div className="flex flex-col items-center xl:text-left">
                  <h3 className="h3 mb-4">Full-Stack Software Engineer</h3>
                  <p className="subtitle max-w-xl max-auto xl:mx-0 ">
                    I am a New York City based Full-Stack Developer with a
                    passsion for learning new languages, frameworks, and
                    technologies. I enjoy creating apps that are both aesthetic
                    and functional.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-12">
                    {infoData.map((item, index) => {
                      return (
                        <div
                          className="flex items-center gap-x-4 mx-4 xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div className="">{item.text}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <Technologies />
              </TabsContent>
              <TabsContent value="experience">
                {experienceData.map((item, index) => {
                  return (
                    <div
                      className="flex text-center flex-col xl:mx:0 xl:overflow-auto h-[400px]"
                      key={index}
                    >
                      <div className="mx-2 justify-center flex xl:text-left xl:justify-start">
                        <ul className="min-w-[500px] xl:w-full p-8">              
                          <li className="h4 text-primary">{item.data1.company}</li>
                          <li className='text-muted-foreground'>{item.data1.role}</li>
                          <li className='text-muted-foreground'>{item.data1.years}</li>
                          <div className="mt-2 text-foreground">
                          <li>- {item.data1.desc1}</li>
                          <li>- {item.data1.desc2}</li>
                          <li>- {item.data1.desc3}</li>
                          </div>
                        </ul>
                        
                      </div>
                      <div className="mx-2 justify-center flex xl:text-left xl:justify-start">
                        <ul className="min-w-[500px] xl:w-full p-8">              
                          <li className="h4 text-primary">{item.data2.company}</li>
                          <li className='text-muted-foreground'>{item.data2.role}</li>
                          <li className='text-muted-foreground'>{item.data2.years}</li>
                          <div className="mt-2 text-foreground">
                          <li>- {item.data2.desc1}</li>
                          <li>- {item.data2.desc2}</li>
                          <li>- {item.data2.desc3}</li>
                          </div>
                        </ul>
                        
                      </div>
                    </div>
                  );
                })}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
