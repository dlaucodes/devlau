import Image from 'next/image';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/tabs';

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
             
            }
        ]
    },
]

const About = () => {
  return (
    <div>About</div>
  )
}

export default About