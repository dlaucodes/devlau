import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  HomeIcon,
  MailIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

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
    data: {
      company: "CityMove",
      role: "Software Engineer Intern",
      years: "October 2023 - Current",
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
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="hidden xl:flex flex-1 relative">dev image here</div>
        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px]">
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                Personal
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                Skills
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="experience">
                Experience
              </TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 xl:mt-8">
              <TabsContent value="personal">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">Full-Stack Software Engineer</h3>
                  <p className="subtitle max-w-xl max-auto xl:mx-0">
                    I am a New York City based Full-Stack Developer with a
                    passsion for learning new languages, frameworks, and
                    technologies. I enjoy creating apps that are both aesthetic
                    and functional.
                  </p>
                  <div className="grid xl:grid-cols-2 gap-4 mb-12">
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
              <TabsContent value="skills">skills here</TabsContent>
              <TabsContent value="experience">
                {experienceData.map((item, index) => {
                  return (
                    <div
                      className="flex items-center gap-x-4 mx-4 xl:mx:0"
                      key={index}
                    >
                      <div className="items-center mx-2 flex flex-col">
                        <ul>
                          <li></li>
                          <li className="text-primary">{item.data.company}</li>
                          <li className='text-muted-foreground'>{item.data.role}</li>
                          <li className='text-muted-foreground'>{item.data.years}</li>
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
