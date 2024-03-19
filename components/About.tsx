import Image from 'next/image';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {User2, HomeIcon, MailIcon, PhoneCall, GraduationCap, Calendar, Briefcase,} from "lucide-react";

const infoData = [
    {
        icon: <User2 size={30} />,
        text: 'David Lau',
    },
      {
        icon: <PhoneCall size={30} />,
        text: '+1 917 369 0156',
    },
      {
        icon: <MailIcon size={30} />,
        text: 'lau.chun.dev@gmail.com',
    },
      {
        icon: <HomeIcon size={30} />,
        text: 'New York City',
    },
      
]

const qualificationData = [
    {
        title: 'experience',
        data: {
            company: 'CityMove',
            qualification: 'Software Engingeer Intern',
            years: 'October 2023 - Current'
        }
    }
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
             name: 'HTML, CSS',
            }
        ]
    },
]

const About = () => {
  const getData = (arr, title) =>{
    return arr.find((item)=> item.title === title);
  }
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>

        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
      </div>
      <div className='flex flex-col xl:flex-row'>
        <div className='hidden xl:flex flex-1 relative'>
          dev image here
        </div>
        <div className='flex-1'>
          <Tabs defaultValue='personal'>
            <TabsList>
              <TabsTrigger value='personal'>Personal Info</TabsTrigger>
              <TabsTrigger value='qualifications'>Qualifications</TabsTrigger>
              <TabsTrigger value='skills'>Skills</TabsTrigger>
            </TabsList>
            <div className='text-lg mt-12 xl:mt-8'>
              <TabsContent value='personal'>personal info</TabsContent>
              <TabsContent value='qualifications'>qualifications</TabsContent>
              <TabsContent value='skills'>skills</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      </section>
  )
}

export default About